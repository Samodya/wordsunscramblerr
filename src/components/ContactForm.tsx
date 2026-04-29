import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="brutal-border bg-neon p-12 text-center space-y-4"
      >
        <div className="flex justify-center">
          <CheckCircle size={64} className="text-brutal-black" />
        </div>
        <h3 className="font-display text-4xl uppercase leading-none">Transmission Received</h3>
        <p className="font-mono text-sm font-bold uppercase italic">
          Thanks for reaching out! We'll scan your input and get back to you soon.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="brutal-btn bg-white mt-4"
        >
          Send Another
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 brutal-border bg-white space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block font-display text-sm uppercase mb-2">IDENTIFICATION (NAME)</label>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="brutal-input text-base"
          />
        </div>
        <div>
          <label className="block font-display text-sm uppercase mb-2">CONTACT COORDINATES (EMAIL)</label>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="brutal-input text-base"
          />
        </div>
        <div>
          <label className="block font-display text-sm uppercase mb-2">MESSAGE DATA</label>
          <textarea
            required
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here..."
            className="brutal-input text-base resize-none"
          />
        </div>
      </div>
      
      <button
        type="submit"
        className="brutal-btn w-full h-16 flex items-center justify-center gap-2 group"
      >
        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        <span>SEND MESSAGE</span>
      </button>
    </form>
  );
}
