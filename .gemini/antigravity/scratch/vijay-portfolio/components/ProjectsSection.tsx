import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/lib/data";

// Override descriptions for the showcase based on user input
const PROJECTS_SHOWCASE = [
    {
        ...PROJECTS[0], // Mailgen
        description: "AI outreach system built solo. <30s sequence generation. ~20% lift in lead generation."
    },
    {
        ...PROJECTS[1], // AMZ
        description: "AI operating system for Amazon creative agencies. ~75% audit time reduction. ~30% faster project starts."
    },
    {
        ...PROJECTS[2], // Bitech
        description: "0→1 real-money transaction platform. 5,000+ live payments. Zero critical launch failures."
    }
];

export default function ProjectsSection() {
    return (
        <section className="py-24 px-6 md:px-24 max-w-[1920px] mx-auto">
            <div className="mb-24">
                <h3 className="text-sm font-medium text-gray-500 mb-8 uppercase tracking-widest">
                    Projects Showcase
                </h3>
                <p className="text-2xl md:text-4xl text-[#e0e0e0] font-light max-w-3xl leading-tight">
                    Selected Work
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS_SHOWCASE.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}
