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
const posterArchiveTitles = {
  "2026": {
    1: "Wild Sparrow Matcha Cocoa Festival / 野雀抹茶可可节",
    2: "In Commemoration of Myself Who Is Still Striving Late Into the Night / 纪念深夜仍在努力的自己",
    3: "Connoisseur Lounge / 微醺品酒沙龙",
    4: "Take a Break / 放纵一下",
    5: "Wild Sound Festival / 黑桃音乐节",
    6: "Ordered Love / Disordered Demise",
    7: "Rainy Days Bring No Peace / 晴无闲时，雨无静时",
    8: "MUSILAC AIX",
  },
  "2024 & 2025": {
    1: "头脑中的魔怪",
    2: "Flooding, Erring and Fading Out",
    3: "L'Addition",
    4: "胜利会回答一切",
    5: "Work Refueling Station / 工作加油站",
    6: "2025",
    7: "Did You Clean Your Room Today / 今天打扫房间了吗",
    8: "REBIRTH",
    9: "器",
    10: "SHUIJUE",
    11: "19:00 / 21:00 / 03:00 / 02:25",
    12: "Theme Resonance / 新媒体与声音艺术展",
    13: "Thinking Straight in the Age of Information Overload",
    14: "Urban Echoes and Fragments",
    15: "Clay Joy Handmade Ceramics Workshop / 陶然自得",
  },
  "2023": {
    2: "There's No Secret Between Us / 我们之间本就没有秘密",
    3: "CONFESSIONS / BLOOD",
    4: "孩子的诡计多端",
    5: "时间凝固，世界只有你我",
    6: "ESCAPE / 逃脱地球计划",
    7: "Crazy Friday / 准时下班",
    8: "Black Water / 黑水",
    9: "Digital Plants / 数码植物新时代",
    10: "My Attention Eye",
    11: "Untitled",
    12: "REDBOX",
    13: "221104-0204 / club080936",
    14: "I Meet the Moon Every Night",
    15: "KID / 小孩",
    16: "CHAIN UP",
    18: "SEEING IS",
    19: "CHAOS",
    20: "Silence Full Of",
  },
};
const posterArchiveCardTitles = {
  "2026": {
    1: "Wild Sparrow / 野雀",
    2: "Late Night / 深夜",
    3: "Connoisseur Lounge / 微醺",
    4: "Take a Break / 放纵一下",
    5: "Wild Sound / 黑桃",
    6: "Ordered Love / 火商",
    7: "Rainy Days / 雨无静时",
    8: "MUSILAC AIX",
  },
  "2024 & 2025": {
    1: "Monster Mind / 头脑魔怪",
    2: "Flooding",
    3: "L'Addition",
    4: "Victory / 胜利会回答一切",
    5: "Refueling Station / 工作加油站",
    6: "2025",
    7: "Clean Your Room / 打扫房间了吗",
    8: "REBIRTH",
    9: "器",
    10: "SHUIJUE",
    11: "Time Notes / 时间切片",
    12: "Theme Resonance / 共振",
    13: "Thinking Straight / 直线思考",
    14: "Urban Echoes / 城市回声",
    15: "Clay Joy / 陶然自得",
  },
  "2023": {
    2: "No Secret / 没有秘密",
    3: "Confessions / 血色告白",
    4: "Childhood Tricks / 孩子的诡计",
    5: "Still Time / 时间凝固",
    6: "Escape Plan / 逃脱地球",
    7: "Friday / 准时下班",
    8: "Black Water / 黑水",
    9: "Digital Plants / 数码植物",
    10: "Attention Eye / 注视",
    11: "Untitled",
    12: "REDBOX",
    13: "club080936",
    14: "Moon / 月见",
    15: "KID / 小孩",
    16: "CHAIN UP",
    18: "SEEING IS",
    19: "CHAOS",
    20: "Silence Full Of",
  },
};
const posterPixelHoverConfig = {
  gap: 12,
  speed: 28,
  colors: [
    "rgba(255, 255, 255, 0.92)",
    "rgba(255, 255, 255, 0.72)",
    "rgba(255, 255, 255, 0.52)",
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
    detailZh: [
      "《少年游》围绕品牌识别与 campaign 视觉展开，以更松弛的编排保留项目画面的呼吸感。",
      "整个案例更强调图像之间的节奏与游感，让视觉叙述像一次轻快展开的旅程。",
    ],
    detailEn: [
      "YOUTH TOUR brings brand identity and campaign visuals into a lighter editorial rhythm.",
      "The case study focuses on pacing and atmosphere, letting the images move like a quiet journey.",
    ],
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
    detailZh: [
      "NOMO 源自全球流行文化中代表极致进食快感的拟声词“OMNOM NOM”。我们将这一声音重新定义为“宝宝大口吃饭的声音”，让进食从单纯的生理喂养，转化为一场充满乐趣的感官探索。",
      "我们用最柔和的圆弧线条包裹着探索之心。那个探头张望的形象，既像是在问“好吃的在哪里？”，也像是在问“这个世界是什么样的？”，诠释了“好奇心是最好的胃口”。",
    ],
    detailEn: [
      "NOMO reimagines “OMNOM NOM” as the joyful sound of a baby eating, turning feeding into a playful sensory experience.",
      "Soft rounded forms and a curious peeking character express one idea: curiosity is the best appetite.",
    ],
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
    detailZh: [
      "SMOO MARKET 以社区零售与空间氛围为核心，把门店、陈列、导视与品牌细节整理成一套连续体验。",
      "它更关注社区日常中的亲近感，让品牌在使用场景里自然发生。",
    ],
    detailEn: [
      "SMOO MARKET is built around community retail and spatial atmosphere.",
      "Storefront, wayfinding, and branded details are shaped into a warm everyday experience.",
    ],
  },
  {
    slug: "to-see-is-to-believe",
    number: "17",
    title: "TO SEE IS TO BELIEVE",
    subtitle: "",
    discipline: "Music Packaging / Visual System",
    accent: "#9fb8c1",
    summary:
      "CD packaging, image texture, and fine typography arranged into a soft visual narrative.",
    detailZh: [
      "TO SEE IS TO BELIEVE 以 CD 包装、影像质感与细密排版构建一套带有朦胧记忆感的视觉叙事。",
      "项目围绕透明材质、折页和光影图像展开，让实物载体保留介于观看与相信之间的距离。",
    ],
    detailEn: [
      "TO SEE IS TO BELIEVE turns CD packaging, image texture, and fine typography into a soft visual narrative.",
      "The system uses translucent materials, folded print, and blurred light to hold a distance between seeing and belief.",
    ],
  },
  {
    slug: "fechoes-2024",
    number: "05",
    title: "FECHOES 2024",
    subtitle: "未来回声音乐艺术节",
    discipline: "Festival Identity / Merchandise System",
    accent: "#53a4d8",
    summary:
      "A festival system built across tickets, merchandise, wayfinding, and event-facing graphics with a vivid, high-contrast visual language.",
    detailZh: [
      "FECHOES 2024 是一场融合音乐、艺术与科技的先锋音乐节，于 2024 年 9 月 6 日至 8 日在北京郎园 Station 举办。",
      "我们以鹦鹉螺、双螺旋与树状分支三种自然造物为基础进行人工建模，用近似绘画的光影渲染去模糊自然与人造、实体与数据之间的边界，隐喻未来音乐创作在生成式工具持续迭代下的可能性。",
    ],
    detailEn: [
      "FECHOES 2024 is a festival identity built around music, art, and technology.",
      "Natural forms are re-rendered as hybrid light structures to suggest future music-making.",
    ],
  },
  {
    slug: "lumos-nyxel",
    number: "06",
    title: "LUMOS NYXEL",
    subtitle: "Smart Bike Helmet",
    discipline: "Product Campaign / Launch Visuals",
    accent: "#d7aa58",
    summary:
      "Launch imagery and campaign frames for a smart bike helmet, balancing product clarity with night-riding energy and lifestyle storytelling.",
    detailZh: [
      "城市骑行安全需要被重新定义，尤其在夜间与低光环境里，传统头盔的被动防护并不能解决“被看见”这个核心问题。",
      "作为智慧骑行装备的创新者，Lumos 从真实用户痛点出发，让 Nyxel 成为一款把汽车级主动安全技术带入头盔系统的产品，用更主动的方式回应城市夜骑的安全需求。",
    ],
    detailEn: [
      "Lumos Nyxel focuses on the core safety problem of being seen at night.",
      "The campaign frames the helmet as an active urban-riding system, not passive protection alone.",
    ],
  },
  {
    slug: "newlife",
    number: "07",
    title: "NEW LIFE",
    subtitle: "新生活新公式",
    discipline: "Campaign Identity / Visual System",
    accent: "#ce5c48",
    summary:
      "Campaign visuals, layout studies, and applied touchpoints are unfolded in a paced, image-led presentation.",
    detailZh: [
      "NEW LIFE 关注现代社会对健康生活方式的持续追求，希望把“新方式、新生活”的观念带入新的时代语境。",
      "项目的核心在于把“公式”转化为一套可被感知、可被使用、也可在不同场景中扩展的视觉方法，让精神与物质的富足之外，身体训练也成为日常生活的一部分。",
    ],
    detailEn: [
      "NEW LIFE translates a health-driven lifestyle into a flexible visual formula.",
      "The system is built to adapt across daily use, training, and wider brand applications.",
    ],
  },
  {
    slug: "throbbing",
    number: "08",
    title: "THROBBING",
    subtitle: "服饰",
    discipline: "Fashion Label / Brand System",
    accent: "#2e2827",
    summary:
      "A fashion-facing case study balancing raw imagery, brand surfaces, and bolder full-width visual anchors.",
    detailZh: [
      "THROBBING 是一个以轻休闲、轻日常为出发点的设计师生活品牌，围绕轻松的城市生活方式展开。",
      "我们用情绪去描绘不同人对“轻”的诠释，希望产品不只通过贴身服饰来代表生活方式，也能从使用者的反馈中不断生长出属于“ing”的生活体验。",
    ],
    detailEn: [
      "THROBBING is a relaxed lifestyle label shaped by light urban living.",
      "The identity turns emotion and daily feedback into an ongoing “ing” experience.",
    ],
  },
  {
    slug: "alonewild",
    number: "09",
    title: "ALONEWILD",
    subtitle: "在野行",
    discipline: "Outdoor Brand / Visual Identity",
    accent: "#857552",
    summary:
      "Outdoor mood, branding applications, and campaign stills arranged as a single flowing visual document.",
    detailZh: [
      "ALONEWILD 以自然纹理、户外场景与实际应用为核心，建立一套更贴近城市露营语境的品牌形象。",
      "视觉在野外感受与日常使用之间保持平衡，让品牌既有情境也有落地性。",
    ],
    detailEn: [
      "ALONEWILD builds a brand identity from natural textures, outdoor mood, and practical use.",
      "The system balances field atmosphere with everyday applications.",
    ],
  },
  {
    slug: "supernova",
    number: "10",
    title: "SUPERNOVA FORCE",
    subtitle: "",
    discipline: "Logo System / Brand Identity",
    accent: "#50576f",
    summary:
      "A compact but high-contrast identity presentation built from logo studies, applications, and final brand moments.",
    detailZh: [
      "当科技吞噬黎明，唯有破碎者能重燃光芒。SUPERNOVA FORCE 诞生于近未来巨型都市“新曙城”的末日叙事：暗物质侵蚀地核，重力倒转，精英阶层正策划逃离地球。",
      "五位被社会遗弃的超能力者被迫成为文明最后的希望。这个视觉系统围绕毁灭、赎罪、否定、代价与守护展开，用高能量的图形语言为这组角色建立一套未来感强烈的品牌世界观。",
      "平面设计：LIULIAN / 3D 设计：博文",
    ],
    detailEn: [
      "SUPERNOVA FORCE imagines a near-future world where discarded heroes become civilization’s last hope.",
      "The identity uses charged forms and cinematic contrast to build that mythic universe.",
      "Graphic Design: LIULIAN / 3D Design: Bowen",
    ],
  },
  {
    slug: "zero-m1",
    number: "11",
    title: "ZERO M1",
    subtitle: "",
    discipline: "Brand Identity / Campaign Visuals",
    accent: "#5a6f86",
    summary:
      "A future-facing visual identity built through robotic product imagery, interface-led graphics, and stark campaign compositions.",
    detailZh: [
      "ZERO M1 以机器人产品、界面图形与未来叙事构成视觉识别，呈现出克制而锋利的科技感。",
      "整体语言以产品为中心，在品牌表达与未来想象之间保持清晰方向。",
    ],
    detailEn: [
      "ZERO M1 builds its identity through robotic imagery, interface graphics, and a restrained future tone.",
      "The system stays product-led while keeping a clear speculative edge.",
    ],
  },
  {
    slug: "ecoflow",
    number: "12",
    title: "ECOFLOW",
    subtitle: "项目",
    discipline: "Campaign Visual / Launch Material",
    accent: "#3a7070",
    summary:
      "A concise project page that keeps each frame prominent and gives the launch material generous breathing room.",
    detailZh: [
      "ECOFLOW 以发布物料与传播视觉为核心，强调便携能源产品在沟通上的清晰度与节奏感。",
      "页面保持简洁直接的展示方式，让每一张关键画面都更有分量。",
    ],
    detailEn: [
      "ECOFLOW focuses on launch graphics and communication clarity for portable energy products.",
      "The page keeps the presentation direct so each frame carries more weight.",
    ],
  },
  {
    slug: "double8-coffee",
    number: "13",
    title: "DOUBLE 8 COFFEE",
    subtitle: "",
    discipline: "Coffee Branding / Visual Identity",
    accent: "#8c6652",
    summary:
      "Identity-led coffee branding shown through signage, graphics, mockups, and real-world placement images.",
    detailZh: [
      "DOUBLE 8 COFFEE 通过招牌、包装、图形与空间应用建立一套完整的咖啡品牌形象。",
      "整体视觉在日常亲和力与识别度之间保持平衡。",
    ],
    detailEn: [
      "DOUBLE 8 COFFEE builds its identity through signage, packaging, graphics, and space.",
      "The visual language stays friendly, direct, and recognisable.",
    ],
  },
  {
    slug: "fivebook",
    number: "14",
    title: "FIVEBOOK",
    subtitle: "五本书屋",
    discipline: "Bookstore Brand / Space Graphics",
    accent: "#9a7a5e",
    summary:
      "A bookstore identity unfolded through environmental views, print surfaces, and a steady visual cadence.",
    detailZh: [
      "五本书屋希望为当代年轻人打造一个兼具阅读、借阅与自习体验的复合型空间，把传统书店与需要个人学习空间的当代习惯结合在一起。",
      "我们更愿意把书店理解成一个“Room”。设计以书本为核心意象，用书本搭建一个属于自己的学习乌托邦，把家的体验与通过书籍认知世界的温度一起带给年轻人，在趣味与秩序之间保留空间的意义。",
    ],
    detailEn: [
      "Fivebook treats the bookstore as a room for reading, studying, and staying.",
      "Books become the visual core of a warm, personal learning space.",
    ],
  },
  {
    slug: "flow-in",
    number: "15",
    title: "FLOW IN",
    subtitle: "",
    discipline: "Lifestyle Space / Visual Identity",
    accent: "#7088a6",
    summary:
      "A dense archive of applied brand imagery, paced through alternating wide spreads and tighter editorial clusters.",
    detailZh: [
      "FLOW IN 是一个专注于在大自然中寻找简单欢乐的户外品牌，相信户外出行不必复杂。",
      "它通过产品与活动让自然体验变得更简单、更容易抵达，让任何人都能随时随地走进户外，因为大自然本来就是我们天然的游乐场。",
    ],
    detailEn: [
      "FLOW IN is an outdoor brand built on simple joy in nature.",
      "The identity makes the outdoors feel easy, open, and close to everyday life.",
    ],
  },
  {
    slug: "shake-coffee",
    number: "16",
    title: "SHAKE COFFEE",
    subtitle: "摇coffee",
    discipline: "Illustration Brand / Coffee System",
    accent: "#d5959e",
    summary:
      "Illustration, packaging, and identity applications sequenced in a lighter, compact long-scroll presentation.",
    detailZh: [
      "“已经很糟糕了，不如先喝杯咖啡。” 这是摇 coffee 的情绪起点。",
      "生活像一杯被摇晃又打翻的咖啡，工作会崩盘，计划会脱轨，情绪会宕机。既然已经这么糟，不如先停下来休息一下，把混乱变成一种能被接住的日常态度。",
    ],
    detailEn: [
      "Shake Coffee starts from the idea that a bad day can pause for one good cup.",
      "The identity turns daily chaos into a loose, resilient mood.",
    ],
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

const projectCaseOrder = [
  "fivebook",
  "throbbing",
  "nomokids",
  "shake-coffee",
  "newlife",
  "supernova",
  "smoo-market",
  "flow-in",
  "youth-tour",
  "double8-coffee",
  "ecoflow",
  "alonewild",
  "zero-m1",
  "fechoes-2024",
  "lumos-nyxel",
  "to-see-is-to-believe",
];
const projectCaseOrderIndex = new Map(projectCaseOrder.map((slug, index) => [slug, index]));

projectCaseSource.sort(
  (left, right) =>
    (projectCaseOrderIndex.get(left.slug) ?? Number.MAX_SAFE_INTEGER) -
    (projectCaseOrderIndex.get(right.slug) ?? Number.MAX_SAFE_INTEGER),
);

projectCaseSource.forEach((project, index) => {
  project.number = String(index + 1).padStart(2, "0");
});

const footerPreviewSource = {
  "selected-works": {
    title: "SELECTED WORKS",
    note: "Project lead images cycling every second.",
    images: [
      "./assets/projects/youth-tour/1.webp",
      "./assets/projects/newlife/18.webp",
      "./assets/projects/fivebook/1.webp",
      "./assets/projects/double8-coffee/1.webp",
      "./assets/projects/to-see-is-to-believe/1.jpg",
      "./assets/projects/zero-m1/1.webp",
      "./assets/projects/ecoflow/12.webp",
      "./assets/projects/nomokids/0.webp",
    ],
  },
  posters: {
    title: "POSTERS",
    note: "Poster covers cycling every second.",
    images: [
      "./assets/posters/home-band/band-01.webp",
      "./assets/posters/home-band/band-02.webp",
      "./assets/posters/home-band/band-03.webp",
      "./assets/posters/home-band/band-04.webp",
      "./assets/posters/home-band/band-05.webp",
      "./assets/posters/home-band/band-06.webp",
      "./assets/posters/home-band/band-07.webp",
      "./assets/posters/home-band/band-08.webp",
    ],
  },
};
const projectBrowserPreviewOverrides = {
  fivebook: "./assets/home/frame-covers/fivebook.png",
  throbbing: "./assets/home/frame-covers/throbbing.png",
  nomokids: "./assets/home/frame-covers/nomokids.png",
  "shake-coffee": "./assets/home/frame-covers/shake-coffee.png",
  newlife: "./assets/home/frame-covers/newlife.png",
  supernova: "./assets/home/frame-covers/supernova.png",
  "smoo-market": "./assets/home/frame-covers/smoo-market.png",
  "flow-in": "./assets/home/frame-covers/flow-in.png",
  "youth-tour": "./assets/home/frame-covers/youth-tour.png",
  "double8-coffee": "./assets/home/frame-covers/double8-coffee.png",
  ecoflow: "./assets/home/frame-covers/ecoflow.png",
  alonewild: "./assets/home/frame-covers/alonewild.png",
  "zero-m1": "./assets/home/frame-covers/zero-m1.png",
  "fechoes-2024": "./assets/home/frame-covers/fechoes-2024.png",
  "lumos-nyxel": "./assets/home/frame-covers/lumos-nyxel.png",
  "to-see-is-to-believe": "./assets/home/frame-covers/to-see-is-to-believe.png",
};
const projectBrowserPreviewSelections = {
  fivebook: { index: 6, width: 1232, height: 1600 },
  throbbing: { index: 24, width: 1600, height: 1067 },
  nomokids: { index: 21, width: 1199, height: 1600 },
  "shake-coffee": { index: 0, width: 1920, height: 1080 },
  newlife: { index: 0, width: 1600, height: 900 },
  supernova: { index: 3, width: 1920, height: 2511 },
  "smoo-market": { index: 12, width: 1170, height: 1444 },
  "flow-in": { index: 1, width: 1600, height: 1134 },
  "youth-tour": { index: 8, width: 1600, height: 1133 },
  "double8-coffee": { index: 18, width: 1600, height: 1036 },
  ecoflow: { index: 8, width: 1600, height: 1126 },
  alonewild: { index: 0, width: 1600, height: 900 },
  "zero-m1": { index: 0, width: 1920, height: 1080 },
  "fechoes-2024": { index: 9, width: 1080, height: 1439 },
  "lumos-nyxel": { index: 1, width: 1600, height: 1232 },
  "to-see-is-to-believe": { index: 0, width: 1440, height: 1440 },
};

let activeCardPixelHover = null;
let posterArchiveGroups = [];
let posterArchiveFlatList = [];
let activeProjectCase = null;
let deferredImageObserver = null;
let scrambledTextObserver = null;
let scrambledTextRefreshHandle = 0;
let scrambledTextInitialized = false;
const scrambledTextRoots = new Map();
const pendingScrambledScopes = new Set();
const targetCursorSelector = "a, button, [role='button'], .cursor-target";
const targetCursorFrameSelector = [
  ".poster-card-visual",
  ".project-case-lead-media",
  ".project-gallery-media",
  ".posters-band-strip",
  ".card-media",
  ".cover-cloud-card-media",
].join(", ");
const scrambledTextConfig = Object.freeze({
  radius: 110,
  duration: 0.95,
  speed: 0.6,
  scrambleChars: ".:",
  selector: "a, p, h1, h2, h3, h4, h5, h6, strong, small, button, label, li, blockquote, figcaption, dt, dd, span",
});
const scrambledTextIgnoredTags = new Set([
  "SCRIPT",
  "STYLE",
  "NOSCRIPT",
  "SVG",
  "PATH",
  "IMG",
  "VIDEO",
  "CANVAS",
  "INPUT",
  "TEXTAREA",
  "SELECT",
  "OPTION",
]);

const lerp = (a, b, n) => (1 - n) * a + n * b;
const encodeImagePath = (folder, file) => encodeURI(`${folder}/${file}`);

function scheduleNonCriticalTask(task, timeout = 600) {
  if ("requestIdleCallback" in window) {
    return window.requestIdleCallback(task, { timeout });
  }

  return window.setTimeout(task, Math.min(timeout, 180));
}

function getCountUpDecimalPlaces(number) {
  const text = number.toString();

  if (text.includes(".")) {
    const decimals = text.split(".")[1];
    if (Number.parseInt(decimals, 10) !== 0) {
      return decimals.length;
    }
  }

  return 0;
}

function createCountUpFormatter(from, to, separator = "") {
  const maxDecimals = Math.max(
    getCountUpDecimalPlaces(from),
    getCountUpDecimalPlaces(to),
  );

  return (latest) => {
    const hasDecimals = maxDecimals > 0;
    const formattedNumber = Intl.NumberFormat("en-US", {
      useGrouping: Boolean(separator),
      minimumFractionDigits: hasDecimals ? maxDecimals : 0,
      maximumFractionDigits: hasDecimals ? maxDecimals : 0,
    }).format(latest);

    return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
  };
}

function initHomeLoadingScreen() {
  const loader = document.getElementById("homeLoadingScreen");
  const value = document.getElementById("homeLoadingValue");
  const label = document.getElementById("homeLoadingLabel");
  const video = document.getElementById("homeLoadingVideo");

  if (!loader || !value || !label) return;

  if (document.documentElement.dataset.homeLoader === "skip") {
    loader.hidden = true;
    loader.remove();
    return;
  }

  const body = document.body;
  const startTime = performance.now();
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasVideo = video instanceof HTMLVideoElement;
  const minDuration = prefersReducedMotion ? 900 : 1500;
  const maxDuration = 7000;
  const preCompleteCap = prefersReducedMotion ? 95 : 97;
  const waitingForVideoCap = prefersReducedMotion ? 24 : 32;
  const preVideoDisplayCap = prefersReducedMotion ? 5 : 4;
  const preVideoGraceDuration = prefersReducedMotion ? 240 : 420;
  const introFreezeDuration = prefersReducedMotion ? 160 : 240;
  const introProgressCapDuration = prefersReducedMotion ? 520 : 1120;
  const introProgressCap = prefersReducedMotion ? 16 : 18;
  const regularDisplayRate = prefersReducedMotion ? 0.08 : 0.04;
  const finishDisplayRate = prefersReducedMotion ? 0.2 : 0.24;
  const completionHoldDuration = prefersReducedMotion ? 120 : 180;
  const exitDuration = 420;
  const completionSnapThreshold = 99.4;
  const formatCountUpValue = createCountUpFormatter(0, 100);
  const trackedImages = Array.from(
    document.querySelectorAll(
      [
        "body[data-page='home'] .posters-band-strip .poster-thumb:nth-child(-n+2) img",
        "body[data-page='home'] .cover-cloud-reference .cover-cloud-card:nth-child(-n+4) img",
      ].join(", "),
    ),
  );
  const videoStartTime = 0.5;
  const videoCompletionThreshold = 0.985;
  const videoPlaybackRate = prefersReducedMotion ? 1 : 2;

  let trackedAssetCount = trackedImages.length;
  let loadedAssetCount = 0;
  let actualProgress = hasVideo ? 1 : trackedAssetCount ? 6 : 22;
  let displayedProgress = 1;
  let pageLoaded = document.readyState === "complete";
  let finishRequested = false;
  let exitTriggered = false;
  let completionHoldStart = null;
  let lastAnimationTime = startTime;
  let videoPlaybackObserved = !hasVideo;
  let videoSequenceComplete = !hasVideo;

  body.classList.add("is-home-loading");
  body.setAttribute("aria-busy", "true");

  value.textContent = formatCountUpValue(displayedProgress);

  const updateLabel = (progress) => {
    if (progress < 34) {
      label.textContent = "Preparing selected works";
      return;
    }

    if (progress < 72) {
      label.textContent = "Loading homepage images";
      return;
    }

    if (progress < 100) {
      label.textContent = "Finalizing home experience";
      return;
    }

    label.textContent = "Entering selected works";
  };

  const areAssetsReady = () => loadedAssetCount >= trackedAssetCount;
  const getProgressCap = () => (finishRequested ? 100 : preCompleteCap);
  const applyAssetDrivenProgress = (cap = getProgressCap()) => {
    const nextProgress = Math.min(getAssetDrivenProgress(), cap);
    actualProgress = Math.max(actualProgress, nextProgress);
  };

  const getAssetDrivenProgress = () => {
    const assetProgress = trackedAssetCount
      ? Math.min(1, loadedAssetCount / trackedAssetCount)
      : 1;

    return pageLoaded ? 100 : 10 + assetProgress * (preCompleteCap - 10);
  };

  const getVideoTimelineProgress = () => {
    if (!(video instanceof HTMLVideoElement)) return null;

    const duration = Number.isFinite(video.duration) ? video.duration : 0;
    if (duration <= videoStartTime + 0.08) return null;

    const endTime = Math.max(videoStartTime + 0.24, duration - 0.08);
    const clampedTime = Math.min(endTime, Math.max(videoStartTime, video.currentTime || 0));

    return (clampedTime - videoStartTime) / (endTime - videoStartTime);
  };

  const refreshActualProgress = () => {
    if (hasVideo) {
      const videoTimelineProgress = getVideoTimelineProgress();

      if (videoTimelineProgress !== null) {
        if (videoTimelineProgress > 0.015) {
          videoPlaybackObserved = true;
        }

        if (videoTimelineProgress >= videoCompletionThreshold) {
          videoSequenceComplete = true;
        }

        const timelineProgress = 1 + videoTimelineProgress * 99;
        actualProgress = Math.max(
          actualProgress,
          Math.min(
            timelineProgress,
            pageLoaded && areAssetsReady() && videoSequenceComplete ? 100 : getProgressCap(),
          ),
        );
        return;
      }

      if (videoSequenceComplete) {
        applyAssetDrivenProgress();
        return;
      }

      applyAssetDrivenProgress(waitingForVideoCap);
      return;
    }

    applyAssetDrivenProgress();
  };

  const markAssetLoaded = () => {
    loadedAssetCount += 1;
    refreshActualProgress();
  };

  trackedImages.forEach((image) => {
    image.loading = "eager";
    image.setAttribute("loading", "eager");
    image.setAttribute("fetchpriority", "high");

    if ("fetchPriority" in image) {
      image.fetchPriority = "high";
    }

    if (image.complete) {
      markAssetLoaded();
      return;
    }

    image.addEventListener("load", markAssetLoaded, { once: true });
    image.addEventListener("error", markAssetLoaded, { once: true });
  });

  if (hasVideo) {
    trackedAssetCount += 1;
    video.loop = false;
    video.defaultPlaybackRate = videoPlaybackRate;
    video.playbackRate = videoPlaybackRate;

    if (video.readyState === 0) {
      try {
        video.load();
      } catch {
        // Ignore browsers that do not allow manual load nudges here.
      }
    }

    let videoHandled = false;
    const handleVideoProgress = (hasVideoFrames) => {
      if (videoHandled) return;
      videoHandled = true;

      if (hasVideoFrames) {
        videoPlaybackObserved = true;
      }

      if (!hasVideoFrames) {
        videoSequenceComplete = true;
      }

      markAssetLoaded();
    };

    const syncVideoTiming = () => {
      const duration = Number.isFinite(video.duration) ? video.duration : 0;
      const maxSeek = duration > 0 ? Math.max(0, duration - 0.25) : 0;
      const seekTime = Math.min(videoStartTime, maxSeek);

      if (Math.abs(video.currentTime - seekTime) > 0.08) {
        try {
          video.currentTime = seekTime;
        } catch {
          // Ignore browsers that reject early seeks while still buffering.
        }
      }

      video.playbackRate = videoPlaybackRate;
    };

    const resumeVideoPlayback = () => {
      if (videoSequenceComplete) return;

      const playPromise = video.play();
      if (playPromise?.catch) {
        playPromise.catch(() => {
          handleVideoProgress(false);
          refreshActualProgress();
        });
      }
    };

    const markVideoSequenceComplete = () => {
      if (videoSequenceComplete) return;

      const videoTimelineProgress = getVideoTimelineProgress();
      if (videoTimelineProgress !== null) {
        if (videoTimelineProgress > 0.015) {
          videoPlaybackObserved = true;
        }

        if (videoTimelineProgress >= videoCompletionThreshold) {
          videoSequenceComplete = true;
        }
      }

      if (video.ended) {
        videoSequenceComplete = true;
      }
    };

    const beginVideoPlayback = () => {
      syncVideoTiming();
      resumeVideoPlayback();
    };

    if (video.readyState >= 1) {
      beginVideoPlayback();
    } else {
      video.addEventListener("loadedmetadata", beginVideoPlayback, { once: true });
    }

    if (video.readyState >= 2) {
      handleVideoProgress(true);
    } else {
      const videoFallbackTimer = window.setTimeout(() => {
        handleVideoProgress(false);
      }, 1600);
      const resolveVideoProgress = (hasVideoFrames) => {
        window.clearTimeout(videoFallbackTimer);
        if (hasVideoFrames) {
          syncVideoTiming();
        }
        handleVideoProgress(hasVideoFrames);
      };

      video.addEventListener("loadeddata", () => resolveVideoProgress(true), { once: true });
      video.addEventListener("canplay", () => resolveVideoProgress(true), { once: true });
      video.addEventListener(
        "playing",
        () => {
          videoPlaybackObserved = true;
          resolveVideoProgress(true);
        },
        { once: true },
      );
      video.addEventListener("error", () => resolveVideoProgress(false), { once: true });
    }

    video.addEventListener("timeupdate", markVideoSequenceComplete);
    video.addEventListener(
      "ended",
      () => {
        videoSequenceComplete = true;
      },
      { once: true },
    );
  }

  const maybeFinish = (now) => {
    const elapsed = now - startTime;
    const assetsReady = areAssetsReady();

    if (finishRequested) {
      actualProgress = 100;
      return;
    }

    if (pageLoaded && assetsReady && videoSequenceComplete && elapsed >= minDuration) {
      finishRequested = true;
      actualProgress = 100;
      return;
    }

    if (elapsed >= maxDuration) {
      finishRequested = true;
      actualProgress = 100;
    }
  };

  const exitLoader = () => {
    if (exitTriggered) return;

    exitTriggered = true;
    updateLabel(100);
    loader.classList.add("is-exiting");
    body.classList.remove("is-home-loading");
    body.classList.add("is-home-loading-revealing");
    body.removeAttribute("aria-busy");
    document.dispatchEvent(new CustomEvent("home:content-revealed"));

    window.setTimeout(() => {
      body.classList.remove("is-home-loading-revealing");
      loader.hidden = true;
      loader.remove();
    }, exitDuration);
  };

  const getDisplayTarget = (now) => {
    if (finishRequested) return actualProgress;

    const elapsed = now - startTime;
    if (hasVideo && !videoPlaybackObserved) {
      const preVideoCap = elapsed >= preVideoGraceDuration ? preVideoDisplayCap + 2 : preVideoDisplayCap;
      return Math.min(actualProgress, preVideoCap);
    }

    if (elapsed < introFreezeDuration) {
      return Math.min(actualProgress, 2);
    }

    if (elapsed >= introProgressCapDuration) return actualProgress;

    const introProgress = (elapsed - introFreezeDuration) / (introProgressCapDuration - introFreezeDuration);
    const introCap = 2 + (introProgressCap - 2) * introProgress;
    return Math.min(actualProgress, introCap);
  };

  const advanceDisplayedProgress = (now) => {
    const delta = Math.max(16, now - lastAnimationTime);
    lastAnimationTime = now;

    const target = getDisplayTarget(now);
    const rate = finishRequested ? finishDisplayRate : regularDisplayRate;
    displayedProgress = Math.min(target, displayedProgress + delta * rate);

    if (finishRequested && target >= 100 && 100 - displayedProgress <= 0.8) {
      displayedProgress = 100;
    }
  };

  const animateProgress = (now) => {
    refreshActualProgress();
    maybeFinish(now);
    advanceDisplayedProgress(now);

    const clampedDisplayProgress = Math.min(100, Math.max(1, displayedProgress));
    const roundedProgress = Math.round(clampedDisplayProgress);
    value.textContent = formatCountUpValue(clampedDisplayProgress);
    updateLabel(roundedProgress);
    const reachedCompleteState = finishRequested
      && (roundedProgress >= 100 || clampedDisplayProgress >= completionSnapThreshold);

    if (reachedCompleteState && completionHoldStart === null) {
      completionHoldStart = now;
      displayedProgress = 100;
      value.textContent = formatCountUpValue(100);
      updateLabel(100);
      loader.classList.add("is-complete");
    }

    if (
      completionHoldStart !== null
      && now - completionHoldStart >= completionHoldDuration
    ) {
      exitLoader();
      return;
    }

    window.requestAnimationFrame(animateProgress);
  };

  if (!pageLoaded) {
    window.addEventListener(
      "load",
      () => {
        pageLoaded = true;
        refreshActualProgress();
      },
      { once: true },
    );
  }

  refreshActualProgress();
  updateLabel(1);
  window.requestAnimationFrame(animateProgress);
}

function canUseScrambledText() {
  return Boolean(window.gsap)
    && !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    && window.matchMedia("(pointer: fine)").matches;
}

function getScrambledScopeDepth(scope) {
  let depth = 0;
  let current = scope;

  while (current?.parentElement) {
    depth += 1;
    current = current.parentElement;
  }

  return depth;
}

function trackScrambledScope(scope) {
  if (!(scope instanceof Element) && scope !== document.body) return;

  if (scope === document.body) {
    pendingScrambledScopes.clear();
    pendingScrambledScopes.add(scope);
    return;
  }

  if (pendingScrambledScopes.has(document.body)) return;

  for (const pendingScope of [...pendingScrambledScopes]) {
    if (pendingScope.contains(scope)) return;
    if (scope.contains(pendingScope)) pendingScrambledScopes.delete(pendingScope);
  }

  pendingScrambledScopes.add(scope);
}

function scheduleScrambledTextRefresh(scope = document.body) {
  if (!canUseScrambledText()) return;

  trackScrambledScope(scope);
  if (scrambledTextRefreshHandle) return;

  scrambledTextRefreshHandle = window.requestAnimationFrame(() => {
    scrambledTextRefreshHandle = 0;

    const scopes = [...pendingScrambledScopes].sort(
      (left, right) => getScrambledScopeDepth(left) - getScrambledScopeDepth(right),
    );

    pendingScrambledScopes.clear();

    if (scrambledTextObserver) {
      scrambledTextObserver.disconnect();
    }

    scopes.forEach((currentScope) => applyScrambledText(currentScope));

    if (scrambledTextObserver && document.body) {
      scrambledTextObserver.observe(document.body, {
        childList: true,
        characterData: true,
        subtree: true,
      });
    }
  });
}

function hasDirectScrambleText(element) {
  return [...element.childNodes].some(
    (node) => node.nodeType === Node.TEXT_NODE && node.nodeValue?.trim(),
  );
}

function shouldIgnoreScrambledSubtree(element) {
  if (!(element instanceof Element)) return true;
  if (scrambledTextIgnoredTags.has(element.tagName)) return true;
  if (element.closest("[data-scramble-skip='true']")) return true;
  if (element.closest("[aria-hidden='true']")) return true;
  if (element.isContentEditable) return true;
  return false;
}

function splitScrambledTextNode(node, chars) {
  if (node.nodeType !== Node.TEXT_NODE || !node.parentElement) return;

  const value = node.nodeValue || "";
  if (!value.trim()) return;

  const fragment = document.createDocumentFragment();

  [...value].forEach((character) => {
    if (/\s/.test(character)) {
      fragment.append(document.createTextNode(character));
      return;
    }

    const span = document.createElement("span");
    span.className = "scramble-char";
    span.textContent = character;
    chars.push({
      span,
      original: character,
      state: { progress: 1 },
      lastFrame: -1,
      nextTriggerAt: 0,
      stepCount: 0,
      tween: null,
    });
    fragment.append(span);
  });

  node.replaceWith(fragment);
}

function prepareScrambledRoot(root) {
  if (!(root instanceof Element)) return;
  if (shouldIgnoreScrambledSubtree(root)) return;

  const existingEntry = scrambledTextRoots.get(root);
  if (existingEntry) {
    if (root.querySelector(".scramble-char")) return;

    existingEntry.chars.forEach((entry) => entry.tween?.kill());
    scrambledTextRoots.delete(root);
  }

  const chars = [];
  const textWalker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!(node.parentElement instanceof Element)) return NodeFilter.FILTER_REJECT;
      if (shouldIgnoreScrambledSubtree(node.parentElement)) return NodeFilter.FILTER_REJECT;
      if (!node.nodeValue?.trim()) return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const textNodes = [];

  while (textWalker.nextNode()) {
    textNodes.push(textWalker.currentNode);
  }

  textNodes.forEach((textNode) => splitScrambledTextNode(textNode, chars));

  if (!chars.length) return;

  root.dataset.scrambleRoot = "true";
  scrambledTextRoots.set(root, { root, chars });
}

function applyScrambledText(scope) {
  const baseScope = scope instanceof Element ? scope : document.body;
  if (!(baseScope instanceof Element) && baseScope !== document.body) return;

  if (baseScope instanceof Element && baseScope.matches(scrambledTextConfig.selector) && hasDirectScrambleText(baseScope)) {
    prepareScrambledRoot(baseScope);
    return;
  }

  const candidates = [
    ...(baseScope instanceof Element && baseScope.matches(scrambledTextConfig.selector) ? [baseScope] : []),
    ...baseScope.querySelectorAll(scrambledTextConfig.selector),
  ];
  const selectedRoots = [];

  candidates.forEach((candidate) => {
    if (!(candidate instanceof Element)) return;
    if (!hasDirectScrambleText(candidate)) return;
    if (selectedRoots.some((root) => root.contains(candidate))) return;
    if (candidate.closest("[data-scramble-root='true']") && !candidate.matches("[data-scramble-root='true']")) return;
    selectedRoots.push(candidate);
  });

  selectedRoots.forEach((root) => prepareScrambledRoot(root));
}

function resolveScrambledRefreshScope(node) {
  const element = node instanceof Element ? node : node.parentElement;
  if (!element || !document.body?.contains(element)) return null;
  return element.closest("[data-scramble-root='true']") || element;
}

function handleScrambledMutationBatch(mutations) {
  mutations.forEach((mutation) => {
    if (mutation.type === "characterData") {
      const parent = mutation.target.parentElement;
      if (parent?.classList.contains("scramble-char")) return;
      scheduleScrambledTextRefresh(resolveScrambledRefreshScope(mutation.target));
      return;
    }

    if (mutation.target instanceof Element && mutation.target.classList.contains("scramble-char")) {
      return;
    }

    scheduleScrambledTextRefresh(resolveScrambledRefreshScope(mutation.target));

    mutation.addedNodes.forEach((node) => {
      if (node instanceof Element && node.classList.contains("scramble-char")) return;
      scheduleScrambledTextRefresh(resolveScrambledRefreshScope(node));
    });
  });
}

function renderScrambledChar(entry) {
  const progress = entry.state.progress;

  if (progress >= 0.82) {
    if (entry.span.textContent !== entry.original) {
      entry.span.textContent = entry.original;
    }
    return;
  }

  const nextFrame = Math.floor(progress * entry.stepCount);
  if (nextFrame === entry.lastFrame) return;

  entry.lastFrame = nextFrame;
  const { scrambleChars } = scrambledTextConfig;
  const randomIndex = Math.floor(Math.random() * scrambleChars.length);
  entry.span.textContent = scrambleChars.charAt((nextFrame + randomIndex) % scrambleChars.length);
}

function triggerScrambledChar(entry, durationSeconds, currentTime) {
  entry.lastFrame = -1;
  entry.stepCount = Math.max(
    6,
    Math.round(durationSeconds * (12 + scrambledTextConfig.speed * 18)),
  );
  entry.nextTriggerAt = currentTime + Math.max(72, durationSeconds * 220);
  entry.tween?.kill();
  entry.state.progress = 0;
  entry.tween = window.gsap.to(entry.state, {
    progress: 1,
    duration: durationSeconds,
    ease: "none",
    overwrite: true,
    onUpdate: () => renderScrambledChar(entry),
    onComplete: () => {
      entry.span.textContent = entry.original;
      entry.state.progress = 1;
      entry.lastFrame = -1;
    },
  });
}

function handleScrambledPointerMove(event) {
  if (!(event.target instanceof Element)) return;

  const root = event.target.closest("[data-scramble-root='true']");
  if (!root) return;

  const entry = scrambledTextRoots.get(root);
  if (!entry?.chars.length) return;

  const currentTime = performance.now();
  const { clientX, clientY } = event;

  entry.chars.forEach((charEntry) => {
    if (currentTime < charEntry.nextTriggerAt) return;

    const { left, top, width, height } = charEntry.span.getBoundingClientRect();
    const dx = clientX - (left + width / 2);
    const dy = clientY - (top + height / 2);
    const distance = Math.hypot(dx, dy);

    if (distance >= scrambledTextConfig.radius) return;

    const distanceFactor = 1 - distance / scrambledTextConfig.radius;
    const durationSeconds = Math.max(
      0.18,
      scrambledTextConfig.duration * distanceFactor,
    );

    triggerScrambledChar(charEntry, durationSeconds, currentTime);
  });
}

function initGlobalScrambledText() {
  if (!canUseScrambledText()) return;

  if (!scrambledTextInitialized) {
    scrambledTextInitialized = true;
    document.body.addEventListener("pointermove", handleScrambledPointerMove, {
      passive: true,
    });

    scrambledTextObserver = new MutationObserver(handleScrambledMutationBatch);
    scrambledTextObserver.observe(document.body, {
      childList: true,
      characterData: true,
      subtree: true,
    });
  }

  scheduleScrambledTextRefresh(document.body);
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
        const title = posterArchiveTitles[group.year]?.[serial] || `Series ${serial}`;
        const cardTitle = posterArchiveCardTitles[group.year]?.[serial] || title;

        return {
          serial: String(serial),
          cover: orderedImages[0],
          images: orderedImages,
          files: orderedEntries.map((entry) => entry.file),
          stack: orderedImages.slice(1),
          stackCount: variantCount,
          title,
          cardTitle,
          details: variantCount > 1 ? `${variantCount} posters / folded stack` : "single poster",
          alt: `${title}, ${group.year}`,
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

function initHomePosterMarquee() {
  const strip = document.querySelector("#homePosterMarquee");
  const track = document.querySelector("#homePosterMarqueeTrack");
  const status = document.querySelector("#homePosterMarqueeStatus");
  if (!strip || !track || !status) return;

  const animationConfig = {
    smoothTau: 0.25,
    minCopies: 2,
    copyHeadroom: 2,
    hoverSpeed: 0,
  };
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const posters = buildPosterArchiveGroups()
    .flatMap((group) =>
      group.posters.map((poster) => ({
        ...poster,
        key: `${group.year}-${poster.serial}`,
      })),
    )
    .slice(0, 14);

  if (!posters.length) return;

  const renderGroup = (copyIndex = 0) => {
    const duplicate = copyIndex > 0;
    return `
    <div
      class="poster-band-loop-group"
      data-poster-loop-copy="${copyIndex}"
      ${duplicate ? 'aria-hidden="true"' : ""}
    >
      ${posters
        .map((poster, index) => {
          const eager = !duplicate && index < 2;
          const imageSource = eager
            ? `src="${poster.cover}"`
            : `class="deferred-image" data-src="${poster.cover}"`;

          return `
            <button
              class="poster-thumb"
              type="button"
              data-poster-key="${escapeHtml(poster.key)}"
              data-poster-label="${escapeHtml(poster.title)}"
              aria-label="${escapeHtml(poster.title)}，点击暂停滚动"
              aria-pressed="false"
              ${duplicate ? 'tabindex="-1"' : ""}
            >
              <img
                ${imageSource}
                alt="${duplicate ? "" : escapeHtml(poster.alt)}"
                loading="${eager ? "eager" : "lazy"}"
                ${eager ? 'fetchpriority="high"' : 'fetchpriority="low"'}
                decoding="async"
              />
            </button>
          `;
        })
        .join("")}
    </div>
  `;
  };

  let cards = [];
  let firstGroup = null;
  let marqueeImageObserver = null;
  let copyCount = 0;
  let sequenceWidth = 0;
  let selectedKey = "";
  let persistentlyPaused = false;
  let isHovered = false;
  let hasFocusedPoster = false;
  let inView = true;
  let offset = 0;
  let velocity = 0;
  let previousTime = null;
  let animationFrame = 0;

  const getBaseSpeed = () => (window.innerWidth <= 720 ? 42 : 72);

  const hydrateMarqueeImages = () => {
    marqueeImageObserver?.disconnect();
    const deferredImages = Array.from(track.querySelectorAll("img[data-src]"));

    if ("IntersectionObserver" in window) {
      marqueeImageObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            marqueeImageObserver.unobserve(entry.target);
            revealDeferredImage(entry.target);
          });
        },
        {
          root: strip,
          rootMargin: "0px 1200px",
          threshold: 0.01,
        },
      );
      deferredImages.forEach((image) => marqueeImageObserver.observe(image));
    } else {
      deferredImages.forEach(revealDeferredImage);
    }
  };

  const renderCopies = (nextCopyCount) => {
    copyCount = nextCopyCount;
    track.innerHTML = Array.from(
      { length: copyCount },
      (_, copyIndex) => renderGroup(copyIndex),
    ).join("");
    cards = Array.from(track.querySelectorAll(".poster-thumb"));
    firstGroup = track.querySelector(".poster-band-loop-group");
    hydrateMarqueeImages();
  };

  const syncSelection = () => {
    cards.forEach((card) => {
      const isSelected = persistentlyPaused
        && Boolean(selectedKey)
        && card.dataset.posterKey === selectedKey;
      card.classList.toggle("is-selected", isSelected);
      card.setAttribute("aria-pressed", String(isSelected));
      card.setAttribute(
        "aria-label",
        `${card.dataset.posterLabel || "Selected poster"}，${isSelected ? "点击继续滚动" : "点击锁定暂停"}`,
      );
    });
    strip.classList.toggle("is-paused", persistentlyPaused);
    strip.classList.toggle("is-hover-paused", isHovered || hasFocusedPoster);
    status.textContent = persistentlyPaused
      ? "海报滚动已锁定暂停，再次点击所选海报可继续"
      : isHovered || hasFocusedPoster
        ? "海报滚动正在平滑减速"
        : "海报正在无缝滚动";
  };

  track.addEventListener("click", (event) => {
    const card = event.target.closest(".poster-thumb");
    if (!card) return;

    const nextKey = card.dataset.posterKey || "";
    if (persistentlyPaused && selectedKey === nextKey) {
      selectedKey = "";
      persistentlyPaused = false;
    } else {
      selectedKey = nextKey;
      persistentlyPaused = true;
    }
    syncSelection();
    scheduleTick();
  });

  const updateDimensions = () => {
    const measuredWidth = Math.ceil(firstGroup?.getBoundingClientRect().width || 0);
    if (!measuredWidth) return;

    sequenceWidth = measuredWidth;
    offset = ((offset % sequenceWidth) + sequenceWidth) % sequenceWidth;
    track.style.transform = `translate3d(${-offset}px, 0, 0)`;

    const copiesNeeded = Math.max(
      animationConfig.minCopies,
      Math.ceil(strip.clientWidth / sequenceWidth) + animationConfig.copyHeadroom,
    );

    if (copiesNeeded !== copyCount) {
      renderCopies(copiesNeeded);
      sequenceWidth = Math.ceil(firstGroup?.getBoundingClientRect().width || sequenceWidth);
    }
  };

  const tick = (time) => {
    animationFrame = 0;
    if (previousTime === null) previousTime = time;
    const elapsed = Math.max(0, Math.min(64, time - previousTime)) / 1000;
    previousTime = time;

    const shouldDecelerate = persistentlyPaused || isHovered || hasFocusedPoster;
    const targetVelocity = shouldDecelerate
      ? animationConfig.hoverSpeed
      : getBaseSpeed();
    const easingFactor = 1 - Math.exp(-elapsed / animationConfig.smoothTau);
    velocity += (targetVelocity - velocity) * easingFactor;

    if (sequenceWidth > 0) {
      offset += velocity * elapsed;
      offset = ((offset % sequenceWidth) + sequenceWidth) % sequenceWidth;
      track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    }

    if (targetVelocity === 0 && Math.abs(velocity) < 0.01) {
      velocity = 0;
      previousTime = null;
      return;
    }

    scheduleTick();
  };

  const scheduleTick = () => {
    if (animationFrame || reducedMotion || !inView || document.hidden) return;
    animationFrame = window.requestAnimationFrame(tick);
  };

  const setHoverState = (nextState) => {
    isHovered = nextState;
    syncSelection();
    scheduleTick();
  };

  strip.addEventListener("pointerenter", (event) => {
    if (!event.pointerType || event.pointerType === "mouse") setHoverState(true);
  });
  strip.addEventListener("pointerleave", () => setHoverState(false));
  strip.addEventListener("focusin", (event) => {
    hasFocusedPoster = Boolean(event.target?.matches?.(":focus-visible"));
    syncSelection();
    scheduleTick();
  });
  strip.addEventListener("focusout", (event) => {
    if (strip.contains(event.relatedTarget)) return;
    hasFocusedPoster = false;
    syncSelection();
    scheduleTick();
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = Boolean(entry?.isIntersecting);
        previousTime = null;
        if (inView) scheduleTick();
      },
      { threshold: 0.01 },
    );
    observer.observe(strip);
  }

  const resizeObserver = "ResizeObserver" in window
    ? new ResizeObserver(updateDimensions)
    : null;
  resizeObserver?.observe(strip);
  if (!resizeObserver) window.addEventListener("resize", updateDimensions, { passive: true });

  document.addEventListener("visibilitychange", () => {
    previousTime = null;
    scheduleTick();
  });

  renderCopies(animationConfig.minCopies);
  updateDimensions();
  syncSelection();
  scheduleTick();
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
                          <img src="${poster.cover}" data-stack-src="${image}" alt="" loading="lazy" fetchpriority="low" decoding="async" aria-hidden="true" />
                        </span>
                      `,
                    )
                    .join("")}
                  <div class="card-media">
                    <img class="deferred-image" data-src="${poster.cover}" alt="${poster.alt}" loading="lazy" fetchpriority="low" decoding="async" />
                  </div>
                  <canvas class="poster-pixel-canvas" aria-hidden="true"></canvas>
                  ${
                    poster.stackCount > 1
                      ? `<span class="poster-stack-badge">+${poster.stackCount - 1}</span>`
                      : ""
                  }
                </div>
                <div class="poster-card-copy">
                  <strong>${poster.cardTitle}</strong>
                  <p>${group.year}</p>
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

  const hydratePosterStackImages = (card) => {
    card?.querySelectorAll("img[data-stack-src]").forEach((image) => {
      image.src = image.dataset.stackSrc;
      image.removeAttribute("data-stack-src");
    });
  };
  layout.addEventListener("pointerover", (event) => {
    hydratePosterStackImages(event.target.closest(".poster-card"));
  });
  layout.addEventListener("focusin", (event) => {
    hydratePosterStackImages(event.target.closest(".poster-card"));
  });

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
  const scrollHost = drawer?.querySelector(".poster-case-shell");
  const stage = document.querySelector("#posterDrawerStage");
  const image = document.querySelector("#posterDrawerImage");
  const additionalImages = document.querySelector("#posterDrawerAdditionalImages");
  const minimap = document.querySelector("#projectDrawerMinimap");
  const minimapList = document.querySelector("#projectDrawerMinimapList");
  const minimapBalance = document.querySelector("#posterDrawerBalance");
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
    !scrollHost ||
    !stage ||
    !image ||
    !additionalImages ||
    !minimap ||
    !minimapList ||
    !minimapBalance ||
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
  let edgeWheelDelta = 0;
  let edgeWheelLockUntil = 0;
  let resetPositionTimer = 0;

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
  const getActivePosterItem = () => {
    if (!activePoster) return null;
    const src = activePoster.images[activeImageIndex];
    if (!src) return null;

    return {
      index: activeImageIndex,
      src,
      fileName: activePoster.files[activeImageIndex],
    };
  };

  const resetStagePosition = () => {
    stage.scrollTop = 0;
    stage.scrollLeft = 0;
    scrollHost.scrollTop = 0;
    scrollHost.scrollLeft = 0;
    edgeWheelDelta = 0;
  };

  const keepDrawerAtStart = () => {
    window.clearTimeout(resetPositionTimer);
    resetStagePosition();

    window.requestAnimationFrame(() => {
      resetStagePosition();
      window.requestAnimationFrame(resetStagePosition);
    });

    resetPositionTimer = window.setTimeout(resetStagePosition, 160);
  };

  const syncImageFacts = () => {
    if (!activePoster) return;
    size.textContent = "poster design";
  };

  const renderMinimapList = () => {
    minimap.hidden = true;
    minimapBalance.hidden = true;
    minimapList.innerHTML = "";
  };

  const syncMinimapState = () => {
    const buttons = minimapList.querySelectorAll(".project-drawer-mini");
    if (!buttons.length || !activePoster || activePoster.images.length <= 1) return;

    let activeButton = null;

    buttons.forEach((button) => {
      const isActive = Number(button.dataset.imageIndex) === activeImageIndex;
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

  const renderDrawerPoster = () => {
    if (!activePoster) return;

    activeImageIndex = 0;
    const activeItem = getActivePosterItem();
    if (!activeItem) return;

    image.src = activePoster.images[0];
    image.alt = buildImageAlt(activePoster, 0);
    additionalImages.innerHTML = activePoster.images
      .slice(1)
      .map(
        (src, index) => `
          <div class="poster-case-additional-item">
            <img
              class="deferred-image"
              data-src="${src}"
              alt="${escapeHtml(buildImageAlt(activePoster, index + 1))}"
              loading="lazy"
              decoding="async"
            />
          </div>
        `,
      )
      .join("");
    queueDeferredImages(additionalImages);
    counter.textContent = "";
    serial.textContent = "poster archive";
    title.textContent = `"${activePoster.title}"`;
    size.textContent = "poster design";
    location.textContent = activePoster.year;
    category.textContent = activePoster.images.length > 1 ? "variant set" : "single poster";
    details.textContent = "";
    description.textContent = "";
    credits.textContent = "";
    awards.textContent = "";
    author.textContent = "liulian";
    collection.textContent = "poster archive";
    collectionTag.textContent = "";
    collectionTag.hidden = true;
    footer.textContent = "";

    renderMinimapList();
    keepDrawerAtStart();
    requestAnimationFrame(() => {
      requestAnimationFrame(syncMinimapState);
    });
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
        drawer.classList.add("is-project-drawer");
        drawer.classList.add("is-open");
        backdrop.classList.add("is-open");
        drawer.setAttribute("aria-hidden", "false");
        keepDrawerAtStart();
        requestAnimationFrame(syncMinimapState);
        drawer.focus({ preventScroll: true });
      });
      return;
    }

    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("poster-drawer-open");
    drawer.classList.add("is-project-drawer");
    drawer.classList.add("is-open");
    backdrop.classList.add("is-open");
    keepDrawerAtStart();
    requestAnimationFrame(syncMinimapState);
  };

  const closeDrawer = () => {
    if (drawer.hidden) return;

    clearHideTimer();
    window.clearTimeout(resetPositionTimer);
    drawer.classList.remove("is-project-drawer");
    drawer.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("poster-drawer-open");

    hideDrawerTimer = window.setTimeout(() => {
      drawer.hidden = true;
      backdrop.hidden = true;
      image.removeAttribute("src");
      additionalImages.innerHTML = "";
      resetStagePosition();

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

  const jumpWithinImage = (direction) => {
    scrollHost.scrollBy({
      top: direction * Math.max(220, scrollHost.clientHeight * 0.88),
      behavior: "auto",
    });
  };

  const handleStageWheel = (event) => {
    const delta = event.deltaY;
    if (!delta || !activePoster || activePoster.images.length <= 1) return;

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
    stepDrawerImage(direction);
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

  minimapList.addEventListener("click", (event) => {
    const button = event.target.closest(".project-drawer-mini");
    if (!button) return;

    activeImageIndex = Number(button.dataset.imageIndex);
    renderDrawerPoster();
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
  prevButton.addEventListener("click", () => stepDrawerPoster(-1));
  nextButton.addEventListener("click", () => stepDrawerPoster(1));
  backdrop.addEventListener("click", closeDrawer);
  const siteHeader = document.querySelector("body[data-page='posters'] > .site-header");
  siteHeader?.addEventListener(
    "click",
    (event) => {
      if (drawer.hidden || event.target.closest(".mobile-menu-button")) return;
      const navControl = event.target.closest(".pill-logo, .pill, .mobile-menu-link");
      if (navControl) closeDrawer();
    },
    true,
  );
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

    if (event.key === "ArrowRight") {
      event.preventDefault();
      stepDrawerPoster(1);
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      stepDrawerPoster(-1);
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

class CardPixelHover {
  constructor(card, config, options = {}) {
    this.card = card;
    this.visual = card.querySelector(options.visualSelector || ".poster-card-visual");
    this.canvas = card.querySelector(options.canvasSelector || ".poster-pixel-canvas");
    this.context = this.canvas?.getContext("2d", { alpha: true, desynchronized: true });
    this.config = config;
    this.activeClass = options.activeClass || "is-pixel-active";
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
    this.card.classList.remove(this.activeClass);
  }

  handlePointerEnter() {
    if (activeCardPixelHover && activeCardPixelHover !== this) {
      activeCardPixelHover.deactivateImmediately();
    }

    activeCardPixelHover = this;
    this.resetPixels();
    this.card.classList.add(this.activeClass);
    this.startAnimation("appear");
  }

  handlePointerLeave() {
    if (activeCardPixelHover === this) {
      activeCardPixelHover = null;
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
      this.card.classList.remove(this.activeClass);
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
    new CardPixelHover(card, posterPixelHoverConfig);
  });
}

function initHomeProjectPixelHover() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;
  if (!window.matchMedia("(min-width: 1024px)").matches) return;

  const cards = document.querySelectorAll(
    "body[data-page='home'] .editorial-card.is-link:not(.project-feature)",
  );
  if (!cards.length) return;

  cards.forEach((card) => {
    const media = card.querySelector(".card-media");
    if (!media) return;

    if (!media.querySelector(".project-pixel-canvas")) {
      const canvas = document.createElement("canvas");
      canvas.className = "project-pixel-canvas";
      canvas.setAttribute("aria-hidden", "true");
      media.append(canvas);
    }

    new CardPixelHover(card, posterPixelHoverConfig, {
      visualSelector: ".card-media",
      canvasSelector: ".project-pixel-canvas",
    });
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

function stripDisplayNumbers(value, preservedPhrases = []) {
  const placeholders = [];
  let text = String(value);

  preservedPhrases
    .filter(Boolean)
    .sort((a, b) => String(b).length - String(a).length)
    .forEach((phrase) => {
      const token = `__PRESERVED_TEXT_${"X".repeat(placeholders.length + 1)}__`;
      placeholders.push({ token, phrase: String(phrase) });
      text = text.split(String(phrase)).join(token);
    });

  text = text
    .replace(/[0-9０-９]+/g, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([,.;:!?，。；：！？])/g, "$1")
    .replace(/([（(])\s+/g, "$1")
    .replace(/\s+([）)])/g, "$1")
    .trim();

  placeholders.forEach(({ token, phrase }) => {
    text = text.split(token).join(phrase);
  });

  return text;
}

function escapeDisplayText(value, preservedPhrases = []) {
  return escapeHtml(stripDisplayNumbers(value, preservedPhrases));
}

function renderProjectCopyCard(paragraphs, preservedPhrases = [], options = {}) {
  if (!Array.isArray(paragraphs) || !paragraphs.length) return "";

  const label = typeof options.label === "string" ? options.label : "Project Overview";
  const className = ["project-copy-card", options.className].filter(Boolean).join(" ");
  const lowerCase = options.lowerCase === true;
  const copyMarkup = paragraphs
    .filter(Boolean)
    .map((paragraph) => {
      const text = lowerCase ? String(paragraph).toLowerCase() : paragraph;
      return `<p>${escapeDisplayText(text, preservedPhrases)}</p>`;
    })
    .join("");

  return `
    <div class="${className}">
      ${label ? `<span>${escapeHtml(label)}</span>` : ""}
      ${copyMarkup}
    </div>
  `;
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
    "body[data-page='home'] .cover-cloud-card-media img",
  );

  projectImages.forEach((image) => {
    applyIntrinsicAspectRatio(image);
  });
}

function syncSiteHeaderHeight() {
  const header = document.querySelector(".site-header, .project-template-header");
  if (!header) return;

  const updateHeaderHeight = () => {
    const { height } = header.getBoundingClientRect();
    if (!height) return;
    document.documentElement.style.setProperty("--site-header-height", `${Math.round(height)}px`);
  };

  updateHeaderHeight();
  window.addEventListener("resize", updateHeaderHeight, { passive: true });

  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(updateHeaderHeight);
    observer.observe(header);
  }
}

const pillNavLogoSource = "./assets/liulian-durian.png";

function getPillNavItems(context) {
  const isHome = context === "home";
  const isArchive = context === "archive";
  const isProjectDrawer = context === "project-drawer";
  const isPosterDrawer = context === "poster-drawer";

  const items = [
    {
      label: "Home",
      href: isArchive ? "" : "./index.html",
      proxy: isArchive ? "#projectBrowserClose" : "",
      className: isProjectDrawer ? "project-detail-home" : "",
      active: isHome,
    },
    isHome
      ? {
          label: "About",
          id: "aboutDrawerTrigger",
          className: "about-drawer-trigger",
          attrs: {
            "aria-haspopup": "dialog",
            "aria-controls": "aboutDrawer",
            "aria-expanded": "false",
          },
        }
      : isArchive
        ? { label: "About", id: "projectBrowserInfo" }
        : {
            label: "About",
            href: "./index.html#about",
            className: isProjectDrawer ? "project-detail-about" : "",
          },
    isHome
      ? {
          label: "Projects",
          id: "projectBrowserTrigger",
          className: "project-browser-trigger",
          attrs: {
            "aria-haspopup": "dialog",
            "aria-controls": "projectBrowserDrawer",
            "aria-expanded": "false",
          },
        }
      : isArchive
        ? { label: "Projects", current: true, active: true }
        : {
            label: "Projects",
            href: "./index.html#projects",
            className: isProjectDrawer ? "project-detail-projects" : "",
          },
    {
      label: "Posters",
      href: "./posters.html",
      active: context === "posters" || isPosterDrawer,
      current: context === "posters" || isPosterDrawer,
    },
    { label: "Contact", href: "mailto:liulian080936@gmail.com" },
  ];

  return items;
}

function buildPillNavAttributes(attributes = {}) {
  return Object.entries(attributes)
    .filter(([, value]) => value !== "" && value !== null && value !== undefined)
    .map(([name, value]) => `${name}="${escapeHtml(value)}"`)
    .join(" ");
}

function buildPillNavItem(item, index, { mobile = false } = {}) {
  const classNames = [
    mobile ? "mobile-menu-link" : "pill",
    item.active ? "is-active" : "",
    item.className || "",
  ]
    .filter(Boolean)
    .join(" ");
  const mobileProxy = item.mobileProxy || (item.id ? `#${item.id}` : item.proxy);
  const attributes = {
    ...(mobile ? {} : item.attrs || {}),
    ...(item.active || item.current ? { "aria-current": "page" } : {}),
    ...(mobile && mobileProxy ? { "data-pill-proxy": mobileProxy } : {}),
    ...(!mobile && item.proxy ? { "data-pill-proxy": item.proxy } : {}),
  };
  const idAttribute = !mobile && item.id ? ` id="${escapeHtml(item.id)}"` : "";
  const attributeMarkup = buildPillNavAttributes(attributes);
  const content = mobile
    ? escapeHtml(item.label)
    : `
        <span class="hover-circle" aria-hidden="true"></span>
        <span class="label-stack">
          <span class="pill-label">${escapeHtml(item.label)}</span>
          <span class="pill-label-hover" aria-hidden="true">${escapeHtml(item.label)}</span>
        </span>
      `;

  if (item.current) {
    return `<span class="${classNames}"${idAttribute} ${attributeMarkup}>${content}</span>`;
  }

  if (item.href) {
    return `<a class="${classNames}" href="${escapeHtml(item.href)}"${idAttribute} ${attributeMarkup}>${content}</a>`;
  }

  return `<button class="${classNames}" type="button"${idAttribute} ${attributeMarkup}>${content}</button>`;
}

