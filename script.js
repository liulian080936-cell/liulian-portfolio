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
    slug: "cipopo",
    number: "12",
    title: "CIPOPO",
    subtitle: "",
    discipline: "Smart Companion / Brand Identity",
    accent: "#bac90b",
    summary:
      "A smart companion brand presented through sleek product imagery, restrained interfaces, and a calm emotional-tech atmosphere.",
    detailZh: [
      "CIPOPO 是乐享科技旗下的智能消费品牌，聚焦桌面机器人等新一代具身智能产品，打造轻量化、情绪友好、具备感知与反馈能力的智能陪伴载体。",
      "它不同于以效率为导向的传统科技产品，更关注人与智能之间的关系质量，让智能以轻松、克制而不过度打扰的方式融入生活，让陪伴自然发生。",
    ],
    detailEn: [
      "CIPOPO is a smart consumer brand focused on desktop robots and other next-generation embodied devices designed for gentle companionship.",
      "Rather than foregrounding efficiency alone, it builds a calmer relationship between people and intelligence through light, emotionally aware interaction.",
    ],
  },
  {
    slug: "ecoflow",
    number: "13",
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
    number: "14",
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
    number: "15",
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
    number: "16",
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
    number: "17",
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
const footerPreviewSource = {
  "selected-works": {
    title: "SELECTED WORKS",
    note: "Project lead images cycling every second.",
    images: [
      "./assets/projects/youth-tour/1.webp",
      "./assets/projects/newlife/18.webp",
      "./assets/projects/fivebook/1.webp",
      "./assets/projects/double8-coffee/1.webp",
      "./assets/projects/zero-m1/1.webp",
      "./assets/projects/cipopo/1.webp",
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
  "youth-tour": "./assets/home/youth-tour.webp",
  nomokids: "./assets/home/nomokids-cover.jpg",
  "smoo-market": "./assets/home/smoo-cover.jpg",
  "fechoes-2024": "./assets/projects/fechoes-2024/1.webp",
  "lumos-nyxel": "./assets/projects/lumos-nyxel/1.webp",
  newlife: "./assets/projects/newlife/18.webp",
  throbbing: "./assets/home/throbbing.webp",
  alonewild: "./assets/home/alonewild.webp",
  supernova: "./assets/home/supernova.webp",
  "zero-m1": "./assets/home/zero-m1.webp",
  cipopo: "./assets/projects/cipopo/1.webp",
  ecoflow: "./assets/home/ecoflow.webp",
  "double8-coffee": "./assets/home/double8-cover.jpg",
  fivebook: "./assets/home/fivebook.webp",
  "flow-in": "./assets/home/flowin.webp",
  "shake-coffee": "./assets/home/shake-coffee.webp",
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
  const minDuration = prefersReducedMotion ? 900 : 1500;
  const maxDuration = 7000;
  const preCompleteCap = prefersReducedMotion ? 95 : 97;
  const completionHoldDuration = prefersReducedMotion ? 120 : 180;
  const exitDuration = 420;
  const completionSnapThreshold = 99.4;
  const formatCountUpValue = createCountUpFormatter(0, 100);
  const trackedImages = Array.from(
    document.querySelectorAll(
      [
        ".home-project-row .home-project-media img",
        ".posters-band-strip .poster-thumb:nth-child(-n+2) img",
      ].join(", "),
    ),
  );
  const videoStartTime = 0;
  const videoCompletionThreshold = 0.985;
  const videoPlaybackRate = prefersReducedMotion ? 1 : 2;

  let trackedAssetCount = trackedImages.length;
  let loadedAssetCount = 0;
  let actualProgress = video instanceof HTMLVideoElement ? 1 : trackedAssetCount ? 6 : 22;
  let displayedProgress = 1;
  let pageLoaded = document.readyState === "complete";
  let finishRequested = false;
  let exitTriggered = false;
  let completionHoldStart = null;
  let videoSequenceComplete = !(video instanceof HTMLVideoElement);

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
    if (video instanceof HTMLVideoElement) {
      const videoTimelineProgress = getVideoTimelineProgress();

      if (videoTimelineProgress !== null) {
        if (videoTimelineProgress >= videoCompletionThreshold) {
          videoSequenceComplete = true;
        }

        const timelineProgress = 1 + videoTimelineProgress * 99;
        actualProgress = Math.min(
          timelineProgress,
          pageLoaded && areAssetsReady() ? 100 : preCompleteCap,
        );
        return;
      }

      actualProgress = Math.max(1, Math.min(getAssetDrivenProgress(), 8));
      return;
    }

    const nextProgress = getAssetDrivenProgress();
    actualProgress = Math.max(
      actualProgress,
      Math.min(nextProgress, finishRequested ? 100 : preCompleteCap),
    );
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

  if (video instanceof HTMLVideoElement) {
    trackedAssetCount += 1;
    video.loop = false;
    video.defaultPlaybackRate = videoPlaybackRate;
    video.playbackRate = videoPlaybackRate;

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
      const playPromise = video.play();
      if (playPromise?.catch) {
        playPromise.catch(() => {
          videoSequenceComplete = true;
        });
      }
    };

    const markVideoSequenceComplete = () => {
      if (videoSequenceComplete) return;

      const videoTimelineProgress = getVideoTimelineProgress();
      if (videoTimelineProgress !== null && videoTimelineProgress >= videoCompletionThreshold) {
        videoSequenceComplete = true;
      }

      if (video.ended) {
        videoSequenceComplete = true;
      }
    };

    let videoHandled = false;
    const handleVideoProgress = (hasVideo) => {
      if (videoHandled) return;
      videoHandled = true;

      if (!hasVideo) {
        videoSequenceComplete = true;
      }

      markAssetLoaded();
    };

    if (video.readyState >= 2) {
      syncVideoTiming();
      handleVideoProgress(true);
      resumeVideoPlayback();
    } else {
      const videoFallbackTimer = window.setTimeout(() => {
        handleVideoProgress(false);
      }, 900);
      const resolveVideoProgress = (hasVideo) => {
        window.clearTimeout(videoFallbackTimer);
        if (hasVideo) {
          syncVideoTiming();
          resumeVideoPlayback();
        }
        handleVideoProgress(hasVideo);
      };

      video.addEventListener("loadeddata", () => resolveVideoProgress(true), { once: true });
      video.addEventListener("canplay", () => resolveVideoProgress(true), { once: true });
      video.addEventListener("error", () => resolveVideoProgress(false), { once: true });
    }

    if (video.readyState >= 1) {
      syncVideoTiming();
    } else {
      video.addEventListener("loadedmetadata", syncVideoTiming, { once: true });
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

    if (pageLoaded && assetsReady && elapsed >= minDuration) {
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

    window.setTimeout(() => {
      body.classList.remove("is-home-loading-revealing");
      loader.hidden = true;
      loader.remove();
    }, exitDuration);
  };

  const animateProgress = (now) => {
    refreshActualProgress();
    maybeFinish(now);
    displayedProgress = actualProgress;

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
  const stage = document.querySelector("#posterDrawerStage");
  const image = document.querySelector("#posterDrawerImage");
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
    !stage ||
    !image ||
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
    edgeWheelDelta = 0;
  };

  const syncImageFacts = () => {
    if (!activePoster) return;

    if (image.naturalWidth && image.naturalHeight) {
      size.textContent = `offset, ${image.naturalWidth} x ${image.naturalHeight} px`;
      return;
    }

    size.textContent = "offset, loading image size";
  };

  const renderMinimapList = () => {
    if (!activePoster || activePoster.images.length <= 1) {
      minimap.hidden = true;
      minimapBalance.hidden = true;
      minimapList.innerHTML = "";
      return;
    }

    minimap.hidden = false;
    minimapBalance.hidden = false;
    minimapList.innerHTML = activePoster.images
      .map(
        (src, index) => `
          <button
            class="project-drawer-mini${index === activeImageIndex ? " is-active" : ""}"
            type="button"
            data-image-index="${index}"
            aria-label="查看第 ${index + 1} 张海报"
          >
            <img class="deferred-image" data-src="${src}" alt="" loading="lazy" decoding="async" aria-hidden="true" />
            <span class="project-drawer-mini-viewport" aria-hidden="true"></span>
          </button>
        `,
      )
      .join("");
    queueDeferredImages(minimapList);
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

    const activeItem = getActivePosterItem();
    if (!activeItem) return;

    resetStagePosition();
    image.src = activeItem.src;
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
    credits.textContent = `archive: LIULIAN poster archive, current file: ${activeItem.fileName}, viewing: ${activeImageIndex + 1} of ${activePoster.images.length}.`;
    awards.textContent =
      activePoster.images.length > 1
        ? `.${activePoster.images.length} poster variants in this folded stack`
        : ". single poster from the archive";
    author.textContent = "liulian archive";
    collection.textContent = getCollectionLabel(activePoster.year);
    collectionTag.textContent = getCollectionToken(activePoster.year);
    footer.textContent = "© 2026, LIULIAN poster archive. all rights reserved.";
    size.textContent = "offset, loading image size";

    renderMinimapList();
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
    const scrollRange = Math.max(0, stage.scrollHeight - stage.clientHeight);
    const atTop = stage.scrollTop <= 1;
    const atBottom = stage.scrollTop + stage.clientHeight >= stage.scrollHeight - 1;

    if (!scrollRange || (direction > 0 && atBottom) || (direction < 0 && atTop)) {
      stepDrawerImage(direction);
      return;
    }

    stage.scrollBy({
      top: direction * Math.max(220, stage.clientHeight * 0.88),
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

    if (event.key === "ArrowRight") {
      event.preventDefault();
      if (event.shiftKey) {
        stepDrawerPoster(1);
        return;
      }

      stepDrawerImage(1);
      return;
    }

    if (event.key === "ArrowLeft") {
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

function renderProjectCopyCard(paragraphs) {
  if (!Array.isArray(paragraphs) || !paragraphs.length) return "";

  const copyMarkup = paragraphs
    .filter(Boolean)
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");

  return `
    <div class="project-copy-card">
      <span>Project Overview</span>
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
    [
      "body[data-page='home'] .editorial-card:not(.project-feature):not(.home-project-card):not(.home-project-list-item) .card-media img",
      "body[data-page='home'] .home-project-list-media img",
    ].join(", "),
  );

  projectImages.forEach((image) => {
    applyIntrinsicAspectRatio(image);
  });
}

function syncSiteHeaderHeight() {
  const header = document.querySelector(".site-header");
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

function buildProjectBrowserTags(project, imageCount) {
  const tags = [];

  if (project.subtitle) {
    tags.push(project.subtitle);
  }

  project.discipline
    .split("/")
    .map((part) => part.trim())
    .filter(Boolean)
    .forEach((tag) => tags.push(tag));

  if (imageCount) {
    tags.push(`${imageCount} frames`);
  }

  return tags.filter((tag, index) => tags.indexOf(tag) === index).slice(0, 4);
}

function buildProjectBrowserCatalog() {
  const manifest = Array.isArray(window.__PROJECT_MANIFEST__) ? window.__PROJECT_MANIFEST__ : [];
  const manifestMap = new Map(manifest.map((entry) => [entry.slug, entry]));

  return projectCaseSource
    .map((project) => {
      const archiveProject = manifestMap.get(project.slug);
      const imageCount = archiveProject?.imageCount || 0;
      const previewImage =
        projectBrowserPreviewOverrides[project.slug] ||
        archiveProject?.images?.[0] ||
        "";

      if (!previewImage) return null;

      return {
        ...project,
        imageCount,
        previewImage,
        tags: buildProjectBrowserTags(project, imageCount),
        variant: "square",
        isContain: false,
      };
    })
    .filter(Boolean);
}

function renderProjectBrowserCard(project) {
  const tagsMarkup = project.tags
    .map((tag) => `<span class="project-browser-card-tag">${escapeHtml(tag)}</span>`)
    .join("");

  return `
    <a
      class="project-browser-card${project.isContain ? " is-contain" : ""}"
      data-variant="${project.variant}"
      href="./project.html?slug=${encodeURIComponent(project.slug)}"
      aria-label="查看 ${escapeHtml(project.title)} 项目详情"
      style="--project-accent: ${project.accent};"
    >
      <div class="project-browser-card-surface">
        <span class="project-browser-card-label">${escapeHtml(project.number)} / ${escapeHtml(project.title)}</span>
        <span class="project-browser-card-arrow" aria-hidden="true">↗</span>
        <img
          class="project-browser-card-image"
          src="${project.previewImage}"
          alt="${escapeHtml(project.title)} preview"
          loading="lazy"
          decoding="async"
        />
        <div class="project-browser-card-tags">
          ${tagsMarkup}
        </div>
      </div>
    </a>
  `;
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
  const count = document.querySelector("#projectBrowserCount");
  const note = document.querySelector("#projectBrowserNote");

  if (!trigger || !drawer || !shell || !backdrop || !grid || !closeButton || !count || !note) {
    return;
  }

  const catalog = buildProjectBrowserCatalog();

  if (!catalog.length) {
    trigger.hidden = true;
    return;
  }

  grid.innerHTML = catalog.map((project) => renderProjectBrowserCard(project)).join("");
  count.textContent = `${catalog.length} Projects`;
  note.textContent = `${catalog.length} projects collected in one side preview. Click any card to open the full case study.`;

  let closeTimer = 0;
  let lastActiveElement = null;

  const openDrawer = () => {
    window.clearTimeout(closeTimer);
    lastActiveElement = document.activeElement instanceof HTMLElement ? document.activeElement : trigger;

    if (drawer.hidden) {
      drawer.hidden = false;
      backdrop.hidden = false;
    }

    window.requestAnimationFrame(() => {
      drawer.classList.add("is-open");
      shell.classList.add("is-open");
      backdrop.classList.add("is-open");
      drawer.setAttribute("aria-hidden", "false");
      trigger.setAttribute("aria-expanded", "true");
      document.body.classList.add("project-browser-open");
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
    document.body.classList.remove("project-browser-open");

    window.clearTimeout(closeTimer);
    closeTimer = window.setTimeout(() => {
      drawer.hidden = true;
      backdrop.hidden = true;
      lastActiveElement?.focus?.({ preventScroll: true });
    }, 280);
  };

  trigger.addEventListener("click", () => {
    if (drawer.hidden) {
      openDrawer();
      return;
    }

    closeDrawer();
  });

  closeButton.addEventListener("click", closeDrawer);
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
}

function buildProjectFrameLabel(index) {
  return String(index + 1).padStart(2, "0");
}

function buildProjectGallery(project) {
  const images = project.images.slice(1);

  return images
    .map((src, index) => {
      const isClosingFrame = index === images.length - 1;
      const span = isClosingFrame
        ? 12
        : projectGallerySpanPattern[index % projectGallerySpanPattern.length];
      const imageIndex = index + 1;
      const frame = buildProjectFrameLabel(imageIndex);

      return `
        <figure
          class="project-gallery-card project-image-trigger span-${span}${isClosingFrame ? " is-closing-frame" : ""}"
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
  const detailZhMarkup = renderProjectCopyCard(project.detailZh);
  const detailEnMarkup = renderProjectCopyCard(project.detailEn);

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
        ${detailZhMarkup ? `<div class="project-case-overview-copy">${detailZhMarkup}</div>` : ""}
        ${detailEnMarkup ? `<div class="project-case-overview-note">${detailEnMarkup}</div>` : ""}
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

function initPage() {
  const page = document.body?.dataset.page;

  syncSiteHeaderHeight();

  if (page === "posters") {
    renderPosterPage();
    scheduleNonCriticalTask(() => {
      initGlobalScrambledText();
    }, 180);
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
      initGlobalScrambledText();
    }, 180);
    scheduleNonCriticalTask(() => {
      initProjectDrawer();
      initTargetCursor();
    }, 220);
    return;
  }

  if (page === "home") {
    initHomeLoadingScreen();
    initHomeProjectMediaRatios();
    initFooterLinkPreviews();
    initAboutDrawer();
    initProjectBrowserDrawer();
    scheduleNonCriticalTask(() => {
      initGlobalScrambledText();
    }, 240);
    scheduleNonCriticalTask(() => {
      initHomeProjectPixelHover();
      initTargetCursor();
    }, 700);
    return;
  }

  scheduleNonCriticalTask(() => {
    initGlobalScrambledText();
    initTargetCursor();
  }, 400);
}

initPage();
