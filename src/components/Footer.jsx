import { Instagram, MessageCircle, Shield } from 'lucide-react'

import profissional from '../config/profissional.js'

import { getWhatsappLink, whatsappMessages } from '../utils/whatsapp.js'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Aulas', href: '#aulas' },
  { label: 'Resultados', href: '#resultados' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-forest-900 pt-16 pb-8 text-cream-50/70">

      <div className="container-px grid grid-cols-1 gap-10 sm:grid-cols-3">

        {/* Identidade */}
        <div>

          <div className="flex items-center gap-2.5">

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-400 text-forest-950">
              <Shield
                className="h-5 w-5"
                strokeWidth={2.5}
              />
            </span>

            <span className="font-display text-xl uppercase text-cream-50">
              {profissional.nome}
            </span>

          </div>

          <p className="mt-4 max-w-xs text-sm">
            {profissional.profissao}
          </p>

        </div>

        {/* Navegação */}
        <div>

          <p className="text-xs font-bold uppercase tracking-widest text-cream-50/40">
            Navegação
          </p>

          <ul className="mt-4 space-y-2">

            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm transition-colors hover:text-lime-400"
                >
                  {link.label}
                </a>
              </li>
            ))}

          </ul>

        </div>

        {/* Contato */}
        <div>

          <p className="text-xs font-bold uppercase tracking-widest text-cream-50/40">
            Contato
          </p>

          <ul className="mt-4 space-y-3">

            <li>
              <a
                href={getWhatsappLink(whatsappMessages.geral)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors hover:text-lime-400"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </li>

            <li>
              <a
                href={profissional.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors hover:text-lime-400"
              >
                <Instagram className="h-4 w-4" />
                {profissional.instagram}
              </a>
            </li>

          </ul>

        </div>

      </div>

      {/* Copyright */}
      <div className="container-px mt-12 border-t border-cream-50/10 pt-6 text-xs text-cream-50/40">
        © {year} {profissional.nome}. Todos os direitos reservados.
      </div>

    </footer>
  )
}