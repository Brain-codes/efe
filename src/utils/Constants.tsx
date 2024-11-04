// import { AccordionItem } from "@/app/projects/ProjectsWrapper";
import { AccordionItem } from "@/app/projects/ProjectsWrapper";
import {
  Express,
  Flutter,
  GraphicsPen,
  Kotlin,
  NextIcon,
  PhoneIcon,
  Ps,
  TypS,
  WebIcon,
} from "../../public/images/RenderedIcons";
import { heroWhatIDoProp, skillsProp } from "../../types";

export const HeroWhatIDo: heroWhatIDoProp = [
  {
    icon: GraphicsPen,
    title: "UI/UX Graphics Design",
    color: "713C3C",
    tColor: "FFECEC",
  },
  {
    icon: WebIcon,
    title: "Web Development",
    color: "294D4D",
    tColor: "A4FCFC",
  },
  {
    icon: PhoneIcon,
    title: "Mobile Development",
    color: "2A294D",
    tColor: "ECEEFF",
  },
];

export const allSkills: skillsProp = [
  {
    icon: NextIcon,
    color: "0F0F0F",
    category: "frontend",
  },
  {
    icon: Ps,
    color: "16739266",
    category: "frontend",
  },
  {
    icon: Flutter,
    color: "065A9D66",
    category: "frontend",
  },
  {
    icon: Kotlin,
    color: "7F52FF66",
    category: "frontend",
  },
  {
    icon: TypS,
    color: "3178C666",
    category: "frontend",
  },
  {
    icon: Express,
    color: "21212166",
    category: "frontend",
  },
  {
    icon: GraphicsPen,
    color: "0F0F0F",
    category: "backend",
  },
  {
    icon: GraphicsPen,
    color: "0F0F0F",
    category: "stacks",
  },
  {
    icon: GraphicsPen,
    color: "0F0F0F",
    category: "stacks",
  },
  {
    icon: GraphicsPen,
    color: "0F0F0F",
    category: "stacks",
  },
  {
    icon: GraphicsPen,
    color: "0F0F0F",
    category: "others",
  },
  {
    icon: GraphicsPen,
    color: "0F0F0F",
    category: "others",
  },
  {
    icon: GraphicsPen,
    color: "0F0F0F",
    category: "others",
  },
  {
    icon: GraphicsPen,
    color: "0F0F0F",
    category: "others",
  },
];

