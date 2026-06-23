const posterArchiveSource = [
  {
    year: "2026",
    folder: "./assets/poster-archive/2026",
    files: [
      "1.webp",
      "2.webp",
      "3-2.webp",
      "3-3.webp",
      "3-4.webp",
      "3-5.webp",
      "3-6.webp",
      "3.webp",
      "4-2.webp",
      "4-3.webp",
      "4.webp",
      "5-2.webp",
      "5-3.webp",
      "5-4.webp",
      "5-5.webp",
      "5.webp",
      "6-2.webp",
      "6-3.webp",
      "6-4.webp",
      "6-5.webp",
      "6-6.webp",
      "6.webp",
      "7-2.webp",
      "7-3.webp",
      "7-4.webp",
      "7.webp",
      "8-2.webp",
      "8-3.webp",
      "8-4.webp",
      "8-5.webp",
      "8.webp",
    ],
  },
  {
    year: "2024 & 2025",
    folder: "./assets/poster-archive/2024-2025",
    files: [
      "1-2.webp",
      "1-3.webp",
      "1-4.webp",
      "1.webp",
      "10-2.webp",
      "10-3.webp",
      "10.webp",
      "11-2.webp",
      "11-3.webp",
      "11-4.webp",
      "11-5.webp",
      "11.webp",
      "12-2.webp",
      "12-3.webp",
      "12-4.webp",
      "12-5.webp",
      "12-6.webp",
      "12.webp",
      "13-2.webp",
      "13-3.webp",
      "13.webp",
      "14-2.webp",
      "14-3.webp",
      "14.webp",
      "15-2.webp",
      "15-3.webp",
      "15.webp",
      "2-2.webp",
      "2-3.webp",
      "2-4.webp",
      "2.webp",
      "3-2.webp",
      "3-3.webp",
      "3-4.webp",
      "3-5.webp",
      "3.webp",
      "4-2.webp",
      "4-3.webp",
      "4.webp",
      "5-2.webp",
      "5-3.webp",
      "5-4.webp",
      "5-5.webp",
      "5-6.webp",
      "5.webp",
      "6-2.webp",
      "6-3.webp",
      "6-4.webp",
      "6.webp",
      "7-2.webp",
      "7.webp",
      "8-2.webp",
      "8-3.webp",
      "8-4.webp",
      "8-5.webp",
      "8.webp",
      "9-2.webp",
      "9-3.webp",
      "9-4.webp",
      "9.webp",
      "Frame 1612707379.webp",
    ],
  },
  {
    year: "2023",
    folder: "./assets/poster-archive/2023",
    files: [
      "10.webp",
      "11.webp",
      "12.webp",
      "13.webp",
      "14.webp",
      "15.webp",
      "16.webp",
      "18.webp",
      "19.webp",
      "2.webp",
      "20.webp",
      "3.webp",
      "4.webp",
      "5.webp",
      "6.webp",
      "7.webp",
      "8.webp",
      "9.webp",
    ],
  },
];

const posterSeriesPattern = /^(\d+)(?:-(\d+))?\.(png|jpe?g|webp)$/i;
const posterPixelHoverConfig = {
  gap: 12,
  speed: 28,
  colors: [
    "rgba(255, 247, 153, 0.84)",
    "rgba(240, 224, 63, 0.72)",
    "rgba(255, 214, 10, 0.52)",
  ],
};
const projectCaseSource = [
  {
    slug: "youth-tour",
    number: "02",
    title: "YOUTH TOUR",
    subtitle: "少年游",
    discipline: "Brand Identity / Campaign Visuals",
    accent: "#c7ba4a",
    summary:
      "A long-form selection of project frames, kept spacious and sequential to let the visual material carry the narrative.",
  },
  {
    slug: "nomokids",
    number: "03",
    title: "NOMOKIDS",
    subtitle: "",
    discipline: "Retail Identity / Visual System",
    accent: "#8fa9b8",
    summary:
      "A playful identity archive presented with broad white space, sharp sequencing, and a loose editorial rhythm.",
  },
  {
    slug: "smoo-market",
    number: "04",
    title: "SMOO MARKET",
    subtitle: "社区",
    discipline: "Community Retail / Spatial Identity",
    accent: "#6b7c58",
    summary:
      "Storefront views, spatial atmosphere, identity applications, and branded details assembled as one continuous case-study scroll.",
  },
  {
    slug: "newlife",
    number: "05",
    title: "NEW LIFE",
    subtitle: "新生活新公式",
    discipline: "Campaign Identity / Visual System",
    accent: "#ce5c48",
    summary:
      "Campaign visuals, layout studies, and applied touchpoints are unfolded in a paced, image-led presentation.",
  },
  {
    slug: "throbbing",
    number: "06",
    title: "THROBBING",
    subtitle: "服饰",
    discipline: "Fashion Label / Brand System",
    accent: "#2e2827",
    summary:
      "A fashion-facing case study balancing raw imagery, brand surfaces, and bolder full-width visual anchors.",
  },
  {
    slug: "alonewild",
    number: "07",
    title: "ALONEWILD",
    subtitle: "在野行",
    discipline: "Outdoor Brand / Visual Identity",
    accent: "#857552",
    summary:
      "Outdoor mood, branding applications, and campaign stills arranged as a single flowing visual document.",
  },
  {
    slug: "supernova",
    number: "08",
    title: "SUPERNOVA FORCE",
    subtitle: "",
    discipline: "Logo System / Brand Identity",
    accent: "#50576f",
    summary:
      "A compact but high-contrast identity presentation built from logo studies, applications, and final brand moments.",
  },
  {
    slug: "ecoflow",
    number: "09",
    title: "ECOFLOW",
    subtitle: "项目",
    discipline: "Campaign Visual / Launch Material",
    accent: "#3a7070",
    summary:
      "A concise project page that keeps each frame prominent and gives the launch material generous breathing room.",
  },
  {
    slug: "double8-coffee",
    number: "10",
    title: "DOUBLE 8 COFFEE",
    subtitle: "",
    discipline: "Coffee Branding / Visual Identity",
    accent: "#8c6652",
    summary:
      "Identity-led coffee branding shown through signage, graphics, mockups, and real-world placement images.",
  },
  {
    slug: "fivebook",
    number: "11",
    title: "FIVEBOOK",
    subtitle: "五本书屋",
    discipline: "Bookstore Brand / Space Graphics",
    accent: "#9a7a5e",
    summary:
      "A bookstore identity unfolded through environmental views, print surfaces, and a steady visual cadence.",
  },
  {
    slug: "flow-in",
    number: "12",
    title: "FLOW IN",
    subtitle: "",
    discipline: "Lifestyle Space / Visual Identity",
    accent: "#7088a6",
    summary:
      "A dense archive of applied brand imagery, paced through alternating wide spreads and tighter editorial clusters.",
  },
  {
    slug: "shake-coffee",
    number: "13",
    title: "SHAKE COFFEE",
    subtitle: "摇coffee",
    discipline: "Illustration Brand / Coffee System",
    accent: "#d5959e",
    summary:
      "Illustration, packaging, and identity applications sequenced in a lighter, compact long-scroll presentation.",
  },
];
const projectGallerySpanPattern = [
  5,
  7,
  12,
  4,
  4,
  4,
  6,
  6,
  3,
  3,
  3,
  3,
  8,
  4,
  7,
  5,
  12,
  6,
  6,
  4,
  8,
  4,
  3,
  3,
  6,
  6,
];

