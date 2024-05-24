/*
This project is created by Oskar Molander @2023.
*/


// Nav Bar

const navigation = [
    { name: "Experience", to: "#experience", href: "/#experience" },
    { name: "Projects", to: "#projects", href: "/#projects" },
    { name: "Education", to: "#education", href: "/#education" },
    { name: "Skills", to: "#skills", href: "/#skills" },
    { name: "References", to: "#references", href: "/#references" },
    { name: "Contact", to: "#contact", href: "/#contact" },

];


// HomeBanner

const profile = `I am a Senior Full-Stack Software Engineer.
I provide custom Web Apps, Websites, and High Quality - on-time Development.
I have over 7 years of experience in the IT field. I've created a number of comparison websites, browser extensions as well as other apps for clients that have increased revenue for their businesses as well as streamlined their work flows.
I have expert knowledge with affiliate marketing. My experience includes building two of the TOP 5 affiliate networks in the world - mundomedia.com (acquired) and Clickdealer.com. \n
My goal is to help you succeed and I do my best for your business.`

// Experiences

const LeviHistory = ["As a software developer, I played a pivotal role in designing and developing cutting-edge web applications for clients in the finance and healthcare industries.",
    "I led the design and implementation of key modules and also provided mentorship to junior developers, ensuring the successful delivery of high-quality solutions.",
    "I developed a responsive and intuitive user interface for the e-commerce platform using Vue.js and harnessed the power of Vuex for state management to provide a dynamic and engaging shopping experience, engineered a robust backend system utilizing GraphQL, Node.js, and Express.js for efficient data retrieval and manipulation, integrated Postgres and Redis for relational database needs and caching optimization.",
    "Technologies Used: Javascript, Python, React.js, Redux D3.js, Redux, Chart.js, Highcharts, Node.js, Express.js, crypto library, bcrypt library, MongoDB, Redis, TensorFlow, scikit-learn, Flask, Kubernetes, Docker Compose, GIt"
]

const VegaHistory = ["As a full-stack engineer, I was integral in developing an innovative e-commerce platform, leveraging a modern tech stack to deliver a seamless and feature-rich shopping experience for users.",
    "I implemented a responsive and user-friendly interface for the online learning platform using React.js, integrated Redux for efficient state management, utilized Next.js for server-side rendering and SEO capabilities, collaborated with UX/UI designers for pixel-perfect designs, leveraged Tailwind CSS for rapid UI development, employed Jest and React Testing Library for unit and integration testing, integrated Storybook for component-driven development, and actively participated in code reviews, backend API integrations, and continuous improvement of frontend architecture and best practices.",
    "Technologies Used: Vue.js, Vuex, React, Angular, JavaScript, GraphQL, Node.js, Express.js, Postgres, Redis, AWS (Amazon Web Services), Google Cloud Platform (GCP), Microsoft Azure, Docker, Kubernetes, Git, SVN",
];
const BraineeringHistory = ["As a Frontend Engineer, I have been instrumental in leading the development of a cuttingedge data visualization platform, leveraging a modern tech stack to deliver intuitive and interactive user interfaces for data analysis and presentation. My role involved driving the frontend development and ensuring the seamless integration of advanced visualization features.",
    "I architected and implemented a highly responsive and visually appealing user interface for the data visualization platform using Vue.js, integrated D3.js for custom and interactive visualizations, leveraged TypeScript for code maintainability and collaboration, utilized GraphQL for efficient data retrieval, employed advanced CSS techniques including SASS/SCSS and CSS-in-JS libraries, used Webpack as a module bundler and build tool, implemented responsive design principles.",
    "Technologies Used: Vue.js, Vuex, D3.js, TypeScript, GraphQL, SASS/SCSS, Styled Components, Webpack, Media Queries, Flexbox/Grid Layouts, Git",
];

const LeviSite = {
    title: "Levi9 Technology Services",
    site: "https://www.Vega.se/",
    role: "Full-Stack Software Engineer",
    history: "SEPTEMBER 2022 – APRIL 2024 | NOVI SAD, SERBIA",
    experience: LeviHistory
};
const VegaSite = {
    title: "Vega IT",
    site: "https://www.Vega.se/",
    role: "Full-Stack Engineer",
    history: "MAY 2020 – AUGUST 2022 | NOVI SAD, SERBIA",
    experience: VegaHistory
};
const BraineeringSite = {
    title: "Braineering IT Solutions",
    site: "https://www.Braineering.co/",
    role: "Frontend Engineer",
    history: "OCTOBER 2017 – MAY 2020 | NOVI SAD, SERBIA",
    experience: BraineeringHistory
};


// Projects

const projects = [["/projects/React1.png", "/projects/React2.png", "http://realestate.com.au", "React"],
["/projects/React3.png", "/projects/React4.png", "http://hm.com", "React"],
["/projects/Next1.png", "/projects/Next2.png", "http://connect.agoda.com", "Next"],
["/projects/Django1.png", "/projects/Django2.png", "http://adipositaszentrum-limmattal.ch", "Django"],
["/projects/Vue1.png", "/projects/Vue2.png", "http://podcasters.spotify.com", "Vue"],
["/projects/Vue3.png", "/projects/Vue4.png", "http://padlet.com", "Vue"]];


// Educations

const university1 = {
    title: "University of Belgrade",
    site: "http://arhiva.rect.bg.ac.rs/en/index.php",
    degree: "Master of Computer Science (MSCS), Computer science",
    history: "August 2013 – October 2017 | NOVI SAD, SERBIA",
    mark: "/educations/belgrade.png"
};

const university2 = {
    title: "University of Belgrade",
    site: "http://arhiva.rect.bg.ac.rs/en/index.php",
    degree: "Bachelor of Computer Science (BCompSc), Computer engineering",
    history: "August 2009 – April 2013 | NOVI SAD, SERBIA",
    mark: "/educations/belgrade.png"
};


// Skills

const skills = [["React", 87], ["Node.js", 95],
["Next.js", 92], ["Python", 86],
["Vue", 82], ["Django", 87],
["Angular", 79], ["MySQL", 83],
["Tailwind", 85], ["PostgreSQL", 80],
["Solidity", 81], ["MongoDB", 89],
["Ethereum", 84], ["AWS", 82]];


// References

const co_worker1 = {
    name: "Thiago Porto",
    role: "CTO / Web Design Company",
    recommend: "Andrej displays exemplary professionalism and is able to take on challenges. He learns quickly and is an asset to any team.",
    img: "/references/Thiago.png"
};
const co_worker2 = {
    name: "Karina Mitchell",
    role: "UI/UX Designer  / Web Design Company",
    recommend: "Andrej is a great co-worker and problem solver. He is quick to extend his helping hand and makes a good team player.",
    img: "/references/Karina.png"
};


// Contact

const contact = {
    ServiceId: "service_9bi0k2a",
    TemplateId: "template_txz1uik",
    PublicKey: "DNiRbZ7UuX64apvaL"
}


// Social Link

const socialLinks = {
    github: 'https://github.com/andrejdukanic74',
    skype: 'live:.cid.f7304ac867a4dea0',
    discord: 'https://www.linkedin.com/in/andrej-dukanic-93255930a/'
}


// Total

const experiences = {
    LeviHistory,
    LeviSite,
    VegaHistory,
    VegaSite,
    BraineeringHistory,
    BraineeringSite
}

const educations = {
    university1,
    university2
}

const references = {
    co_worker1,
    co_worker2,
}

export {
    navigation,
    profile,
    experiences,
    projects,
    educations,
    skills,
    references,
    contact,
    socialLinks
}
