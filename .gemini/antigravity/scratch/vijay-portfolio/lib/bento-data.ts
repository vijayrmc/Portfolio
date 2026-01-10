import {
    LayoutTemplate,
    FileText,
    Presentation,
    AppWindow,
    Target,
    Palette,
    Bot,
    Zap,
    Dumbbell,
    CreditCard,
    TrendingUp,
    Globe
} from "lucide-react";

export type BentoItemType = {
    title: string;
    description?: string;
    href: string;
    type: "case-study" | "resource" | "prototype";
    colSpan?: 1 | 2 | 3;
    rowSpan?: 1 | 2;
    image?: string; // Path to image (optional)
    icon?: any; // Lucide Icon component
    tags?: string[];
};

// --- 1. Products (Top Section) ---
export const BENTO_PRODUCTS: BentoItemType[] = [
    {
        title: "Mailgen Pro",
        description: "AI outreach system built solo. <30s sequence generation.",
        href: "https://mailgenpro.com/",
        type: "case-study",
        colSpan: 1,
        image: "/images/mailgen-new.png",
        tags: ["Micro-SaaS", "Product"]
    },
    {
        title: "AMZBrandStudio",
        description: "AI operating system for Amazon creative agencies.",
        href: "https://amzbrandstudio.com/",
        type: "case-study",
        colSpan: 1,
        image: "/images/amz-new.png",
        tags: ["Enterprise AI", "Product"]
    },
    {
        title: "Bitech Exchange",
        description: "0→1 Crypto & Gift Card platform. 5,000+ live transactions.",
        href: "https://skinny-rotate-329.notion.site/Bitech-Exchange-19f99ad94afd8093b0a6ee49c6ad1e28?pvs=4",
        type: "case-study",
        colSpan: 1,
        image: "/images/bitech-new.png",
        tags: ["Fintech", "Case Study"]
    }
];

// --- 2. Prototypes & Apps (Middle Section) ---
export const BENTO_PROTOTYPES: BentoItemType[] = [
    {
        title: "Fit Fuel",
        description: "Fitness App Pitch & Concept",
        href: "https://pitch.com/v/fit-fuel-36z398",
        type: "prototype",
        image: "/images/fit-fuel-new.jpg",
        colSpan: 1
    },
    {
        title: "Audit Amplify AI",
        description: "Live Prototype",
        href: "https://audit-amplify-ai.lovable.app/",
        type: "prototype",
        image: "/images/audit-amplify-new.png",
        colSpan: 1
    },
    {
        title: "Awesome Things",
        description: "Built a full-stack MVP to help users discover, compare, and review Indian eCommerce brands.",
        href: "https://awesomethingsprototype.lovable.app/",
        type: "prototype",
        image: "/images/awesome-things.png",
        colSpan: 1
    },
    {
        title: "PRD Lab",
        description: "Transforms messy ideas, metrics, and feedback into decision-grade PRDs.",
        href: "https://chatgpt.com/g/g-695fdcfe4de481918b9b604f6f319452-prd-lab",
        type: "prototype",
        image: "/images/prd-lab.png",
        colSpan: 1
    },
];

// --- 3. Strategy & Artifacts (Bottom Section - Compact) ---
export const BENTO_ARTIFACTS: BentoItemType[] = [
    // Decks
    {
        title: "Exly Product Strategy",
        description: "Product Strategy Deck",
        href: "https://pitch.com/v/exly-app-product-strategy-d9n7c3",
        type: "resource",
        icon: Target,
        colSpan: 1
    },
    {
        title: "LinkedIn Optimization",
        description: "Insights & Improvements",
        href: "https://pitch.com/v/optimizing-linkedin-for-success-insights-improvements-xra5jv",
        type: "resource",
        image: "/images/bento/linkedin-opt.png",
        colSpan: 1
    },
    {
        title: "Notion Retention",
        description: "Improving User Retention",
        href: "https://pitch.com/v/improving-user-retention-on-notion-fy77jz",
        type: "resource",
        icon: FileText,
        colSpan: 1
    },
    {
        title: "Understanding and Decoding Metrics For Quora",
        href: "https://www.popai.pro/ppt-share?shareKey=3dad9bd69d13c149372ab2c34dbaef7c480923c808499325b6e0a744645874f0&utm_source=presentationsharepage",
        type: "resource",
        image: "/images/bento/quora-metrics.png",
        colSpan: 1
    },

    // Docs & PRDs
    {
        title: "PRD For Improving Course completion rate on Coursera",
        description: "PRD For Improving Course completion rate on Coursera",
        href: "https://www.notion.so/Product-Requirements-Document-PRD-Template-14499ad94afd8050b7bfd63b555926d3?pvs=4",
        type: "resource",
        icon: LayoutTemplate,
        colSpan: 1,
        tags: ["Notion"]
    },
    {
        title: "AI Marketing Team",
        description: "built with GPTs",
        href: "https://www.notion.so/I-Built-a-Marketing-Team-Out-of-GPTs-eed6e0473b0048bf9cc71739ac58176d?pvs=4",
        type: "resource",
        icon: Bot,
        colSpan: 1,
        tags: ["Notion"]
    },
    {
        title: "Bitech Docs",
        description: "Technical Documentation",
        href: "https://skinny-rotate-329.notion.site/Bitech-Exchange-19f99ad94afd8093b0a6ee49c6ad1e28?pvs=4",
        type: "resource",
        icon: FileText,
        colSpan: 1,
        tags: ["Notion"]
    },
    {
        title: "PRD for Healthcare_CX_",
        description: "PRD for Healthcare_CX_",
        href: "https://docs.google.com/document/d/1FwAw5H7FQJ7vadp-9_in7uMVk57SKPUAVLWHBz7lM64/edit?usp=sharing",
        type: "resource",
        icon: FileText,
        colSpan: 1,
        tags: ["Google Doc"]
    },
    {
        title: "Transforming India's Electronics Experience with AI",
        description: "Design Concept",
        href: "https://www.canva.com/design/DAG11QdeJrU/D_h1YXuCZpozgyJI2_27ZA/edit?utm_content=DAG11QdeJrU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        type: "resource",
        icon: Palette,
        colSpan: 1,
        tags: ["Canva"]
    },
    {
        title: "Building AI Agents For Vehicle Insurance Claims",
        description: "Design Concept",
        href: "https://www.canva.com/design/DAG557j_KVA/rNPQeZiqqauQPFG_N6iI2Q/edit?utm_content=DAG557j_KVA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        type: "resource",
        icon: Palette,
        colSpan: 1,
        tags: ["Canva"]
    },
    {
        title: "Redefining ML Execution with Autonomous Agents",
        description: "Product Teardown",
        href: "https://www.canva.com/design/DAGqIDMR6dw/1cAvL-B5e7pCeu266S3F1w/edit?utm_content=DAGqIDMR6dw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        type: "resource",
        icon: Palette,
        colSpan: 1,
        tags: ["Canva"]
    },
];
