
"use-client"
import { navItems } from "@/data";
import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Grid from "@/components/grid";
import { FloatingNav } from "@/components/ui/floatingnavbar";

import { FaHome } from "react-icons/fa";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip overflow-hidden" >
      <div className="max-w-7xl w-full">

        {/* login button commented ,but can set as contact me */}
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        {/* <Approach/>  */}
        {/* my approach is throin gerror so we try for different component */}
        <Footer/>


      </div>
    </main>
  );
}
