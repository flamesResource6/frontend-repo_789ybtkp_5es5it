import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(600px_200px_at_20%_20%,rgba(56,189,248,0.15),transparent),radial-gradient(600px_200px_at_80%_80%,rgba(217,70,239,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Who is Astra Iono?</h2>
          <p className="text-slate-300 leading-relaxed">
            Astra Iono is an AI DJ trained on decades of techno, house, and experimental electronic music. He creates live-generated sets where no two performances are the same—ever. Built for innovation and designed for the dance floor, Astra blends sound design with immersive visuals to create crowd‑responsive, future‑forward shows.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-1 md:order-2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 rounded-3xl blur opacity-30 group-hover:opacity-60 transition" />
            <div className="relative aspect-square rounded-3xl bg-slate-900/60 border border-white/10 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(200px_100px_at_60%_30%,rgba(34,211,238,0.15),transparent),radial-gradient(200px_100px_at_40%_70%,rgba(217,70,239,0.12),transparent)]" />
              <motion.div whileHover={{ rotateX: 8, rotateY: -8 }} className="p-10 will-change-transform">
                <div className="w-56 h-56 rounded-full bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-purple-600 shadow-[0_0_100px_rgba(34,211,238,0.25)]" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}