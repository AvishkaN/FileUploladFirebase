import styled from 'styled-components';



function Page({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="Page-wrapper">
              <h1>Home</h1> 
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only page */
    
    .Page-wrapper{

    }
`;

export default Page;
