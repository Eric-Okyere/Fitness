
export enum SelectedPage{
    Home="home",
    Benefits="benefits",
    OurClasses="OurClasses",
    ContactUs="contactus",
    Footer="footer"
  }

  export interface BenefitType{
    icon: JSX.Element,
    title: string,
    description: string
  }

  export interface ClassType{
    name:string,
    description?:string,
    image:string
  }

  