export default function Header() {
  return (
    <header className="border-b border-border backdrop-blur-sm sticky top-0 z-50 bg-card/50 ">
      <section className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-primary">Meu Site</h1>

        <ul className="hidden not-first:md:flex md:flex-row gap-5   text-zinc-600">
          <li>Recursos</li>
          <li>Segurança</li>
          <li>Contato</li>

        </ul>


        <button
          className="border border-bordercustomizada py-2 px-4 rounded-xl
          transition-all duration-300 text-zinc-700
           hover:bg-orange-500 hover:text-white"
        >
          Entrar
        </button>

      </section>
    </header>
  );
}
