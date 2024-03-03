import Navbar from "@/components/navbar/navbar";
import Robot from "@/components/robot/robot";
import About from "@/components/about/about";
import Skills from "@/components/skills/skills";
import Project from "@/components/project/project";


export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Robot/>
      <About/>
      <Skills/>
      <Project/>
    </main>
  )
}
