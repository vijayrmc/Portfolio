import EntryFrame from "@/components/EntryFrame";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectsSection from "@/components/ProjectsSection";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="bg-[#0f0f0f] min-h-screen text-[#e0e0e0]">
      <EntryFrame />
      <ExperienceTimeline />
      <ProjectsSection />

      {/* United Projects Section */}


      <section className="py-24 px-6 md:px-24 border-t border-white/5 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          <div className="max-w-xl">
            <p className="text-4xl md:text-5xl text-white font-light leading-[1.1] tracking-tight">
              If you are building something, <br />
              <span className="text-gray-500 italic font-serif">let's talk.</span>
            </p>
          </div>

          <div className="flex flex-col justify-between items-start md:items-end">
            <div className="flex flex-col gap-6 text-left md:text-right">
              <div className="group">
                <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-1 group-hover:text-gray-400 transition-colors">Email Me</p>
                <a href="mailto:b.vijay0452@gmail.com" className="text-xl md:text-2xl text-gray-400 hover:text-white transition-all duration-300 hover:tracking-wide">
                  b.vijay0452@gmail.com
                </a>
              </div>
              <div className="group">
                <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-1 group-hover:text-gray-400 transition-colors">Call Me</p>
                <a href="tel:+918072396986" className="text-xl md:text-2xl text-gray-400 hover:text-white transition-all duration-300 hover:tracking-wide">
                  +91 8072396986
                </a>
              </div>
              <div className="flex gap-6 mt-4">
                <a href="https://www.linkedin.com/in/vijay-b-b51375323/" target="_blank" className="text-sm uppercase tracking-widest text-gray-500 hover:text-white transition-all duration-300 border-b border-transparent hover:border-white/20 pb-1">
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="mt-16 md:mt-0 text-[11px] uppercase tracking-[0.3em] text-gray-700 font-medium">
              © {new Date().getFullYear()} — Designed & Crafted by Vijay.b
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
