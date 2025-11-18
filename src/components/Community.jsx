import { useState } from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  { quote: 'Feels like dancing inside a neural network.', author: 'Alex R.' },
  { quote: 'A lucid dream of chrome and bass.', author: 'Mira T.' },
  { quote: 'Alive, reactive, and relentless.', author: 'Jules K.' },
]

export default function Community() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setJoined(true)
  }

  return (
    <section id="community" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-white mb-8">Astra Iono Community</motion.h2>
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <p className="text-slate-300 mb-4">Join the transmission for early access to new tracks, live set drops, and show announcements.</p>
            <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3">
              <input type="email" required placeholder="Your email" value={email} onChange={(e)=>setEmail(e.target.value)} className="flex-1 px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-slate-900 font-semibold">Join the Transmission</button>
            </form>
            {joined && <div className="mt-3 text-cyan-300">Thanks! You’re in.</div>}
          </div>
          <div className="space-y-4">
            {testimonials.map((t, i) => (
              <motion.blockquote key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl p-5 bg-slate-900/60 border border-white/10">
                <p className="text-slate-200">“{t.quote}”</p>
                <footer className="text-slate-400 text-sm mt-2">— {t.author}</footer>
              </motion.blockquote>
            ))}
            <a href="https://discord.com/" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 rounded-full border border-cyan-300/40 text-cyan-200 hover:bg-cyan-300/10">Join Discord</a>
          </div>
        </div>
      </div>
    </section>
  )
}