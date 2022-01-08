import React from "react";
import { HeaderPresentation } from "../../components/header";
import { PagePresentation } from "../../components/page/page-presentation";
import { Phone } from "../phone";

export const StandardPage: React.FC = () => {
  return ( 
  <PagePresentation>
     <HeaderPresentation text={"PhoneWords Predictive Text"}/>
     <Phone/>
  </PagePresentation>
  ) 
}