let activePosterPixelHover = null;
let posterArchiveGroups = [];
let posterArchiveFlatList = [];
let activeProjectCase = null;
let deferredImageObserver = null;
const targetCursorSelector = "a, button, [role='button'], .cursor-target";

const lerp = (a, b, n) => (1 - n) * a + n * b;
const encodeImagePath = (folder, file) => encodeURI(`${folder}/${file}`);

function scheduleNonCriticalTask(task, timeout = 600) {
  if ("requestIdleCallback" in window) {
    return window.requestIdleCallback(task, { timeout });
  }

  return window.setTimeout(task, Math.min(timeout, 180));
}

function revealDeferredImage(image) {
  const source = image.dataset.src;
  if (!source) return;

  image.src = source;
  image.removeAttribute("data-src");
  image.removeAttribute("data-deferred-observed");

  if (image.complete) {
    image.classList.add("is-ready");
    return;
  }

  image.addEventListener("load", () => image.classList.add("is-ready"), { once: true });
}

function getDeferredImageObserver() {
  if (deferredImageObserver || !("IntersectionObserver" in window)) {
    return deferredImageObserver;
  }

  deferredImageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        deferredImageObserver.unobserve(entry.target);
        revealDeferredImage(entry.target);
      });
    },
    { rootMargin: "420px 0px" },
  );

  return deferredImageObserver;
}

function queueDeferredImages(scope = document) {
  const images = scope.querySelectorAll("img[data-src]");
  if (!images.length) return;

  const observer = getDeferredImageObserver();
  if (!observer) {
    images.forEach(revealDeferredImage);
    return;
  }

  images.forEach((image) => {
    if (image.dataset.deferredObserved === "true") return;
    image.dataset.deferredObserved = "true";
    observer.observe(image);
  });
}

function buildPosterArchiveGroups() {
  return posterArchiveSource.map((group) => {
    const seriesMap = new Map();
    const extras = [];

    group.files.forEach((file) => {
      const match = file.match(posterSeriesPattern);
      const image = encodeImagePath(group.folder, file);

      if (!match) {
        extras.push({
          serial: "special",
          cover: image,
          images: [image],
          files: [file],
          stack: [],
          stackCount: 1,
          title: file.replace(/\.[^.]+$/, ""),
          details: "single poster",
          alt: `${group.year} ${file}`,
          year: group.year,
        });
        return;
      }

      const serial = Number(match[1]);
      const variant = Number(match[2] || "1");
      const entry = seriesMap.get(serial) || [];

      entry.push({ file, image, variant });
      seriesMap.set(serial, entry);
    });

    const numberedPosters = [...seriesMap.entries()]
      .sort(([left], [right]) => left - right)
      .map(([serial, entries]) => {
        const orderedEntries = entries.sort((left, right) => left.variant - right.variant);
        const orderedImages = orderedEntries.map((entry) => entry.image);
        const variantCount = orderedImages.length;

        return {
          serial: String(serial),
          cover: orderedImages[0],
          images: orderedImages,
          files: orderedEntries.map((entry) => entry.file),
          stack: orderedImages.slice(1),
          stackCount: variantCount,
          title: `series ${serial}`,
          details: variantCount > 1 ? `${variantCount} posters / folded stack` : "single poster",
          alt: `${group.year} poster series ${serial}`,
          year: group.year,
        };
      });

    const posters = numberedPosters.concat(extras);

    return {
      year: group.year,
      posterCount: group.files.length,
      seriesCount: posters.length,
      posters,
    };
  });
}

