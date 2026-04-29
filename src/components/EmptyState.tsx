import { motion } from 'motion/react';
import { Ghost } from 'lucide-react';

interface EmptyStateProps {
  message?: string;
}

export default function EmptyState({ message = "NO WORDS FOUND IN OUR DICTIONARY" }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="brutal-border bg-white p-12 text-center space-y-4"
    >
      <div className="flex justify-center">
        <Ghost size={64} className="text-brutal-black/20" />
      </div>
      <div>
        <h3 className="font-display text-4xl uppercase leading-none">
          Dead End
        </h3>
        <p className="font-mono text-sm opacity-50 mt-2">
          {message}
        </p>
      </div>
    </motion.div>
  );
}
