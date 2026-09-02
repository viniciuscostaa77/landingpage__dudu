import { Instagram, MessageCircle, Dumbbell } from 'lucide-react'
import profissional from '../config/profissional.js'
import { getWhatsappLink, whatsappMessages } from '../utils/whatsapp.js'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Planos', href: '#planos' },
  { label: 'Resultados', href: '#resultados' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-forest-900 pt-16 pb-8 text-cream-50/70">
      <div className="container-px grid grid-cols-1 gap-10 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-400 text-forest-950">
              <Dumbbell className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-xl uppercase text-cream-50">
              {profissional.nome}
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm">{profissional.profissao}</p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-cream-50/40">
            Navegação
          </p>
          <ul className="mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm hover:text-lime-400 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

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
                className="flex items-center gap-2 text-sm hover:text-lime-400 transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href={profissional.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-lime-400 transition-colors"
              >
                <Instagram className="h-4 w-4" /> {profissional.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-px mt-12 border-t border-cream-50/10 pt-6 text-xs text-cream-50/40">
        © {year} {profissional.nome}. Todos os direitos reservados.
      </div>
    </footer>
  )
}
