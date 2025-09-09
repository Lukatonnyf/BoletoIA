import { Clock, Shield, Zap } from "lucide-react";

interface CardsProps {
  id: number;
  icon: React.ReactNode
  title: string;
  description: string;
}

const CardsArray: CardsProps[] = [
  {
    id: 1,
    icon: <Zap className="bg-[#E7EBF5] p-2 w-10 h-10 mb-5 rounded  text-[#6087DC]" />,
    title: "Por que escolher o Boleto AI?",
    description: `O Boleto AI utiliza inteligência artificial para simplificar a geração de boletos,
    garantindo conformidade e precisão.`
  },
  {
    id: 2,
    icon: <Shield className="bg-[#E7EBF5] p-2 w-10 h-10 mb-5 rounded  text-[#6087DC]" />,
    title: "Segurança Bancária",
    description: `Criptografia de ponta a ponta e conformidade com todas as regulamentações financeiras.`
  },
  {
    id: 3,
    icon: <Clock className="bg-[#E7EBF5] p-2 w-10 h-10 mb-5 rounded  text-[#6087DC]" />,
    title: "Redução de 90% no Tempo",
    description: `Transforme horas de trabalho manual em minutos de automação inteligente.`
  },

]

export default function WhyBoletoIA() {
  return (
    <div className="flex flex-col justify-center items-center max-w-5xl mx-auto
    py-10 md:py-20 bg-background">
      <div className="text-center">
        <h2 className="font-bold text-4xl">Por que escolher o BoletoAI?</h2>
        <p className="mt-5 md:mt-10 text-sm md:text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto leading-relaxed">
          Nossa plataforma combina automação inteligente com a segurança que grandes empresas precisam.
        </p>
      </div>

      <main className="container grid grid-cols-1  lg:grid-cols-3 gap-6 md:gap-10 py-10 px-5 md:px-0 ">


        {CardsArray.length > 0 ?
          CardsArray.map((item, i) => (
            <div
              key={item.id}
              className="flex flex-col border border-bordercustomizada/30  shadow p-5 rounded
            hover:border-[#6087DC] transition-all duration-500
              ">
              {item.icon}

              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm mt-2">
                {item.description}
              </p>
            </div>
          )) : (
            <p>carregando...</p>
          )
        }
      </main>
    </div >
  )
}
