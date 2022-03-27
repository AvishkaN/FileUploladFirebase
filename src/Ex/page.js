import styled from 'styled-components';
import ScrollWindowTop from './../Functions/DOM/ScrollWindowTop';
import { useEffect } from 'react';





function Page({className=""}) {

  useEffect(()=>{
    
    //Scroll To Top
    ScrollWindowTop();
  },[])


  return (
    <DIV className={`${className}`}>
         <div className="Page-wrapper">
           
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only page */
    
    .Page-wrapper{
      /* width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default Page;
