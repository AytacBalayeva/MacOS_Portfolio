const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
    type: "toggle-theme",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: false,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];
//Todo:create a blog post and add it to the blogPosts array with the following properties: id, date, title, image, and link. The blog post should be about a recent project or achievement in your portfolio.
const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Shadcn", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    category: "Database",
    items: ["MongoDB", "Supabase", "Firebase", "Prisma ORM"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Vercel", "Netlify", "Render"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/AytacBalayeva",
  },
  {
    id: 2,
    text: "Linkedin",
    icon: "/icons/linkedin.svg",
    bg: "#4bcb63",
    link: "https://www.linkedin.com/in/aytac-balayeva/",
  },
  {
    id: 3,
    text: "Email",
    icon: "/icons/email.svg",
    bg: "#05b6f6",
    link: "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRfHqCHTKKHvFBbgfMSzwkCtwrNxQhfLQKRqnLhvtJKQFMfpdnKlbmCFNgRSHfpQnZxwJM",
  },
];

export { navLinks, navIcons, dockApps, blogPosts, techStack, socials };

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Shine Ecommerce Website Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Shine Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Shine eCommerce website is a sleek and modern platform designed for shopping the latest Shine collections.",
            "Instead of a simple online store, it delivers an immersive experience with bold visuals, interactive product displays, and smooth navigation.",
            "Think of it like walking into a flagship Shine store—but right from your phone or laptop.",
            "It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
          ],
        },
        {
          id: 2,
          name: "shine.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://shine-sigma.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "shine.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Full-Featured Food Ordering Website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Food Ordering Website.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "A full-featured online food ordering system built with the MERN stack, designed to deliver a seamless experience for both customers and administrators..",
            "Customers can browse a paginated menu, search for meals, add items to their cart, leave reviews and ratings, and complete orders through a smooth checkout flow with PayPal and credit card support. Each user has a personal profile to track their order history..",
            "Admins have full control through a dedicated dashboard — managing meals, monitoring orders, handling user accounts, and marking deliveries as completed.",
            "Built with React and Redux Toolkit on the frontend, Node.js and Express on the backend, MongoDB for data persistence, and JWT for secure authentication.",
          ],
        },
        {
          id: 1,
          name: "burgers.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://burgers-zo9w.onrender.com/",
          position: "top-20 left-20",
        },
        {
          id: 2,
          name: "food-ordering-website.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Real-time chat application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "A modern real-time chat application.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A modern real-time chat application built from scratch with a focus on performance, security, and user experience.",
            "Users can sign up, log in, and instantly start chatting with online contacts. Messages are delivered in real time via Socket.io, with typing indicators and online/offline presence to make conversations feel alive. Notification and typing sounds keep users engaged while remaining toggleable for comfort. New users receive a welcome email on signup powered by Resend, and image uploads are handled seamlessly through Cloudinary.",
            "Security is taken seriously with custom JWT authentication — no third-party auth providers — and API rate limiting powered by Arcjet to protect against abuse.",
            "The frontend is built with React, Tailwind CSS, and DaisyUI for a clean and responsive interface, with Zustand handling global state. The backend is a REST API built on Node.js and Express, backed by MongoDB for data persistence.",
          ],
        },
        {
          id: 2,
          name: "chatify.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://chatify-app.sevalla.app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "chatify.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 right-110",
      imageUrl: "/images/aytac.jpg",
    },
    {
      id: 2,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 right-80",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/aytac.jpg",
      description: [
        "Hey! I’m Aytac 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