function buildPillNavMarkup(context) {
  const items = getPillNavItems(context);
  const isArchive = context === "archive";
  const logoMarkup = isArchive
    ? `
        <button class="pill-logo" id="projectBrowserClose" type="button" aria-label="关闭项目归档并返回首页">
          <span class="sr-only" id="projectBrowserTitle">LIULIAN Project Archive</span>
          <img src="${pillNavLogoSource}" alt="" aria-hidden="true" />
        </button>
      `
    : `
        <a class="pill-logo" href="./index.html" aria-label="返回首页">
          <img src="${pillNavLogoSource}" alt="LIULIAN 榴莲 Logo" />
        </a>
      `;

  return `
    <div class="pill-nav-container">
      <nav class="pill-nav" aria-label="主导航">
        ${logoMarkup}
        <div class="pill-nav-items desktop-only">
          <ul class="pill-list" role="menubar">
            ${items.map((item, index) => `<li role="none">${buildPillNavItem(item, index)}</li>`).join("")}
          </ul>
        </div>
        <button class="mobile-menu-button mobile-only" type="button" aria-label="打开导航菜单" aria-expanded="false">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </nav>
      <div class="mobile-menu-popover mobile-only" aria-hidden="true">
        <ul class="mobile-menu-list">
          ${items.map((item, index) => `<li>${buildPillNavItem(item, index, { mobile: true })}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
}

