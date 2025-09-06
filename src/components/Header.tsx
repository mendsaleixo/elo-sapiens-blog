import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header
      className="bg-slate-900 text-white p-2
    "
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/Elo_logo_light.svg"
            alt="Logo Elo Sapiens"
            width={72}
            height={52}
            priority
          />
          <span className="text-3xl font-lora font-bold"> ELO SAPIENS</span>
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-6 text-xl font-medium tracking-wide">
            <li>
              <Link href="/categorias/raizes" className="hover:text-musgo">
                Raízes
              </Link>
            </li>
            <li>
              <Link href="/categorias/horizontes" className="hover:text-musgo">
                Horizontes
              </Link>
            </li>
            <li>
              <Link href="/categorias/simbiose" className="hover:text-musgo">
                Simbiose
              </Link>
            </li>
            <li>
              <Link href="/categorias/prisma" className="hover:text-musgo">
                Prisma
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className="border-l border-pedra/30 pl-6 hover:text-musgo"
              >
                Sobre
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
