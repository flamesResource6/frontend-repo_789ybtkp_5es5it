import { Youtube, Instagram, Music2, Radio, Disc3 } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  const socials = [
    { icon: <Disc3 className="w-5 h-5" />, href: 'https://open.spotify.com/' },
    { icon: <Music2 className="w-5 h-5" />, href: 'https://soundcloud.com/' },
    { icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com/' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/' },
    { icon: <Radio className="w-5 h-5" />, href: 'https://tiktok.com/' },
  ]

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="text-slate-400 text-sm">© {year} Astra Iono. All rights reserved.</div>
        <nav className="flex items-center gap-6 text-slate-300 text-sm">
          {['#about','%23music','#tour','#booking','#press'].map((id, i) => (
            <a key={i} href={id} onClick={(e)=>scrollTo(e, id.replace('%23','#'))} className="hover:text-white">{['About','Music','Shows','Bookings','Press'][i]}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {socials.map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-slate-900/60 border border-white/10 text-slate-200/90 hover:text-white hover:border-cyan-300/40 transition">
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