function renderPosterGroup(group, groupIndex) {
  return `
    <section class="poster-group">
      <div class="poster-header">
        <h2 class="poster-year">${group.year}</h2>
        <span class="poster-count">${group.seriesCount} series / ${group.posterCount} posters</span>
      </div>
      <div class="poster-grid">
        ${group.posters
          .map((poster, posterIndex) => {
            const stackLayers = poster.stack.slice(0, 3).reverse();

            return `
              <article
                class="poster-card"
                tabindex="0"
                role="button"
                aria-haspopup="dialog"
                aria-label="Open ${poster.title}, ${group.year}"
                data-group-index="${groupIndex}"
                data-poster-index="${posterIndex}"
              >
                <div class="poster-card-visual${poster.stackCount > 1 ? " is-stacked" : ""}">
                  ${stackLayers
                    .map(
                      (image, index) => `
                        <span class="poster-stack-layer" style="--stack-layer:${stackLayers.length - index};">
                          <img class="deferred-image" data-src="${image}" alt="" loading="lazy" decoding="async" aria-hidden="true" />
                        </span>
                      `,
                    )
                    .join("")}
                  <div class="card-media">
                    <img class="deferred-image" data-src="${poster.cover}" alt="${poster.alt}" loading="lazy" decoding="async" />
                  </div>
                  <canvas class="poster-pixel-canvas" aria-hidden="true"></canvas>
                  ${
                    poster.stackCount > 1
                      ? `<span class="poster-stack-badge">+${poster.stackCount - 1}</span>`
                      : ""
                  }
                </div>
                <div class="poster-card-copy">
                  <strong>${poster.serial}</strong>
                  <p>${poster.title}, ${group.year}</p>
                  <span>${poster.details}</span>
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderPosterPage() {
  const layout = document.querySelector("#posterLayout");
  if (!layout) return;

  const meta = document.querySelector("#posterArchiveMeta");
  posterArchiveGroups = buildPosterArchiveGroups();
  posterArchiveFlatList = posterArchiveGroups.flatMap((group, groupIndex) =>
    group.posters.map((poster, posterIndex) => ({
      groupIndex,
      posterIndex,
      poster,
    })),
  );
  const totalPosters = posterArchiveSource.reduce((sum, group) => sum + group.files.length, 0);
  const totalSeries = posterArchiveGroups.reduce((sum, group) => sum + group.seriesCount, 0);
  const years = posterArchiveGroups.map((group) => group.year);

  if (meta) {
    meta.innerHTML = `
      <p>${totalPosters} posters, ${years.at(0)}-${years.at(-1)}</p>
      <span>${totalSeries} visible cards, variants folded behind the lead poster</span>
    `;
  }

  layout.innerHTML = "";

  let nextGroupIndex = 0;
  const renderNextGroup = () => {
    const group = posterArchiveGroups[nextGroupIndex];
    if (!group) return;

    layout.insertAdjacentHTML("beforeend", renderPosterGroup(group, nextGroupIndex));
    const insertedGroup = layout.lastElementChild;
    if (insertedGroup) {
      queueDeferredImages(insertedGroup);
    }

    nextGroupIndex += 1;
    if (nextGroupIndex < posterArchiveGroups.length) {
      requestAnimationFrame(renderNextGroup);
    }
  };

  requestAnimationFrame(renderNextGroup);
}

function initPosterDrawer() {
  const layout = document.querySelector("#posterLayout");
  const drawer = document.querySelector("#posterDrawer");
  const backdrop = document.querySelector("#posterDrawerBackdrop");
  const image = document.querySelector("#posterDrawerImage");
  const thumbs = document.querySelector("#posterDrawerThumbs");
  const counter = document.querySelector("#posterDrawerCounter");
  const serial = document.querySelector("#posterDrawerSerial");
  const title = document.querySelector("#posterDrawerTitle");
  const size = document.querySelector("#posterDrawerSize");
  const location = document.querySelector("#posterDrawerLocation");
  const category = document.querySelector("#posterDrawerCategory");
  const details = document.querySelector("#posterDrawerDetails");
  const description = document.querySelector("#posterDrawerDescription");
  const credits = document.querySelector("#posterDrawerCredits");
  const awards = document.querySelector("#posterDrawerAwards");
  const author = document.querySelector("#posterDrawerAuthor");
  const collection = document.querySelector("#posterDrawerCollection");
  const collectionTag = document.querySelector("#posterDrawerCollectionTag");
  const footer = document.querySelector("#posterDrawerFooter");
  const closeButton = document.querySelector("#posterDrawerClose");
  const prevButton = document.querySelector("#posterDrawerPrev");
  const nextButton = document.querySelector("#posterDrawerNext");

  if (
    !layout ||
    !drawer ||
    !backdrop ||
    !image ||
    !thumbs ||
    !counter ||
    !serial ||
    !title ||
    !size ||
    !location ||
    !category ||
    !details ||
    !description ||
    !credits ||
    !awards ||
    !author ||
    !collection ||
    !collectionTag ||
    !footer ||
    !closeButton ||
    !prevButton ||
    !nextButton
  ) {
    return;
  }

  let activeCard = null;
  let activePoster = null;
  let activeFlatIndex = 0;
  let activeImageIndex = 0;
  let hideDrawerTimer = 0;

  const clearHideTimer = () => {
    if (!hideDrawerTimer) return;
    window.clearTimeout(hideDrawerTimer);
    hideDrawerTimer = 0;
  };

  const buildImageAlt = (poster, imageIndex) => {
    if (poster.images.length === 1) return poster.alt;
    return `${poster.alt}, image ${imageIndex + 1}`;
  };

  const getCollectionLabel = (yearLabel) => `${yearLabel} archive`;
  const getCollectionToken = (yearLabel) => {
    const matches = yearLabel.match(/\d{2,4}/g) || [];
    const token = matches.at(0)?.slice(-2);
    return token || "AR";
  };

  const getPosterReference = (flatIndex) => posterArchiveFlatList.at(flatIndex) || null;

  const syncImageFacts = () => {
    if (!activePoster) return;

    if (image.naturalWidth && image.naturalHeight) {
      size.textContent = `offset, ${image.naturalWidth} x ${image.naturalHeight} px`;
      return;
    }

    size.textContent = "offset, loading image size";
  };

  const renderDrawerThumbs = () => {
    if (!activePoster || activePoster.images.length <= 1) {
      thumbs.innerHTML = "";
      thumbs.hidden = true;
      return;
    }

    thumbs.hidden = false;
    thumbs.innerHTML = activePoster.images
      .map(
        (src, index) => `
          <button
            class="poster-drawer-thumb${index === activeImageIndex ? " is-active" : ""}"
            type="button"
            data-image-index="${index}"
            aria-label="查看第 ${index + 1} 张海报"
          >
            <img class="deferred-image" data-src="${src}" alt="" loading="lazy" decoding="async" aria-hidden="true" />
          </button>
        `,
      )
      .join("");
    queueDeferredImages(thumbs);
  };

  const renderDrawerPoster = () => {
    if (!activePoster) return;

    image.src = activePoster.images[activeImageIndex];
    image.alt = buildImageAlt(activePoster, activeImageIndex);
    counter.textContent = `${String(activeFlatIndex + 1).padStart(2, "0")} / ${String(
      posterArchiveFlatList.length,
    ).padStart(2, "0")}`;
    serial.textContent = activePoster.serial === "special" ? "special poster" : `series ${activePoster.serial}`;
    title.textContent = `"${activePoster.title}", ${activePoster.year}`;
    location.textContent = `selected archive, ${activePoster.year}`;
    category.textContent =
      activePoster.images.length > 1
        ? `variant ${activeImageIndex + 1} of ${activePoster.images.length}`
        : "single poster";
    details.textContent = activePoster.details;
    description.textContent =
      activePoster.images.length > 1
        ? `A series of ${activePoster.images.length} posters selected from the ${activePoster.year} archive. Use the condensed stack to compare alternate versions of the same poster.`
        : `A single poster selected from the ${activePoster.year} archive.`;
    credits.textContent = `archive: LIULIAN poster archive, current file: ${activePoster.files[activeImageIndex]}, viewing: ${activeImageIndex + 1} of ${activePoster.images.length}.`;
    awards.textContent =
      activePoster.images.length > 1
        ? `.${activePoster.images.length} poster variants in this folded stack`
        : ". single poster from the archive";
    author.textContent = "liulian archive";
    collection.textContent = getCollectionLabel(activePoster.year);
    collectionTag.textContent = getCollectionToken(activePoster.year);
    footer.textContent = "© 2026, LIULIAN poster archive. all rights reserved.";
    syncImageFacts();

    renderDrawerThumbs();
  };

  const setActivePoster = (flatIndex, resetImageIndex = true) => {
    const reference = getPosterReference(flatIndex);
    if (!reference) return;

    activeFlatIndex = flatIndex;
    activePoster = reference.poster;
    activeCard = layout.querySelector(
      `[data-group-index="${reference.groupIndex}"][data-poster-index="${reference.posterIndex}"]`,
    );

    if (resetImageIndex) {
      activeImageIndex = 0;
    }
  };

  const openDrawer = (card, groupIndex, posterIndex) => {
    const nextFlatIndex = posterArchiveFlatList.findIndex(
      (entry) => entry.groupIndex === groupIndex && entry.posterIndex === posterIndex,
    );
    if (nextFlatIndex < 0) return;

    activeCard = card;
    setActivePoster(nextFlatIndex);
    clearHideTimer();
    renderDrawerPoster();

    if (drawer.hidden) {
      drawer.hidden = false;
      backdrop.hidden = false;
      requestAnimationFrame(() => {
        document.body.classList.add("poster-drawer-open");
        drawer.classList.add("is-open");
        backdrop.classList.add("is-open");
        drawer.setAttribute("aria-hidden", "false");
        closeButton.focus({ preventScroll: true });
      });
      return;
    }

    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("poster-drawer-open");
    drawer.classList.add("is-open");
    backdrop.classList.add("is-open");
  };

  const closeDrawer = () => {
    if (drawer.hidden) return;

    clearHideTimer();
    drawer.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("poster-drawer-open");

    hideDrawerTimer = window.setTimeout(() => {
      drawer.hidden = true;
      backdrop.hidden = true;
      image.removeAttribute("src");

      if (activeCard) {
        activeCard.focus({ preventScroll: true });
      }
    }, 320);
  };

  const stepDrawerImage = (direction) => {
    if (!activePoster || activePoster.images.length <= 1) return;
    activeImageIndex =
      (activeImageIndex + direction + activePoster.images.length) % activePoster.images.length;
    renderDrawerPoster();
  };

  const stepDrawerPoster = (direction) => {
    if (!posterArchiveFlatList.length) return;

    const nextFlatIndex =
      (activeFlatIndex + direction + posterArchiveFlatList.length) % posterArchiveFlatList.length;
    setActivePoster(nextFlatIndex);
    renderDrawerPoster();
  };

  layout.addEventListener("click", (event) => {
    const card = event.target.closest(".poster-card");
    if (!card) return;

    openDrawer(card, Number(card.dataset.groupIndex), Number(card.dataset.posterIndex));
  });

  layout.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    const card = event.target.closest(".poster-card");
    if (!card) return;

    event.preventDefault();
    openDrawer(card, Number(card.dataset.groupIndex), Number(card.dataset.posterIndex));
  });

  thumbs.addEventListener("click", (event) => {
    const thumb = event.target.closest(".poster-drawer-thumb");
    if (!thumb) return;

    activeImageIndex = Number(thumb.dataset.imageIndex);
    renderDrawerPoster();
  });

  image.addEventListener("load", syncImageFacts);
  closeButton.addEventListener("click", closeDrawer);
  prevButton.addEventListener("click", () => stepDrawerPoster(-1));
  nextButton.addEventListener("click", () => stepDrawerPoster(1));
  backdrop.addEventListener("click", closeDrawer);

  window.addEventListener("keydown", (event) => {
    if (drawer.hidden) return;

    if (event.key === "Escape") {
      closeDrawer();
      return;
    }

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      if (event.shiftKey) {
        stepDrawerPoster(1);
        return;
      }

      stepDrawerImage(1);
      return;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      if (event.shiftKey) {
        stepDrawerPoster(-1);
        return;
      }

      stepDrawerImage(-1);
    }
  });
}

