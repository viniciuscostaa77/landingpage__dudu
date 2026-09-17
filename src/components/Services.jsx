import { Dumbbell, Brain, ShieldCheck, ArrowUpRight } from 'lucide-react'

import WhatsappButton from './WhatsappButton.jsx'

import { whatsappMessages } from '../utils/whatsapp.js'

const services = [
  {
    icon: Dumbbell,
    title: 'Técnica',
    text: 'Aprenda e desenvolva os fundamentos do Jiu-Jitsu através de treinos e práticas voltadas para sua evolução.',
    mensagem: whatsappMessages.geral,
    highlight: false,
  },
  {
    icon: Brain,
    title: 'Disciplina',
    text: 'O Jiu-Jitsu também é sobre foco, respeito e disciplina. Valores que fazem parte de cada treino.',
    mensagem: whatsappMessages.geral,
    highlight: false,
  },
  {
    icon: ShieldCheck,
    title: 'Evolução',
    text: 'Supere desafios, desenvolva suas habilidades e evolua constantemente dentro e fora do tatame.',
    mensagem: whatsappMessages.geral,
    highlight: true,
  },
]

export default function Services() {
  return (
    <section id="aulas" className="container-px py-20 sm:py-28">
      <div className="max-w-xl">
        <span className="eyebrow text-forest-700">
          Jiu-Jitsu
        </span>

        <h2 className="section-heading mt-4 text-forest-950">
          Evolua dentro e fora do tatame
        </h2>

        <p className="mt-5 text-ink-700">
          Treinamentos focados no desenvolvimento da técnica, disciplina e
          evolução de cada aluno.
        </p>
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
                service.highlight
                  ? 'bg-lime-400 text-forest-950'
                  : 'bg-forest-800/10 text-forest-800'
              }`}
            >
              <service.icon className="h-6 w-6" strokeWidth={1.75} />
            </div>

            <h3 className="mt-6 font-display text-2xl uppercase">
              {service.title}
            </h3>

            <p
              className={`mt-3 flex-1 text-sm ${
                service.highlight
                  ? 'text-cream-50/70'
                  : 'text-ink-700'
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