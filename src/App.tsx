import Navbar from "@/scenes/navbar/index"
import { useState, useEffect } from 'react';
import { SelectedPage } from "@/shared/types";
import Home from "./scenes/Home";
import Benefits from "./scenes/Benefits";
import Ourclasses from "./scenes/OurClases";
import ContactUs from "./scenes/ContactUs";
import Footer from "./scenes/Footer";






function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home);
    const [isTopOfPage, setIsTopOfPage] = useState<Boolean>(true)

    useEffect(() => {
      const handleScroll = ()=>{
        if(window.scrollY===0){
          setIsTopOfPage(true)
          setSelectedPage(SelectedPage.Home)
        }

        if(window.scrollY !== 0)setIsTopOfPage(false)
      }
    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll)
    
    },[])
    
    
  return (
   <div className="app bg-gray-100">
    <Navbar 
    isTopOfPage={isTopOfPage}
    selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
   
   <Home setSelectedPage={setSelectedPage}/>
   <Benefits setSelectedPage={setSelectedPage}/>
    <Ourclasses setSelectedPage={setSelectedPage} />
    <ContactUs setSelectedPage={setSelectedPage} />
   <Footer setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
