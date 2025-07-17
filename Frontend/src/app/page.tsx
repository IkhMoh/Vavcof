import Allproducts from "@/components/Allproducts";
import MaterialsSection from "@/components/MaterialsSection";
import CategorySection from "@/components/Categorysection";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
// import { CgLayoutGrid } from "react-icons/cg";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <CategorySection />
      <Allproducts />
      <MaterialsSection />
      <Contact />
    </main>
  ); 
}
