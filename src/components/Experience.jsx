import { motion } from 'framer-motion'
import { Cpu, Sparkles, Building2, Users } from 'lucide-react'

const items = [
  { icon: Cpu, title: 'AI-Generated Sets', desc: 'No two shows are ever the same.' },
  { icon: Sparkles, title: 'Immersive Visuals', desc: 'Reactive visuals for LED walls and projections.' },
  { icon: Building2, title: 'Clubs • Festivals • Brands', desc: 'From underground clubs to global campaigns.' },
  { icon: Users, title: 'Hybrid Human + AI', desc: 'Sync with human performers, dancers, and VJs.' },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-white mb-10">The Astra Iono Experience</motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div key={it.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-2xl p-6 bg-slate-900/60 border border-white/10 hover:border-fuchsia-400/40 hover:shadow-[0_0_40px_rgba(217,70,239,0.25)] transition">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-slate-900 mb-3">
                <it.icon className="w-5 h-5" />
              </div>
              <div className="text-white font-semibold">{it.title}</div>
              <div className="text-slate-400 text-sm">{it.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}