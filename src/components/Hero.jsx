import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Spotify, Youtube, Instagram, Music2, Radio } from 'lucide-react'

export default function Hero() {
  const socials = [
    { icon: <Spotify className="w-5 h-5" />, href: 'https://open.spotify.com/', label: 'Spotify' },
    { icon: <Music2 className="w-5 h-5" />, href: 'https://soundcloud.com/', label: 'SoundCloud' },
    { icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com/', label: 'YouTube' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/', label: 'Instagram' },
    { icon: <Radio className="w-5 h-5" />, href: 'https://tiktok.com/', label: 'TikTok' },
  ]

  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/40 to-slate-950/80 pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16 flex flex-col items-start justify-center min-h-[100svh]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <p className="text-cyan-300 tracking-widest uppercase mb-3 text-xs">Futuristic AI Techno</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-white drop-shadow-[0_0_40px_rgba(34,211,238,0.25)]">
            Astra Iono – The AI of Techno
          </h1>
          <p className="mt-5 text-slate-200/90 text-lg md:text-xl max-w-xl">
            One-of-a-kind AI DJ generating original, evolving techno sets in real time.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button onClick={scrollToBooking} className="px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-slate-900 font-semibold shadow-[0_0_30px_rgba(217,70,239,0.35)] hover:opacity-90 transition">Book Astra Iono</button>
            <a href="https://open.spotify.com/" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-cyan-300/40 text-cyan-200 hover:bg-cyan-300/10 transition">Listen on Spotify</a>
          </div>
        </motion.div>

        <div className="mt-10 flex gap-3">
          {socials.map((s, i) => (
            <motion.a key={s.label} href={s.href} target="_blank" rel="noreferrer" whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }} className="p-2 rounded-full bg-slate-900/60 border border-white/10 text-slate-200/90 hover:text-white hover:border-cyan-300/40 transition">
              <span className="sr-only">{s.label}</span>
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}