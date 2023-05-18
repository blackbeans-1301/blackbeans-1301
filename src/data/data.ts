import blackholeThumbnail from "../../public/thumbnail/blackhole.jpg";
import bookinghubThumbnail from "../../public/thumbnail/booking.png";
import chewchewThumbnail from "../../public/thumbnail/chewchew.png";
import fourhandyThumbnail from "../../public/thumbnail/4handy.png";
import fourhandyFlutterThumbnail from "../../public/thumbnail/4handy-flutter.png";
import savorThumbnail from "../../public/thumbnail/savor.png";
import flappybirdThumbnail from "../../public/thumbnail/flappy-bird.jpg";
import bedtimeThumbnail from "../../public/thumbnail/bedtime.png";
import portfolioThumbnail from "../../public/thumbnail/portfolio-thumbnail.png";

export const bioData = [
  {
    id: 1,
    year: "2020",
    description: "Bắt đầu học CNTT tại trường Đại học Công nghệ - ĐHQGHN(UET).",
  },
  {
    id: 2,
    year: "2022",
    description: "Làm việc tại 4Handy với vai trò fullstack/mobile developer.",
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
    category: "Programming Language",
    skills: ["JavaScript/Python/Dart"],
  },
  {
    id: 2,
    category: "Web Development",
    skills: [
      "Responsive",
      "AngularJS",
      "ReactJS và React Framework như Gatsby, Next",
      "NodeJS, Flask (python)",
    ],
  },
  {
    id: 3,
    category: "Mobile Development",
    skills: ["React Native", "Flutter (Dart)", "AWS Amplify", "Firebase"],
  },
  {
    id: 4,
    category: "Database",
    skills: ["MySql Server", "MongoDB"],
  },
  {
    id: 5,
    category: "External Skills",
    skills: [
      "Nghe/Đọc/Hiểu tiếng Anh và giao tiếp cơ bản.",
      "Tiếp thu nhanh, có khả năng tự học.",
      "Thiết kế giao diện ứng dụng cơ bản (basic UI design).",
    ],
  },
];

export const webDevelopment = [
  {
    id: "savor",
    title: "Savor",
    createdAt: "2022",
    shortDescription:
      "Ứng dụng web giới thiệu các mẫu bánh sinh nhật và đặt hàng online.",
    description:
      "Savor là web dùng để giới thiệu các mẫu bánh của hệ thống bánh ngọt - trà sữa Savor. Trang web này nhằm giới thiệu các mẫu bánh kem và cho phép người dùng đặt bánh online.",
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
    shortDescription: "Web quản lý công việc tại 4Handy.",
    description: "Web quản lý công việc tại 4Handy.",
    platform: "Windows/macOS/Linux/iOS/Android",
    stack: "AngularJS, MongoDB, ExpressJS, Redis.",
    position: "FullStack Developer.",
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
      "Ứng dụng web hỗ trợ đặt phòng khách sạn/nhà nghỉ online cho du khách.",
    description:
      "Booking Hub hướng đến người sử dụng là những lữ khách du lịch nhằm phục vụ việc đặt phòng thuê khách sạn/nhà nghỉ.",
    platform: "Windows/macOS/Linux/iOS/Android",
    stack: "ReactJS, TailwindCSS, ExpressJS, MySQL database",
    position: "Front-end developer",
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
    shortDescription: "Trang web bán đồ cho thú cưng.",
    description:
      "ChewChew được tạo ra với mục đích làm trang web bán đồ cho thú cưng. Lấy cảm hứng từ Chewy.",
    platform: "Windows/macOS/Linux/iOS/Android",
    stack: "Html, CSS, Javascript, ExpressJS, MongoDB",
    position: "Front-end developer",
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
      "Ứng dụng nghe nhạc trực tuyến dành cho thiết bị di động.",
    description:
      "Blackhole là một ứng dụng nghe nhạc dành cho các thiết bị di động với giao diện thân thiện và dễ sử dụng cùng với kho nhạc online phong phú.",
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
      "Ứng dụng quản lý công việc tại 4Handy dành cho thiết bị di động.",
    description:
      "Ứng dụng quản lý công việc tại 4Handy dành cho thiết bị di động.",
    platform: "Android/iOS",
    stack: "Flutter, 4Handy API, Android Studio, Firebase.",
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
      "Ứng dụng hỗ trợ cho việc tăng chất lượng giấc ngủ dành cho di động.",
    description:
      "Ứng dụng hỗ trợ cho việc tăng chất lượng giấc ngủ dành cho di động.",
    platform: "Android/iOS",
    stack: "Flutter, Android Studio, Firebase.",
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
    shortDescription: "Bản Clone của game Flappy Bird.",
    description: "Bản Clone của game Flappy Bird.",
    platform: "Windows",
    stack: "C++, SDL2, Object-Oriented Programming",
    position: "Game developer",
    githubUrl: "https://github.com/blackbeans-1301/flappy-bird-clone",
    thumbnail: flappybirdThumbnail,
    images: [
      "https://cdn.tgdd.vn/Files/2022/07/18/1448628/h2_1280x720-800-resize.jpg",
      "https://static.tuoitre.vn/tto/i/s626/2014/02/10/LY7rBkqu.jpg",
    ],
  },
];
