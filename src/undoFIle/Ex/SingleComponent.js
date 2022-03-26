import styled from 'styled-components';



function Singlecomponent({className=""}) {
  return (
    <DIV className={`${className} button`} >
         <div className="wrapper">
           
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%; 
    
    .wrapper{
        width: 100%;
        button{

        }
    }
`;

export default Singlecomponent;