export const accordionItems: AccordionItem[] = [
  {
    title: "5th Element",
    content: [
      "5th Element specializes in innovative solutions and products. Their website offers an overview of their offerings, projects, and contact details.",
      "I developed the website to effectively present their innovative solutions and engage potential clients.",
      "The site also includes a news and updates section, keeping visitors informed about the latest developments and projects.",
    ],
    link: "https://5thelement.ng/",
    image: ["/images/fifth.png"],
  },
  {
    title: "Reni Store",
    content: [
      "Renistore is an online store dedicated to helping vendors and buyers purchase countless goods using their store software.",
      "As a Front-End Web Developer at Renistore, I redesigned and developed the company website and built an E-commerce Web Application with React, enabling nationwide product orders.",
      "I also developed an Administration Dashboard for product management, sales tracking, analysis, and record keeping, enhancing business operations.",
    ],
    link: "https://www.reni.store",
    image: ["/images/renistore.png"],
  },
  {
    title: "RENITRUST",
    content: [
      "Renitrust is an online escrow system designed to ensure secure transactions between buyers and sellers. It acts as a middleman to facilitate transactions when trust is an issue.",
      "I contributed to building the company's escrow Web Application using React, ensuring a secure and user-friendly platform.",
    ],
    link: "https://www.renitrust.com",
    image: ["/images/renitrust.png"],
  },
  {
    title: "THE RBC",
    content: [
      "The Shekinah Restoration Ministry (R.B.C) is a church website allowing the church to upload content for users to access media, such as messages, a picture gallery, and an upcoming live streaming platform.",
      "I developed the website to enhance user engagement and accessibility to church resources.",
      "The platform also includes an administration section for managing media uploads, user interactions, and live stream settings.",
    ],
    link: "https://www.therbc.netlify.app",
    image: ["/images/rbc.png"],
  },
  {
    title: "Sabi Consulting",
    content: [
      "Sabi Consulting offers professional consulting services across various fields. The website provides detailed information about their services, clients, and contact information.",
      "I developed the website to improve client engagement and streamline access to consulting services.",
      "The platform includes an admin portal for managing client information, course update, service offerings, and communication tools to facilitate efficient client-consultant interactions.",
    ],
    link: "https://www.sabiconsult.org",
    image: ["/images/sabi.png"],
  },
  {
    title: "Kevlar and Fox",
    content: [
      "Kevlar and Fox is a creative agency that showcases their portfolio, services, and contact information through a modern and attractive website.",
      "I built the website to highlight the agency's creative work and attract potential clients.",
      "The site also features a blog and case studies section, providing insights into their creative process and successful projects.",
    ],
    link: "https://kevlar-and-fox-efe.vercel.app",
    image: ["/images/kevlar.png"],
  },

  {
    title: "Imkash Group",
    content: [
      "Imkash Group is a diversified company operating in various sectors. Their website provides detailed information on their services and sectors of operation.",
      "I built the website to enhance their online presence and provide easy access to company information.",
    ],
    link: "https://imkashgroup.com/",
    image: ["/images/imkash.png"],
  },
  {
    title: "Stonemill Nigeria",
    content: [
      "Stonemill Nigeria specializes in construction and building materials. Their website offers comprehensive information about their products and services.",
      "I developed the website to improve product visibility and customer engagement.",
      "The platform includes a product catalog with detailed specifications and an inquiry form for potential customers.",
    ],
    link: "https://stonemillng.com/",
    image: ["/images/stonemill.png"],
  },
  {
    title: "FGM Ministries",
    content: [
      "FGM Ministries is a religious organization providing spiritual guidance and resources. Their Mobile App offers access to messages, events, and a member login portal.",
      "I developed the Admin website and mobile application with flutter to enhance user experience and provide easy access to ministry resources.",
      "The platform includes an admin portal for managing member information, event scheduling, and content uploads, ensuring smooth operation and member engagement.",
    ],
    link: "https://fgministries.netlify.app/login",
    image: ["/images/fgm.png"],
  },
  {
    title: "Escrow Service Platform (School Project)",
    content: [
      "The Escrow Service Platform is a school project designed to facilitate secure transactions between buyers and sellers.",
      "I developed the platform using React, focusing on creating a secure and intuitive user experience.",
      "The project includes an admin portal for managing transactions, user information, and dispute resolutions, ensuring a smooth and reliable service.",
    ],
    link: "https://escrowservice.netlify.app/",
    image: ["/images/escrow.png"],
  },
];

export const worksData = [
  {
    backgroundColor: "#003018",
    title: "Imkash Group",
    description:
      "Imkash Group of Companies is a conglomerate Company that is highly diversified. It houses a set of companies offering a medley of services in Nigeria across specialised sectors of the Nigerian economy.",
    image: "/images/imkashOne.png",
    link: "https://imkashgroup.com/",
  },
  {
    backgroundColor: "#00449C",
    title: "Reni Store",
    description:
      "Renistore is an online store dedicated to helping vendors and buyers purchase countless goods using their store software.",
    image: "/images/renistore.png",
    link: "https://www.reni.store",
  },
  {
    backgroundColor: "#008892",
    title: "Sabi Consulting",
    description:
      "Sabi Consulting offers professional consulting services across various fields.",
    image: "/images/sabi.png",
    link: "https://www.sabiconsult.org",
  },
  {
    backgroundColor: "#00449C",
    title: "Reni Store",
    description:
      "Renistore is an online store dedicated to helping vendors and buyers purchase countless goods using their store software.",
    image: "/images/renistore.png",
    link: "https://www.reni.store",
  },
  // Add more work objects as needed
];
