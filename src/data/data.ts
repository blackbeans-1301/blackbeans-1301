import fourhandyFlutterThumbnail from "../../public/thumbnail/4handy-flutter.png";
import fourhandyThumbnail from "../../public/thumbnail/4handy.png";
import bedtimeThumbnail from "../../public/thumbnail/bedtime.png";
import blackholeThumbnail from "../../public/thumbnail/blackhole.jpg";
import flappybirdThumbnail from "../../public/thumbnail/flappy-bird.jpg";
import savorThumbnail from "../../public/thumbnail/savor.png";
import mindboardThumbnail from "../../public/thumbnail/mindboardThumbnail.png";
import plmath from "../../public/thumbnail/plm.png";

export const bioData = [
  {
    id: 1,
    year: "2020",
    description: "Started studying Computer Science at University of Engineering and Technology - VNU Hanoi (UET).",
  },
  {
    id: 2,
    year: "2022",
    description: "Worked at 4Handy as a Fullstack/Mobile Developer.",
  },
  {
    id: 3,
    year: "2023 - now",
    description: "Work at Sonatgame Studio as fullstack developer and playable ads developer.",
  },
  {
    id: 4,
    year: "2024",
    description: "Graduated from UET with Bachelor's degree in Computer Science. Currently working as a Fullstack and Playable Ads Developer.",
  },
];

export const navbarItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Projects",
    href: "/works",
  },
  {
    id: 3,
    name: "Source",
    href: "https://github.com/blackbeans-1301/bb-portfolio",
  },
];

export const skillSet = [
  {
    id: 1,
    category: "Programming Languages",
    skills: ["JavaScript/TypeScript", "Python", "Dart", "C#", "...etc"],
  },
  {
    id: 2,
    category: "Web Development",
    skills: [
      "Responsive Design",
      "Next.js, SvelteKit, AngularJS",
      "Node.js, ExpressJS, NestJS",
      "Flask (Python)",
    ],
  },
  {
    id: 3,
    category: "Mobile Development",
    skills: ["React Native", "Flutter (Dart)", "AWS Amplify", "Firebase"],
  },
  {
    id: 4,
    category: "Playable Ads & Game Development",
    skills: ["Unity (Luna)", "Cocos Creator"],
  },
  {
    id: 5,
    category: "Database & Tools",
    skills: ["MySQL", "MongoDB", "Git", "Docker", "Linux Admin", "GH Actions"],
  },
  {
    id: 6,
    category: "Soft Skills",
    skills: [
      "English proficiency (reading, writing, speaking)",
      "Quick learner with self-study ability",
      "Team collaboration",
      "Quick adaptation to new environments",
    ],
  },
];

export const webDevelopment = [
  {
    id: "mindboard",
    title: "Mindboard",
    createdAt: "2025",
    shortDescription:
      "Web application AI chat node based.",
    description:
      "Mindboard (mindboard.space) is a web application that allows you to create a mind map of your thoughts and ideas. It is a tool that helps you organize your thoughts and ideas in a visual way.",
    platform: "Windows/macOS/Linux/iOS/Android",
    stack: "ReactJS, TailwindCss",
    position: "Fullstack Developer",
    githubUrl: "private",
    thumbnail: mindboardThumbnail,
    images: [
      "/images/mindboard1.png",
    ],
  },
  {
    id: "plmath",
    title: "PLMath",
    createdAt: "2023",
    shortDescription:
      "Learning Center Management System",
    description:
      "PlMath is a learning center management system that allows to manage your students, courses, and teachers. It is a tool that helps organize your learning center.",
    platform: "Windows/macOS/Linux/iOS/Android",
    stack: "NextJs",
    position: "Fullstack Developer",
    githubUrl: "private",
    thumbnail: plmath,
    images: [
      "/thumbnail/plm.png"
    ],
  },
  {
    id: "savor",
    title: "Savor",
    createdAt: "2022",
    shortDescription:
      "Web application for showcasing birthday cakes and online ordering.",
    description:
      "Savor is a web application designed to showcase cake designs from the Savor bakery and tea system. This website presents various cake models and allows users to order cakes online.",
    platform: "Windows/macOS/Linux/iOS/Android",
    stack: "ReactJS, TailwindCss, 4Handy API.",
    position: "Front-end Developer",
    githubUrl: "private",
    thumbnail: savorThumbnail,
    images: [
      "https://i.imgur.com/vi0A0BQ.png",
      "https://i.imgur.com/AjNYEzj.png",
    ],
  },
  {
    id: "four-handy-work",
    title: "4Handy Work",
    createdAt: "2022",
    shortDescription: "Task management web application for 4Handy company.",
    description: "A comprehensive task management system developed for 4Handy company to streamline workflow and team collaboration.",
    platform: "Windows/macOS/Linux/iOS/Android",
    stack: "AngularJS, MongoDB, ExpressJS, Redis.",
    position: "FullStack Developer",
    githubUrl: "private",
    thumbnail: fourhandyThumbnail,
    images: [
      "https://i.imgur.com/konUosS.png",
      "https://i.imgur.com/8yZFdGm.png",
    ],
  }
];

