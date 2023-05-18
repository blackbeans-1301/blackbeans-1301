import blackholeThumbnail from "../../public/images/blackhole.jpg";
import bookinghubThumbnail from "../../public/images/travel.jpg";
import flappybirdThumbnail from "../../public/images/flappy-bird.jpg";
import portfolioThumbnail from "../../public/images/portfolio-thumbnail.png";

export const bioData = [
  {
    id: 2,
    year: "2020",
    description: "Bắt đầu học CNTT tại trường Đại học Công nghệ - ĐHQGHN(UET).",
  },
  {
    id: 3,
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
    label: "Programming Language",
    descriptions: ["JavaScript/Python/Dart"],
  },
  {
    id: 2,
    label: "Web Development",
    descriptions: [
      "Responsive",
      "AngularJS",
      "ReactJS và React Framework như Gatsby, Next",
      "NodeJS, Flask (python)",
    ],
  },
  {
    id: 3,
    label: "Mobile Development",
    descriptions: [
      "Responsive",
      "React Native",
      "Flutter (Dart)",
      "AWS Amplify",
      "Firebase",
    ],
  },
  {
    id: 4,
    label: "Database",
    descriptions: ["MySql Server", "MongoDB"],
  },
  {
    id: 5,
    label: "External Skills",
    descriptions: [
      "Nghe/Đọc/Hiểu tiếng Anh cơ tố, có thể giao tiếp cơ bản",
      "Tiếp thu nhanh, có khả năng tự học",
      "Thiết kế giao diện ứng dụng cơ bản (basic UI design)",
    ],
  },
];

export const works = [
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
      "https://www.craftz.dog/images/works/inkdrop_01.png",
      "https://www.craftz.dog/images/works/inkdrop_02.png",
    ],
  },
  {
    id: "bookinghub",
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
      "https://www.craftz.dog/images/works/inkdrop_01.png",
      "https://www.craftz.dog/images/works/inkdrop_02.png",
    ],
  },
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
      "https://lh3.googleusercontent.com/MWs95lKc0LiJnlbeiDJikT3B3AU3w5pL3M8RiOF3fGHimu4jwlHrmWCI4jIqZPqCIkWqjIOPtdFCyD-_v04sOwhR9A=w640-h400-e365-rj-sc0x00ffffff",
      "https://vnreview.vn/image/94/91/949163.jpg?t=1392128083924",
    ],
  },
  {
    id: "portfolio",
    title: "Porfolio Site",
    createdAt: "2023",
    shortDescription: "Trang web giới thiệu về bản thân và các project đã làm.",
    description:
      "Là một trang web với mục đích giới thiệu bản thân và các dự án đã thực hiện trước đây",
    platform: "Windows/macOS/Linux/iOS/Android",
    stack: "NextJS, Chakra-ui, TailwindCss",
    position: "Front-end Developer",
    githubUrl: "https://github.com/blackbeans-1301/bb-portfolio",
    thumbnail: portfolioThumbnail,
    images: [
      "https://i.imgur.com/wQHHTqH.png",
      "https://i.imgur.com/agojThk.png",
    ],
  },
];
