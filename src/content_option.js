import silhouetteImg from "./assets/images/yefta_silhouette_bw.jpg";
import missionaryImg from "./assets/images/projects/missionary-rental.png";
import garansiImg from "./assets/images/projects/garansi-vault.png";

const logotext = "YEFTA";
const meta = {
    title: "Yefta Febrianto Panggabean",
    description: "I’m Yefta Panggabean, a Full Stack Developer & Software Engineer based in Bandung, Indonesia.",
};

const introdata = {
    title: "I’m Yefta Panggabean",
    animated: {
        first: "Full Stack Web Developer",
        second: "Building Enterprise Web Apps",
        third: "Laravel · React · Next.js",
    },
    description: "Full Stack Developer specializing in Laravel, React, and Next.js. Experienced in engineering scalable enterprise systems, complex workflow automations, and modern web applications.",
    your_img_url: silhouetteImg,
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "Full Stack Software Engineer with a strong foundation in Computer Science (S.Kom, GPA 3.94 from Universitas Advent Indonesia). Proven track record in building and scaling web applications using Laravel, Livewire, React.js, Next.js, Node.js, and relational databases (PostgreSQL & SQL Server) within Agile SCRUM environments. Experienced in delivering critical enterprise modules for PT Sarana Multi Infrastruktur (SMI) and international platforms for DH DigiLab Pte Ltd. Detail-oriented and proactive in solving complex business challenges with robust digital solutions.",
};

const worktimeline = [
    {
        jobtitle: "Fullstack Web Developer",
        where: "PT Adidata Informatika",
        date: "Apr 2026 - Present",
    },
    {
        jobtitle: "Software Developer",
        where: "DH DigiLab Pte Ltd",
        date: "Feb 2026 - Apr 2026",
    },
    {
        jobtitle: "Software Developer Intern",
        where: "PT Adidata Informatika",
        date: "May 2025 - Aug 2025",
    },
    {
        jobtitle: "Lecturer's Assistant",
        where: "Universitas Advent Indonesia (FMIPA & FTI)",
        date: "Jan 2024 - Jan 2025",
    },
];

const skills = [
    {
        name: "Laravel & Livewire",
        value: 92,
    },
    {
        name: "React.js & Next.js",
        value: 88,
    },
    {
        name: "JavaScript & TypeScript",
        value: 85,
    },
    {
        name: "PostgreSQL & SQL Server",
        value: 86,
    },
    {
        name: "Node.js & RESTful APIs",
        value: 82,
    },
    {
        name: "Git & Agile / SCRUM",
        value: 90,
    },
];

const services = [
    {
        title: "Full Stack Web Development",
        description: "Designing and engineering responsive, high-performance web applications end-to-end utilizing Laravel, React.js, Next.js, and modern CSS frameworks.",
    },
    {
        title: "Enterprise Systems & Workflow Automation",
        description: "Developing robust internal enterprise solutions including Visitor Management Systems (VMS), room reservations, multi-tier approval flows, and dynamic reporting dashboards.",
    },
    {
        title: "API Development & Database Architecture",
        description: "Architecting clean, scalable RESTful APIs and managing relational databases (PostgreSQL, SQL Server, MySQL) with zero-downtime migrations and optimization.",
    },
];

const dataportfolio = [
    {
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        description: "Integrated Operational & Services System (IOSS) - PT SMI: Enterprise VMS with face-recognition KIOSK & multi-tier approvals.",
        link: "https://github.com/YeftaPanggabean13",
    },
    {
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        description: "Sistem Informasi TJSL - PT SMI: Web-based CSR management platform integrating proposal screening, verification, and disbursement tracking.",
        link: "https://github.com/YeftaPanggabean13",
    },
    {
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
        description: "WAGC Registration & CMS Platform - DH DigiLab Pte Ltd: Event management, registration handling, and dynamic CMS landing page.",
        link: "https://github.com/YeftaPanggabean13",
    },
    {
        img: missionaryImg,
        description: "Missionary Rental Management: Comprehensive rental platform with automated booking workflows and equipment tracking.",
        link: "https://github.com/YeftaPanggabean13/missionary-rental",
    },
    {
        img: garansiImg,
        description: "Garansi Vault: Digital warranty and invoice repository platform with automated warranty tracking and expiration alerts.",
        link: "https://github.com/YeftaPanggabean13",
    },
    {
        img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
        description: "Live Sales Kit MVP: Presentation platform with Admin Dashboard, attendee viewer page, and facial recognition check-in.",
        link: "https://github.com/YeftaPanggabean13",
    },
];

const contactConfig = {
    YOUR_EMAIL: "panggabeaneta@gmail.com",
    YOUR_FONE: "+62 822 7882 7021",
    description: "I am open to discuss web development projects, full-stack software engineering opportunities, or technology collaborations. Feel free to reach out!",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/YeftaPanggabean13",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
