const results = [
  {
    title: 'Evolução técnica',
    text: 'Aperfeiçoe seus movimentos, posições e fundamentos do Jiu-Jitsu com orientação durante os treinos.',
  },
  {
    title: 'Disciplina e constância',
    text: 'Desenvolva disciplina, foco e consistência através da rotina de treinos e da prática do Jiu-Jitsu.',
  },
  {
    title: 'Confiança no tatame',
    text: 'Ganhe mais segurança para aplicar o que aprende e encarar novos desafios durante sua evolução.',
  },
]

export default function Results() {
  return (
    <section id="resultados" className="container-px py-20 sm:py-28">
      <div className="max-w-xl">
        <span className="eyebrow text-forest-700">Evolução</span>

        <h2 className="section-heading mt-4 text-forest-950">
          Resultados que vão além do tatame
        </h2>

        <p className="mt-4 text-ink-700">
          O Jiu-Jitsu é uma jornada de evolução constante. Cada treino é uma
          oportunidade para aprender, superar desafios e desenvolver novas
          habilidades.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((item, i) => (
          <div
            key={i}
            className="rounded-xl2 bg-white p-6 shadow-card"
          >
            <span className="text-sm font-bold text-lime-600">
              0{i + 1}
            </span>

            <h3 className="mt-4 text-lg font-semibold text-forest-950">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-ink-700">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}