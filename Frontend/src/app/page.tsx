import Allproducts from "@/components/Allproducts";
import Categorysection from "@/components/Categorysection";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <Categorysection />
      <Allproducts/>
      <Categorysection />
    </main>
  );
}
  