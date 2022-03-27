import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styled from 'styled-components';
import PostAdPopUp from './PostAdPopUp/PostAdPopUp';
import { selectUploads } from '../../Redux/slices/UploadSlice';




function Overlay({className=""}) {

  const dispatch=useDispatch();
  // const uploads=useSelector(selectUploads);

  useEffect(()=>{
    window.scroll(0,0)
  });



 

  return (
    <DIV className={`${className}`} >
         <div className="Overlay-wrapper cursor-p">
             {/* {uploads.showPostAd &&    <PostAdPopUp className='w-65  overlay-inside-popup-post-ad  ms-auto me-auto mt-5'></PostAdPopUp>} */}
            <PostAdPopUp className='w-65  overlay-inside-popup-post-ad  ms-auto me-auto mt-5'></PostAdPopUp>
     
     
     

          
            
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    height: 100%;  
    background: #00000091;  
    position: absolute;
    top: 0;
    left: 0; 
    z-index:1000; 
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Overlay */
    
    .Overlay-wrapper{
      /* width: var(--Overlay-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .mobile-navv{
          margin-left: auto;  

          @media(max-width:499px){     
                      width: 50% !important;
        }


          .nav-right-button{
            width:100% !important; 

            &:first-child{
              /* background: red;  */
            }
          }
        }


        .overlay-inside-popup{
              @media(max-width:609px){     
                          width: 92% !important;
            }
            
          }
          
          .overlay-inside-popup-post-ad{
                @media(max-width:903px){     
                  width: 91% !important;
              }

        }

     

    }
`;

export default Overlay;
