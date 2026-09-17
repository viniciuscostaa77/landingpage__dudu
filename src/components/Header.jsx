import { useEffect, useState } from 'react'

import { Menu, X, Shield } from 'lucide-react'

import profissional from '../config/profissional.js'

import WhatsappButton from './WhatsappButton.jsx'

import { whatsappMessages } from '../utils/whatsapp.js'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Aulas', href: '#aulas' },
  { label: 'Resultados', href: '#resultados' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)

    onScroll()

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/90 backdrop-blur-md shadow-card'
          : 'bg-transparent'
      }`}
    >
      <div className="container-px flex h-20 items-center justify-between">

        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-2.5 shrink-0"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-800 text-lime-400">
            <Shield
              className="h-5 w-5"
              strokeWidth={2.5}
            />
          </span>

          <span className="font-display text-xl uppercase tracking-tight text-forest-950">
            {profissional.nome.split(' ')[0]}

            <span className="text-forest-700">
              .{profissional.nome.split(' ')[1]?.[0]}
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink-700 hover:text-forest-800 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop WhatsApp */}
        <div className="hidden lg:block">
          <WhatsappButton mensagem={whatsappMessages.geral}>
            Falar no WhatsApp
          </WhatsappButton>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full border border-forest-800/20 text-forest-900"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>

      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 bottom-0 bg-cream-50 transition-transform duration-300 ease-out ${
          open
            ? 'translate-x-0'
            : 'translate-x-full pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-1 container-px pt-8">

          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-ink-900/10 py-4 font-display text-2xl uppercase text-forest-950"
              style={{
                animationDelay: `${i * 40}ms`,
              }}
            >
              {link.label}
            </a>
          ))}

          <div className="mt-8">
            <WhatsappButton
              mensagem={whatsappMessages.geral}
              size="lg"
              className="w-full"
            >
              Falar no WhatsApp
            </WhatsappButton>
          </div>

        </nav>
      </div>
    </header>
  )
}