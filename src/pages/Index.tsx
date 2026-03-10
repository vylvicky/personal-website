import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";

import Media from "@/components/Media";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <SelectedWork />
      <Media />
      <Contact />
    </main>
  );
};

export default Index;
