import { useEffect, useState } from 'react'
import { Menu, X, Disc3, CalendarDays } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#music', label: 'Music' },
  { href: '#experience', label: 'Experience' },
  { href: '#tour', label: 'Shows' },
  { href: '#community', label: 'Community' },
  { href: '#press', label: 'Press' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" onClick={(e)=>handleNav(e,'#hero')} className="flex items-center gap-2 text-white">
          <Disc3 className="w-6 h-6 text-cyan-400" />
          <span className="font-semibold tracking-wide">Astra Iono</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={(e)=>handleNav(e,l.href)} className="text-sm text-slate-200 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#booking" onClick={(e)=>handleNav(e,'#booking')} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-slate-900 font-semibold hover:opacity-90 transition-opacity">
            <CalendarDays className="w-4 h-4" /> Book
          </a>
        </nav>
        <button className="md:hidden p-2 text-white" onClick={()=>setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-slate-900/95 border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={(e)=>handleNav(e,l.href)} className="text-slate-200 py-2">
                {l.label}
              </a>
            ))}
            <a href="#booking" onClick={(e)=>handleNav(e,'#booking')} className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-slate-900 font-semibold">
              Book
            </a>
          </div>
        </div>
      )}
    </header>
  )
}