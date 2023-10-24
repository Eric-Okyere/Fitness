import useMediaQuery from "@/hooks/myMediaQuery"
import ActionButton from "@/shared/ActionButton"
import { SelectedPage } from "@/shared/types"
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { motion } from "framer-motion"



type Props = {
    setSelectedPage:(value: SelectedPage)=>void
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreen = useMediaQuery("(min-width:950px)")
  return (
    <section id="home"
    className="gap-16 bg-white py-10 md:h-full pb-0" >
        {/* IMAGE AND MAIN HEADER */}
        <motion.div 
        className="md:flex mx-auto w-5/6 items-center  justify-center md:h-5/6" 
        onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
        >
    {/* MAIN HEADER */}
    <div className="z-10 mt-32 md:basis-3/5">
        {/* HEADING */}
        <motion.div
        initial="hidden" 
        whileInView="visible"
        viewport={{once: true, amount:0.5}}
        transition={{duration:2.5}}
        variants={{
            hidden:{opacity: 0, x:-50},
            visible:{opacity:1, x:0},

        }}
        className="md:-mt-20">
            <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20 before:-z-[-1] before:content-envolvetext">
                  <h1 className="text-6xl text-red-400">POWER FITNESS</h1>
                  <h1 className="text-2xl">WE ARE THERE FOR YOU</h1>
                    {/* <img  alt="home-page-text" src={HomePageText} /> */}
                </div>
            </div>
            <p className="mt-8" >
            Install the latest PowerShell for new features and improvements! Install the latest PowerShell 
            for new features and improvements! https://aka.ms/PSWindows  https://aka.ms/PSWindows
                Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows
                </p>
        </motion.div>

        {/* ACTIONS */}
        <motion.div className="mt-8 flex items-center gap-8"
         initial="hidden" 
         whileInView="visible"
         viewport={{once: true, amount:0.5}}
         transition={{delay:0.2, duration:2.5}}
         variants={{
             hidden:{opacity: 0, x:50},
             visible:{opacity:1, x:0},
 
         }}
        >
           <ActionButton setSelectedPage={setSelectedPage}>
            Join Now
           </ActionButton>
           <AnchorLink className="text-sm font-bold text-red-300 underline hover:text-green-400"
           onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
           href={`#${SelectedPage.ContactUs}`}
           >
            <p>Learn More</p>
           </AnchorLink>
        </motion.div>
    </div>


    {/* IMAGE */}
    <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:justify-items-end " >
        <img src={HomePageGraphic} alt="home-pageGraphic" />
    </div>
        </motion.div>

        {/* SPONSORS */}
        {isAboveMediumScreen &&(
            <div className="h-[150px] bg-red-100 py-10" >
                <div className="mx-auto w-5/6">
                    <div className="flex gap-8 items-center justify-between" >
                        <img alt="redbull-sponsor" src={SponsorRedBull} />
                        <img alt="forbes-sponsor" src={SponsorForbes} />
                        <img alt="fortun-sponsor" src={SponsorFortune} />
                    </div>
                </div>
            </div>
        )
        }
    </section>
  )
}

export default Home