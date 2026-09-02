import { Check, Star } from 'lucide-react'
import WhatsappButton from './WhatsappButton.jsx'
import { whatsappMessages } from '../utils/whatsapp.js'

const plans = [
  {
    title: 'Plano Nutrição',
    price: 'Consulte os valores',
    items: ['Plano alimentar personalizado', 'Acompanhamento periódico', 'Ajustes conforme evolução'],
    mensagem: whatsappMessages.planoNutricao,
    featured: false,
  },
  {
    title: 'Plano Treino',
    price: 'Consulte os valores',
    items: ['Treino personalizado', 'Acompanhamento periódico', 'Ajustes de carga e volume'],
    mensagem: whatsappMessages.planoTreino,
    featured: false,
  },
  {
    title: 'Plano Completo',
    price: 'Consulte os valores',
    items: ['Nutrição personalizada', 'Treino personalizado', 'Acompanhamento completo'],
    mensagem: whatsappMessages.planoCompleto,
    featured: true,
  },
]

export default function Plans() {
  return (
    <section id="planos" className="bg-forest-950 py-20 sm:py-28">
      <div className="container-px">
        <div className="max-w-xl">
          <span className="eyebrow text-lime-400">Investimento</span>
          <h2 className="section-heading mt-4 text-cream-50">Planos sob medida</h2>
          <p className="mt-4 text-cream-50/70">
            Escolha o formato de acompanhamento que faz sentido para o seu
            momento. Os valores variam conforme objetivo e duração — fale
            comigo para receber uma proposta personalizada.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:items-start">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative flex flex-col rounded-xl2 p-8 ${
                plan.featured
                  ? 'bg-lime-400 text-forest-950 shadow-soft md:-translate-y-4'
                  : 'bg-forest-900 text-cream-50'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 right-8 inline-flex items-center gap-1 rounded-full bg-forest-950 px-3 py-1 text-xs font-bold uppercase tracking-wide text-lime-400">
                  <Star className="h-3 w-3 fill-lime-400" /> Mais completo
                </span>
              )}

              <h3 className="font-display text-2xl uppercase">{plan.title}</h3>
              <p
                className={`mt-2 text-sm font-semibold ${
                  plan.featured ? 'text-forest-800' : 'text-lime-400'
                }`}
              >
                {plan.price}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.featured ? 'text-forest-800' : 'text-lime-400'
                      }`}
                    />
                    <span className={plan.featured ? 'text-forest-900' : 'text-cream-50/80'}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <WhatsappButton
                mensagem={plan.mensagem}
                variant={plan.featured ? 'solid' : 'outlineLight'}
                className={`mt-8 justify-center ${plan.featured ? '!bg-forest-950 !text-lime-400 hover:!bg-forest-900' : ''}`}
              >
                Falar no WhatsApp
              </WhatsappButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
