import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CircleCheckBig, Shield } from "lucide-react";

interface SecurityProps {
  id: number;
  text: string
}

const arraySecurity: SecurityProps[] = [
  {
    id: 1,
    text: "Certificação ISO 27001"
  },
  {
    id: 1,
    text: "Criptografia AES-256"
  },
  {
    id: 1,
    text: "Compliance LGPD"
  },
  {
    id: 1,
    text: "Auditoria em tempo real"
  },
]

export default function BusinessSecurity() {
  return (
    <div className="flex justify-center items-center py-10 md:py-20 bg-[#FBFBFB]">
      <main className="container grid grid-cols-1  lg:grid-cols-2 gap-7 md:gap-5
        px-5 md:px-0 ">

        <section className="flex flex-col justify-center  ">
          <div className="w-50 flex items-center  rounded px-2  py-1  border border-bordercustomizada
           cursor-pointer mb-7 md:mb-4">
            <Shield className="h-3 w-3 " />
            <span className="text-xs font-medium ml-2 ">Business Security</span>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-4xl">Segurança e Compliance em Primeiro Lugar</h1>
            <p className=" text-sm md:text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto
             leading-relaxed">
              Nossa plataforma atende aos mais rigorosos padrões de segurança bancária, garantindo que seus dados e
              transações estejam sempre protegidos.
            </p>
          </div>

          <ul className="list-none flex flex-col gap-2">
            {
              arraySecurity.map((item) => (
                <li className="flex items-center" key={item.id}>
                  <CircleCheckBig className="w-4 h-4 text-[#6087DC] mr-2" /> {item.text} </li>
              ))
            }
          </ul>

        </section>

        <section className="">
          <Card className="bg-transparent border border-bordercustomizada flex flex-col
          justify-center items-center">
            <CardHeader className="w-full  flex flex-col
          justify-center items-center">

              <Shield className="bg-[#E7EBF5] p-5 w-18 h-18 mb-5 rounded-full  text-[#6087DC]" />
              <h3 className="font-bold text-3xl">99.9% de Uptime</h3>
            </CardHeader>
            <CardContent>
              <p className="text-md font-semibold ">Infraestrutura redundante com monitoramento 24/7 para garantir disponibilidade total</p>
              <Button className="w-full mt-2 border border-bordercustomizada">Ver Certificados</Button>
            </CardContent>
          </Card>

        </section>

      </main >
    </div >

  )
}
