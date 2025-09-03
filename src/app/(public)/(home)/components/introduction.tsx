import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, CircleCheckBig } from "lucide-react";

export default function Introduction() {
  return (
    <div className="h-full flex flex-col justify-center items-center ">
      <section className="max-w-5xl py-5 md:py-20 md:px-4 flex flex-col items-center justify-center">

        <div className="flex items-center justify-center bg-[#EDF1FB] rounded px-2  py-1 text-[#6087DC] border border-[#6087DC]/40
        cursor-pointer mb-2">
          <Bot className="h-3 w-3 " />
          <span className="text-xs font-medium ml-2 "> Powered by AI</span>
        </div>

        <div className="text-center md:p-5 ">
          <h2 className="text-3xl md:text-6xl font-bold text-balance mb-6 ">Automatize a Geração de
            {' '}
            <span className=" text-[#517CD9]">Boletos Bancários</span>
            {' '}
            para Grandes Empresas</h2>
          <p className="text-sm md:text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto leading-relaxed">
            Elimine a complexidade e economize horas com nossa plataforma inteligente que gera boletos automaticamente,
            auxiliada por IA para garantir precisão e conformidade.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 md:p-5 ">
          <Button className="bg-[#517CD9] text-white rounded text-sm md:text-xl py-2 px-2 md:py-3 md:px-4
          hover:scale-105 transition-all duration-300">
            Começar Agora
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button className="rounded  text-sm md:text-xl py-2 px-2 md:py-3 md:px-4 border border-bordercustomizada
          hover:scale-105 transition-all duration-300">
            Ver demonstração
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-5 p-5">
          <p className="flex justify-center items-center">
            <CircleCheckBig className="w-4 h-4 text-[#6087DC] mr-2" />
            Sem configuração complexa
          </p>
          <p className="flex justify-center items-center">
            <CircleCheckBig className="w-4 h-4 text-[#6087DC] mr-2" />
            Conformidade garantida
          </p>
          <p className="flex justify-center items-center">
            <CircleCheckBig className="w-4 h-4 text-[#6087DC] mr-2" />
            Suporte 24/7
          </p>

        </div>


      </section>


    </div>
  )
}
