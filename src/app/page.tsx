import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Process from "@/components/sections/Process";
import Offerings from "@/components/sections/Offerings";
import Labs from "@/components/sections/Labs";
import Domains from "@/components/sections/Domains";
import Clients from "@/components/sections/Clients";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <Process />
      <Offerings />
      <Labs />
      <Domains />
      <Clients />
      <CTA />
    </main>
  );
}
