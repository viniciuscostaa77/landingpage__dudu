import { Salad, Dumbbell, Sparkles, ArrowUpRight } from 'lucide-react'
import WhatsappButton from './WhatsappButton.jsx'
import { whatsappMessages } from '../utils/whatsapp.js'

const services = [
  {
    icon: Salad,
    title: 'Plano de Nutrição',
    text: 'Plano alimentar individualizado para seus objetivos, rotina e preferências, com orientações claras e sustentáveis.',
    mensagem: whatsappMessages.consultoriaNutricao,
    highlight: false,
  },
  {
    icon: Dumbbell,
    title: 'Plano de Treino',
    text: 'Programação de treino personalizada, com progressão planejada e ajustes conforme sua evolução.',
    mensagem: whatsappMessages.consultoriaTreino,
    highlight: false,
  },
  {
    icon: Sparkles,
    title: 'Plano Completo',
    text: 'Treino e nutrição integrados em uma única estratégia, com acompanhamento completo em todas as frentes.',
    mensagem: whatsappMessages.consultoriaCompleta,
    highlight: true,
  },
]

export default function Services() {
  return (
    <section id="consultoria" className="container-px py-20 sm:py-28">
      <div className="max-w-xl">
        <span className="eyebrow text-forest-700">Serviços</span>
        <h2 className="section-heading mt-4 text-forest-950">
          Escolha seu plano
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className={`flex flex-col rounded-xl2 p-8 shadow-card transition-transform duration-200 hover:-translate-y-1 ${
              service.highlight
                ? 'bg-forest-950 text-cream-50'
                : 'bg-white text-ink-900'
            }`}
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full ${
                service.highlight ? 'bg-lime-400 text-forest-950' : 'bg-forest-800/10 text-forest-800'
              }`}
            >
              <service.icon className="h-6 w-6" strokeWidth={1.75} />
            </div>

            <h3 className="mt-6 font-display text-2xl uppercase">{service.title}</h3>
            <p
              className={`mt-3 flex-1 text-sm ${
                service.highlight ? 'text-cream-50/70' : 'text-ink-700'
              }`}
            >
              {service.text}
            </p>

            <WhatsappButton
              mensagem={service.mensagem}
              variant={service.highlight ? 'solid' : 'outline'}
              className="mt-8 self-start"
              showIcon={false}
            >
              Quero saber mais
              <ArrowUpRight className="h-4 w-4" />
            </WhatsappButton>
          </div>
        ))}
      </div>
    </section>
  )
}
