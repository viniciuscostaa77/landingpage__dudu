import { MapPin, CheckCircle2 } from 'lucide-react'

import profissional from '../config/profissional.js'

import WhatsappButton from './WhatsappButton.jsx'

import { whatsappMessages } from '../utils/whatsapp.js'

export default function About() {
  return (
    <section id="sobre" className="container-px py-20 sm:py-28">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

        {/* Foto */}
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

        {/* Texto */}
        <div>

          <span className="eyebrow text-forest-700">
            Sobre o professor
          </span>

          <h2 className="section-heading mt-4 text-forest-950">
            Atleta. Professor.
            <br />
            Futuro treinador de alta performance.
          </h2>

          <p className="mt-6 max-w-xl text-ink-700">
            Sou atleta e professor de Jiu-Jitsu, faixa-marrom, com 8 anos de
            experiência dentro dos tatames e uma trajetória marcada por
            competições e conquistas em diferentes níveis.
          </p>

          <p className="mt-4 max-w-xl text-ink-700">
            Sou Campeão Brasileiro Universitário, medalhista Sul-Americano e
            Pernambucano, além de ter competido em diversos estados do Brasil.
            Cada competição trouxe experiências que hoje fazem parte da minha
            forma de enxergar e ensinar o esporte.
          </p>

          <p className="mt-4 max-w-xl text-ink-700">
            Atualmente, sou acadêmico de Educação Física – Bacharelado,
            buscando unir a experiência prática do Jiu-Jitsu ao conhecimento
            científico do treinamento esportivo.
          </p>

          <p className="mt-4 max-w-xl text-ink-700">
            Meu propósito é formar e desenvolver atletas, desde aqueles que
            estão começando no esporte até competidores que buscam alta
            performance, trabalhando técnica, preparação física, disciplina e
            evolução contínua.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">

            <div className="flex items-start gap-2 text-sm text-ink-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest-700" />
              <span>Faixa Marrom de Jiu-Jitsu</span>
            </div>

            <div className="flex items-start gap-2 text-sm text-ink-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest-700" />
              <span>8 anos de experiência</span>
            </div>

            <div className="flex items-start gap-2 text-sm text-ink-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest-700" />
              <span>Campeão Brasileiro Universitário</span>
            </div>

            <div className="flex items-start gap-2 text-sm text-ink-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest-700" />
              <span>Medalhista Sul-Americano e Pernambucano</span>
            </div>

            <div className="flex items-start gap-2 text-sm text-ink-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest-700" />
              <span>Acadêmico de Educação Física</span>
            </div>

            <div className="flex items-start gap-2 text-sm text-ink-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest-700" />
              <span>Foco em treinamento esportivo</span>
            </div>

          </div>

          <p className="mt-8 max-w-xl text-sm font-semibold leading-6 text-forest-800">
            Experiência de quem vive o esporte. Conhecimento de quem busca
            entender o treinamento. Compromisso de quem quer levar atletas ao
            próximo nível.
          </p>

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