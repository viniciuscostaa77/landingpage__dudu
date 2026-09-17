import profissional from '../config/profissional.js'

/**
 * Gera um link do WhatsApp (wa.me) usando o número central configurado
 * em src/config/profissional.js, com uma mensagem automática opcional.
 *
 * @param {string} mensagem - Mensagem pré-preenchida ao abrir o WhatsApp.
 * @returns {string} URL pronta para o link/botão.
 */

export function getWhatsappLink(mensagem) {
  const numero = profissional.whatsapp.replace(/\D/g, '')

  const base = `https://wa.me/${numero}`

  if (!mensagem) return base

  return `${base}?text=${encodeURIComponent(mensagem)}`
}

// Mensagens padrão reutilizáveis por contexto/botão.
export const whatsappMessages = {
  geral:
    'Olá! Gostaria de saber mais sobre as aulas de Jiu-Jitsu.',

  hero:
    'Olá! Vim pelo site e gostaria de saber mais sobre as aulas de Jiu-Jitsu.',

  ctaFinal:
    'Olá! Tenho interesse em começar a treinar Jiu-Jitsu. Gostaria de saber mais sobre as aulas.',
}