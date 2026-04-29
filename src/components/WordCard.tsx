import { motion } from 'motion/react';

interface WordCardProps {
  word: string;
  index: number;
  stagger?: boolean;
}

export default function WordCard({ word, index, stagger = false }: WordCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: stagger ? 20 : 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: stagger ? Math.min(index * 0.05, 1.5) : 0,
        opacity: { duration: 0.2 }
      }}
      className="brutal-border bg-white p-4 group hover:bg-neon hover:-rotate-1 transition-colors relative"
    >
      <div className="absolute top-1 right-1 opacity-10 group-hover:opacity-100 transition-opacity">
        <span className="font-mono text-[10px] uppercase">Valid</span>
      </div>
      <p className="font-display text-2xl tracking-tight break-all">
        {word}
      </p>
    </motion.div>
  );
}
