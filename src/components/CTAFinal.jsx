import WhatsappButton from './WhatsappButton.jsx'

import { whatsappMessages } from '../utils/whatsapp.js'

export default function CTAFinal() {
  return (
    <section className="relative overflow-hidden bg-forest-950 py-24 text-center sm:py-32">

      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-lime-400/10 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 bg-grain" />

      <div className="container-px relative mx-auto max-w-xl">

        <h2 className="section-heading text-cream-50">
          Pronto para começar sua evolução?
        </h2>

        <p className="mx-auto mt-5 max-w-md text-cream-50/70">
          Dê o primeiro passo no Jiu-Jitsu. Entre em contato pelo WhatsApp
          e saiba mais sobre os treinos e como começar.
        </p>

        <div className="mt-9">
          <WhatsappButton
            mensagem={whatsappMessages.ctaFinal}
            size="lg"
          >
            Falar com o Professor
          </WhatsappButton>
        </div>

      </div>
    </section>
  )
}