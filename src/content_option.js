import silhouetteImg from "./assets/images/yefta_silhouette_bw.jpg";
import garansiVaultImg from "./assets/images/garansivault/garansi-vault.png";
import msRentImg from "./assets/images/ms.Rent/ms.Rent.png";

const logotext = "YEFTA";
const meta = {
    title: "Yefta Febrianto Panggabean",
    description:
        "Full stack engineer in Bandung. I build enterprise web systems — approvals, operations, and the messy business rules that break demos.",
};

const introdata = {
    title: "Yefta Panggabean",
    animated: {
        first: "Software engineer",
        second: "Enterprise web systems",
        third: "Laravel · React · Next.js",
    },
    description:
        "I ship internal tools and product surfaces that hold up under real office traffic. Visitor flows, multi-tier approvals, CMS editors, and the edge cases between them.",
    your_img_url: silhouetteImg,
};

const dataabout = {
    title: "Working notes",
    aboutme:
        "Computer Science graduate (S.Kom, GPA 3.94, Universitas Advent Indonesia). Most of my recent work sits inside Agile squads delivering operational systems for PT Sarana Multi Infrastruktur (via Adidata) and product features for DH DigiLab in Singapore. I care about correct state under concurrency, clear approval paths, and interfaces non-engineers can actually run.",
};

const worktimeline = [
    {
        jobtitle: "Fullstack Web Developer",
        where: "PT Adidata Informatika",
        date: "Apr 2026 — Present",
        detail:
            "IOSS for PT SMI — VMS, room booking, reimbursement approvals, reporting, storage migration.",
    },
    {
        jobtitle: "Software Developer",
        where: "DH DigiLab Pte Ltd",
        date: "Feb 2026 — Apr 2026",
        detail:
            "Next.js / Convex platform work: WAGC registration and a CMS landing editor for non-technical admins.",
    },
    {
        jobtitle: "Software Developer Intern",
        where: "PT Adidata Informatika",
        date: "May 2025 — Aug 2025",
        detail:
            "Client delivery + internal enterprise modules (Laravel, React, Inertia) with BA / QA / PM.",
    },
    {
        jobtitle: "Lecturer's Assistant",
        where: "Universitas Advent Indonesia — FMIPA & FTI",
        date: "Jan 2024 — Jan 2025",
        detail: "Teaching support, grading, and course materials across two faculties.",
    },
];

const skills = [
    "Laravel & Livewire",
    "React.js & Next.js",
    "TypeScript / JavaScript",
    "PostgreSQL & SQL Server",
    "Node.js & REST APIs",
    "Git · Scrum · Jira",
];

const services = [
    {
        title: "Full stack product builds",
        description:
            "From schema to UI — Laravel or Next.js apps with auth, admin surfaces, and deployment you can hand to a small team.",
    },
    {
        title: "Internal operations systems",
        description:
            "Visitor management, room booking, multi-tier approvals, notifications, and reporting that match how the office actually works.",
    },
    {
        title: "APIs & data that stay consistent",
        description:
            "REST boundaries, relational modeling, and migrations that do not strand existing URLs or half-approved records.",
    },
];

const dataportfolio = [
    {
        title: "IOSS — Integrated Operational & Services System",
        client: "PT Sarana Multi Infrastruktur (via Adidata)",
        period: "2026",
        summary:
            "Internal operations suite: floor-level visitor check-in, room reservation, and finance reimbursement flows with multi-tier approval.",
        role: "Fullstack developer — modules end-to-end inside a Scrum squad",
        stack: ["Laravel", "Livewire", "SQL Server", "Metronic"],
        highlights: [
            "Face-recognition KIOSK check-in per floor with a live visitor dashboard",
            "Multi-tier approvals for PUM, PJUM, transport, and representation claims",
            "Race-condition guards on concurrent approvals; COA validation for finance",
            "Excel reporting with embedded charts; checksum-safe storage migration without URL downtime",
        ],
        img: null,
        cover: "IOSS",
        link: null,
        linkLabel: "Walkthrough on request",
        confidential: true,
    },
    {
        title: "Sistem Informasi TJSL",
        client: "PT Sarana Multi Infrastruktur (via Adidata)",
        period: "2025",
        summary:
            "CSR platform covering proposal screening, field verification, and disbursement tracking.",
        role: "Contributor — web modules and integrations",
        stack: ["Laravel", "React"],
        highlights: [
            "Proposal screening and verification path for TJSL / CSR programs",
            "Disbursement tracking aligned with internal process checkpoints",
        ],
        img: null,
        cover: "TJSL",
        link: null,
        linkLabel: "Walkthrough on request",
        confidential: true,
    },
    {
        title: "WAGC registration & CMS",
        client: "DH DigiLab Pte Ltd",
        period: "2026",
        summary:
            "International event registration plus a landing CMS so marketing can ship copy without a developer ticket.",
        role: "Software developer — feature delivery with an international team",
        stack: ["Next.js", "Convex", "Better Auth"],
        highlights: [
            "Registration management with careful delete / data handling",
            "CMS editor for public landing content used by non-technical admins",
        ],
        img: null,
        cover: "WAGC",
        link: null,
        linkLabel: "Walkthrough on request",
        confidential: true,
    },
    {
        title: "Missionary Rental",
        client: "Personal / operations tool",
        period: "Side project",
        summary:
            "Motorbike rental operations in one place — booking workflow, fleet tracking, and rental status instead of scattered spreadsheets.",
        role: "Builder — concept through implementation",
        stack: ["Web app"],
        highlights: [
            "Automated booking workflow",
            "Vehicle & equipment tracking for day-to-day ops",
        ],
        img: msRentImg,
        cover: "RENT",
        link: "https://github.com/YeftaPanggabean13/missionary-rental",
        linkLabel: "View repository",
        confidential: false,
    },
    {
        title: "Garansi Vault",
        client: "Personal product",
        period: "Side project",
        summary:
            "A vault for invoices and warranty papers — with expiry awareness so claims do not die in a chat archive.",
        role: "Builder — product and full stack",
        stack: ["Web app"],
        highlights: [
            "Document repository for warranties and invoices",
            "Expiry tracking and reminder-oriented alerts",
        ],
        img: garansiVaultImg,
        cover: "GV",
        link: "https://github.com/YeftaPanggabean13",
        linkLabel: "Related work on GitHub",
        confidential: false,
    },
];

const contactConfig = {
    YOUR_EMAIL: "panggabeaneta@gmail.com",
    YOUR_FONE: "+62 822 7882 7021",
    description:
        "Open to full-time engineering roles and selective build work — enterprise internals, admin tools, or a focused product slice. Email or WhatsApp is fastest.",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/YeftaPanggabean13",
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
