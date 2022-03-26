import styled from 'styled-components';
import Input from '../Input/Input';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import { useState } from 'react';



function FileUpload({className="",FileInputref}) {

    const[uploadSatate,SetUploadMessage]=useState('Drag and drop images here');



    const handleChange=(e)=>{
        console.log(e.target.value);

        if(e.target.value){
            console.log();
            SetUploadMessage(`Uploaded    ${e.target.value}`);
        }
    };   

  return (
    <DIV className={`${className}`}  onChange={handleChange}>        

        <div className="background-  display-flex display-flex-direction-column align-item-center h-100 justify-content-center">
               
               
               
               {!(uploadSatate.split(' ')[0]=="Uploaded") &&   <CloudUploadIcon className='font-2-5'></CloudUploadIcon>}
               {uploadSatate.split(' ')[0]=="Uploaded" &&  <CloudDoneIcon className='font-2-5'></CloudDoneIcon>}
               
                <div className="" >{uploadSatate}</div>

        </div>


        <Input FileInputref={FileInputref}  type="file"  border={false} className="p-1 h-100 drag-and-drop  border    opacity-0 cursor-p"  ></Input>



    </DIV>
  );
}


const DIV=styled.div`
    position: relative;
    
   svg{
    font-size: 9rem !important; 
   }

   .drag-and-drop{
       position: absolute;
       top:0;
       left:0; 
   }
`;

export default FileUpload;