function initPillNav(scope = document) {
  const hosts = [
    ...(scope instanceof Element && scope.matches("[data-pill-nav-host]") ? [scope] : []),
    ...scope.querySelectorAll("[data-pill-nav-host]:not([data-pill-nav-ready])"),
  ];

  hosts.forEach((host) => {
    if (host.dataset.pillNavReady === "true") return;

    host.innerHTML = buildPillNavMarkup(host.dataset.pillNavContext || "home");
    host.dataset.pillNavReady = "true";

    const navItems = host.querySelector(".pill-nav-items");
    const logo = host.querySelector(".pill-logo");
    const logoImage = logo?.querySelector("img");
    const menuButton = host.querySelector(".mobile-menu-button");
    const mobileMenu = host.querySelector(".mobile-menu-popover");
    const pills = Array.from(host.querySelectorAll(".pill-list .pill"));
    const gsapApi = window.gsap;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let mobileMenuOpen = false;

    const layoutPills = () => {
      pills.forEach((pill) => {
        const circle = pill.querySelector(".hover-circle");
        const label = pill.querySelector(".pill-label");
        const hoverLabel = pill.querySelector(".pill-label-hover");
        if (!circle || !label || !hoverLabel) return;

        const { width, height } = pill.getBoundingClientRect();
        if (!width || !height) return;

        const radius = ((width * width) / 4 + height * height) / (2 * height);
        const diameter = Math.ceil(2 * radius) + 2;
        const delta = Math.ceil(radius - Math.sqrt(Math.max(0, radius * radius - (width * width) / 4))) + 1;
        circle.style.width = `${diameter}px`;
        circle.style.height = `${diameter}px`;
        circle.style.bottom = `-${delta}px`;
        pill.dataset.pillHeight = String(height);

        if (gsapApi) {
          gsapApi.set(circle, {
            xPercent: -50,
            scale: 0,
            transformOrigin: `50% ${diameter - delta}px`,
          });
          gsapApi.set(label, { y: 0 });
          gsapApi.set(hoverLabel, { y: height + 12, opacity: 0 });
        }
      });
    };

    const animatePill = (pill, entering) => {
      const circle = pill.querySelector(".hover-circle");
      const label = pill.querySelector(".pill-label");
      const hoverLabel = pill.querySelector(".pill-label-hover");
      const height = Number.parseFloat(pill.dataset.pillHeight) || pill.offsetHeight;
      pill.classList.toggle("is-hovered", entering);
      if (!gsapApi || reducedMotion || !circle || !label || !hoverLabel) return;

      gsapApi.to(circle, {
        scale: entering ? 1.2 : 0,
        xPercent: -50,
        duration: entering ? 0.3 : 0.2,
        ease: "power3.out",
        overwrite: "auto",
      });
      gsapApi.to(label, {
        y: entering ? -(height + 8) : 0,
        duration: entering ? 0.3 : 0.2,
        ease: "power3.out",
        overwrite: "auto",
      });
      gsapApi.to(hoverLabel, {
        y: entering ? 0 : height + 12,
        opacity: entering ? 1 : 0,
        duration: entering ? 0.3 : 0.2,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    pills.forEach((pill) => {
      pill.addEventListener("mouseenter", () => animatePill(pill, true));
      pill.addEventListener("mouseleave", () => animatePill(pill, false));
      pill.addEventListener("focus", () => animatePill(pill, true));
      pill.addEventListener("blur", () => animatePill(pill, false));
    });

    const setMobileMenu = (open) => {
      mobileMenuOpen = open;
      if (!menuButton || !mobileMenu) return;

      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "关闭导航菜单" : "打开导航菜单");
      mobileMenu.setAttribute("aria-hidden", String(!open));
      const lines = menuButton.querySelectorAll(".hamburger-line");

      if (gsapApi && !reducedMotion) {
        gsapApi.to(lines[0], { rotation: open ? 45 : 0, y: open ? 3 : 0, duration: 0.3, ease: "power3.out" });
        gsapApi.to(lines[1], { rotation: open ? -45 : 0, y: open ? -3 : 0, duration: 0.3, ease: "power3.out" });
        if (open) {
          gsapApi.set(mobileMenu, { visibility: "visible" });
          gsapApi.fromTo(
            mobileMenu,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.3, ease: "power3.out", overwrite: "auto" },
          );
        } else {
          gsapApi.to(mobileMenu, {
            opacity: 0,
            y: 10,
            duration: 0.2,
            ease: "power3.out",
            overwrite: "auto",
            onComplete: () => gsapApi.set(mobileMenu, { visibility: "hidden" }),
          });
        }
      } else {
        mobileMenu.style.visibility = open ? "visible" : "hidden";
        mobileMenu.style.opacity = open ? "1" : "0";
        mobileMenu.style.transform = open ? "translateY(0)" : "translateY(10px)";
      }
    };

    menuButton?.addEventListener("click", () => setMobileMenu(!mobileMenuOpen));
    host.querySelectorAll("[data-pill-proxy]").forEach((control) => {
      control.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const selector = control.dataset.pillProxy;
        const target = host.querySelector(selector) || document.querySelector(selector);
        if (target && target !== control) target.click();
        setMobileMenu(false);
      });
    });
    host.querySelectorAll(".mobile-menu-link[href]").forEach((link) => {
      link.addEventListener("click", () => setMobileMenu(false));
    });

    logo?.addEventListener("mouseenter", () => {
      if (!gsapApi || reducedMotion || !logoImage) return;
      gsapApi.to(logoImage, { rotation: "+=360", duration: 0.32, ease: "power2.out", overwrite: "auto" });
    });

    if (mobileMenu) {
      mobileMenu.style.visibility = "hidden";
      mobileMenu.style.opacity = "0";
    }

    layoutPills();
    window.addEventListener("resize", layoutPills, { passive: true });
    document.fonts?.ready?.then(layoutPills).catch(() => {});

    if (gsapApi && !reducedMotion && logo) {
      gsapApi.fromTo(logo, { scale: 0 }, { scale: 1, duration: 0.6, ease: "power3.out" });
      if (navItems?.scrollWidth) {
        const targetWidth = navItems.scrollWidth;
        gsapApi.fromTo(
          navItems,
          { width: 0, opacity: 0, overflow: "hidden" },
          {
            width: targetWidth,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            onComplete: () => gsapApi.set(navItems, { clearProps: "width,opacity,overflow" }),
          },
        );
      }
    }
  });
}