class HoverPixel {
  constructor(context, x, y, color, speed, delay, width, height) {
    this.ctx = context;
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = width;
    this.height = height;
    this.speed = this.getRandomValue(0.1, 0.9) * speed;
    this.size = 0;
    this.sizeStep = Math.random() * 0.4;
    this.minSize = 0.5;
    this.maxSizeInteger = 2;
    this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger);
    this.delay = delay;
    this.counter = 0;
    this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
    this.isIdle = false;
    this.isReverse = false;
    this.isShimmer = false;
  }

  reset() {
    this.size = 0;
    this.counter = 0;
    this.isIdle = false;
    this.isReverse = false;
    this.isShimmer = false;
  }

  getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
  }

  draw() {
    const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x + centerOffset, this.y + centerOffset, this.size, this.size);
  }

  appear() {
    this.isIdle = false;

    if (this.counter <= this.delay) {
      this.counter += this.counterStep;
      return;
    }

    if (this.size >= this.maxSize) {
      this.isShimmer = true;
    }

    if (this.isShimmer) {
      this.shimmer();
    } else {
      this.size += this.sizeStep;
    }

    this.draw();
  }

  disappear() {
    this.isShimmer = false;
    this.counter = 0;

    if (this.size <= 0) {
      this.isIdle = true;
      return;
    }

    this.size -= 0.1;
    this.draw();
  }

  shimmer() {
    if (this.size >= this.maxSize) {
      this.isReverse = true;
    } else if (this.size <= this.minSize) {
      this.isReverse = false;
    }

    if (this.isReverse) {
      this.size -= this.speed;
    } else {
      this.size += this.speed;
    }
  }
}

function getEffectivePixelSpeed(value) {
  const min = 0;
  const max = 100;
  const throttle = 0.001;
  const parsed = Number.parseInt(value, 10);

  if (parsed <= min) return min;
  if (parsed >= max) return max * throttle;

  return parsed * throttle;
}

class PosterPixelHover {
  constructor(card, config) {
    this.card = card;
    this.visual = card.querySelector(".poster-card-visual");
    this.canvas = card.querySelector(".poster-pixel-canvas");
    this.context = this.canvas?.getContext("2d", { alpha: true, desynchronized: true });
    this.config = config;
    this.pixels = [];
    this.animationFrame = 0;
    this.animationName = "disappear";
    this.timePrevious = performance.now();
    this.width = 0;
    this.height = 0;

    if (!this.visual || !this.canvas || !this.context) return;

    this.renderFrame = this.renderFrame.bind(this);
    this.handlePointerEnter = this.handlePointerEnter.bind(this);
    this.handlePointerLeave = this.handlePointerLeave.bind(this);

    this.resizeObserver = new ResizeObserver(() => {
      this.initPixels();
    });

    this.resizeObserver.observe(this.visual);
    this.initPixels();

    this.card.addEventListener("pointerenter", this.handlePointerEnter);
    this.card.addEventListener("pointerleave", this.handlePointerLeave);
  }

