import { MessageCircle } from 'lucide-react'
import { getWhatsappLink } from '../utils/whatsapp.js'

/**
 * Botão de WhatsApp reutilizável.
 *
 * Props:
 * - mensagem: texto pré-preenchido (use whatsappMessages para padronizar)
 * - variant: 'solid' | 'outline' | 'ghost'
 * - size: 'md' | 'lg'
 * - showIcon: mostra o ícone do WhatsApp
 * - className: classes extras
 * - children: texto do botão
 */
export default function WhatsappButton({
  mensagem,
  variant = 'solid',
  size = 'md',
  showIcon = true,
  className = '',
  children,
}) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 active:scale-[0.97]'

  const sizes = {
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const variants = {
    solid:
      'bg-lime-400 text-forest-950 hover:bg-lime-500 shadow-soft hover:shadow-lg hover:-translate-y-0.5',
    outline:
      'border-2 border-forest-800 text-forest-800 hover:bg-forest-800 hover:text-cream-50',
    outlineLight:
      'border-2 border-cream-50/60 text-cream-50 hover:bg-cream-50 hover:text-forest-950',
    ghost: 'text-forest-800 hover:text-forest-900 underline underline-offset-4',
  }

  return (
    <a
      href={getWhatsappLink(mensagem)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {showIcon && (
        <MessageCircle
          className="h-[1.1em] w-[1.1em] transition-transform group-hover:rotate-[8deg]"
          strokeWidth={2.4}
        />
      )}
      {children}
    </a>
  )
}