let firstLoadTypeInitialized = false;
let firstLoadTypeStarted = false;
let firstLoadTypeObserver = null;
let firstLoadTypeMutationObserver = null;
let firstLoadTypeSequence = 0;
const firstLoadTypeEntries = new WeakMap();
const firstLoadTypeSelector = [
  "a",
  "button",
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "strong",
  "small",
  "label",
  "li",
  "blockquote",
  "figcaption",
  "dt",
  "dd",
  "span",
].join(",");

function shouldTypeFirstLoadText(element) {
  if (!(element instanceof Element)) return false;
  if (element.dataset.textTypeReady === "true") return false;
  if (element.closest("[data-text-type-ready='true']")) return false;
  if (element.children.length) return false;
  if (
    element.closest(
      ".home-loader, [data-text-type-skip='true'], [data-decrypted-skip='true'], [aria-hidden='true'], .sr-only",
    )
  ) {
    return false;
  }
  if (element.matches("time, script, style, noscript, textarea, input, select, option")) return false;

  const text = element.textContent || "";
  const visibleCharacters = [...text].filter((character) => !/\s/.test(character));
  if (visibleCharacters.length < 2 || text.length > 260) return false;
  return /[A-Za-z0-9\u3400-\u9fff]/.test(text);
}

function lockFirstLoadTypeLayout(element, entry) {
  if (entry.layoutState) return true;

  const rect = element.getBoundingClientRect();
  if (!rect.width || !rect.height) return false;

  const computedStyle = window.getComputedStyle(element);
  const properties = [
    "boxSizing",
    "display",
    "width",
    "height",
    "minWidth",
    "maxWidth",
    "minHeight",
    "maxHeight",
    "overflow",
    "verticalAlign",
  ];
  entry.layoutState = Object.fromEntries(
    properties.map((property) => [property, element.style[property]]),
  );

  element.style.boxSizing = "border-box";
  if (computedStyle.display === "inline") {
    element.style.display = "inline-block";
    element.style.verticalAlign = computedStyle.verticalAlign;
  }
  element.style.width = `${rect.width}px`;
  element.style.height = `${rect.height}px`;
  element.style.minWidth = `${rect.width}px`;
  element.style.maxWidth = `${rect.width}px`;
  element.style.minHeight = `${rect.height}px`;
  element.style.maxHeight = `${rect.height}px`;
  element.style.overflow = "hidden";
  return true;
}

