import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from '@/shared/types';


type Props = {
children:React.ReactNode;
setSelectedPage:(value:SelectedPage)=>void
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <div>
    <AnchorLink className="rounded-md bg-red-500 px-6 py-2 hover:bg-black hover:text-white" 
    onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
    href={`#${SelectedPage.ContactUs}`}
    >
        {children}
    </AnchorLink>
    </div>
  )
}

export default ActionButton