import Header from "@/components/Header";
import Bio from "@/components/Bio";
import Projects from "@/components/Projects";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Bio />
        <Projects />
        <SocialLinks />
      </main>
      <Footer />
    </div>
  );
}
