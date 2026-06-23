#!/usr/bin/env python3
from __future__ import annotations

import re
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
MAX_EDGE = 1600
WEBP_QUALITY = 80
WEBP_METHOD = 6
SOURCE_DIRS = [
    ROOT / "assets" / "projects",
    ROOT / "assets" / "poster-archive",
]
ALONEWILD_DIR = ROOT / "assets" / "projects" / "alonewild"
ALONEWILD_ORDER_FILE = ALONEWILD_DIR / "webp-order.json"
TEXT_FILES = [
    ROOT / "assets" / "projects" / "manifest.js",
    ROOT / "assets" / "projects" / "manifest.json",
    ROOT / "script.js",
]
IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png"}
TEXT_IMAGE_PATH_RE = re.compile(r'(?P<quote>["\'])(?P<path>[^"\']+\.(?:png|jpe?g))(?P=quote)', re.IGNORECASE)


def to_webp_path(source: Path) -> Path:
    return source.with_suffix(".webp")


def load_alonewild_order() -> dict[str, int]:
    if not ALONEWILD_ORDER_FILE.exists():
        return {}

    import json

    order = json.loads(ALONEWILD_ORDER_FILE.read_text(encoding="utf-8"))
    return {name: index for index, name in enumerate(order, start=1)}


def needs_resize(image: Image.Image) -> bool:
    return max(image.width, image.height) > MAX_EDGE


def resize_image(image: Image.Image) -> Image.Image:
    if not needs_resize(image):
        return image

    ratio = MAX_EDGE / max(image.width, image.height)
    new_size = (round(image.width * ratio), round(image.height * ratio))
    return image.resize(new_size, Image.Resampling.LANCZOS)


def open_for_webp(source: Path) -> Image.Image:
    with Image.open(source) as original:
        image = original.copy()

    if "A" in image.getbands() or image.mode in {"LA", "RGBA"} or (
        image.mode == "P" and image.info.get("transparency") is not None
    ):
        image = image.convert("RGBA")
    else:
        image = image.convert("RGB")

    return resize_image(image)


def convert_image(source: Path, target: Path) -> tuple[int, int, bool]:
    source_size = source.stat().st_size

    if target.exists() and target.stat().st_mtime >= source.stat().st_mtime:
        return source_size, target.stat().st_size, False

    image = open_for_webp(source)
    target.parent.mkdir(parents=True, exist_ok=True)
    image.save(target, format="WEBP", quality=WEBP_QUALITY, method=WEBP_METHOD, exact=True)
    return source_size, target.stat().st_size, True


def rewrite_text(text: str) -> str:
    text = TEXT_IMAGE_PATH_RE.sub(
        lambda match: f'{match.group("quote")}{match.group("path")[:-4]}.webp{match.group("quote")}',
        text,
    )
    return text


def rewrite_files() -> None:
    for path in TEXT_FILES:
        if not path.exists():
            continue
        original = path.read_text(encoding="utf-8")
        rewritten = rewrite_text(original)
        if rewritten != original:
            path.write_text(rewritten, encoding="utf-8")


def iter_sources() -> list[Path]:
    sources: list[Path] = []
    for directory in SOURCE_DIRS:
        if not directory.exists():
            continue
        for source in directory.rglob("*"):
            if source.is_file() and source.suffix.lower() in IMAGE_EXTENSIONS:
                sources.append(source)
    return sorted(sources)


def main() -> None:
    rewrite_files()
    alonewild_order = load_alonewild_order()

    converted = 0
    before_total = 0
    after_total = 0

    for source in iter_sources():
        if source.suffix.lower() not in IMAGE_EXTENSIONS:
            continue

        if source.parent == ALONEWILD_DIR and source.name in alonewild_order:
            target = source.parent / f"{alonewild_order[source.name]:02d}.webp"
        else:
            target = to_webp_path(source)

        source_size, target_size, converted_now = convert_image(source, target)
        before_total += source_size
        after_total += target_size
        if converted_now:
            converted += 1

    saved = before_total - after_total
    print(
        f"Converted {converted} images to WebP; "
        f"current size reduction {saved / 1024 / 1024:.1f} MB."
    )


if __name__ == "__main__":
    main()
