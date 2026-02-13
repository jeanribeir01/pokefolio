import { data } from "@/lib/data";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { EducationSection } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SideNav } from "@/components/SideNav";

export default function Home() {
  return (
    <>
      <SideNav />
      <main className="min-h-screen">
        <Hero data={data.basics} />
        {data.skills && <Skills skills={data.skills} />}
        {data.projects && <Projects projects={data.projects} />}
        {data.work && <Experience work={data.work} />}
        {data.education && <EducationSection education={data.education} />}
        <Contact basics={data.basics} languages={data.languages} />
        <Footer config={data.config} />
      </main>
    </>
  );
}
