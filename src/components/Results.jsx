// ⚠️ Lembrete: use só fotos de clientes com autorização antes de publicar.
const testimonials = [
  {
    name: 'PEDRO',
    result: 'Evolução de 6 meses',
    text: '"-5% de gordura corporal e 5kg de massa magra."',
    before: '/antes_1.webp',
    after: '/depois_1.webp',
  },
  {
    name: 'MARIA',
    result: 'Evolução de 4 meses',
    text: '"-3% de gordura corporal e 4kg de massa magra."',
    before: '/antes_2.webp',
    after: '/depois_2.webp',
  },
  {
    name: 'JOÃO',
    result: 'Evolução de 3 meses',
    text: '"-3% de gordura corporal e 2kg de massa magra."',
    before: '/antes_3.webp',
    after: '/depois_3.webp',
  },
]

export default function Results() {
  return (
    <section id="resultados" className="container-px py-20 sm:py-28">
      <div className="max-w-xl">
        <span className="eyebrow text-forest-700">Resultados</span>
        <h2 className="section-heading mt-4 text-forest-950">
          Antes e depois da consultoria
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, i) => (
          <div key={i} className="rounded-xl2 bg-white p-5 shadow-card">
            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <img
                  src={item.before}
                  alt={`${item.name} - antes`}
                  className="aspect-[3/4] w-full rounded-lg object-cover"
                />
                <span className="absolute left-2 top-2 rounded-full bg-forest-950/85 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-cream-50">
                  Antes
                </span>
              </div>
              <div className="relative">
                <img
                  src={item.after}
                  alt={`${item.name} - depois`}
                  className="aspect-[3/4] w-full rounded-lg object-cover"
                />
                <span className="absolute left-2 top-2 rounded-full bg-lime-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-forest-950">
                  Depois
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm text-ink-700">{item.text}</p>

            <div className="mt-3 border-t border-ink-900/10 pt-3">
              <p className="text-sm font-semibold text-forest-950">{item.name}</p>
              <p className="text-xs text-ink-500">{item.result}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
