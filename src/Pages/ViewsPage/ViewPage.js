import styled from 'styled-components';
import ScrollWindowTop from '../../Functions/DOM/ScrollWindowTop';

import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import { useEffect } from 'react';
import { selectUploads } from '../../Redux/slices/UploadSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';





function ViewsPage({className=""}) {

  const navigate=useNavigate();
  const UploadSelects=useSelector(selectUploads);




  // useEffect(()=>{

  //   // navigate('/')
    
  // },[UploadSelects.progressBar])

  return (
    <DIV className={`${className} `}>
         <div className="ViewsPage-wrapper">

            <div className="display-flex align-items-center justify-content-center mt-3 ">
                  <EyeIcon className='font-2-8 '></EyeIcon>
                  <div className="ms-2 font-1-8">20 views</div>
            </div>

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    margin-top: 1rem;   /*only ViewsPage */
    
    .ViewsPage-wrapper{ 
      width: var(--page-content-width);
      margin-left: auto;
      margin-right: auto; 

    }
`;

export default ViewsPage;
