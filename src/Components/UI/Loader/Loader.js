import styled from 'styled-components';



function Loader({className=""}) {

  return (
    <DIV className={`${className} display-flex justify-content-center `}>
       
       <div className="loader">

       </div>

    </DIV>
  );
}


const DIV=styled.div`
        width:100%;
        overflow-y: hidden;

            .loader{

                width: 100%;
                border: 1rem solid #f3f3f3;
                border-radius: 50%;
                border-top: 1rem solid #0bb5d9;
                width: 12rem;
                height: 12rem;
                -webkit-animation: spin 2s linear infinite; /* Safari */
                animation: spin 1s linear infinite;

            }

        /* Safari */
        @-webkit-keyframes spin {
                0% { -webkit-transform: rotate(0deg); }
                100% { -webkit-transform: rotate(360deg); }
        }

        @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
        }
 
`;

export default Loader;
