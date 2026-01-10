import Link from "next/link";

const OTHER_PROJECTS = [
    {
        name: "AssetOS",
        problem: "Property analysis for investors was slow and manual.",
        contribution: "Built an AI workflow to extract, structure, and summarize property intelligence."
    },
    {
        name: "FitFuel",
        problem: "Diet adherence broke down due to poor execution, not lack of plans.",
        contribution: "Designed a meal-kit product focused on consistency and operational simplicity."
    },
    {
        name: "Internal Tools & Experiments",
        problem: "Built automation and analytics workflows to reduce repetitive manual work.",
        contribution: ""
    }
];

export default function OtherWorkPage() {
    return (
        <main className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] px-6 md:px-24 py-32 max-w-4xl mx-auto">
            <Link href="/" className="inline-block mb-16 text-gray-500 hover:text-white transition-colors">
                ← Back
            </Link>

            <header className="mb-24">
                <h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">
                    Other Work
                </h1>
            </header>

            <div className="space-y-12">
                {OTHER_PROJECTS.map((project, i) => (
                    <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-12 border-b border-white/5 last:border-0">
                        <div className="font-medium text-white">{project.name}</div>
                        <div className="text-gray-500 font-light text-sm md:text-base">{project.problem}</div>
                        <div className="text-gray-400 font-light text-sm md:text-base">{project.contribution}</div>
                    </div>
                ))}
            </div>
        </main>
    );
}
