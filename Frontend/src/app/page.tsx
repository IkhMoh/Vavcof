import Allproducts from "@/components/Allproducts";
import Category2section from "@/components/Category2section";
import Categorysection from "@/components/Categorysection";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import { CgLayoutGrid } from "react-icons/cg";
export default async function Home() {
  const res = await fetch("http://localhost:1337/api/photos?populate=*", {
    next: {
      revalidate: 120,
    },
  });
  const data = await res.json();
  console.log(data);
   return (
    <main className="">
      <Hero />
      <Categorysection />
      <Allproducts />
      <Category2section />
      <Contact />
    </main>
  );
}
