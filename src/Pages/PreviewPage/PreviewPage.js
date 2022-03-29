import styled from 'styled-components';
import TimeComp from './TimeComp/TimeComp';
import PreviewComp from './PreviewComp/PreviewComp';
import ScrollWindowTop from './../../Functions/DOM/ScrollWindowTop';
import Loader from './../../Components/UI/Loader/Loader';
import ClockIcon from '@mui/icons-material/WatchLaterOutlined';

import { useEffect } from 'react';
import { selectUploads } from '../../Redux/slices/UploadSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';





function PreviewPage({className=""}) {


  const UploadSelects=useSelector(selectUploads);
  const navigate=useNavigate;

 


  return (
    <DIV className={`${className} background-yello `}>
         <div className="PreviewPage-wrapper display-flex flex-direction-column  background-aqu ">

                    {/* display timout */}
                    <div className="col-12 display-flex  align-items-center justify-content-end  ">
                            <ClockIcon className='font-2-4 me-2' ></ClockIcon>
                           <TimeComp uploadedDocDetails={UploadSelects}></TimeComp>
                    </div>

                    {/* Preview Section */}
                    {/* <PreviewComp uploadedDocDetails={UploadSelects} className=''></PreviewComp> */}

                    {
                       UploadSelects.CurrentUploadedFileDocument && <PreviewComp uploadedDocDetails={UploadSelects} className=''></PreviewComp>
                    }

                    {
                       !UploadSelects.CurrentUploadedFileDocument && <Loader className='mt-auto mb-auto'></Loader>
                    }

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
      min-height:100vh;

    }
`;

export default PreviewPage;
