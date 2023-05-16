import blackholeThumbnail from "../../public/images/blackhole.jpg";
import bookinghubThumbnail from "../../public/images/travel.jpg";

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

export const works = [
  {
    id: "blackhole",
    title: "Blackhole",
    description: "A Music app for mobile device.",
    thumbnail: blackholeThumbnail,
  },
  {
    id: "bookinghub",
    title: "BookingHub",
    description: "A booking web application for traveler.",
    thumbnail: bookinghubThumbnail,
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
    name: "Git",
    href: "https://github.com/blackbeans-1301",
    iconUrl: "/logo/github-icon.png",
  },
];
