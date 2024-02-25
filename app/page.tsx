import Navbar from "@/components/navbar/navbar";
import Robot from "@/components/robot/robot";
import About from "@/components/about/about";
import Image from "next/image";


export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Robot/>
      <About/>
    </main>
  )
}
