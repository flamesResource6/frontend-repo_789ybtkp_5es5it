import { motion } from 'framer-motion'

const shows = [
  // Example data (placeholders)
  // { date: '2025-01-12', city: 'Berlin', venue: 'Tresor', event: 'Neon Matrix', url: '#' },
]

export default function Tour() {
  return (
    <section id="tour" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-white mb-8">Upcoming Appearances</motion.h2>
        {shows.length === 0 ? (
          <div className="text-slate-300">New dates uploading soon. Stay tuned.</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shows.map((s, i) => (
              <motion.a key={s.event + i} href={s.url} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl p-6 bg-slate-900/60 border border-white/10 hover:border-cyan-300/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition block">
                <div className="text-white font-semibold">{s.event}</div>
                <div className="text-slate-400 text-sm">{s.date} • {s.city} • {s.venue}</div>
                <div className="mt-3 text-cyan-300">Get Tickets →</div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}