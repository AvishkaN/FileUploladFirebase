import styled from 'styled-components';
import TimeComp from './TimeComp/TimeComp';
import ScrollWindowTop from './../../Functions/DOM/ScrollWindowTop';
import ClockIcon from '@mui/icons-material/WatchLaterOutlined';

import { useEffect } from 'react';





function PreviewPage({className=""}) {

  useEffect(()=>{
    
    //Scroll To Top
    ScrollWindowTop();
  },[])


  return (
    <DIV className={`${className} `}>
         <div className="PreviewPage-wrapper">

                    {/* display timout */}
                    <div className="display-flex align-items-center justify-content-end  ">
                            <ClockIcon className='font-2-4 me-2' ></ClockIcon>
                           <TimeComp></TimeComp>
                    </div>


         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    margin-top: 1rem;   /*only PreviewPage */
    
    .PreviewPage-wrapper{ 
      width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto; 

    }
`;

export default PreviewPage;
