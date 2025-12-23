import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import CustomCursor from './components/CustomCursor';

// --- PORTFOLIO DATA ---
const projects = [
  {
    id: "01",
    slug: "previsante",
    role: "Product Owner & Mobile Dev",
    company: "ESIEA (CAP Projet)",
    date: "2025 - Présent",
    desc: "Pilotage du backlog sous Jira et développement Full Stack d'une solution logicielle mobile.",
    tags: ["React Native", "Jira", "BPMN"]
  },
  {
    id: "02",
    slug: "enovarobotics",
    role: "Business Analyst",
    company: "EnovaRobotics",
    date: "2024",
    desc: "Optimisation de la latence vidéo (-10%) via WebRTC et conception fonctionnelle mobile.",
    tags: ["WebRTC", "User Stories", "QA"]
  }
];

// --- COMPONENT: HOME PAGE ---
const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#1df220] origin-left z-[100]" style={{ scaleX }} />
      
      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center px-10 md:px-32 relative">
        <div className="absolute top-[20%] left-10 flex items-center gap-4">
          <span className="text-2xl font-black italic">01</span>
          <div className="h-[2px] w-24 bg-[#1df220]" />
        </div>

        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <span className="text-[#1df220] font-bold uppercase tracking-[0.4em] text-xs">Software Engineer @ ESIEA</span>
          <h1 className="text-[12vw] font-black uppercase leading-[0.8] my-8 select-none">
            AZIZ <br /> <span className="stroke-text">DALLEL</span>
          </h1>
          <p className="max-w-xl text-gray-500 text-lg border-l-2 border-[#1df220] pl-8 italic">
            "J'allie expertise technique et vision fonctionnelle pour transformer les enjeux métiers en solutions performantes."
          </p>
        </motion.div>
      </section>

      {/* SELECTED WORKS SECTION */}
      <section className="py-32 px-10 md:px-32">
        <h2 className="text-5xl md:text-7xl font-black uppercase mb-20">Selected <span className="text-[#1df220]">Works</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((proj, i) => (
            <Link key={i} to={`/project/${proj.slug}`}>
              <motion.div
                whileHover={{ y: -15 }}
                className="glass-card p-10 rounded-[2.5rem] flex flex-col justify-between h-[450px] cursor-pointer group"
              >
                <div>
                  <div className="flex justify-between items-start mb-8 text-[#1df220] font-bold">
                    <span>{proj.id} /</span>
                    <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#1df220] group-hover:text-black transition-all">
                      <span className="text-xl">↗</span>
                    </div>
                  </div>
                  <h3 className="text-4xl font-black uppercase mb-2">{proj.role}</h3>
                  <p className="text-gray-500 font-bold uppercase text-xs mb-6">{proj.company} — {proj.date}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{proj.desc}</p>
                </div>
                <div className="flex gap-3">
                  {proj.tags.map(t => <span key={t} className="text-[9px] font-black uppercase tracking-widest text-gray-600 border border-white/5 px-4 py-2 rounded-full">{t}</span>)}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

// --- COMPONENT: PROJECT DETAIL ---
const ProjectDetail = () => {
  const { slug } = useParams();
  
  // FIXED: Using import.meta.env.BASE_URL allows Vite to handle both local and production paths.
  // Locally, this resolves to "/assets/...". On GitHub, it resolves to "/my_portfolio/assets/..."
  const images = Array.from({ length: 8 }, (_, i) => 
    `${import.meta.env.BASE_URL}assets/previsante/${i + 1}.png`
  );

  if (slug !== "previsante") return <div className="pt-40 text-center">Projet en cours de documentation...</div>;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-40 px-10 md:px-32 pb-20">
      <Link to="/" className="text-[#1df220] font-bold uppercase text-xs tracking-widest hover:underline decoration-2 underline-offset-8">
        ← Back to Works
      </Link>

      <div className="mt-16 mb-24">
        <h1 className="text-6xl md:text-8xl font-black uppercase">Previsante</h1>
        <p className="text-[#1df220] font-bold mt-4 uppercase tracking-[0.2em]">Product Owner & Mobile Developer</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        <div className="md:col-span-1 space-y-10">
          <div className="border-l-2 border-[#1df220] pl-6">
            <h3 className="text-white font-black uppercase text-sm mb-4">Double Casquette</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              En tant que **Product Owner**, j'ai structuré les besoins métiers et géré le Product Backlog sous **Jira**.
              Simultanément, j'ai assuré le rôle de **Développeur Mobile Full Stack**, transformant ces User Stories en fonctionnalités réelles.
            </p>
          </div>
          <div>
            <h3 className="text-white font-black uppercase text-sm mb-4">Stack Technique</h3>
            <div className="flex flex-wrap gap-2">
              {["React Native", "TypeScript", "Node.js", "Jira", "BPMN"].map(t => (
                <span key={t} className="text-[10px] bg-white/5 px-4 py-2 rounded-md font-bold text-gray-400">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-white font-black uppercase text-sm mb-8 tracking-widest">Interface App Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {images.map((img, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="glass-card rounded-2xl overflow-hidden border border-white/5 bg-[#111]">
                <img 
                  src={img} 
                  alt={`Capture ${i + 1}`} 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 block" 
                  onError={(e) => { 
                    const target = e.target as HTMLImageElement;
                    console.error("Local Error: Could not find image at", target.src);
                    // Temporarily showing a border so you can see where the broken image is
                    target.style.border = "2px solid red"; 
                  }} 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- ROOT COMPONENT ---
export default function App() {
  return (
    // basename handles the subfolder path automatically based on your vite.config.js base.
    <Router basename="/my_portfolio">
      <CustomCursor />
      
      <nav className="fixed top-0 w-full z-[90] flex justify-between items-center px-10 py-8 bg-transparent pointer-events-none">
        <Link to="/" className="font-black text-xl uppercase tracking-tighter pointer-events-auto">
          AZIZ DALLEL<span className="text-[#1df220]">.</span>
        </Link>
        <button className="bg-[#1df220] text-black font-black px-8 py-2 rounded-full text-[10px] tracking-widest uppercase pointer-events-auto hover:scale-110 transition-all">
          Contact
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>

      <footer className="py-20 text-center border-t border-white/5 opacity-20">
        <div className="text-[10px] tracking-[1em] uppercase">Built for Excellence — 2025</div>
      </footer>
    </Router>
  );
}