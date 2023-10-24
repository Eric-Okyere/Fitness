import HText from "@/shared/HText"
import { BenefitType, SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import Benefit from "./Benefit"
import benefits from "@/shared/Bene"
import ActionButton from "@/shared/ActionButton"
import BenefitsPageGraphics from "@/assets/img.png"


type Props = {
  setSelectedPage:(value:SelectedPage)=>void
}


const container ={
  hidden:{},
  visible:{
    transition:{staggerChildren: 0.2}
  }
}




const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section 
    id="benefits"
     className="mx-auto min-h-full w-5/6 py-20"
    
    >
      <motion.div
       onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
       <motion.div
        initial="hidden" 
        whileInView="visible"
        viewport={{once: true, amount:0.5}}
        transition={{delay:0.2, duration:2.5}}
        variants={{
            hidden:{opacity: 0, x:50},
            visible:{opacity:1, x:0},

        }}
       className="md:my-5 md: w-3/4 ">
       <HText>MORE THAN JUST A GYM.</HText>
      <p className="my-5 " >
      Install the latest PowerShell for new features and improvements! Install the latest
       PowerShell for new features and 
      improvements! https://aka.ms/PSWindows https://aka.ms/PSWindows 
      Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows
      </p>
       </motion.div>
 
       {/* BENEFITS */}
       <motion.div className="md:flex items-center justify-between gap-8 mt-5 "
       initial="hidden"
       whileInView="visible"
       viewport={{once:true, amount:0.5}}
       variants={container}
       >

        {benefits.map((benefit: BenefitType)=>(
          <Benefit key={benefit.title} 
          icon={benefit.icon}
          title={benefit.title}
          description={benefit.description}
          setSelectedPage={setSelectedPage}
          />
        ))}
       </motion.div>

       {/* GRAPHICS AND DESCRIPTION */}
       <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex" >
        {/* GRAPHIC  */}
        <img src={BenefitsPageGraphics}
        className="mx-auto w-[500px]" alt="benefits-page-graphics"
        />

        {/* DESCRIPTION */}
        <div>
          {/* TITLE */}
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:-z-20
            
            ">
              <motion.div
               initial="hidden" 
               whileInView="visible"
               viewport={{once: true, amount:0.5}}
               transition={{delay:0.2, duration:2.5}}
               variants={{
                   hidden:{opacity: 0, x:50},
                   visible:{opacity:1, x:0},
       
               }}
              >
                <HText>
                  MILLIONS OF HAPPY MEMBERS GETTING{" "}
                  <span className="text-red-300">FIT.</span>
                </HText>
              </motion.div>
              </div>
          </div>
          {/* DESCRIPT */}
          <motion.div
           initial="hidden" 
           whileInView="visible"
           viewport={{once: true, amount:0.5}}
           transition={{delay:0.2, duration:2.5}}
           variants={{
               hidden:{opacity: 0, x:-50},
               visible:{opacity:1, x:0},
   
           }}
          >
          <p className="my-5">Install the latest PowerShell for new features and improvements! Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows https://aka.ms/PSWindows 
            Install the latest PowerShell for new features and</p>
         
          <p className="mb-5" >the latest PowerShell for new features and improvements! Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows https://aka.ms/PSWindows Install 
            the latest PowerShell latest PowerShell for the latest</p>
  
          </motion.div>
          {/* BUTTON */}
          <div className="relative mt-16">
           <div className="before:absolute before:-bottom-20 before:right-40
          before:z-[-1] before:content-sparkles">
            <ActionButton setSelectedPage={setSelectedPage} >
              Join Now
            </ActionButton>
           </div>
          </div>
        </div>
       </div>
      </motion.div>
  

    </section>
  )
}

export default Benefits