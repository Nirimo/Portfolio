import Navbar from "@/components/navbar/navbar";
import Robot from "@/components/robot/robot";
import About from "@/components/about/about";
import Skills from "@/components/skills/skills";
import Project from "@/components/project/project";
import Footer from "@/components/footer/footer";


export default function Home() {
  return (
    <main>
      <Navbar/>
      <Robot/>
      <About/>
      <Skills/>
      <Project/>
      <Footer/>
    </main>
  )
}
