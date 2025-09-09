import { Button } from "@/components/ui/button";
import { ArrowRight, Plus } from "lucide-react";

export default function Join() {
  return (
    <div className="bg-background flex flex-col justify-center items-center
    py-10 md:py-20">
      <div className="max-w-5xl mx-auto">

        <div className="text-center">
          <h2 className="font-bold text-4xl">Pronto para Revolucionar sua Geração de Boletos?</h2>
          <p className="mt-5 md:mt-10 text-sm md:text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto leading-relaxed">
            Junte-se a centenas de empresas que já automatizaram seus processos financeiros conosco
          </p>

          <div className="flex flex-col justify-center items-center md:flex-row gap-5">
            <Button className="py-4 px-5 rounded text-lg bg-[#517CD9] text-white">
              Começar Teste Gratuito
              <ArrowRight className="w-4 h-4" />
            </Button>

            <Button className="py-4 px-5 rounded text-lg  border border-bordercustomizada ">
              Assinar Premium
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

      </div>
    </div >
  )
}
