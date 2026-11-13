import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Yabsera Masrersha — Civil Engineer",
  author: "Yabsera Masrersha",
  description:
    "Civil Engineer specializing in structural design.",
  lang: "en",
  siteLogo: "/yabsera.jpg",
  navLinks: [
    { text: "Home", href: "#hero" },
    { text: "Contributions", href: "#contributions" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://x.com/Yabseramas" },
    { text: "Telegram", href: "https://t.me/Yabsera_1" },
    { text: "Email", href: "mailto:yabseramasresha2004@gmail.com" },
    { text: "Phone: 0919778519", href: "tel:0919778519" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Yabsera Masrersha",
    specialty: "Civil Engineer",
    summary: "Specializing in structural design.",
    email: "yabseramasresha2004@gmail.com",
  },
  experience: [
    {
      company: "Zalmart",
      position: "Lead Android Developer",
      startDate: "May 2018",
      endDate: "Sept 2020",
      summary: [
        "Implemented advanced memory management and code optimization techniques, resulting in a reduction in application load time by 40% and a decrease in crashes by 25%. This significantly improved user experience and increased user retention by 20%.",
        "I led a team of developers in building and integrating new features using Jetpack Android components such as LiveData and ViewModel. This enabled us to build scalable and maintainable applications, reducing the crash rate by 20% and speeding up the time to delivery of new features by 15%.",
        "Integrated Google Pay for in-app purchases, resulting in a 35% increase in mobile transaction revenue. Additionally, implemented Firebase Analytics to gain insights into user behavior, enabling data-driven optimizations and a 30% increase in user retention.",
      ],
    },
    {
      company: "Bankit",
      position: "Mobile Developer",
      startDate: "Feb 2017",
      endDate: "May 2018",
      summary: [
        "I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.",
        "I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts.",
      ],
    },
    {
      company: "Driveer",
      position: "Frontend Developer",
      startDate: "Jun 2015",
      endDate: "Oct 2016",
      summary:
        "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
    },
  ],
  projects: [
    {
      name: "Structural Design",
      summary: [
        "Design the external casing or chassis of the micro-cooler.",
        "Ensure the structure is strong enough to withstand transportation, vibration, and minor impacts.",
        "Design the internal arrangement to safely accommodate vaccine containers, cooling components, and batteries.",
        "Ensure the structure is lightweight and portable.",
      ],
      linkPreview: "",
      linkSource: "",
      image: "/micro-cooler/micro-cooler-3d.jpg",
      images: [
        "/micro-cooler/micro-cooler-3d.jpg",
        "/micro-cooler/micro-cooler-front.jpg",
        "/micro-cooler/micro-cooler-top.jpg",
        "/micro-cooler/micro-cooler-side.jpg",
        "/micro-cooler/micro-cooler-features.png",
      ],
    },
    {
      name: "Thermal Insulation",
      summary: [
        "Select suitable insulating materials such as polyurethane foam.",
        "Determine appropriate insulation thickness to minimize heat transfer.",
        "Reduce heat entering the cooler from the external environment.",
        "Help maintain the required vaccine storage temperature of 2°C–8°C.",
        "Minimize energy consumption by reducing cooling losses.",
      ],
      linkPreview: "",
      linkSource: "",
      image: "/thermal-insulation/cross-section-cooler-wall.jpg",
      images: [
        "/thermal-insulation/cross-section-cooler-wall.jpg",
        "/thermal-insulation/insulation-diagram-cutaway.jpg",
        "/thermal-insulation/cooler-urethane-foam.jpg",
        "/thermal-insulation/polyurethane-pu-layers.jpg",
        "/thermal-insulation/polyurethane-foam-slabs.jpg",
      ],
    },
    {
      name: "Material Selection",
      summary: [
        "As a Civil Engineer, I help select construction materials based on:",
        "Strength and durability.",
        "Thermal insulation properties.",
        "Weight and portability.",
        "Water and moisture resistance.",
        "Cost and local availability.",
      ],
      linkPreview: "",
      linkSource: "",
      image: "/material-selection/abs-petg-plastic.jpg",
      images: [
        "/material-selection/abs-petg-plastic.jpg",
        "/material-selection/stainless-steel.jpg",
        "/material-selection/aluminum-heat-sink.jpg",
        "/material-selection/silicone-rubber-gasket.jpg",
        "/material-selection/lithium-ion-battery.jpg",
        "/material-selection/solar-panel-20w.jpg",
        "/material-selection/summary.jpg",
      ],
    },
  ],
  about: {
    description: `
      Hi, I’m Yabsera Masrersha, a 4th year Civil Engineer student in ADDIS ABABA SCIENCE AND TECHNOLOGY UNIVERSITY, dedicated to designing and delivering resilient innovative infrastructure. With expertise in structural engineering, construction management.

      I am excited in using engineering concepts to tackle real-world issues in novel, practical, and cost-effective ways. I thrive where precision engineering meets sustainable design

      As a future Civil Engineer, I hope to expand my technical knowledge, practical skills, creativity, and problem-solving talents while working on projects that benefit people's lives and promote sustainable development.

      I value teamwork, responsibility, continuous learning, and innovation. My ambition is to become a competent Civil Engineer who contributes positively to society through quality engineering design and sustainable construction.
    `,
    image: "/yabsera.jpg",
  },
};

// #5755ff
