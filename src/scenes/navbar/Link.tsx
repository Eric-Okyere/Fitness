import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"


type Props = {
    page:string,
    selectedPage:SelectedPage,
    setSelectedPage:(value:SelectedPage) => void;
}

function Link({page, selectedPage, setSelectedPage,}: Props) {
    const lowerCasepage = page.toLowerCase().replace(/ /g,"") as SelectedPage
  return (
    <AnchorLink 
    className={`${selectedPage === lowerCasepage ? "text-red-400":""}
    transition duration-500 hover:text-primary-500
    `}
    href={`#${lowerCasepage}`}
    onClick={()=> setSelectedPage(lowerCasepage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link