function restoreFirstLoadTypeLayout(element, entry) {
  if (!entry.layoutState) return;

  Object.entries(entry.layoutState).forEach(([property, value]) => {
    element.style[property] = value;
  });
  entry.layoutState = null;
}

function getFirstLoadTypingDelay(entry) {
  const length = Math.max(1, entry.characters.length);
  const targetDuration = Math.min(1800, Math.max(520, length * 28));
  const baseSpeed = targetDuration / length;
  const minSpeed = Math.max(18, Math.min(48, baseSpeed * 0.72));
  const maxSpeed = Math.max(minSpeed, Math.min(62, baseSpeed * 1.22));
  return minSpeed + Math.random() * (maxSpeed - minSpeed);
}

function primeFirstLoadTypedText(element, entry) {
  if (entry.primed) return true;
  if (!lockFirstLoadTypeLayout(element, entry)) return false;

  const content = document.createElement("span");
  content.className = "text-type__content";

  const cursor = document.createElement("span");
  cursor.className = "text-type__cursor";
  cursor.setAttribute("aria-hidden", "true");
  cursor.textContent = "|";

  element.textContent = "";
  element.append(content, cursor);
  element.classList.add("text-type", "is-typing");
  entry.content = content;
  entry.cursor = cursor;
  entry.primed = true;

  if (window.gsap) {
    window.gsap.set(cursor, { opacity: 1 });
    entry.cursorTween = window.gsap.to(cursor, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
  }
  return true;
}

function finishFirstLoadTypedText(element, entry) {
  entry.cursorTween?.kill();
  entry.cursorTween = null;
  element.textContent = entry.original;
  element.classList.remove("is-typing");
  element.classList.add("is-typed");
  restoreFirstLoadTypeLayout(element, entry);
  entry.content = null;
  entry.cursor = null;
  entry.primed = false;

  if (entry.addedAriaLabel) {
    element.removeAttribute("aria-label");
  }
}

function animateFirstLoadTypedText(element) {
  const entry = firstLoadTypeEntries.get(element);
  if (!entry || entry.animated) return;

  if (!primeFirstLoadTypedText(element, entry)) {
    element.textContent = entry.original;
    entry.animated = true;
    return;
  }

  entry.animated = true;
  element.dataset.textTypeAnimated = "true";
  const initialDelay = (firstLoadTypeSequence % 7) * 55;
  firstLoadTypeSequence += 1;

  const typeNextCharacter = () => {
    entry.typingTimer = 0;
    if (!document.documentElement.contains(element) || !entry.content) return;

    if (entry.characterIndex >= entry.characters.length) {
      entry.content.textContent = entry.original;
      entry.completionTimer = window.setTimeout(() => {
        entry.completionTimer = 0;
        finishFirstLoadTypedText(element, entry);
      }, 420);
      return;
    }

    entry.characterIndex += 1;
    entry.content.textContent = entry.characters.slice(0, entry.characterIndex).join("");
    entry.typingTimer = window.setTimeout(typeNextCharacter, getFirstLoadTypingDelay(entry));
  };

  entry.typingTimer = window.setTimeout(typeNextCharacter, initialDelay);
}

function prepareFirstLoadTypedText(element) {
  if (!shouldTypeFirstLoadText(element)) return;

  const original = element.textContent || "";
  const entry = {
    original,
    characters: [...original],
    characterIndex: 0,
    animated: false,
    primed: false,
    layoutState: null,
    content: null,
    cursor: null,
    cursorTween: null,
    typingTimer: 0,
    completionTimer: 0,
    addedAriaLabel: !element.hasAttribute("aria-label"),
  };

  firstLoadTypeEntries.set(element, entry);
  element.dataset.textTypeReady = "true";
  if (entry.addedAriaLabel) element.setAttribute("aria-label", original.trim());

  const rect = element.getBoundingClientRect();
  const isNearViewport = rect.bottom >= -40 && rect.top <= window.innerHeight + 40;
  if (isNearViewport) {
    primeFirstLoadTypedText(element, entry);
  }
  firstLoadTypeObserver?.observe(element);
}

function getFirstLoadTypedTextCandidates(scope = document.body) {
  const base = scope instanceof Element || scope instanceof Document ? scope : scope?.parentElement;
  if (!base?.querySelectorAll) return [];

  return [
    ...(base instanceof Element && base.matches(firstLoadTypeSelector) ? [base] : []),
    ...base.querySelectorAll(firstLoadTypeSelector),
  ];
}

function clearFirstLoadTypedTextAnimation(element, entry) {
  window.clearTimeout(entry.typingTimer);
  window.clearTimeout(entry.completionTimer);
  entry.typingTimer = 0;
  entry.completionTimer = 0;
  entry.cursorTween?.kill();
  entry.cursorTween = null;
  firstLoadTypeObserver?.unobserve(element);
  element.textContent = entry.original;
  element.classList.remove("text-type", "is-typing", "is-typed");
  element.removeAttribute("data-text-type-animated");
  restoreFirstLoadTypeLayout(element, entry);
  entry.content = null;
  entry.cursor = null;
  entry.primed = false;
  entry.characterIndex = 0;

  if (entry.addedAriaLabel) {
    element.removeAttribute("aria-label");
  }
}

function settleFirstLoadTypedText(scope) {
  getFirstLoadTypedTextCandidates(scope).forEach((element) => {
    const entry = firstLoadTypeEntries.get(element);
    if (!entry) return;

    clearFirstLoadTypedTextAnimation(element, entry);
    entry.animated = true;
  });
}

function replayFirstLoadTypedText(scope) {
  getFirstLoadTypedTextCandidates(scope).forEach((element) => {
    const entry = firstLoadTypeEntries.get(element);
    if (!entry) {
      prepareFirstLoadTypedText(element);
      return;
    }

    clearFirstLoadTypedTextAnimation(element, entry);
    entry.animated = false;
    if (entry.addedAriaLabel) {
      element.setAttribute("aria-label", entry.original.trim());
    }

    const rect = element.getBoundingClientRect();
    const isNearViewport = rect.bottom >= -40 && rect.top <= window.innerHeight + 40;
    if (isNearViewport) {
      primeFirstLoadTypedText(element, entry);
    }
    firstLoadTypeObserver?.observe(element);
  });
}

function registerFirstLoadTypedText(scope = document.body) {
  getFirstLoadTypedTextCandidates(scope).forEach(prepareFirstLoadTypedText);
}

function startFirstLoadTypedText() {
  if (firstLoadTypeStarted) return;
  firstLoadTypeStarted = true;
  registerFirstLoadTypedText(document.body);
}

function initFirstLoadTypedText({ waitForHomeReveal = false } = {}) {
  if (firstLoadTypeInitialized) return;
  firstLoadTypeInitialized = true;

  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
    || !("IntersectionObserver" in window)
  ) {
    return;
  }

  firstLoadTypeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        firstLoadTypeObserver.unobserve(entry.target);
        animateFirstLoadTypedText(entry.target);
      });
    },
    { root: null, rootMargin: "40px 0px", threshold: 0.1 },
  );

  firstLoadTypeMutationObserver = new MutationObserver((mutations) => {
    if (!firstLoadTypeStarted) return;

    mutations.forEach((mutation) => {
      if (mutation.type === "attributes") {
        if (mutation.target.getAttribute("aria-hidden") === "true") {
          settleFirstLoadTypedText(mutation.target);
        } else {
          replayFirstLoadTypedText(mutation.target);
        }
        return;
      }

      mutation.addedNodes.forEach((node) => {
        if (node instanceof Element) {
          registerFirstLoadTypedText(node);
        } else if (node.parentElement) {
          registerFirstLoadTypedText(node.parentElement);
        }
      });
    });
  });
  firstLoadTypeMutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["aria-hidden"],
  });

  if (waitForHomeReveal) {
    document.addEventListener("home:content-revealed", startFirstLoadTypedText, { once: true });
  } else {
    startFirstLoadTypedText();
  }
}

