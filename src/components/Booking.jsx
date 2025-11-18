import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Booking() {
  const [submitted, setSubmitted] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    e.currentTarget.reset()
  }

  return (
    <section id="booking" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-white mb-2">Book Astra Iono</motion.h2>
        <p className="text-slate-300 mb-8">Ready to bring a futuristic AI DJ to your stage or brand experience? Tell us about your event:</p>

        <form onSubmit={submit} className="grid md:grid-cols-2 gap-5">
          <div className="md:col-span-1">
            <label className="block text-slate-300 text-sm mb-2">Full Name</label>
            <input required className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white" />
          </div>
          <div className="md:col-span-1">
            <label className="block text-slate-300 text-sm mb-2">Email</label>
            <input type="email" required className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white" />
          </div>
          <div>
            <label className="block text-slate-300 text-sm mb-2">Phone (optional)</label>
            <input className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white" />
          </div>
          <div>
            <label className="block text-slate-300 text-sm mb-2">Organization / Brand</label>
            <input className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white" />
          </div>
          <div>
            <label className="block text-slate-300 text-sm mb-2">Event Type</label>
            <select className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white">
              <option>Club Night</option>
              <option>Festival</option>
              <option>Private Event</option>
              <option>Corporate/Brand Activation</option>
              <option>Livestream</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-slate-300 text-sm mb-2">Event Date & Time</label>
            <input type="datetime-local" className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white" />
          </div>
          <div>
            <label className="block text-slate-300 text-sm mb-2">Event Location</label>
            <input placeholder="City, Country or Online" className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white" />
          </div>
          <div>
            <label className="block text-slate-300 text-sm mb-2">Estimated Attendance</label>
            <input type="number" className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white" />
          </div>
          <div>
            <label className="block text-slate-300 text-sm mb-2">Budget Range</label>
            <select className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white">
              <option>Under $5k</option>
              <option>$5k - $15k</option>
              <option>$15k - $30k</option>
              <option>$30k+</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-slate-300 text-sm mb-2">Message / Event Details</label>
            <textarea rows="5" className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white" />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-slate-900 font-semibold">Submit</button>
          </div>
        </form>
        {submitted && (
          <div className="mt-4 text-cyan-300">Thanks! Astra Iono’s team will get back to you within 48 hours.</div>
        )}
      </div>
    </section>
  )
}