import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import CustomCursor from './components/CustomCursor';

// --- PORTFOLIO DATA ---
const projects = [
  {
    id: "01",
    slug: "previsante",
    title: "PREVISANTE AI",
    role: "Product Owner & Mobile Developer",
    company: "ESIEA (CAP Projet)",
    date: "2025",
    desc: "Application de santé préventive intégrant un modèle d'IA pour transformer les données utilisateurs en conseils personnalisés.",
    tags: ["React Native", "AI Integration", "HealthTech"]
  },
  {
    id: "02",
    slug: "enovarobotics",
    title: "RELEAD ANALYTICS",
    role: "Business Analyst",
    company: "EnovaRobotics",
    date: "2024",
    desc: "Analyse stratégique et monétisation WiFi via la publicité ciblée et la data-visualisation.",
    tags: ["WiFi Advertising", "Data Viz", "Market Analysis"]
  }
];

// --- COMPONENT: CONTACT MODAL ---
const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg glass-card p-12 rounded-[3.5rem] border border-[#1df220]/30 shadow-[0_0_50px_-10px_rgba(29,242,32,0.3)] bg-black"
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 text-gray-500 hover:text-[#1df220] transition-colors font-black text-xl"
            >
              ✕
            </button>
            <h2 className="text-4xl font-black uppercase mb-8 tracking-tighter text-white">
              Let's <span className="text-[#1df220]">Connect</span>
            </h2>
            <div className="space-y-8">
              <div className="group cursor-pointer">
                <span className="block text-[10px] font-bold text-[#1df220] uppercase tracking-[0.3em] mb-2">Phone Number</span>
                <a href="tel:+33753852109" className="text-2xl font-bold text-white group-hover:underline decoration-[#1df220] underline-offset-8">
                  +33 7 53 85 21 09
                </a>
              </div>
              <div className="group cursor-pointer">
                <span className="block text-[10px] font-bold text-[#1df220] uppercase tracking-[0.3em] mb-2">Email Address</span>
                <a href="mailto:mohamedaziz.dallel@et.esiea.fr" className="text-xl md:text-2xl font-bold text-white group-hover:underline decoration-[#1df220] underline-offset-8 break-all">
                  mohamedaziz.dallel@et.esiea.fr
                </a>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/5 flex gap-6">
               <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Available for Innovation</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- COMPONENT: HOME ---
const Home = ({ onContactClick }: { onContactClick: () => void }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#1df220] origin-left z-[100]" style={{ scaleX }} />
      
      <section className="h-screen flex flex-col justify-center px-10 md:px-32 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1df220]/5 via-[#000] to-[#000]">
        <div className="absolute -right-20 top-20 text-[30vw] font-black opacity-[0.02] select-none pointer-events-none mix-blend-overlay">AD</div>
        
        <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <div className="flex items-center gap-4 mb-6">
             <div className="h-[2px] w-12 bg-[#1df220]" />
             <span className="text-[#1df220] font-bold uppercase tracking-[0.3em] text-xs">Innovation Engineer</span>
          </div>
          <h1 className="text-[10vw] font-black uppercase leading-[0.9] mb-8">
            AZIZ <br /> <span className="stroke-text">DALLEL</span>
          </h1>
          <p className="max-w-2xl text-gray-400 text-xl pl-2 border-l-2 border-[#1df220]/50 italic leading-relaxed">
            "Je transforme les données brutes en stratégies de croissance et l'IA en expériences numériques impactantes."
          </p>
        </motion.div>
      </section>

      <section className="py-40 px-10 md:px-32 relative z-10 bg-[#050505]">
        <h2 className="text-7xl font-black uppercase mb-24 tracking-tighter">Selected <span className="text-[#1df220]">Works</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((proj) => (
            <Link key={proj.id} to={`/project/${proj.slug}`}>
              <motion.div whileHover={{ y: -20 }} className="glass-card p-14 rounded-[3.5rem] h-[550px] flex flex-col justify-between group border border-white/5 hover:border-[#1df220]/30 transition-all duration-500">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-4xl font-black text-white/20 group-hover:text-[#1df220] transition-colors">{proj.id}</span>
                    <div className="p-3 rounded-full border border-white/10 group-hover:bg-[#1df220] group-hover:text-black transition-all">↗</div>
                  </div>
                  <h3 className="text-5xl font-black uppercase mt-10 mb-4 leading-none">{proj.title}</h3>
                  <p className="text-[#1df220] text-xs font-bold tracking-[0.2em] uppercase mb-8">{proj.role} — {proj.company}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {proj.tags.map(t => <span key={t} className="text-[10px] font-bold uppercase tracking-wider bg-white/5 px-5 py-2.5 rounded-full border border-white/10 text-gray-300 group-hover:border-[#1df220]/30 transition-colors">{t}</span>)}
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
  const baseUrl = import.meta.env.BASE_URL;

  if (slug === "previsante") {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-40 px-6 md:px-32 pb-32 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#1df220]/10 via-[#000] to-[#000]">
        <Link to="/" className="group flex items-center gap-2 text-[#1df220] font-bold uppercase text-xs tracking-[0.15em] hover:tracking-[0.3em] transition-all">
            <span className="group-hover:-translate-x-2 transition-transform">←</span> Back to Works
        </Link>
        <h1 className="text-[9vw] font-black uppercase mt-12 leading-none">PREVISANTE <span className="text-stroke-green text-transparent">AI</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-28">
          <div className="md:col-span-7 glass-card p-12 rounded-[3rem] border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#1df220]" />
            <h3 className="text-white font-black text-3xl uppercase mb-8">Prévention Intelligente</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Le projet Previsante révolutionne l'approche de la santé personnelle. En utilisant un modèle d'IA sophistiqué, l'application analyse en temps réel les réponses aux questionnaires cliniques pour générer des profils de risque personnalisés.
            </p>
          </div>
          <div className="md:col-span-5 glass-card p-12 rounded-[3rem] bg-gradient-to-br from-[#1df220]/10 to-transparent border-[#1df220]/20 flex flex-col justify-center">
            <h4 className="text-[#1df220] font-black uppercase tracking-widest text-sm mb-6">Tech Achievement</h4>
            <p className="text-white text-xl font-medium italic">
              "J'ai piloté l'entraînement du modèle IA et son intégration on-device pour une analyse instantanée."
            </p>
          </div>
        </div>

        <div className="mt-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <div key={i} className="glass-card rounded-[2rem] overflow-hidden aspect-[9/16] bg-[#0a0a0a] border border-white/5 group relative">
                <img src={`${baseUrl}assets/previsante/${i}.png`} alt="UI" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out" 
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  if (slug === "enovarobotics") {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-40 px-6 md:px-32 pb-32">
        <Link to="/" className="group flex items-center gap-2 text-[#1df220] font-bold uppercase text-xs tracking-[0.15em] hover:tracking-[0.3em] transition-all">
            <span className="group-hover:-translate-x-2 transition-transform">←</span> Back to Works
        </Link>
        <h1 className="text-[9vw] font-black uppercase mt-12 leading-none">RELEAD <span className="text-stroke-green text-transparent">ANALYTICS</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-28">
          <div className="md:col-span-8 glass-card p-14 rounded-[3.5rem] border-white/5">
            <h3 className="text-[#1df220] font-black text-3xl uppercase mb-10">WiFi Strategy & Monetization</h3>
            <p className="text-gray-300 leading-relaxed text-xl max-w-3xl mb-12">
              Pour la branche Relead, j'ai transformé les points d'accès WiFi en leviers de croissance publicitaire, sécurisant des partenariats stratégiques avec des cinémas, cafés et boutiques de luxe.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {["Premium Cinemas", "Specialty Coffee", "Luxury Retail"].map(type => (
                <div key={type} className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 text-center hover:border-[#1df220]/30 transition-colors">
                  <span className="font-bold text-sm text-white tracking-widest uppercase">{type}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 glass-card p-10 rounded-[3rem] border-t-8 border-[#1df220] bg-[#0a0a0a]">
            <h3 className="text-white font-black text-xl uppercase mb-8 tracking-wider">Data Dashboard</h3>
            <div className="space-y-6">
               <div>
                   <div className="flex justify-between text-xs font-bold mb-2"><span className="text-[#1df220]">Market Insights</span><span>85%</span></div>
                   <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-[#1df220] w-[85%]" /></div>
               </div>
               <p className="text-gray-400 text-sm italic">"Conception d'un tableau de bord interactif pour visualiser le ROI des campagnes WiFi."</p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return <div className="h-screen w-full flex items-center justify-center bg-black"><div className="text-[#1df220] uppercase font-black tracking-[0.5em] animate-pulse">Loading...</div></div>;
};

// --- ROOT APP ---
export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <Router basename="/my_portfolio">
      <CustomCursor />
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-[90] flex justify-between items-center px-10 py-8 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm pointer-events-none">
        <Link to="/" className="font-black text-2xl pointer-events-auto uppercase tracking-tight text-white">AD<span className="text-[#1df220] text-4xl leading-none">.</span></Link>
        <button 
          onClick={() => setIsContactOpen(true)}
          className="bg-[#1df220] text-black font-black px-10 py-3 rounded-full text-[11px] uppercase pointer-events-auto transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(29,242,32,0.4)] tracking-widest"
        >
          Get in touch
        </button>
      </nav>

      {/* CONTACT MODAL */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      <Routes>
        <Route path="/" element={<Home onContactClick={() => setIsContactOpen(true)} />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<Home onContactClick={() => setIsContactOpen(true)} />} />
      </Routes>

      <footer className="py-32 text-center border-t border-[#1df220]/10 bg-black relative z-10">
        <div className="text-[11px] tracking-[2em] uppercase font-bold text-[#1df220]/40">AZIZ DALLEL — 2025</div>
      </footer>
    </Router>
  );
}