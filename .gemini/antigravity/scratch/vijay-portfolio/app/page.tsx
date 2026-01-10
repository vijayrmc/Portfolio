import EntryFrame from "@/components/EntryFrame";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectsSection from "@/components/ProjectsSection";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="bg-[#0f0f0f] min-h-screen text-[#e0e0e0]">
      <Header />
      <EntryFrame />
      <ExperienceTimeline />
      <ProjectsSection />

      {/* United Projects Section */}


      <section className="py-24 px-6 md:px-24 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="max-w-xl">
          <h4 className="text-sm font-medium text-gray-500 mb-8 uppercase tracking-widest">Contact</h4>
          <p className="text-3xl text-white font-light leading-snug">
            If you are building something, <br />
            <span className="text-gray-400">let's talk.</span>
          </p>
        </div>

        <div className="flex flex-col justify-between items-start md:items-end">
          <div className="flex flex-col gap-4 text-left md:text-right">
            <a href="mailto:b.vijay0452@gmail.com" className="text-gray-400 hover:text-white transition-colors">b.vijay0452@gmail.com</a>
            <a href="tel:+918072396986" className="text-gray-400 hover:text-white transition-colors">+91 8072396986</a>
            <a href="https://www.linkedin.com/in/vijay-b-b51375323/" target="_blank" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          </div>
          <div className="mt-12 text-sm text-gray-600">
            © {new Date().getFullYear()} Vijay.b
          </div>
        </div>
      </section>
    </main>
  );
}