function initFooterLinkPreviews() {
  const preview = document.querySelector(".portfolio-footer-preview");
  const copy = document.querySelector(".portfolio-footer-preview-copy");
  const title = document.querySelector("#footerPreviewTitle");
  const note = document.querySelector("#footerPreviewNote");
  const stage = document.querySelector(".portfolio-footer-preview-stage");
  const primaryImage = document.querySelector("#footerPreviewImagePrimary");
  const secondaryImage = document.querySelector("#footerPreviewImageSecondary");
  const footerLinks = document.querySelector(".portfolio-footer-links");
  const triggers = Array.from(document.querySelectorAll(".portfolio-footer-preview-trigger[data-footer-preview]"));

  if (!preview || !copy || !title || !note || !stage || !primaryImage || !secondaryImage || !footerLinks || !triggers.length) {
    return;
  }

  const metricsBySource = new Map();

  const saveImageMetrics = (src, image) => {
    if (!image.naturalWidth || !image.naturalHeight) return;

    metricsBySource.set(src, {
      aspect: image.naturalWidth / image.naturalHeight,
    });
  };

  Object.values(footerPreviewSource).forEach((entry) => {
    entry.images.forEach((src) => {
      const image = new Image();
      image.addEventListener(
        "load",
        () => {
          saveImageMetrics(src, image);
          if (activeKey && slots.some((slot) => slot.getAttribute("src")?.endsWith(src.replace("./", "")))) {
            syncPreviewStage(src);
          }
        },
        { once: true },
      );
      image.src = src;
      if (image.complete) {
        saveImageMetrics(src, image);
      }
    });
  });

  const slots = [primaryImage, secondaryImage];
  let activeKey = null;
  let activeIndex = 0;
  let visibleSlotIndex = 0;
  let cycleTimer = 0;
  let stopTimer = 0;

  const getStageChrome = () => {
    const stageStyles = window.getComputedStyle(stage);
    const paddingX =
      (Number.parseFloat(stageStyles.paddingLeft) || 0) +
      (Number.parseFloat(stageStyles.paddingRight) || 0) +
      (Number.parseFloat(stageStyles.borderLeftWidth) || 0) +
      (Number.parseFloat(stageStyles.borderRightWidth) || 0);
    const paddingY =
      (Number.parseFloat(stageStyles.paddingTop) || 0) +
      (Number.parseFloat(stageStyles.paddingBottom) || 0) +
      (Number.parseFloat(stageStyles.borderTopWidth) || 0) +
      (Number.parseFloat(stageStyles.borderBottomWidth) || 0);

    return { paddingX, paddingY };
  };

  const syncPreviewStage = (src) => {
    if (!src) return;

    const metrics = metricsBySource.get(src);
    if (!metrics?.aspect) {
      stage.style.width = "";
      stage.style.height = "";
      return;
    }

    const previewStyles = window.getComputedStyle(preview);
    const gap = Number.parseFloat(previewStyles.rowGap || previewStyles.gap) || 0;
    const availableWidth = preview.clientWidth;
    const availableHeight = Math.max(160, footerLinks.offsetTop - preview.offsetTop - copy.offsetHeight - gap - 18);
    const { paddingX, paddingY } = getStageChrome();
    const contentWidth = Math.max(0, availableWidth - paddingX);
    const contentHeight = Math.max(0, availableHeight - paddingY);
    const frameContentWidth = Math.min(contentWidth, contentHeight * metrics.aspect);
    const frameContentHeight = frameContentWidth / metrics.aspect;

    stage.style.width = `${Math.round(frameContentWidth + paddingX)}px`;
    stage.style.height = `${Math.round(frameContentHeight + paddingY)}px`;
  };

  const setTriggerState = (nextKey) => {
    triggers.forEach((trigger) => {
      trigger.classList.toggle("is-preview-active", trigger.dataset.footerPreview === nextKey);
    });
  };

  const renderFrame = (entry, index) => {
    const nextSlotIndex = visibleSlotIndex === 0 ? 1 : 0;
    const nextSlot = slots[nextSlotIndex];
    const previousSlot = slots[visibleSlotIndex];
    nextSlot.src = entry.images[index];
    nextSlot.alt = `${entry.title} preview ${index + 1}`;
    nextSlot.classList.add("is-visible");
    previousSlot.classList.remove("is-visible");
    visibleSlotIndex = nextSlotIndex;

    window.requestAnimationFrame(() => syncPreviewStage(entry.images[index]));
  };

  const startPreview = (key) => {
    const entry = footerPreviewSource[key];
    if (!entry) return;

    window.clearTimeout(stopTimer);
    stopTimer = 0;

    if (activeKey !== key) {
      activeKey = key;
      activeIndex = 0;
    }

    title.textContent = entry.title;
    note.textContent = entry.note;
    preview.classList.add("is-active");
    setTriggerState(key);
    renderFrame(entry, activeIndex);

    window.clearInterval(cycleTimer);
    cycleTimer = 0;

    if (entry.images.length > 1) {
      cycleTimer = window.setInterval(() => {
        activeIndex = (activeIndex + 1) % entry.images.length;
        renderFrame(entry, activeIndex);
      }, 1000);
    }
  };

  const stopPreview = () => {
    window.clearInterval(cycleTimer);
    cycleTimer = 0;
    activeKey = null;
    activeIndex = 0;
    preview.classList.remove("is-active");
    setTriggerState(null);
  };

  const scheduleStop = () => {
    window.clearTimeout(stopTimer);
    stopTimer = window.setTimeout(() => {
      const hoveredTrigger = triggers.some((trigger) => trigger.matches(":hover"));
      const focusedTrigger = triggers.some((trigger) => trigger === document.activeElement);
      if (!hoveredTrigger && !focusedTrigger) {
        stopPreview();
      }
    }, 80);
  };

  triggers.forEach((trigger) => {
    const { footerPreview: key } = trigger.dataset;
    if (!key) return;

    trigger.addEventListener("mouseenter", () => startPreview(key));
    trigger.addEventListener("focus", () => startPreview(key));
    trigger.addEventListener("mouseleave", scheduleStop);
    trigger.addEventListener("blur", scheduleStop);
  });

  window.addEventListener(
    "resize",
    () => {
      if (!activeKey) return;

      const entry = footerPreviewSource[activeKey];
      if (!entry) return;
      syncPreviewStage(entry.images[activeIndex]);
    },
    { passive: true },
  );
}

function buildProjectBrowserCatalog() {
  const manifest = Array.isArray(window.__PROJECT_MANIFEST__) ? window.__PROJECT_MANIFEST__ : [];
  const manifestMap = new Map(manifest.map((entry) => [entry.slug, entry]));

  return projectCaseSource
    .map((project) => {
      const archiveProject = manifestMap.get(project.slug);
      const imageCount = archiveProject?.imageCount || 0;
      const previewSelection = projectBrowserPreviewSelections[project.slug] || {
        index: 0,
        width: 1600,
        height: 900,
      };
      const homePreviewImage = projectBrowserPreviewOverrides[project.slug] || "";
      const previewImage =
        homePreviewImage ||
        archiveProject?.images?.[previewSelection.index] ||
        archiveProject?.images?.[0] ||
        "";

      if (!previewImage) return null;

      return {
        ...project,
        imageCount,
        previewImage,
        previewWidth: homePreviewImage ? 1200 : previewSelection.width,
        previewHeight: homePreviewImage ? 1200 : previewSelection.height,
      };
    })
    .filter(Boolean);
}

function isProjectBrowserVideo(source) {
  return /\.(?:mp4|webm|mov)(?:[?#].*)?$/i.test(source);
}

function renderProjectBrowserMedia(project) {
  const mediaAttributes = `
    class="project-browser-card-image${isProjectBrowserVideo(project.previewImage) ? "" : " deferred-image"}"
    width="${project.previewWidth}"
    height="${project.previewHeight}"
    data-src="${project.previewImage}"
    aria-label="${escapeHtml(project.title)} preview"
  `;

  if (isProjectBrowserVideo(project.previewImage)) {
    return `<video ${mediaAttributes} muted loop playsinline preload="none"></video>`;
  }

  return `<img ${mediaAttributes} alt="${escapeHtml(project.title)} preview" loading="lazy" decoding="async" />`;
}

function renderProjectBrowserCard(project) {
  const displayTitle = project.title;

  return `
    <a
      class="project-browser-card"
      href="./project.html?slug=${encodeURIComponent(project.slug)}"
      aria-label="查看 ${escapeHtml(displayTitle)} 项目详情"
      style="--project-accent: ${project.accent};"
    >
      <figure
        class="project-browser-card-surface"
        style="aspect-ratio: ${project.previewWidth} / ${project.previewHeight};"
      >
        ${renderProjectBrowserMedia(project)}
      </figure>
      <div class="project-browser-card-copy">
        <strong class="project-browser-card-title">${escapeHtml(displayTitle)}</strong>
      </div>
    </a>
  `;
}

function renderProjectBrowserGrid(catalog) {
  const baseColumnSize = Math.floor(catalog.length / 3);
  const columnSizes = [
    baseColumnSize,
    baseColumnSize,
    catalog.length - baseColumnSize * 2,
  ];
  let offset = 0;

  return columnSizes
    .map((size, columnIndex) => {
      const projects = catalog.slice(offset, offset + size);
      offset += size;

      return `
        <div class="project-browser-column" data-project-column="${columnIndex + 1}">
          ${projects.map((project) => renderProjectBrowserCard(project)).join("")}
        </div>
      `;
    })
    .join("");
}

function initProjectBrowserVideos(scope) {
  const videos = Array.from(scope.querySelectorAll("video[data-src]"));
  if (!videos.length) return;

  const hydrateVideo = (video) => {
    if (!video.dataset.src) return;
    video.src = video.dataset.src;
    video.removeAttribute("data-src");
    video.load();
  };

  const playVideo = (video) => {
    hydrateVideo(video);
    video.play().catch(() => {});
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          video.dataset.inViewport = String(entry.isIntersecting);
          if (entry.isIntersecting) {
            playVideo(video);
            return;
          }
          video.pause();
        });
      },
      { rootMargin: "420px 0px", threshold: 0.05 },
    );

    videos.forEach((video) => observer.observe(video));
  } else {
    videos.forEach(hydrateVideo);
  }

  videos.forEach((video) => {
    const card = video.closest(".project-browser-card");
    card?.addEventListener("pointerenter", () => playVideo(video));
    card?.addEventListener("pointerleave", () => {
      if (video.dataset.inViewport !== "true") video.pause();
    });
  });
}

function initAboutDrawer() {
  const trigger = document.querySelector("#aboutDrawerTrigger");
  const drawer = document.querySelector("#aboutDrawer");
  const closeButton = document.querySelector("#aboutDrawerClose");
  const copyPane = drawer?.querySelector(".about-drawer-copy-pane");
  const galleryPane = drawer?.querySelector(".about-drawer-gallery-pane");

  if (!trigger || !drawer || !closeButton || !copyPane || !galleryPane) {
    return;
  }

  let closeTimer = 0;
  let lastActiveElement = null;

  const openDrawer = ({ skipHash = false, focusClose = true } = {}) => {
    window.clearTimeout(closeTimer);
    lastActiveElement = document.activeElement instanceof HTMLElement ? document.activeElement : trigger;

    if (drawer.hidden) {
      drawer.hidden = false;
    }
    queueDeferredImages(drawer);

    drawer.scrollTop = 0;
    copyPane.scrollTop = 0;
    galleryPane.scrollTop = 0;

    window.requestAnimationFrame(() => {
      drawer.classList.add("is-open");
      drawer.setAttribute("aria-hidden", "false");
      trigger.setAttribute("aria-expanded", "true");
      trigger.classList.add("is-active");
      document.body.classList.add("about-drawer-open");
    });

    if (!skipHash && window.location.hash !== "#about") {
      window.history.pushState(null, "", "#about");
    }

    if (focusClose) {
      closeButton.focus({ preventScroll: true });
    }
  };

  const closeDrawer = ({ skipHash = false, restoreFocus = true } = {}) => {
    if (drawer.hidden) return;

    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    trigger.setAttribute("aria-expanded", "false");
    trigger.classList.remove("is-active");
    document.body.classList.remove("about-drawer-open");

    if (!skipHash && window.location.hash === "#about") {
      const cleanUrl = `${window.location.pathname}${window.location.search}`;
      window.history.replaceState(null, "", cleanUrl);
    }

    window.clearTimeout(closeTimer);
    closeTimer = window.setTimeout(() => {
      drawer.hidden = true;

      if (restoreFocus) {
        lastActiveElement?.focus?.({ preventScroll: true });
      }
    }, 560);
  };

  const syncDrawerFromHash = () => {
    if (window.location.hash === "#about") {
      openDrawer({ skipHash: true, focusClose: false });
      return;
    }

    closeDrawer({ skipHash: true, restoreFocus: false });
  };

  trigger.addEventListener("click", () => {
    if (drawer.hidden) {
      openDrawer();
      return;
    }

    closeDrawer();
  });

  closeButton.addEventListener("click", () => {
    closeDrawer();
  });

  window.addEventListener("keydown", (event) => {
    if (drawer.hidden) return;
    if (event.key !== "Escape") return;
    closeDrawer();
  });

  window.addEventListener("hashchange", syncDrawerFromHash);

  if (window.location.hash === "#about") {
    openDrawer({ skipHash: true, focusClose: false });
  }
}