export const playableAdsDevelopment = [
  {
    id: "Hole Master",
    title: "Hole Master",
    description: "Created with cocos creator",
    image: "https://play-lh.googleusercontent.com/bdooQoqgw2AtKuZlXFm15voIpqguYpr_OWVcQ6Gde82Xa98lsdiiSM1c2WwWHxXDI1s",
    storeUrl: "https://play.google.com/store/apps/details?id=com.hole.master.eat.world.game&hl=en",
    demo: ["/playable/hole-master/hole1.html", "/playable/hole-master/hole2.html", "/playable/hole-master/hole3.html"]
  },
  {
    id: "Tangle Rope 3D",
    title: "Tangle Rope 3D",
    description: "HTML",
    image: "https://play-lh.googleusercontent.com/r2WLR91MR9yAefRw3O2hjeG6lCnqKP-KFSjGlzuf53CiAOANMK_4ov76OJbZnVDUxHOJpwFNOSJnbOZTCDU-dw",
    storeUrl: "https://play.google.com/store/apps/details?id=tangle3d.twistedrope.untie.untangle&hl=en",
    demo: ["/playable/twisted/twisted1.html", "/playable/twisted/twisted2.html"]
  },
  {
    id: "Tangle Frenzy",
    title: "Tangle Frenzy3D",
    description: "Cocos Creator",
    image: "https://play-lh.googleusercontent.com/GjnCRDGh4RMHGHuqg_vrwz28iFrHWqJVsOvM8fR_STpPmfULYV0cGFvTJ0Qp2nZ8mmY",
    storeUrl: "https://play.google.com/store/apps/details?id=com.percas.tangle.frenzy.jam.knot.rope.untie",
    demo: ["/playable/thread-frenzy/tf1.html"]
  },
  {
    id: "Grill Cooking: Sort Challenge",
    title: "Grill Cooking: Sort Challenge",
    description: "Unity Luna",
    image: "https://play-lh.googleusercontent.com/ctLU7H1G6jmWx4dVO30j2UtxHIxY1SZfq0JYtviaZ_pYp9Gn4hM7Ghqbhc7eYAmnNbGfKF2_j1dkNx5GoBv0Wg",
    storeUrl: "https://play.google.com/store/apps/details?id=com.grill.sorting.food.match.puzzle&hl=en",
    demo: ["https://playground.lunalabs.io/preview/290606/390190/3b8129d01aa236da207be1a6a7f3cadb314a385017889398c34e42393aec589d", "https://playground.lunalabs.io/preview/288467/387474/3b8129d01aa236da207be1a6a7f3cadb314a385017889398c34e42393aec589d"]
  },
  {
    id: "Flower Sort: Bloom Puzzle Game",
    title: "Flower Sort: Bloom Puzzle Game",
    description: "Unity Luna",
    image: "https://play-lh.googleusercontent.com/1xMkoZVMJ_b-8g1vmWaVhltxSvjx1f-KFzaJh5ZSAGUZGcU5ZvDZBt6ITpTJbMr3E40",
    storeUrl: "https://play.google.com/store/apps/details?id=com.flower.puzzle.blossom.sort.color&hl=en",
    demo: ["https://playground.lunalabs.io/preview/268242/363105/3b8129d01aa236da207be1a6a7f3cadb314a385017889398c34e42393aec589d",
      "https://playground.lunalabs.io/preview/264248/358363/3b8129d01aa236da207be1a6a7f3cadb314a385017889398c34e42393aec589d"
    ]
  },
  {
    id: "Wool Sorting: Unravel Yarn 3D",
    title: "Wool Sorting: Unravel Yarn 3D",
    description: "Unity Luna",
    image: "https://play-lh.googleusercontent.com/3ZS8d1bXV0wZJTHfqWvMwa-0vFqCN-AsZG6iN1plkkMDvpL6mZZjVaMbTN-pkQgMc0A",
    storeUrl: "https://play.google.com/store/apps/details?id=com.wool3d.yarn.sort.jam.puzzle&hl=en",
    demo: ["https://playground.lunalabs.io/preview/297739/399153/3b8129d01aa236da207be1a6a7f3cadb314a385017889398c34e42393aec589d",
      "https://playground.lunalabs.io/preview/285351/383764/3b8129d01aa236da207be1a6a7f3cadb314a385017889398c34e42393aec589d"]
  },
  {
    id: "Satiszone: Perfect ASMR Tidy",
    title: "Satiszone: Perfect ASMR Tidy",
    description: "Unity Luna",
    image: "https://play-lh.googleusercontent.com/m_Crai--W6HGBz79HFV1iZVtgtkTfQ3mA9lCDGnbNNKbiXKRtVGlNtDTZSfto5gGLQ",
    storeUrl: "https://play.google.com/store/apps/details?id=com.satisfy.asmr.relax.perfect.tidy&hl=en",
    demo: ["https://playground.lunalabs.io/preview/245618/335427/3b8129d01aa236da207be1a6a7f3cadb314a385017889398c34e42393aec589d", "https://playground.lunalabs.io/preview/218111/301729/3b8129d01aa236da207be1a6a7f3cadb314a385017889398c34e42393aec589d", "https://playground.lunalabs.io/preview/245779/335673/3b8129d01aa236da207be1a6a7f3cadb314a385017889398c34e42393aec589d"]
  },
  {
    id: "Cozy Life: Decor Room",
    title: "Cozy Life: Decor Room",
    description: "Unity Luna",
    image: "https://play-lh.googleusercontent.com/LD8PAwog7h9KFG6EvTfcxdGtzl5tOoVHvKH1E4YcS8OjuENQiztA_N7Hza4ERDESJ1yXo4Fu1s56Q6tm-mNGvQ",
    storeUrl: "https://play.google.com/store/apps/details?id=com.unpacking.cozy.home.dream&hl=en",
    demo: ["https://playground.lunalabs.io/preview/281798/379393/3b8129d01aa236da207be1a6a7f3cadb314a385017889398c34e42393aec589d", "https://playground.lunalabs.io/preview/247388/337670/3b8129d01aa236da207be1a6a7f3cadb314a385017889398c34e42393aec589d"]
  },
  {
    id: "Others",
    title: "Others",
    description: "Unity Luna",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ92PDUHiEiCoYZ63-i-63n99beZo0pvkuuHg&s",
    storeUrl: "",
    demo: ["https://playground.lunalabs.io/preview/320190/426973/3b8129d01aa236da207be1a6a7f3cadb314a385017889398c34e42393aec589d", "https://playground.lunalabs.io/preview/255837/348015/3b8129d01aa236da207be1a6a7f3cadb314a385017889398c34e42393aec589d"]
  },
];

