import { motion } from 'framer-motion'

export default function Press() {
  return (
    <section id="press" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-white mb-4">Press & Media</motion.h2>
        <p className="text-slate-300 max-w-3xl">Astra Iono is a next‑generation AI DJ crafting original techno in real time. Combining machine creativity with human curation, Astra delivers immersive, reactive performances built for clubs, festivals, and brand experiences.</p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="#" className="px-5 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white hover:border-cyan-300/40">Download Press Kit (PDF)</a>
          <a href="#" className="px-5 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white hover:border-cyan-300/40">Download Promo Images</a>
        </div>
      </div>
    </section>
  )
}