function initProjectBrowserDrawer() {
  const trigger = document.querySelector("#projectBrowserTrigger");
  const drawer = document.querySelector("#projectBrowserDrawer");
  const shell = drawer?.querySelector(".project-browser-shell");
  const backdrop = document.querySelector("#projectBrowserBackdrop");
  const grid = document.querySelector("#projectBrowserGrid");
  const closeButton = document.querySelector("#projectBrowserClose");
  const infoButton = document.querySelector("#projectBrowserInfo");
  const note = document.querySelector("#projectBrowserNote");
  const localTime = document.querySelector("#projectBrowserLocalTime");

  if (!trigger || !drawer || !shell || !backdrop || !grid || !closeButton || !note || !localTime) {
    return;
  }

  const catalog = buildProjectBrowserCatalog();

  if (!catalog.length) {
    trigger.hidden = true;
    return;
  }

  grid.innerHTML = renderProjectBrowserGrid(catalog);
  queueDeferredImages(grid);
  initProjectBrowserVideos(grid);
  note.textContent = `${catalog.length} selected identity, campaign, print, retail and cultural projects developed between 2022 and 2026. The archive remains image-led, open and intentionally flexible.`;

  const localTimeFormatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Shanghai",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const updateLocalTime = () => {
    const now = new Date();
    localTime.textContent = `${localTimeFormatter.format(now)} SHANGHAI`;
    localTime.dateTime = now.toISOString();
  };
  let closeTimer = 0;
  let lastActiveElement = null;
  let localTimeTimer = 0;

  const startLocalTime = () => {
    updateLocalTime();
    if (!localTimeTimer) {
      localTimeTimer = window.setInterval(updateLocalTime, 1000);
    }
  };

  const stopLocalTime = () => {
    window.clearInterval(localTimeTimer);
    localTimeTimer = 0;
  };

  const openDrawer = () => {
    window.clearTimeout(closeTimer);
    lastActiveElement = document.activeElement instanceof HTMLElement ? document.activeElement : trigger;

    if (drawer.hidden) {
      drawer.hidden = false;
      backdrop.hidden = false;
    }

    shell.scrollTo({ top: 0, left: 0, behavior: "auto" });
    startLocalTime();

    window.requestAnimationFrame(() => {
      drawer.classList.add("is-open");
      shell.classList.add("is-open");
      backdrop.classList.add("is-open");
      drawer.setAttribute("aria-hidden", "false");
      trigger.setAttribute("aria-expanded", "true");
      trigger.classList.add("is-active");
      document.body.classList.add("project-browser-open");
      window.dispatchEvent(new Event("resize"));
    });

    closeButton.focus({ preventScroll: true });
  };

  const closeDrawer = () => {
    if (drawer.hidden) return;

    drawer.classList.remove("is-open");
    shell.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    trigger.setAttribute("aria-expanded", "false");
    trigger.classList.remove("is-active");
    document.body.classList.remove("project-browser-open");
    grid.querySelectorAll("video").forEach((video) => video.pause());
    stopLocalTime();

    window.clearTimeout(closeTimer);
    closeTimer = window.setTimeout(() => {
      drawer.hidden = true;
      backdrop.hidden = true;
      lastActiveElement?.focus?.({ preventScroll: true });
    }, 540);

    if (window.location.hash === "#projects") {
      const cleanUrl = `${window.location.pathname}${window.location.search}`;
      window.history.replaceState(null, "", cleanUrl);
    }
  };

  trigger.addEventListener("click", () => {
    if (drawer.hidden) {
      openDrawer();
      return;
    }

    closeDrawer();
  });

  closeButton.addEventListener("click", closeDrawer);
  infoButton?.addEventListener("click", () => {
    closeDrawer();
    window.setTimeout(() => {
      document.querySelector("#aboutDrawerTrigger")?.click();
    }, 560);
  });
  backdrop.addEventListener("click", closeDrawer);
  drawer.addEventListener("click", (event) => {
    if (event.target !== drawer) return;
    closeDrawer();
  });

  window.addEventListener("keydown", (event) => {
    if (drawer.hidden) return;
    if (event.key !== "Escape") return;
    closeDrawer();
  });

  const syncProjectDrawerFromHash = () => {
    if (window.location.hash === "#projects") {
      openDrawer();
    }
  };

  window.addEventListener("hashchange", syncProjectDrawerFromHash);
  syncProjectDrawerFromHash();
}

function buildProjectFrameLabel(index) {
  return String(index + 1).padStart(2, "0");
}

function buildProjectCatalog() {
  const manifest = Array.isArray(window.__PROJECT_MANIFEST__) ? window.__PROJECT_MANIFEST__ : [];
  const manifestMap = new Map(manifest.map((entry) => [entry.slug, entry]));

  return projectCaseSource
    .map((project) => {
      const archiveProject = manifestMap.get(project.slug);
      if (!archiveProject?.images?.length) return null;
      return { ...project, ...archiveProject };
    })
    .filter(Boolean);
}

function getProjectContext(slug) {
  const catalog = buildProjectCatalog();
  if (!catalog.length) return null;

  const projectIndex = catalog.findIndex((project) => project.slug === slug);
  const currentIndex = projectIndex >= 0 ? projectIndex : 0;

  return {
    project: catalog[currentIndex],
    previousProject: catalog[(currentIndex - 1 + catalog.length) % catalog.length],
    nextProject: catalog[(currentIndex + 1) % catalog.length],
  };
}

function buildProjectTemplateMedia(project, options = {}) {
  const isInteractive = options.interactive !== false;

  return project.images
    .map((src, index) => {
      const isLead = index === 0;
      const slot = index % 6;
      const widthClass = slot === 1 || slot === 2 || slot === 4 || slot === 5
        ? "is-half"
        : "is-wide";
      const pairKey = widthClass === "is-half"
        ? `${Math.floor(index / 6)}-${slot <= 2 ? "a" : "b"}`
        : "";
      const mediaClass = isLead ? "project-case-lead-media" : "project-gallery-media";
      const figureClass = isLead ? "project-case-lead" : "project-gallery-card";
      const imageAttributes = isLead
        ? `src="${src}" loading="eager" fetchpriority="high"`
        : `class="deferred-image" data-src="${src}" loading="lazy"`;

      const interactiveClass = isInteractive ? " project-image-trigger" : "";
      const interactiveAttributes = isInteractive
        ? `tabindex="0" role="button" aria-haspopup="dialog" aria-label="查看 ${escapeHtml(project.title)} 项目图片 ${index + 1}"`
        : "";

      return `
        <figure
          class="project-template-media ${figureClass}${interactiveClass} ${widthClass}"
          ${interactiveAttributes}
          data-project-image-index="${index}"
          ${pairKey ? `data-project-media-pair="${pairKey}"` : ""}
        >
          <div class="${mediaClass}">
            <img ${imageAttributes} alt="${escapeHtml(project.title)} project image ${index + 1}" decoding="async" />
          </div>
        </figure>
      `;
    })
    .join("");
}

function harmonizeProjectMediaPairs(root) {
  if (!root) return;

  const pairs = new Map();
  root.querySelectorAll("[data-project-media-pair]").forEach((item) => {
    const key = item.dataset.projectMediaPair;
    if (!pairs.has(key)) pairs.set(key, []);
    pairs.get(key).push(item);
  });

  const expandPair = (items) => {
    items.forEach((item) => {
      item.classList.remove("is-half");
      item.classList.add("is-wide");
      item.dataset.projectMediaLayout = "wide-auto";
    });
  };

  pairs.forEach((items) => {
    if (items.length !== 2) {
      expandPair(items);
      return;
    }

    const images = items.map((item) => item.querySelector("img"));
    const evaluatePair = () => {
      const waitingForSource = images.some((image) => image?.dataset.src);
      const waitingForLoad = images.some((image) => image && !image.complete);
      if (waitingForSource || waitingForLoad) return;

      if (images.some((image) => !image?.naturalWidth || !image?.naturalHeight)) {
        expandPair(items);
        return;
      }

      const heightRatios = images.map((image) => image.naturalHeight / image.naturalWidth);
      const ratioDifference = Math.max(...heightRatios) / Math.min(...heightRatios);

      if (ratioDifference > 1.12) {
        expandPair(items);
      } else {
        items.forEach((item) => {
          item.dataset.projectMediaLayout = "paired";
        });
      }
    };

    images.forEach((image) => {
      image?.addEventListener("load", evaluatePair, { once: true });
      image?.addEventListener("error", evaluatePair, { once: true });
    });
    evaluatePair();
  });
}

function buildProjectTemplate(project, previousProject, nextProject, options = {}) {
  const isDrawer = options.mode === "drawer";
  const infoParagraphs = [project.summary, ...(project.detailZh || [])]
    .filter(Boolean)
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");
  const services = project.discipline
    .split("/")
    .map((service) => service.trim())
    .filter(Boolean);
  const serviceMarkup = [...services, "Selected Project Archive"]
    .filter((service, index, list) => list.indexOf(service) === index)
    .map((service) => `<li>+ ${escapeHtml(service)}</li>`)
    .join("");
  const nextThumbnail =
    nextProject.images[0] || projectBrowserPreviewOverrides[nextProject.slug];

  return `
    <article class="project-template-shell" data-project-template-slug="${escapeHtml(project.slug)}">
      ${isDrawer ? "" : `
        <header
          class="project-template-header pill-site-header"
          data-pill-nav-host
          data-pill-nav-context="project"
        ></header>
      `}

      <div class="project-template-intro-space" aria-hidden="true"></div>

      <div class="project-template-layout">
        <aside class="project-template-info">
          <span class="project-template-section-label">01 / PROJECT INFO</span>
          <div class="project-template-summary">${infoParagraphs}</div>
          <ul class="project-template-services">${serviceMarkup}</ul>
        </aside>

        <div class="project-template-content">
          <section class="project-template-gallery project-case-gallery" aria-label="${escapeHtml(project.title)} 项目图集">
            ${buildProjectTemplateMedia(project, { interactive: !isDrawer })}
          </section>

          <a
            class="project-template-next"
            href="./project.html?slug=${encodeURIComponent(nextProject.slug)}"
            data-project-detail-slug="${escapeHtml(nextProject.slug)}"
            aria-label="下一个项目：${escapeHtml(nextProject.title)}"
          >
            <div class="project-template-next-thumb">
              <img class="deferred-image" data-src="${nextThumbnail}" alt="" loading="lazy" decoding="async" aria-hidden="true" />
            </div>
            <span class="project-template-next-label">NEXT PROJECT</span>
            <span class="project-template-next-title">${escapeHtml(nextProject.title)}</span>
          </a>
        </div>
      </div>

      <footer class="project-template-footer">
        <div class="project-template-footer-badges"><span>LI</span><span>GD</span></div>
        <p>For general enquiries and new projects, contact:<br /><a href="mailto:liulian080936@gmail.com">liulian080936@gmail.com</a></p>
        <p class="project-template-footer-statement">Independent visual designer / selected works 2022—2026.</p>
        <div class="project-template-footer-base">
          <span>© 2026 / LIULIAN PORTFOLIO</span>
          <a href="./project.html?slug=${encodeURIComponent(previousProject.slug)}" data-project-detail-slug="${escapeHtml(previousProject.slug)}">PREVIOUS / ${escapeHtml(previousProject.title)}</a>
        </div>
      </footer>
    </article>
  `;
}

