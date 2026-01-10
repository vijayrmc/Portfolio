export const PROJECTS = [
    {
        id: "mailgen-pro",
        title: "Mailgen Pro",
        name: "Mailgen Pro",
        description: "AI outreach system built solo. <30s sequence generation. ~20% lift in lead generation.",
        website: "https://mailgenpro.com/",
        cta: "View Product",
        caseNum: "01",
        year: "2025",
        category: "SaaS",
        image: "/images/mailgen-new.png",
    },
    {
        id: "amz-brand-studio",
        title: "AMZBrandStudio",
        name: "AMZBrandStudio",
        description: "AI operating system for Amazon creative agencies. ~75% audit time reduction.",
        website: "https://amzbrandstudio.com/",
        cta: "View Product",
        caseNum: "02",
        year: "2025",
        category: "Enterprise AI",
        image: "/images/amz-new.png",
    },
    {
        id: "bitech-exchange",
        title: "Bitech Exchange",
        name: "Bitech Exchange",
        description: "0→1 Real-money transaction platform. 5,000+ live payments.",
        website: "https://skinny-rotate-329.notion.site/Bitech-Exchange-19f99ad94afd8093b0a6ee49c6ad1e28?pvs=4",
        cta: "View Case Study",
        caseNum: "03",
        year: "2024",
        category: "Fintech",
        image: "/images/bitech-new.png",
    }
];

export function getProject(id: string) {
    return PROJECTS.find((p) => p.id === id);
}
