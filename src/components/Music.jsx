import { motion } from 'framer-motion'

const tracks = [
  { title: 'Neon Skyline', desc: 'Hypnotic warehouse techno', url: 'https://open.spotify.com/' },
  { title: 'Quantum Drift', desc: 'Pulsing cyber groove', url: 'https://open.spotify.com/' },
  { title: 'Holo Pulse', desc: 'Chrome-plated rhythms', url: 'https://open.spotify.com/' },
  { title: 'Midnight Circuit', desc: 'Dark rolling basslines', url: 'https://open.spotify.com/' },
]

export default function Music() {
  return (
    <section id="music" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-white mb-6">
          Dive Into the Sound
        </motion.h2>
        <p className="text-slate-300 mb-8">Preview the vibe. This player is a placeholder—final playlist coming soon.</p>
        <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(59,130,246,0.15)]">
          <iframe title="Spotify Embed" className="w-full h-full" src="https://open.spotify.com/embed/playlist/37i9dQZF1DXa8NOEUWPn9W?utm_source=generator" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((t, i) => (
            <motion.a key={t.title} href={t.url} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-2xl p-5 bg-slate-900/60 border border-white/10 hover:border-cyan-300/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition block">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-400 mb-4" />
              <div className="text-white font-semibold">{t.title}</div>
              <div className="text-slate-400 text-sm">{t.desc}</div>
              <div className="mt-4 inline-block text-cyan-300 group-hover:text-cyan-200">Play on Spotify →</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}