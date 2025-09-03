import { Bot, Shield, Zap } from "lucide-react";

export default function WhyBoletoIA() {
  return (
    <div className="flex flex-col justify-center items-center max-w-5xl mx-auto
    py-10 md:py-20">
      <div className="text-center">
        <h2 className="font-bold text-4xl">Por que escolher o BoletoAI?</h2>
        <p className="mt-5 md:mt-10 text-sm md:text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto leading-relaxed">Nossa plataforma combina automação inteligente com a segurança que grandes empresas precisam.</p>
      </div>

      <main className="container grid grid-cols-1  lg:grid-cols-3 gap-6 md:gap-10 py-10 px-5 md:px-0">



        <div className="flex flex-col border border-bordercustomizada/30  shadow p-5 rounded">
          <Zap className="bg-[#E7EBF5] p-2 w-10 h-10 mb-5 rounded  text-[#6087DC]" />

          <h3 className="text-lg font-semibold">Por que escolher o Boleto AI?</h3>
          <p className="text-sm mt-2">
            O Boleto AI utiliza inteligência artificial para simplificar a geração de boletos, garantindo
            conformidade e precisão.
          </p>
        </div>

        <div className="flex flex-col border border-bordercustomizada/30  shadow p-5 rounded">
          <Shield className="bg-[#E7EBF5] p-2 w-10 h-10 mb-5 rounded  text-[#6087DC]" />

          <h3 className="text-lg font-semibold">Por que escolher o Boleto AI?</h3>
          <p className="text-sm mt-2">
            O Boleto AI utiliza inteligência artificial para simplificar a geração de boletos, garantindo
            conformidade e precisão.
          </p>
        </div>


        <div className="flex flex-col border border-bordercustomizada/30  shadow p-5 rounded">
          <Bot className="bg-[#E7EBF5] p-2 w-10 h-10 mb-5 rounded  text-[#6087DC]" />

          <h3 className="text-lg font-semibold">Por que escolher o Boleto AI?</h3>
          <p className="text-sm mt-2">
            O Boleto AI utiliza inteligência artificial para simplificar a geração de boletos, garantindo
            conformidade e precisão.
          </p>
        </div>

      </main>
    </div >
  )
}
