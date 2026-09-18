import { MapPin, CheckCircle2 } from 'lucide-react'

import profissional from '../config/profissional.js'

import WhatsappButton from './WhatsappButton.jsx'

import { whatsappMessages } from '../utils/whatsapp.js'

export default function About() {
  return (
    <section id="sobre" className="container-px py-20 sm:py-28">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

        <div className="relative mx-auto w-full max-w-sm lg:mx-0">

          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-xl2 bg-forest-800/10" />

          <img
            src="/fotoo__.png"
            alt={`${profissional.nome}, ${profissional.profissao}`}
            className="relative aspect-[3/4] w-full rounded-xl2 object-cover shadow-card"
          />

          <div className="absolute -left-6 bottom-8 hidden rounded-xl2 bg-forest-950 px-5 py-4 text-cream-50 shadow-soft sm:block">
            <p className="flex items-center gap-2 text-xs text-cream-50/70">
              <MapPin className="h-3.5 w-3.5 text-lime-400" />
              {profissional.cidade}
            </p>
          </div>

        </div>

        <div>

          <span className="eyebrow text-forest-700">
            Sobre o professor
          </span>

          <h2 className="section-heading mt-4 text-forest-950">
            {profissional.nome}
          </h2>

          <p className="mt-2 text-lg font-semibold text-lime-600">
            {profissional.profissao}
          </p>

          <p className="mt-6 max-w-xl text-ink-700">
            Sou faixa marrom de Jiu-Jitsu e venho construindo minha trajetória
            no esporte com dedicação, disciplina e vontade de evoluir a cada
            treino.
          </p>

          <p className="mt-4 max-w-xl text-ink-700">
            Ao longo dessa caminhada, tive a oportunidade de participar do
            Campeonato Sul-Americano de Jiu-Jitsu e também de conquistar uma
            medalha nos Jogos Universitários Brasileiros (JUBs).
          </p>

          <p className="mt-4 max-w-xl text-ink-700">
            Atualmente, também sou estudante de Educação Física, buscando unir
            minha experiência dentro do tatame com os conhecimentos que venho
            adquirindo durante minha formação.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">

            <li className="flex items-start gap-2 text-sm text-ink-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest-700" />
              Faixa Marrom de Jiu-Jitsu
            </li>

            <li className="flex items-start gap-2 text-sm text-ink-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest-700" />
              Participação no Sul-Americano
            </li>

            <li className="flex items-start gap-2 text-sm text-ink-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest-700" />
              Medalhista nos JUBs
            </li>

            <li className="flex items-start gap-2 text-sm text-ink-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest-700" />
              Estudante de Educação Física
            </li>

          </ul>

          <div className="mt-9">
            <WhatsappButton
              mensagem={whatsappMessages.geral}
              variant="outline"
            >
              Conversar no WhatsApp
            </WhatsappButton>
          </div>

        </div>

      </div>
    </section>
  )
}