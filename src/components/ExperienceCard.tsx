import { motion } from 'framer-motion';

interface Props {
  role: string;
  company: string;
  date: string;
  tasks: string[];
  index: number;
}

const ExperienceCard = ({ role, company, date, tasks, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="glass-card neon-border-hover p-8 rounded-3xl transition-all duration-300 group"
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="text-[#1df220] font-mono text-xs uppercase tracking-widest">{date}</span>
          <h3 className="text-2xl font-black uppercase mt-1 group-hover:text-[#1df220] transition-colors">{role}</h3>
          <p className="text-gray-500 font-bold uppercase text-sm tracking-tighter">{company}</p>
        </div>
        <div className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[#1df220]/20 transition-colors">
          <span className="text-[#1df220] text-xl">→</span>
        </div>
      </div>

      <ul className="space-y-3">
        {tasks.map((task, i) => (
          <li key={i} className="text-gray-400 text-sm flex gap-3">
            <span className="text-[#1df220]">•</span> {task}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;