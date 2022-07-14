import CVImg from "../assets/images/cv.webp";
import WeatherImg from "../assets/images/weather.webp";
import ProjectIcon from "../components/Icons/ProjectIcon";
import ChatAppImg from "../assets/images/chat-app.webp";
import BattleshipImg from "../assets/images/battleship.webp";
import ComponentNexusImg from "../assets/images/component-nexus.webp";
import {
  html,
  css,
  javascript,
  react,
  materialui,
  bootstrap,
  sass,
  firebase,
} from "../assets/icons/Icons";

const myProjects = [
  {
    title: "Chat App",
    image: ChatAppImg,
    summary:
      "A chat application with CRUD functionalities where users can chat in real-time. Sign in with a Google account, create private and group chats, send and delete text, image, GIF and emoji messages.",
    technologies: [
      { icon: html, text: "HTML5" },
      { icon: css, text: "CSS3" },
      { icon: javascript, text: "JavaScript" },
      { icon: react, text: "React" },
      { icon: materialui, text: "Material UI" },
      { icon: firebase, text: "Firebase" },
    ],
    icon: <ProjectIcon icon={"fa-solid fa-comment fa-10x project-icon"} />,
    preview: "https://github.com/AidenM99/Chat-App",
    code: "https://chat-app-4cf40.web.app/",
  },
  {
    title: "Component Nexus",
    image: ComponentNexusImg,
    summary:
      "A shopping cart appliction for a fictional e-commerce site. The store allows users to browse a range of items, view products and add or remove them from their cart.",
    technologies: [
      { icon: html, text: "HTML5" },
      { icon: css, text: "CSS3" },
      { icon: javascript, text: "JavaScript" },
      { icon: react, text: "React" },
      { icon: materialui, text: "Material UI" },
    ],
    icon: <ProjectIcon icon={"fa-solid fa-bag-shopping fa-10x project-icon"} />,
    preview: "https://github.com/AidenM99/Component-Nexus/",
    code: "https://aidenm99.github.io/Component-Nexus/",
  },
  {
    title: "Battleship",
    image: BattleshipImg,
    summary:
      "Interactive browser-based battleship game based on the Hasbro™ board game. Play against a smart AI that makes logical moves as an actual human player would.",
    technologies: [
      { icon: html, text: "HTML5" },
      { icon: css, text: "CSS3" },
      { icon: javascript, text: "JavaScript" },
      { icon: sass, text: "Sass" },
    ],
    icon: <ProjectIcon icon={"fa-solid fa-ship fa-10x project-icon"} />,
    preview: "https://github.com/AidenM99/Battleship",
    code: "https://aidenm99.github.io/Battleship/",
  },
  {
    title: "CV Creator",
    image: CVImg,
    summary:
      "An application that allows the user to create a CV with a simplistic but appealing design. Add or delete sections as needed, upload a profile photo and generate a PDF to save or print.",
    technologies: [
      { icon: html, text: "HTML5" },
      { icon: css, text: "CSS3" },
      { icon: javascript, text: "JavaScript" },
      { icon: react, text: "React" },
      { icon: bootstrap, text: "Bootstrap" },
      { icon: sass, text: "Sass" },
    ],
    icon: <ProjectIcon icon={"fa-solid fa-address-card fa-10x project-icon"} />,
    preview: "https://github.com/AidenM99/CV-Creator",
    code: "https://aidenm99.github.io/CV-Creator/",
  },
  {
    title: "Weather App",
    image: WeatherImg,
    summary:
      "A weather application made using the fetch and Open Weather Map APIs. Search for a location by city name, change between celsius and farenheit and get accurate time zone data.",
    technologies: [
      { icon: html, text: "HTML5" },
      { icon: css, text: "CSS3" },
      { icon: javascript, text: "JavaScript" },
    ],
    icon: <ProjectIcon icon={"fa-solid fa-cloud  fa-10x project-icon"} />,
    preview: "https://github.com/AidenM99/Weather-App",
    code: "https://aidenm99.github.io/Weather-App/",
  },
];

export default myProjects;