export const mobileDevelopment = [
  {
    id: "blackhole",
    title: "Blackhole",
    createdAt: "2022",
    shortDescription:
      "Online music streaming mobile application.",
    description:
      "Blackhole is a music streaming application for mobile devices with a user-friendly interface and extensive online music library. Features include playlist management, offline playback, and music discovery.",
    platform: "Android",
    stack: "React Native, Expo, Android Studio",
    position: "Fullstack/Mobile Developer",
    githubUrl: "https://github.com/blackbeans-1301/blackhole-termprj",
    thumbnail: blackholeThumbnail,
    images: [
      "https://i.imgur.com/L8TF8Rq.png",
      "https://i.imgur.com/6jk6bMy.png",
    ],
  },
  {
    id: "four-handy-flutter",
    title: "4Handy Mobile",
    createdAt: "2021",
    shortDescription:
      "Mobile task management application for 4Handy company.",
    description:
      "A mobile version of the 4Handy task management system, built with Flutter for cross-platform compatibility. Enables team members to manage tasks, track progress, and collaborate on-the-go.",
    platform: "Android/iOS",
    stack: "Flutter, 4Handy API, Android Studio, Firebase",
    position: "Mobile Developer",
    githubUrl: "private",
    thumbnail: fourhandyFlutterThumbnail,
    images: [
      "https://i.imgur.com/OP2vQay.png",
      "https://i.imgur.com/0e7P2tF.png",
    ],
  },
  {
    id: "bedtime",
    title: "Bedtime",
    createdAt: "2023",
    shortDescription:
      "Mobile application to improve sleep quality and tracking.",
    description:
      "Bedtime is a mobile app designed to help users improve their sleep quality through tracking, analysis, and relaxation features. Includes sleep monitoring, bedtime reminders, and soothing sounds.",
    platform: "Android/iOS",
    stack: "Flutter, Android Studio, Firebase",
    position: "Mobile Developer",
    githubUrl: "https://github.com/blackbeans-1301/bedtime",
    thumbnail: bedtimeThumbnail,
    images: ["https://i.imgur.com/9NLKkQ1.png"],
  },
];

export const otherProjects = [
  {
    id: "flappy-bird",
    title: "Flappy Bird Clone",
    createdAt: "2020",
    shortDescription: "A clone of the popular Flappy Bird game.",
    description: "A recreation of the classic Flappy Bird game built with C++ and SDL2, demonstrating game development fundamentals and object-oriented programming principles.",
    platform: "Windows",
    stack: "C++, SDL2, Object-Oriented Programming",
    position: "Game Developer",
    githubUrl: "https://github.com/blackbeans-1301/flappy-bird-clone",
    thumbnail: flappybirdThumbnail,
    images: [
      "https://cdn.tgdd.vn/Files/2022/07/18/1448628/h2_1280x720-800-resize.jpg",
      "https://static.tuoitre.vn/tto/i/s626/2014/02/10/LY7rBkqu.jpg",
    ],
  },
];
