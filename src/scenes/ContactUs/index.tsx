import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import HText from "@/shared/HText";

type Props = {
    setSelectedPage:(value:SelectedPage)=>void;
}

const ContactUs = ({setSelectedPage}:Props) => {
   const inputStyles = `w-full my-2 rounded-lg bg-red-200 px-5 py-1 placeholder-white`
    const {register, trigger, 
    formState:{errors}}= useForm();
   
    const onSubmit = async(e:any)=>{
    const isValid = await trigger();
    if(!isValid)
    e.preventDefault();
   }
 
    return (
    <section id="contactus"
    className="mx-auto w-5/6 pt-24 pb-32"
    >
        <motion.div 
        onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}
        >
            {/* HEADER */}
            <motion.div className="md:w-3/5"
             initial="hidden" 
             whileInView="visible"
             viewport={{once: true, amount:0.5}}
             transition={{duration:2.5}}
             variants={{
                 hidden:{opacity: 0, x:-50},
                 visible:{opacity:1, x:0},
     
             }}
            >
                <HText>
                    <span className="text-red-400">JOIN NOW</span>
                    {""} TO GET IN SHAPE
                </HText>
                <p className="my-5">
                Install the latest PowerShell for new features and improvements! Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows https://aka.ms/PSWindows Install the latest PowerShell for new features and
                </p>
                
            </motion.div>

             {/* FORM AND IMAGE */}
             <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div className="mt-10 basis-3/5  md:mt-0"
                 initial="hidden" 
                 whileInView="visible"
                 viewport={{once: true, amount:0.5}}
                 transition={{duration:2.5}}
                 variants={{
                     hidden:{opacity: 0, y:50},
                     visible:{opacity:1, y:0},
         
                 }}
                >
                <form
                target="_blank"
                onSubmit={onSubmit}
                method="POST"
                action="https://formsubmit.co/97079774f3d729bedb3fa33cf5c60feb"
                >
              
                <input 
                placeholder="Add Your Name"
                className={inputStyles}
                type="text"
                {...register("name",{
                    required:true,
                    maxLength:100,

                } )}
                />
                {errors.name && (
                    <p className="mt-1 text-red-700">
                        {errors.name.type==="required" && "Please fill the form."}
                        {errors.name.type==="maxLength" && "You have reached the limited character."}
                    </p>
                )}
                
                <input 
                placeholder="Add Your Email"
                className={inputStyles}
                type="text"
                {...register("email",{
                    required:true,
                    pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i

                } )}
                />
                {errors.email && (
                    <p className="mt-1 text-red-700">
                        {errors.email.type==="required" && "Please fill the form."}
                        {errors.email.type==="pattern" && "Invalid email address."}
                    </p>
                )}
               

               <textarea
                placeholder="Please add your comment"
                className={inputStyles}
                rows={4}
                cols={50}
                {...register("message",{
                    required:true,
                    maxLength:2000,

                } )}
                />
                {errors.message && (
                    <p className="mt-1 text-red-700">
                        {errors.message.type==="required" && "Please fill the form."}
                        {errors.message.type==="maxLength" && "You have reached the limited character."}
                    </p>
                )}
                <button
                type="submit"
                className="mt-2 bg-red-500 text-white px-12 py-1 rounded-full
                 hover:bg-black flex items-center"
                >Submit</button>
                </form>
                </motion.div>

                <motion.div className="relative mt-16 basis-2/5 md:mt-0" 
                 initial="hidden" 
                 whileInView="visible"
                 viewport={{once: true, amount:0.5}}
                 transition={{delay:0.2,duration:2.5}}
                 variants={{
                     hidden:{opacity: 0, y:50},
                     visible:{opacity:1, y:0},
         
                 }}
                >
                    <div className="md:before:content-evenly w-full before:absolute
                    before:-bottom-20 before:-right-10 before:z-[-1]
                    
                    ">
                        <img alt="image" 
                        src={ContactUsPageGraphic}
                        className=" md:w-full "
                        />
                    </div>
                </motion.div>
             </div>

        </motion.div>
    </section>
  )
}

export default ContactUs