  initPixels() {
    const rect = this.visual.getBoundingClientRect();
    const width = Math.max(1, Math.floor(rect.width));
    const height = Math.max(1, Math.floor(rect.height));

    this.width = width;
    this.height = height;

    this.canvas.width = width;
    this.canvas.height = height;
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;

    const pixels = [];

    for (let x = 0; x < width; x += this.config.gap) {
      for (let y = 0; y < height; y += this.config.gap) {
        const dx = x - width / 2;
        const dy = y - height / 2;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const color = this.config.colors[Math.floor(Math.random() * this.config.colors.length)];

        pixels.push(
          new HoverPixel(
            this.context,
            x,
            y,
            color,
            getEffectivePixelSpeed(this.config.speed),
            distance,
            width,
            height,
          ),
        );
      }
    }

    this.pixels = pixels;
    this.clearCanvas();
  }

  clearCanvas() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  resetPixels() {
    this.pixels.forEach((pixel) => pixel.reset());
    this.clearCanvas();
  }

  deactivateImmediately() {
    cancelAnimationFrame(this.animationFrame);
    this.animationFrame = 0;
    this.animationName = "disappear";
    this.resetPixels();
    this.card.classList.remove("is-pixel-active");
  }

  handlePointerEnter() {
    if (activePosterPixelHover && activePosterPixelHover !== this) {
      activePosterPixelHover.deactivateImmediately();
    }

    activePosterPixelHover = this;
    this.resetPixels();
    this.card.classList.add("is-pixel-active");
    this.startAnimation("appear");
  }

  handlePointerLeave() {
    if (activePosterPixelHover === this) {
      activePosterPixelHover = null;
    }

    this.deactivateImmediately();
  }

  startAnimation(name) {
    this.animationName = name;
    cancelAnimationFrame(this.animationFrame);
    this.animationFrame = requestAnimationFrame(this.renderFrame);
  }

  renderFrame(timeNow) {
    this.animationFrame = requestAnimationFrame(this.renderFrame);

    const timePassed = timeNow - this.timePrevious;
    const timeInterval = 1000 / 30;

    if (timePassed < timeInterval) {
      return;
    }

    this.timePrevious = timeNow - (timePassed % timeInterval);
    this.clearCanvas();

    let allIdle = true;

    this.pixels.forEach((pixel) => {
      pixel[this.animationName]();

      if (!pixel.isIdle) {
        allIdle = false;
      }
    });

    if (!allIdle) {
      return;
    }

    cancelAnimationFrame(this.animationFrame);
    this.animationFrame = 0;

    if (this.animationName === "disappear") {
      this.card.classList.remove("is-pixel-active");
      this.resetPixels();
    }
  }
}

function initPosterPixelHover() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;
  if (!window.matchMedia("(min-width: 1024px)").matches) return;

  const cards = document.querySelectorAll("body[data-page='posters'] .poster-card");
  if (!cards.length) return;

  cards.forEach((card) => {
    new PosterPixelHover(card, posterPixelHoverConfig);
  });
}

