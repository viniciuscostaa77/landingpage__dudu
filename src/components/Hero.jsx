import { ArrowRight, Shield } from 'lucide-react'

import WhatsappButton from './WhatsappButton.jsx'

import { whatsappMessages } from '../utils/whatsapp.js'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-forest-950 pt-32 pb-20 sm:pb-28 lg:pt-40"
    >
      {/* Ambient shapes */}
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-forest-700/40 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-lime-500/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-grain" />

      <div className="container-px relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">

        {/* Text column */}
        <div className="order-2 lg:order-1">

          <span className="eyebrow rounded-full bg-lime-400/10 px-3 py-1 text-lime-400">
            <Shield className="h-3.5 w-3.5" />
            Faixa Marrom • Professor de Jiu-Jitsu
          </span>

          <h1 className="mt-6 font-display text-5xl uppercase leading-[0.92] text-cream-50 sm:text-6xl md:text-7xl">
            Evolua

            <br />

            dentro

            <br />

            <span className="text-lime-400">e fora do tatame.</span>
          </h1>

          <p className="mt-6 max-w-md text-base text-cream-50/70 sm:text-lg">
            Professor de Jiu-Jitsu e estudante de Educação Física, unindo
            experiência no tatame, disciplina e conhecimento para ajudar você
            a evoluir a cada treino.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">

            <WhatsappButton mensagem={whatsappMessages.hero} size="lg">
              Falar no WhatsApp
            </WhatsappButton>

            <a
              href="#sobre"
              className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream-50/25 px-8 py-4 text-base font-semibold text-cream-50 transition-colors hover:border-cream-50/60"
            >
              Conhecer meu trabalho

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-cream-50/10 pt-6">

            <div>
              <p className="font-display text-3xl text-lime-400">
                Jiu-Jitsu
              </p>

              <p className="text-xs text-cream-50/60">
                técnica e disciplina
              </p>
            </div>

            <div>
              <p className="font-display text-3xl text-lime-400">
                Educação Física
              </p>

              <p className="text-xs text-cream-50/60">
                em formação
              </p>
            </div>

          </div>

        </div>

        {/* Image column */}
        <div className="order-1 lg:order-2">

          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">

            <div className="absolute -inset-3 rounded-[2rem] border border-lime-400/20" />

            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-lime-400/90" />

            <img
              src="/foto_testee.png"
              alt="Dudu, professor de Jiu-Jitsu e faixa marrom"
              className="relative h-full w-full rounded-[2rem] object-cover shadow-soft"
            />

          </div>

        </div>

      </div>
    </section>
  )
}