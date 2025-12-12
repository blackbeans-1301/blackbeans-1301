import blackholeThumbnail from "../../public/thumbnail/blackhole.jpg";
import bookinghubThumbnail from "../../public/thumbnail/booking.png";
import chewchewThumbnail from "../../public/thumbnail/chewchew.png";
import fourhandyThumbnail from "../../public/thumbnail/4handy.png";
import fourhandyFlutterThumbnail from "../../public/thumbnail/4handy-flutter.png";
import savorThumbnail from "../../public/thumbnail/savor.png";
import flappybirdThumbnail from "../../public/thumbnail/flappy-bird.jpg";
import bedtimeThumbnail from "../../public/thumbnail/bedtime.png";
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
      "React, Next.js, Svelte, AngularJS",
      "Node.js, Express, NestJS",
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
    skills: ["MySQL", "MongoDB", "Git", "Docker", "Linux Admin"],
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
  },
  {
    id: "booking-hub",
    title: "Booking Hub",
    createdAt: "2022",
    shortDescription:
      "Online hotel and accommodation booking platform for travelers.",
    description:
      "Booking Hub is a web application designed for travelers to easily search and book hotels and accommodations online. Features include room browsing, availability checking, and secure booking system.",
    platform: "Windows/macOS/Linux/iOS/Android",
    stack: "ReactJS, TailwindCSS, ExpressJS, MySQL database",
    position: "Front-end Developer",
    githubUrl: "https://github.com/blackbeans-1301/BookingHub",
    thumbnail: bookinghubThumbnail,
    images: [
      "https://i.imgur.com/qtIsLQM.png",
      "https://i.imgur.com/kY7mJu9.png",
    ],
  },
  {
    id: "chew",
    title: "ChewChew",
    createdAt: "2021",
    shortDescription: "E-commerce website for pet supplies.",
    description:
      "ChewChew is an e-commerce platform created for selling pet supplies and accessories. Inspired by Chewy, it provides a user-friendly shopping experience for pet owners.",
    platform: "Windows/macOS/Linux/iOS/Android",
    stack: "HTML, CSS, JavaScript, ExpressJS, MongoDB",
    position: "Front-end Developer",
    githubUrl: "https://github.com/blackbeans-1301/chew",
    thumbnail: chewchewThumbnail,
    images: ["https://i.imgur.com/nvdoGs4.png"],
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