function escapeHtml(value) {
  return String(value).replace(
    /[&<>"']/g,
    (character) =>
      (
        {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        }[character] || character
      ),
  );
}

function getDecodedFileName(source) {
  const rawName = source.split("/").pop() || source;

  try {
    return decodeURIComponent(rawName);
  } catch {
    return rawName;
  }
}

function applyIntrinsicAspectRatio(image, host = image?.parentElement) {
  if (!image || !host) return;

  const syncRatio = () => {
    if (!image.naturalWidth || !image.naturalHeight) return;
    host.style.aspectRatio = `${image.naturalWidth} / ${image.naturalHeight}`;
  };

  if (image.complete) {
    syncRatio();
  } else {
    image.addEventListener("load", syncRatio, { once: true });
  }
}

function initHomeProjectMediaRatios() {
  const projectImages = document.querySelectorAll(
    "body[data-page='home'] .editorial-card:not(.project-feature) .card-media img",
  );

  projectImages.forEach((image) => {
    applyIntrinsicAspectRatio(image);
  });
}

function buildProjectFrameLabel(index) {
  return String(index + 1).padStart(2, "0");
}

function buildProjectGallery(project) {
  const images = project.images.slice(1);

  return images
    .map((src, index) => {
      const span = projectGallerySpanPattern[index % projectGallerySpanPattern.length];
      const imageIndex = index + 1;
      const frame = buildProjectFrameLabel(imageIndex);

      return `
        <figure
          class="project-gallery-card project-image-trigger span-${span}"
          tabindex="0"
          role="button"
          aria-haspopup="dialog"
          aria-label="Open ${escapeHtml(project.title)} frame ${frame}"
          data-project-image-index="${imageIndex}"
        >
          <div class="project-gallery-media">
            <img class="deferred-image" data-src="${src}" alt="${escapeHtml(project.title)} frame ${frame}" loading="lazy" decoding="async" />
          </div>
          <figcaption>${frame}</figcaption>
        </figure>
      `;
    })
    .join("");
}

function renderProjectPage() {
  const host = document.querySelector("#projectCaseStudy");
  if (!host) return;

  const manifest = Array.isArray(window.__PROJECT_MANIFEST__) ? window.__PROJECT_MANIFEST__ : [];
  const manifestMap = new Map(manifest.map((entry) => [entry.slug, entry]));
  const params = new URLSearchParams(window.location.search);
  const requestedSlug = params.get("slug");
  const fallbackProject = projectCaseSource[0];
  const baseProject =
    projectCaseSource.find((entry) => entry.slug === requestedSlug) ||
    fallbackProject;
  const archiveProject = manifestMap.get(baseProject.slug);

  if (!archiveProject) {
    host.innerHTML = `
      <section class="project-case-empty">
        <p>Project archive is missing for ${escapeHtml(baseProject.title)}.</p>
        <a href="./index.html">Back to Works</a>
      </section>
    `;
    return;
  }

  const currentIndex = projectCaseSource.findIndex((entry) => entry.slug === baseProject.slug);
  const previousProject =
    projectCaseSource[(currentIndex - 1 + projectCaseSource.length) % projectCaseSource.length];
  const nextProject =
    projectCaseSource[(currentIndex + 1) % projectCaseSource.length];
  const project = { ...baseProject, ...archiveProject };
  const subtitleMarkup = project.subtitle ? `<small>${escapeHtml(project.subtitle)}</small>` : "";

  activeProjectCase = project;
  document.title = `LIULIAN ${project.title}`;
  document.body.style.setProperty("--project-accent", project.accent);
  document.body.setAttribute("data-project-slug", project.slug);

  host.innerHTML = `
    <section class="project-case-shell">
      <section class="project-case-hero" aria-label="${escapeHtml(project.title)} 项目介绍">
        <div class="project-case-kicker">
          <span>Selected Case Study</span>
          <a class="project-case-back" href="./index.html">Back to Works</a>
        </div>
        <div class="project-case-heading">
          <span class="project-case-number">${escapeHtml(project.number)}</span>
          <div class="project-case-title-wrap">
            <h1>${escapeHtml(project.title)}${subtitleMarkup}</h1>
          </div>
        </div>
        <div class="project-case-meta">
          <div class="project-case-meta-block">
            <span>Discipline</span>
            <p>${escapeHtml(project.discipline)}</p>
          </div>
          <div class="project-case-meta-block">
            <span>Frames</span>
            <p>${escapeHtml(project.imageCount)} selected archive images</p>
          </div>
          <div class="project-case-meta-block">
            <span>Author</span>
            <p>LIULIAN Portfolio</p>
          </div>
        </div>
      </section>

      <figure
        class="project-case-lead project-image-trigger"
        tabindex="0"
        role="button"
        aria-haspopup="dialog"
        aria-label="Open ${escapeHtml(project.title)} frame 01"
        data-project-image-index="0"
      >
        <div class="project-case-lead-media">
          <img src="${project.images[0]}" alt="${escapeHtml(project.title)} lead image" loading="eager" decoding="async" fetchpriority="high" />
        </div>
      </figure>

      <section class="project-case-gallery" aria-label="${escapeHtml(project.title)} 项目图集">
      </section>

      <footer class="project-case-footer">
        <a class="project-case-nav-link" href="./project.html?slug=${previousProject.slug}">
          <span>Previous</span>
          <strong>${escapeHtml(previousProject.title)}</strong>
        </a>
        <a class="project-case-nav-center" href="./index.html">All Works</a>
        <a class="project-case-nav-link project-case-nav-link-next" href="./project.html?slug=${nextProject.slug}">
          <span>Next</span>
          <strong>${escapeHtml(nextProject.title)}</strong>
        </a>
      </footer>
    </section>
  `;

  const gallery = host.querySelector(".project-case-gallery");
  scheduleNonCriticalTask(() => {
    if (!gallery || activeProjectCase?.slug !== project.slug) return;
    gallery.innerHTML = buildProjectGallery(project);
    queueDeferredImages(gallery);
  }, 180);
}

function initProjectDrawer() {
  const layout = document.querySelector("#projectCaseStudy");
  const drawer = document.querySelector("#posterDrawer");
  const backdrop = document.querySelector("#posterDrawerBackdrop");
  const stage = document.querySelector("#posterDrawerStage");
  const image = document.querySelector("#posterDrawerImage");
  const minimap = document.querySelector("#projectDrawerMinimap");
  const minimapList = document.querySelector("#projectDrawerMinimapList");
  const counter = document.querySelector("#posterDrawerCounter");
  const serial = document.querySelector("#posterDrawerSerial");
  const title = document.querySelector("#posterDrawerTitle");
  const size = document.querySelector("#posterDrawerSize");
  const location = document.querySelector("#posterDrawerLocation");
  const category = document.querySelector("#posterDrawerCategory");
  const details = document.querySelector("#posterDrawerDetails");
  const description = document.querySelector("#posterDrawerDescription");
  const credits = document.querySelector("#posterDrawerCredits");
  const awards = document.querySelector("#posterDrawerAwards");
  const author = document.querySelector("#posterDrawerAuthor");
  const collection = document.querySelector("#posterDrawerCollection");
  const collectionTag = document.querySelector("#posterDrawerCollectionTag");
  const footer = document.querySelector("#posterDrawerFooter");
  const closeButton = document.querySelector("#posterDrawerClose");
  const prevButton = document.querySelector("#posterDrawerPrev");
  const nextButton = document.querySelector("#posterDrawerNext");

  if (
    !layout ||
    !drawer ||
    !backdrop ||
    !stage ||
    !image ||
    !minimap ||
    !minimapList ||
    !counter ||
    !serial ||
    !title ||
    !size ||
    !location ||
    !category ||
    !details ||
    !description ||
    !credits ||
    !awards ||
    !author ||
    !collection ||
    !collectionTag ||
    !footer ||
    !closeButton ||
    !prevButton ||
    !nextButton ||
    !activeProjectCase
  ) {
    return;
  }

  const project = activeProjectCase;
  const projectItems = project.images.map((src, index) => ({
    index,
    src,
    frame: buildProjectFrameLabel(index),
    fileName: getDecodedFileName(src),
  }));

  let activeCard = null;
  let activeIndex = 0;
  let hideDrawerTimer = 0;
  let edgeWheelDelta = 0;
  let edgeWheelLockUntil = 0;
  let minimapRendered = false;

  const clearHideTimer = () => {
    if (!hideDrawerTimer) return;
    window.clearTimeout(hideDrawerTimer);
    hideDrawerTimer = 0;
  };

  const getActiveItem = () => projectItems.at(activeIndex) || null;

  const resetStagePosition = () => {
    stage.scrollTop = 0;
    stage.scrollLeft = 0;
    edgeWheelDelta = 0;
  };

  const syncImageFacts = () => {
    if (image.naturalWidth && image.naturalHeight) {
      size.textContent = `offset, ${image.naturalWidth} x ${image.naturalHeight} px`;
      return;
    }

    size.textContent = "offset, loading image size";
  };

  const renderMinimapList = () => {
    minimapList.innerHTML = projectItems
      .map(
        (item) => `
          <button
            class="project-drawer-mini${item.index === activeIndex ? " is-active" : ""}"
            type="button"
            data-project-minimap-index="${item.index}"
            aria-label="跳转到第 ${item.index + 1} 张图片"
          >
            <img class="deferred-image" data-src="${item.src}" alt="" loading="lazy" decoding="async" aria-hidden="true" />
            <span class="project-drawer-mini-viewport" aria-hidden="true"></span>
          </button>
        `,
      )
      .join("");
    minimapRendered = true;
    queueDeferredImages(minimapList);
  };

  const syncMinimapState = () => {
    const buttons = minimapList.querySelectorAll(".project-drawer-mini");
    if (!buttons.length) return;

    let activeButton = null;

    buttons.forEach((button) => {
      const isActive = Number(button.dataset.projectMinimapIndex) === activeIndex;
      button.classList.toggle("is-active", isActive);
      button.classList.remove("is-scrollable");

      const overlay = button.querySelector(".project-drawer-mini-viewport");
      if (overlay) {
        overlay.style.height = "0px";
        overlay.style.transform = "";
      }

      if (isActive) {
        activeButton = button;
      }
    });

    if (!activeButton) return;

    activeButton.scrollIntoView({ block: "nearest", inline: "nearest" });

    const activeThumbImage = activeButton.querySelector("img");
    const overlay = activeButton.querySelector(".project-drawer-mini-viewport");
    const previewHeight = activeThumbImage?.getBoundingClientRect().height || 0;
    const scrollRange = Math.max(0, stage.scrollHeight - stage.clientHeight);

    if (!previewHeight || !overlay || !scrollRange) return;

    const viewportHeight = Math.min(
      previewHeight,
      Math.max(24, (stage.clientHeight / stage.scrollHeight) * previewHeight),
    );
    const progress = scrollRange ? stage.scrollTop / scrollRange : 0;
    const offset = (previewHeight - viewportHeight) * progress;

    activeButton.classList.add("is-scrollable");
    overlay.style.height = `${viewportHeight}px`;
    overlay.style.transform = `translate3d(0, ${offset}px, 0)`;
  };

  const renderDrawerItem = () => {
    const item = getActiveItem();
    if (!item) return;

    resetStagePosition();
    image.src = item.src;
    image.alt = `${project.title} frame ${item.frame}`;
    counter.textContent = `${item.frame} / ${String(projectItems.length).padStart(2, "0")}`;
    serial.textContent = `project ${project.number}`;
    title.textContent = `"${project.title}", frame ${item.frame}`;
    location.textContent = `selected work, ${project.title.toLowerCase()}`;
    category.textContent = `image ${item.frame} of ${String(projectItems.length).padStart(2, "0")}`;
    details.textContent = "project archive frame";
    description.textContent = project.discipline;
    credits.textContent = `file: ${item.fileName}`;
    awards.textContent = `.${projectItems.length} images in this project archive`;
    author.textContent = "liulian";
    collection.textContent = project.title;
    collectionTag.textContent = project.number;
    footer.textContent = "© 2026, LIULIAN project archive. all rights reserved.";
    size.textContent = "offset, loading image size";
    if (minimapRendered) {
      requestAnimationFrame(() => {
        requestAnimationFrame(syncMinimapState);
      });
    }
  };

  const openDrawer = (card, nextIndex) => {
    if (nextIndex < 0 || nextIndex >= projectItems.length) return;

    activeCard = card;
    activeIndex = nextIndex;
    clearHideTimer();

    if (!minimapRendered) {
      renderMinimapList();
    }

    renderDrawerItem();

    if (drawer.hidden) {
      drawer.hidden = false;
      backdrop.hidden = false;
      requestAnimationFrame(() => {
        document.body.classList.add("poster-drawer-open");
        drawer.classList.add("is-project-drawer");
        drawer.classList.add("is-open");
        backdrop.classList.add("is-open");
        drawer.setAttribute("aria-hidden", "false");
        requestAnimationFrame(syncMinimapState);
        closeButton.focus({ preventScroll: true });
      });
      return;
    }

    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("poster-drawer-open");
    drawer.classList.add("is-project-drawer");
    drawer.classList.add("is-open");
    backdrop.classList.add("is-open");
    requestAnimationFrame(syncMinimapState);
  };

  const closeDrawer = () => {
    if (drawer.hidden) return;

    clearHideTimer();
    drawer.classList.remove("is-project-drawer");
    drawer.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("poster-drawer-open");

    hideDrawerTimer = window.setTimeout(() => {
      drawer.hidden = true;
      backdrop.hidden = true;
      image.removeAttribute("src");
      resetStagePosition();

      if (activeCard) {
        activeCard.focus({ preventScroll: true });
      }
    }, 320);
  };

  const stepDrawerItem = (direction) => {
    if (!projectItems.length) return;
    activeIndex = (activeIndex + direction + projectItems.length) % projectItems.length;
    activeCard = layout.querySelector(`[data-project-image-index="${activeIndex}"]`);
    renderDrawerItem();
  };

  const jumpWithinImage = (direction) => {
    const scrollRange = Math.max(0, stage.scrollHeight - stage.clientHeight);
    const atTop = stage.scrollTop <= 1;
    const atBottom = stage.scrollTop + stage.clientHeight >= stage.scrollHeight - 1;

    if (!scrollRange || (direction > 0 && atBottom) || (direction < 0 && atTop)) {
      stepDrawerItem(direction);
      return;
    }

    stage.scrollBy({
      top: direction * Math.max(220, stage.clientHeight * 0.88),
      behavior: "auto",
    });
  };

  const handleStageWheel = (event) => {
    const delta = event.deltaY;
    if (!delta) return;

    const atTop = stage.scrollTop <= 1;
    const atBottom = stage.scrollTop + stage.clientHeight >= stage.scrollHeight - 1;
    const direction = delta > 0 ? 1 : -1;
    const reachedEdge = direction > 0 ? atBottom : atTop;

    if (!reachedEdge) {
      edgeWheelDelta = 0;
      return;
    }

    event.preventDefault();

    const now = performance.now();
    if (now < edgeWheelLockUntil) return;

    if (edgeWheelDelta && Math.sign(edgeWheelDelta) !== Math.sign(delta)) {
      edgeWheelDelta = 0;
    }

    edgeWheelDelta += delta;

    if (Math.abs(edgeWheelDelta) < 90) return;

    edgeWheelDelta = 0;
    edgeWheelLockUntil = now + 240;
    stepDrawerItem(direction);
  };

  layout.addEventListener("click", (event) => {
    const card = event.target.closest(".project-image-trigger");
    if (!card) return;

    openDrawer(card, Number(card.dataset.projectImageIndex));
  });

  layout.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    const card = event.target.closest(".project-image-trigger");
    if (!card) return;

    event.preventDefault();
    openDrawer(card, Number(card.dataset.projectImageIndex));
  });

  minimapList.addEventListener("click", (event) => {
    const button = event.target.closest(".project-drawer-mini");
    if (!button) return;

    activeIndex = Number(button.dataset.projectMinimapIndex);
    activeCard = layout.querySelector(`[data-project-image-index="${activeIndex}"]`);
    renderDrawerItem();
  });

  image.addEventListener("load", () => {
    syncImageFacts();
    syncMinimapState();
  });
  minimapList.addEventListener(
    "load",
    (event) => {
      if (event.target.tagName === "IMG") {
        syncMinimapState();
      }
    },
    true,
  );
  closeButton.addEventListener("click", closeDrawer);
  prevButton.addEventListener("click", () => stepDrawerItem(-1));
  nextButton.addEventListener("click", () => stepDrawerItem(1));
  backdrop.addEventListener("click", closeDrawer);
  stage.addEventListener("scroll", syncMinimapState);
  stage.addEventListener("wheel", handleStageWheel, { passive: false });
  window.addEventListener("resize", syncMinimapState);

  window.addEventListener("keydown", (event) => {
    if (drawer.hidden) return;

    if (event.key === "Escape") {
      closeDrawer();
      return;
    }

    if (event.key === "ArrowDown" || event.key === "PageDown") {
      event.preventDefault();
      jumpWithinImage(1);
      return;
    }

    if (event.key === "ArrowUp" || event.key === "PageUp") {
      event.preventDefault();
      jumpWithinImage(-1);
      return;
    }

    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      stepDrawerItem(event.key === "ArrowRight" ? 1 : -1);
    }
  });
}

