import { UserRound, Dumbbell, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: UserRound,
    title: 'Conheça o Jiu-Jitsu',
    text: 'Comece sua jornada conhecendo os fundamentos, movimentos e princípios do Jiu-Jitsu.',
  },
  {
    number: '02',
    icon: Dumbbell,
    title: 'Treine',
    text: 'Participe dos treinos, pratique as técnicas e desenvolva suas habilidades no tatame.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Evolua',
    text: 'Com dedicação e constância, desenvolva sua técnica e continue evoluindo a cada treino.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-cream-100 py-20 sm:py-28">
      <div className="container-px">
        <div className="max-w-xl">
          <span className="eyebrow text-forest-700">
            O processo
          </span>

          <h2 className="section-heading mt-4 text-forest-950">
            Sua jornada no Jiu-Jitsu
          </h2>

          <p className="mt-5 text-ink-700">
            Um processo de aprendizado baseado em prática, disciplina e
            evolução constante.
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-forest-800/15 sm:block" />

          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex items-center gap-4 sm:block">
                <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-2 border-forest-800 bg-cream-100 text-forest-800">
                  <step.icon
                    className="h-7 w-7"
                    strokeWidth={1.75}
                  />
                </div>

                <span className="font-display text-3xl text-lime-600 sm:mt-5 sm:block">
                  {step.number}
                </span>
              </div>

              <h3 className="mt-4 font-display text-2xl uppercase text-forest-950">
                {step.title}
              </h3>

              <p className="mt-2 max-w-xs text-sm text-ink-700">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}