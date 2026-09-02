import profissional from '../config/profissional.js'

/**
 * Gera um link do WhatsApp (wa.me) usando o número central configurado
 * em src/config/profissional.js, com uma mensagem automática opcional.
 *
 * @param {string} [mensagem] - Mensagem pré-preenchida ao abrir o WhatsApp.
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
  geral: 'Olá! Gostaria de saber mais sobre a consultoria.',
  consultoriaNutricao: 'Olá! Tenho interesse na Consultoria de Nutrição. Pode me passar mais detalhes?',
  consultoriaTreino: 'Olá! Tenho interesse na Consultoria de Treino. Pode me passar mais detalhes?',
  consultoriaCompleta: 'Olá! Tenho interesse na Consultoria Completa (nutrição + treino). Pode me passar mais detalhes?',
  planoNutricao: 'Olá! Quero saber mais sobre o Plano Nutrição.',
  planoTreino: 'Olá! Quero saber mais sobre o Plano Treino.',
  planoCompleto: 'Olá! Quero saber mais sobre o Plano Completo.',
  hero: 'Olá! Vim pelo site e quero começar minha transformação. Pode me ajudar?',
  ctaFinal: 'Olá! Estou pronto(a) para começar. Vamos conversar?',
}
