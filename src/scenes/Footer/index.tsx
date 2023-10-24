import { SelectedPage } from "@/shared/types"
import Logo from "@/assets/img1.png"
import { motion } from 'framer-motion';

type Props = {
  setSelectedPage: (value:SelectedPage)=>void
}

const Footer = ({setSelectedPage}: Props) => {
  return (
    <footer className="bg-red-200" id="footer"
   
    >
      <motion.div className="justify-center mx-auto w-5/6 gap-16 md:flex "
       onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}
      >
      <div className="mt-16 basis-1/2 md:mt-0 ">
        <img alt="logo" src={Logo} className="w-[100px] h-10 mt-1"/>
        <p className="my-5">
        latest PowerShell for new features and improvements! https://aka.ms/PSWindows https://aka.ms/PSWindows Install the latest PowerShell for new features and
        </p>
        <p>© All Right Reserved.</p>
      </div>
      <div
      className="mt-16 basis-1/4 md:mt-0 "
      >
        <h4 className="font-bold">Links</h4>
      <p className="my-5">Massa orci senectus</p>
      <p className="my-5">Et gravida id et etiam</p>
      <p className="my-5">Ullamcorper vivamus</p>
      </div>
      <div>
        
      <h4 className="font-bold">Contact Us</h4>
      <p className="my-5">Tempus metus mattis risus volupat egestas.</p>
      <p className="my-5">(+233)247747624</p>

      </div>
      </motion.div>
     
    </footer>
  )
}

export default Footer