function renderProjectPage() {
  const host = document.querySelector("#projectCaseStudy");
  if (!host) return;

  const params = new URLSearchParams(window.location.search);
  const requestedSlug = params.get("slug");
  const context = getProjectContext(requestedSlug);

  if (!context) {
    host.innerHTML = `
      <section class="project-case-empty">
        <p>Project archive is unavailable.</p>
        <a href="./index.html">Back to Works</a>
      </section>
    `;
    return;
  }

  const { project, previousProject, nextProject } = context;

  activeProjectCase = project;
  document.title = `LIULIAN ${project.title}`;
  document.body.style.setProperty("--project-accent", project.accent);
  document.body.setAttribute("data-project-slug", project.slug);
  host.innerHTML = buildProjectTemplate(project, previousProject, nextProject, { mode: "page" });
  initPillNav(host);
  harmonizeProjectMediaPairs(host);
  queueDeferredImages(host);

  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  const resetPagePosition = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };
  const firstProjectImage = host.querySelector('[data-project-image-index="0"] img');

  resetPagePosition();
  window.requestAnimationFrame(() => {
    resetPagePosition();
    window.requestAnimationFrame(resetPagePosition);
  });

  if (firstProjectImage && !firstProjectImage.complete) {
    firstProjectImage.addEventListener("load", resetPagePosition, { once: true });
  }
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
    size.textContent = "";
  };

  const renderMinimapList = () => {
    minimapList.innerHTML = projectItems
      .map(
        (item) => `
          <button
            class="project-drawer-mini${item.index === activeIndex ? " is-active" : ""}"
            type="button"
            data-project-minimap-index="${item.index}"
            aria-label="跳转到项目图片"
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
    image.alt = `${project.title} project image`;
    counter.textContent = "";
    serial.textContent = "project archive";
    title.textContent = `"${project.title}"`;
    size.textContent = "";
    location.textContent = stripDisplayNumbers(project.discipline, [project.title]);
    category.textContent = "selected image";
    details.textContent = "";
    description.textContent = project.summary || "";
    credits.textContent = "Visual design / LIULIAN";
    awards.textContent = "";
    author.textContent = "liulian";
    collection.textContent = project.title;
    collectionTag.textContent = "";
    collectionTag.hidden = true;
    footer.textContent = "";
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
        const navCloseButton = drawer.querySelector('[data-pill-proxy="#posterDrawerClose"]');
        (navCloseButton || closeButton).focus({ preventScroll: true });
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

function initProjectDetailDrawer() {
  const drawer = document.querySelector("#projectDetailDrawer");
  const backdrop = document.querySelector("#projectDetailBackdrop");
  const scrollHost = document.querySelector("#projectDetailScroll");
  const contentHost = document.querySelector("#projectDetailDrawerHost");

  if (!drawer || !backdrop || !scrollHost || !contentHost) return;

  let closeTimer = 0;
  let lastActiveElement = null;

  const resetScrollPosition = () => {
    scrollHost.scrollTop = 0;
    scrollHost.scrollLeft = 0;
    scrollHost.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  const keepFirstFrameAtStart = (projectSlug) => {
    resetScrollPosition();
    window.requestAnimationFrame(() => {
      if (drawer.dataset.projectSlug !== projectSlug) return;
      resetScrollPosition();
      window.requestAnimationFrame(() => {
        if (drawer.dataset.projectSlug === projectSlug) {
          resetScrollPosition();
        }
      });
    });
  };

  const renderProject = (slug) => {
    const context = getProjectContext(slug);
    if (!context) return false;

    const { project, previousProject, nextProject } = context;
    drawer.dataset.projectSlug = project.slug;
    drawer.style.setProperty("--project-accent", project.accent);
    contentHost.innerHTML = buildProjectTemplate(project, previousProject, nextProject, {
      mode: "drawer",
    });
    harmonizeProjectMediaPairs(contentHost);
    keepFirstFrameAtStart(project.slug);
    queueDeferredImages(contentHost);

    const firstProjectImage = contentHost.querySelector('[data-project-image-index="0"] img');
    if (firstProjectImage && !firstProjectImage.complete) {
      firstProjectImage.addEventListener(
        "load",
        () => {
          if (drawer.dataset.projectSlug === project.slug) {
            keepFirstFrameAtStart(project.slug);
          }
        },
        { once: true },
      );
    }

    return true;
  };

  const openDrawer = (slug, source) => {
    if (!renderProject(slug)) return;

    window.clearTimeout(closeTimer);
    lastActiveElement = source instanceof HTMLElement ? source : document.activeElement;

    const projectBrowserClose = document.querySelector("#projectBrowserClose");
    const projectBrowserDrawer = document.querySelector("#projectBrowserDrawer");
    if (projectBrowserClose && projectBrowserDrawer && !projectBrowserDrawer.hidden) {
      projectBrowserClose.click();
    }

    if (drawer.hidden) {
      drawer.hidden = false;
      backdrop.hidden = false;
    }

    window.requestAnimationFrame(() => {
      drawer.classList.add("is-open");
      backdrop.classList.add("is-open");
      drawer.setAttribute("aria-hidden", "false");
      document.body.classList.add("project-detail-open");
      keepFirstFrameAtStart(drawer.dataset.projectSlug);

      drawer.focus({ preventScroll: true });
    });
  };

  const closeDrawer = (options = {}) => {
    if (drawer.hidden) return;

    const immediate = options?.immediate === true;
    const restoreFocus = options?.restoreFocus !== false;

    drawer.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("project-detail-open");

    const finishClose = () => {
      drawer.hidden = true;
      backdrop.hidden = true;
      contentHost.innerHTML = "";
      drawer.removeAttribute("data-project-slug");
      if (restoreFocus) lastActiveElement?.focus?.({ preventScroll: true });
    };

    window.clearTimeout(closeTimer);
    if (immediate) {
      finishClose();
    } else {
      closeTimer = window.setTimeout(finishClose, 560);
    }
  };

  const siteHeader = document.querySelector("body[data-page='home'] > .site-header");
  siteHeader?.addEventListener(
    "click",
    (event) => {
      if (drawer.hidden || event.target.closest(".mobile-menu-button")) return;

      const navControl = event.target.closest(".pill-logo, .pill, .mobile-menu-link");
      if (!navControl) return;

      const homeLabel = navControl.querySelector(".pill-label")?.textContent.trim().toLowerCase();
      const isHomeControl = navControl.matches(".pill-logo, .mobile-menu-link[href$='index.html']")
        || homeLabel === "home";

      closeDrawer({ immediate: true, restoreFocus: false });
      if (isHomeControl) event.preventDefault();
    },
    true,
  );

  document.addEventListener("click", (event) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const link = event.target.closest('a[href*="project.html?slug="]');
    if (!link || link.closest("#projectDetailDrawer")) return;

    const url = new URL(link.href, window.location.href);
    const slug = url.searchParams.get("slug");
    if (!slug) return;

    event.preventDefault();
    openDrawer(slug, link);
  });

  contentHost.addEventListener("click", (event) => {
    const homeLink = event.target.closest(".project-detail-home");
    if (homeLink) {
      event.preventDefault();
      closeDrawer();
      if (window.location.hash) {
        const cleanUrl = `${window.location.pathname}${window.location.search}`;
        window.history.replaceState(null, "", cleanUrl);
      }
      return;
    }

    const aboutLink = event.target.closest(".project-detail-about");
    if (aboutLink) {
      event.preventDefault();
      closeDrawer();

      window.setTimeout(() => {
        const aboutTrigger = document.querySelector("#aboutDrawerTrigger");
        if (!aboutTrigger) {
          window.location.href = aboutLink.href;
          return;
        }
        aboutTrigger.click();
      }, 580);
      return;
    }

    const projectsLink = event.target.closest(".project-detail-projects");
    if (projectsLink) {
      event.preventDefault();
      const projectsHref = projectsLink.href;
      closeDrawer();

      window.setTimeout(() => {
        const projectBrowserTrigger = document.querySelector("#projectBrowserTrigger");
        const projectBrowserDrawer = document.querySelector("#projectBrowserDrawer");

        if (!projectBrowserTrigger || !projectBrowserDrawer) {
          window.location.href = projectsHref;
          return;
        }

        if (projectBrowserDrawer.hidden) {
          projectBrowserTrigger.click();
        }
        if (window.location.hash !== "#projects") {
          window.history.pushState(null, "", "#projects");
        }
      }, 580);
      return;
    }

    const closeButton = event.target.closest(".project-detail-close");
    if (closeButton) {
      event.preventDefault();
      closeDrawer();
      return;
    }

    const projectLink = event.target.closest("[data-project-detail-slug]");
    if (!projectLink) return;

    event.preventDefault();
    renderProject(projectLink.dataset.projectDetailSlug);
  });

  backdrop.addEventListener("click", closeDrawer);

  window.addEventListener("keydown", (event) => {
    if (drawer.hidden) return;

    if (event.key === "Escape") {
      event.preventDefault();
      closeDrawer();
      return;
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
  let activeFrame = null;

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

  const resolveTargetFrame = (target, source = null) => {
    if (!(target instanceof Element)) return null;

    const sourceFrame =
      source instanceof Element ? source.closest(targetCursorFrameSelector) : null;
    if (sourceFrame && target.contains(sourceFrame)) {
      return sourceFrame;
    }

    if (target.matches(targetCursorFrameSelector)) {
      return target;
    }

    return target.querySelector(targetCursorFrameSelector) || target;
  };

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

    if (activeFrame) {
      const rect = activeFrame.getBoundingClientRect();
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
    activeTarget = null;
    activeFrame = null;
    cursor.classList.remove("is-targeting");
    setCornerPositions(defaultCornerPositions);
    scheduleRender();
  };

  const captureTarget = (target, source = null) => {
    if (!isValidTarget(target)) return;

    const frame = resolveTargetFrame(target, source);
    if (!frame) return;
    if (activeTarget === target && activeFrame === frame) return;

    activeTarget = target;
    activeFrame = frame;
    cursor.classList.add("is-targeting");
    scheduleRender();
  };

  const handleMouseMove = (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;

    if (!isVisible) {
      setVisible(true);
    }

    const hoveredSource = document.elementFromPoint(mouseX, mouseY);
    const hoveredTarget =
      hoveredSource instanceof Element
        ? hoveredSource.closest(targetCursorSelector)
        : null;

    if (hoveredTarget) {
      captureTarget(hoveredTarget, hoveredSource);
    } else if (activeTarget) {
      releaseTarget();
    }

    scheduleRender();
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
    const nextTarget =
      hovered instanceof Element ? hovered.closest(targetCursorSelector) : null;

    if (!nextTarget) {
      releaseTarget();
      return;
    }

    captureTarget(nextTarget, hovered);
    scheduleRender();
  };

  window.addEventListener("mousemove", handleMouseMove);
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

const choreographedRevealSelector = [
  ".editorial-hero-grid > *",
  ".posters-band-copy",
  ".posters-band-strip",
  ".cover-cloud-card-media",
  ".portfolio-footer-top > *",
  ".portfolio-footer-links > *",
  ".portfolio-footer-base > *",
  ".poster-archive-hero > *",
  ".poster-header",
  ".poster-card",
  ".poster-archive-footer > *",
  ".project-template-info > *",
  ".project-template-media",
  ".project-template-next",
  ".project-template-footer > *",
  ".project-browser-intro > *",
  ".project-browser-card",
  ".project-browser-footer > *",
  ".about-drawer-copy-block",
  ".about-drawer-card",
  ".poster-case-info > *",
  ".poster-case-media",
].join(", ");

const choreographedMediaRevealSelector = [
  ".cover-cloud-card-media",
  ".poster-card",
  ".project-template-media",
  ".project-browser-card",
  ".about-drawer-card",
  ".poster-case-media",
].join(", ");

const motionDepthTargetSelector = [
  "body[data-page='home'] .cover-cloud-card",
  "body[data-page='posters'] .poster-card",
  "body[data-page='project'] .project-template-media.project-image-trigger",
  ".project-browser-card",
].join(", ");

function initChoreographedMotion() {
  const root = document.documentElement;
  const gsapApi = window.gsap;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (root.dataset.choreographedMotion) return;

  if (!gsapApi || reducedMotion || !("IntersectionObserver" in window)) {
    root.dataset.choreographedMotion = "reduced";
    return;
  }

  root.dataset.choreographedMotion = "active";
  root.classList.add("has-choreographed-motion");

  const preparedElements = new WeakSet();
  const revealedElements = new WeakSet();
  const pendingRevealElements = new Set();
  let revealStarted = false;

  const isTemporarilyHidden = (element) => Boolean(
    element.closest("[hidden], [aria-hidden='true']"),
  );

  const revealElement = (element, order = 0) => {
    if (revealedElements.has(element)) return;

    revealedElements.add(element);
    pendingRevealElements.delete(element);
    element.dataset.motionRevealState = "entering";
    const isMedia = element.matches(choreographedMediaRevealSelector);

    gsapApi.to(element, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: isMedia ? 1.08 : 0.92,
      delay: Math.min(order, 7) * 0.055,
      ease: "power3.out",
      overwrite: "auto",
      onComplete: () => {
        element.dataset.motionRevealState = "visible";
        gsapApi.set(element, {
          clearProps: "opacity,visibility,transform,filter,willChange",
        });
      },
    });
  };

  const revealObserver = new IntersectionObserver(
    (entries) => {
      const entering = entries
        .filter((entry) => entry.isIntersecting && !revealedElements.has(entry.target))
        .sort((left, right) => {
          const topDifference = left.boundingClientRect.top - right.boundingClientRect.top;
          return Math.abs(topDifference) > 12
            ? topDifference
            : left.boundingClientRect.left - right.boundingClientRect.left;
        });

      entering.forEach((entry, index) => {
        revealObserver.unobserve(entry.target);
        revealElement(entry.target, index);
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -7% 0px",
      threshold: 0.1,
    },
  );

  const prepareElement = (element) => {
    if (
      !(element instanceof Element)
      || preparedElements.has(element)
      || revealedElements.has(element)
      || isTemporarilyHidden(element)
    ) {
      return;
    }

    preparedElements.add(element);
    pendingRevealElements.add(element);
    const isMedia = element.matches(choreographedMediaRevealSelector);
    element.dataset.motionReveal = isMedia ? "media" : "copy";

    gsapApi.set(element, {
      autoAlpha: 0,
      y: isMedia ? 46 : 26,
      scale: isMedia ? 0.985 : 1,
      filter: isMedia ? "blur(0px)" : "blur(5px)",
      willChange: "transform, opacity, filter",
    });

    if (revealStarted) {
      revealObserver.observe(element);
    }
  };

  const registerRevealElements = (scope = document.body) => {
    if (!(scope instanceof Element)) return;

    if (scope.matches(choreographedRevealSelector)) {
      prepareElement(scope);
    }

    scope.querySelectorAll(choreographedRevealSelector).forEach(prepareElement);
  };

  const startReveals = () => {
    if (revealStarted) return;
    revealStarted = true;
    registerRevealElements(document.body);
    pendingRevealElements.forEach((element) => revealObserver.observe(element));
  };

  registerRevealElements(document.body);

  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "attributes") {
        if (!isTemporarilyHidden(mutation.target)) {
          registerRevealElements(mutation.target);
        }
        return;
      }

      mutation.addedNodes.forEach((node) => {
        if (node instanceof Element) {
          registerRevealElements(node);
        }
      });
    });
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["hidden", "aria-hidden"],
  });

  const resetDepthSurface = (surface) => {
    if (!surface) return;
    surface.classList.remove("is-motion-active");
    surface.style.setProperty("--motion-tilt-x", "0deg");
    surface.style.setProperty("--motion-tilt-y", "0deg");
    surface.style.setProperty("--motion-glow-x", "50%");
    surface.style.setProperty("--motion-glow-y", "50%");
    window.setTimeout(() => {
      if (!surface.classList.contains("is-motion-active")) {
        surface.style.removeProperty("will-change");
      }
    }, 480);
  };

  const resolveDepthSurface = (target) => {
    if (!target) return null;
    if (target.matches(".cover-cloud-card")) {
      return target.querySelector(".cover-cloud-card-media");
    }
    if (target.matches(".poster-card")) {
      return target.querySelector(".poster-card-visual");
    }
    if (target.matches(".project-browser-card")) {
      return target.querySelector(".project-browser-card-surface");
    }
    return target.querySelector(".project-case-lead-media, .project-gallery-media");
  };

  let activeDepthTarget = null;
  let activeDepthSurface = null;

  const releaseDepthTarget = () => {
    resetDepthSurface(activeDepthSurface);
    activeDepthTarget = null;
    activeDepthSurface = null;
  };

  document.body.addEventListener("pointermove", (event) => {
    if (event.pointerType && event.pointerType !== "mouse") return;

    const source = event.target instanceof Element ? event.target : null;
    const target = source?.closest(motionDepthTargetSelector) || null;

    if (!target) {
      if (activeDepthTarget) releaseDepthTarget();
      return;
    }

    const surface = resolveDepthSurface(target);
    if (!surface) return;

    if (target !== activeDepthTarget) {
      resetDepthSurface(activeDepthSurface);
      activeDepthTarget = target;
      activeDepthSurface = surface;
      surface.dataset.motionDepth = "true";
      surface.style.willChange = "transform";
      surface.classList.add("is-motion-active");
    }

    const rect = target.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const normalizedX = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2));
    const normalizedY = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2));
    const maxTilt = rect.width > 760 ? 1.25 : rect.width > 420 ? 2.25 : 3.4;

    surface.style.setProperty("--motion-tilt-x", `${(-normalizedY * maxTilt).toFixed(2)}deg`);
    surface.style.setProperty("--motion-tilt-y", `${(normalizedX * maxTilt).toFixed(2)}deg`);
    surface.style.setProperty("--motion-glow-x", `${((normalizedX + 1) * 50).toFixed(1)}%`);
    surface.style.setProperty("--motion-glow-y", `${((normalizedY + 1) * 50).toFixed(1)}%`);
  }, { passive: true });

  document.body.addEventListener("pointerleave", releaseDepthTarget);
  window.addEventListener("blur", releaseDepthTarget);
  window.addEventListener("scroll", releaseDepthTarget, { passive: true });

  const homeHero = document.querySelector(".editorial-hero-grid");
  const homeCards = Array.from(document.querySelectorAll(".cover-cloud-card"));
  const footerMark = document.querySelector(".portfolio-footer-mark img");
  let scrollFrame = 0;

  const updateScrollMotion = () => {
    scrollFrame = 0;
    const isDesktop = window.innerWidth > 960;
    const viewportHeight = Math.max(1, window.innerHeight);

    if (homeHero) {
      const heroOffset = isDesktop ? Math.min(28, window.scrollY * 0.075) : 0;
      homeHero.style.setProperty("--motion-hero-y", `${heroOffset.toFixed(2)}px`);
    }

    homeCards.forEach((card, index) => {
      if (!isDesktop) {
        card.style.setProperty("--motion-scroll-y", "0px");
        return;
      }

      const rect = card.getBoundingClientRect();
      if (rect.bottom < -120 || rect.top > viewportHeight + 120) return;
      const centerDelta = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
      const direction = index % 3 === 1 ? -1 : 1;
      const distance = Math.max(-13, Math.min(13, centerDelta * -18 * direction));
      card.style.setProperty("--motion-scroll-y", `${distance.toFixed(2)}px`);
    });

    if (footerMark) {
      const rect = footerMark.getBoundingClientRect();
      const centerDelta = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
      const distance = isDesktop ? Math.max(-18, Math.min(18, centerDelta * -22)) : 0;
      footerMark.style.setProperty("--motion-footer-y", `${distance.toFixed(2)}px`);
    }
  };

  const scheduleScrollMotion = () => {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(updateScrollMotion);
  };

  window.addEventListener("scroll", scheduleScrollMotion, { passive: true });
  window.addEventListener("resize", scheduleScrollMotion, { passive: true });
  scheduleScrollMotion();

  const waitForHomeReveal = document.body?.dataset.page === "home"
    && Boolean(document.querySelector("#homeLoadingScreen"));

  if (waitForHomeReveal) {
    document.addEventListener("home:content-revealed", startReveals, { once: true });
  } else {
    startReveals();
  }
}

function initPage() {
  const page = document.body?.dataset.page;

  initPillNav();
  syncSiteHeaderHeight();

  if (page === "posters") {
    renderPosterPage();
    initFirstLoadTypedText();
    initChoreographedMotion();
    scheduleNonCriticalTask(() => {
      initPosterDrawer();
      initPosterPixelHover();
      initTargetCursor();
    }, 260);
    return;
  }

  if (page === "project") {
    renderProjectPage();
    initFirstLoadTypedText();
    initChoreographedMotion();
    scheduleNonCriticalTask(() => {
      initProjectDrawer();
      initTargetCursor();
    }, 220);
    return;
  }

  if (page === "home") {
    initHomePosterMarquee();
    initHomeLoadingScreen();
    initFirstLoadTypedText({
      waitForHomeReveal: Boolean(document.querySelector("#homeLoadingScreen")),
    });
    initHomeProjectMediaRatios();
    initFooterLinkPreviews();
    initAboutDrawer();
    initProjectBrowserDrawer();
    initProjectDetailDrawer();
    initChoreographedMotion();
    scheduleNonCriticalTask(() => {
      initHomeProjectPixelHover();
      initTargetCursor();
    }, 700);
    return;
  }

  scheduleNonCriticalTask(() => {
    initTargetCursor();
  }, 400);
  initFirstLoadTypedText();
  initChoreographedMotion();
}

initPage();
