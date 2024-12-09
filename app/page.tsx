// import Footer from "@/components/Footer";
// import Header from "@/components/Header";

import Hero from "./components/Hero";
import Products from "./components/products";
import Slide from "./components/Slide";
import SubHero from "./components/Subhero";
import ShopHero from "./Shop/page";
import Footer from "./components/footer";



export default function Home(){
  return (
    <>
    {/* <Header/> */}
    <Hero/>
    <SubHero/>
    <Products/>
    <Slide/>
    <ShopHero/>
    <SubHero/>
    <Footer/>


    {/* <Footer/> */}
    </>
  )
}