function initTargetCursor() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;
  if (!window.matchMedia("(min-width: 960px)").matches) return;

  const root = document.documentElement;
  root.classList.add("has-target-cursor");

  const cornerSize = 12;
  const borderWidth = 3;
  const hoverInset = borderWidth;
  const defaultCornerPositions = [
    { x: -cornerSize * 1.5, y: -cornerSize * 1.5 },
    { x: cornerSize * 0.5, y: -cornerSize * 1.5 },
    { x: cornerSize * 0.5, y: cornerSize * 0.5 },
    { x: -cornerSize * 1.5, y: cornerSize * 0.5 },
  ];

  const cursor = document.createElement("div");
  cursor.className = "target-cursor";
  cursor.setAttribute("aria-hidden", "true");
  cursor.innerHTML = `
    <div class="target-cursor-visual">
      <div class="target-cursor-dot"></div>
      <div class="target-cursor-corner corner-tl"></div>
      <div class="target-cursor-corner corner-tr"></div>
      <div class="target-cursor-corner corner-br"></div>
      <div class="target-cursor-corner corner-bl"></div>
    </div>
  `;

  document.body.appendChild(cursor);

  const visual = cursor.querySelector(".target-cursor-visual");
  const corners = Array.from(cursor.querySelectorAll(".target-cursor-corner"));

  let mouseX = window.innerWidth * 0.5;
  let mouseY = window.innerHeight * 0.5;
  let renderedX = mouseX;
  let renderedY = mouseY;
  let isVisible = false;
  let renderFrameId = 0;
  let activeTarget = null;
  let leaveHandler = null;

  const setVisible = (visible) => {
    isVisible = visible;
    cursor.classList.toggle("is-visible", visible);
  };

  const isValidTarget = (node) => {
    if (!(node instanceof Element)) return false;
    if (!node.matches(targetCursorSelector)) return false;
    if (node.hasAttribute("disabled")) return false;
    return node.getAttribute("aria-hidden") !== "true";
  };

  const getTargetRect = (target) => target?.getBoundingClientRect() || null;

  const setCornerPositions = (positions) => {
    corners.forEach((corner, index) => {
      const point = positions[index];
      if (!point) return;
      corner.style.transform = `translate3d(${point.x}px, ${point.y}px, 0)`;
    });
  };

  const render = () => {
    renderFrameId = 0;
    renderedX = lerp(renderedX, mouseX, 0.15);
    renderedY = lerp(renderedY, mouseY, 0.15);

    cursor.style.transform = `translate3d(${renderedX}px, ${renderedY}px, 0)`;

    if (activeTarget) {
      const rect = getTargetRect(activeTarget);
      if (rect) {
        setCornerPositions([
          { x: rect.left - renderedX - hoverInset, y: rect.top - renderedY - hoverInset },
          {
            x: rect.right - renderedX - cornerSize + hoverInset,
            y: rect.top - renderedY - hoverInset,
          },
          {
            x: rect.right - renderedX - cornerSize + hoverInset,
            y: rect.bottom - renderedY - cornerSize + hoverInset,
          },
          {
            x: rect.left - renderedX - hoverInset,
            y: rect.bottom - renderedY - cornerSize + hoverInset,
          },
        ]);
      }
    }

    if (Math.abs(renderedX - mouseX) > 0.08 || Math.abs(renderedY - mouseY) > 0.08) {
      renderFrameId = requestAnimationFrame(render);
    }
  };

  const scheduleRender = () => {
    if (renderFrameId) return;
    renderFrameId = requestAnimationFrame(render);
  };

  const releaseTarget = () => {
    if (activeTarget && leaveHandler) {
      activeTarget.removeEventListener("mouseleave", leaveHandler);
    }

    activeTarget = null;
    leaveHandler = null;
    cursor.classList.remove("is-targeting");
    setCornerPositions(defaultCornerPositions);
    scheduleRender();
  };

  const captureTarget = (target) => {
    if (!isValidTarget(target) || activeTarget === target) return;

    releaseTarget();
    activeTarget = target;
    cursor.classList.add("is-targeting");
    leaveHandler = () => {
      releaseTarget();
    };
    activeTarget.addEventListener("mouseleave", leaveHandler, { passive: true });
    scheduleRender();
  };

  const handleMouseMove = (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;

    if (!isVisible) {
      setVisible(true);
    }

    scheduleRender();
  };

  const handleMouseOver = (event) => {
    const target = event.target.closest(targetCursorSelector);
    if (!target) return;
    captureTarget(target);
  };

  const handleWindowLeave = (event) => {
    if (!event.relatedTarget) {
      setVisible(false);
      releaseTarget();
    }
  };

  const handleScrollOrResize = () => {
    if (!activeTarget) return;

    const hovered = document.elementFromPoint(mouseX, mouseY);
    if (!hovered || (hovered !== activeTarget && hovered.closest(targetCursorSelector) !== activeTarget)) {
      releaseTarget();
      return;
    }

    scheduleRender();
  };

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseover", handleMouseOver, { passive: true });
  window.addEventListener("mouseout", handleWindowLeave);
  window.addEventListener("scroll", handleScrollOrResize, { passive: true });
  window.addEventListener("resize", handleScrollOrResize);
  window.addEventListener("mousedown", () => cursor.classList.add("is-pressed"));
  window.addEventListener("mouseup", () => cursor.classList.remove("is-pressed"));
  window.addEventListener("blur", () => {
    setVisible(false);
    releaseTarget();
    cancelAnimationFrame(renderFrameId);
    renderFrameId = 0;
  });

  setCornerPositions(defaultCornerPositions);
  cursor.style.transform = `translate3d(${renderedX}px, ${renderedY}px, 0)`;
  visual.style.setProperty("--target-cursor-spin-duration", "2s");
}

function initPage() {
  const page = document.body?.dataset.page;

  if (page === "posters") {
    renderPosterPage();
    scheduleNonCriticalTask(() => {
      initPosterDrawer();
      initPosterPixelHover();
      initTargetCursor();
    }, 260);
    return;
  }

  if (page === "project") {
    renderProjectPage();
    scheduleNonCriticalTask(() => {
      initProjectDrawer();
      initTargetCursor();
    }, 220);
    return;
  }

  if (page === "home") {
    initHomeProjectMediaRatios();
    scheduleNonCriticalTask(() => {
      initTargetCursor();
    }, 700);
    return;
  }

  scheduleNonCriticalTask(() => {
    initTargetCursor();
  }, 400);
}

initPage();
