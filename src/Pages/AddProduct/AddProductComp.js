import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import Loading from './Loading';
import FIleUpload from './../../Components/UI/FileUpload/FIleUpload';
import {AddProduct, selectUploads, UploadFile} from '../../Redux/slices/UploadSlice';
import Input from '../../Components/UI/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';

function Comp() {

    const formRef=useRef();
    const fileRef=useRef();
    const selectRef=useRef();

    const navigate = useNavigate()

    const [fileUrl,setFileUrl]=useState(undefined);
    const dispatch=useDispatch();
    const UploadSelects=useSelector(selectUploads);

    useEffect(()=>{

        if(fileUrl){
            submitHandler(fileUrl);
        }
    },[fileUrl]);


    function navigateNextPage(){

                if(UploadSelects.progressBar==100){
                    // navigate('/preview-page');
                }
    }



    useEffect(() => {
        navigateNextPage();
        return () => {
            navigateNextPage({}); // This worked for me
        };
      }, [UploadSelects.progressBar]);



    const handlefileUpload=async(e)=>{
        e.preventDefault();

        const file=fileRef.current.files[0];

        UploadFile(dispatch,file,setFileUrl);   // sent file and use selector


        
    };


    // Add product 
    const submitHandler=(imgUrl)=>{



        const data={inputs:[...[formRef.current][0]]};

        let lastDataObj={};


        const newObj=data.inputs.map(input=>{
            console.log(input.classList[2]);
            console.log( input.value );
            return [ input.classList[2] , input.value ]
        }
        );

        console.log(newObj);

        // newObj.shift(); // remove first  elememt because its button input
        newObj.pop(); // remove last elememt because its button input
        
        const newObj2=newObj.map(input=>{
        
            // return input
            lastDataObj={...lastDataObj, ...{ [input[0]] : input[1] }}
        });


        lastDataObj.uploadedFile=imgUrl;  
        lastDataObj.uploladedFileType=selectRef.current.value;  


        AddProduct(dispatch,lastDataObj);

        // handlefileUpload();  /// photo file upload
    };




    return (
        <DIV className='row  p-3'>

                        <div className="col-3 row">

                                    <select name="col-12" id="" ref={selectRef}>
                                        <option value="image">image</option>
                                        <option value="video">Video</option>
                                    </select>

                                  <FIleUpload className='col-12 background-aqu border '  FileInputref={fileRef} ></FIleUpload>

                        </div>


                        <form  className="col display-flex flex-direction-column background-aqu " onSubmit={handlefileUpload}  ref={formRef}>



                                                <div className="ps-1   fw-bold font-1-3   ">Your Name</div>
                                                <Input    className="Name background-transparent border-grey-light border-radius-5  pt-2   ps-3  pb-2   " placeholder={""} ></Input>
                                    
                                    
                                                <div className="ps-1   fw-bold font-1-3   ">Dispay Duration</div>
                                                <Input    className="DispayDuration background-transparent border-grey-light border-radius-5  pt-2   ps-3  pb-2   " placeholder={""} ></Input>
                                            
                                            
                                                <div className="ps-1   fw-bold font-1-3   ">Start Time</div>
                                                <Input    className="DispayDuration background-transparent border-grey-light border-radius-5  pt-2   ps-3  pb-2   " placeholder={""} ></Input>
                                                
                                                <div className="ps-1   fw-bold font-1-3   ">Expire Time </div>
                                                <Input    className="DispayDuration background-transparent border-grey-light border-radius-5  pt-2   ps-3  pb-2   " placeholder={""} ></Input>




                                                <input type="submit" value="Add product" />


                                                {/* Loding */}
                                                <Loading className='mt-3'   progressBarWidth={UploadSelects.progressBar}    ></Loading>

                        
                        </form>


                 

        </DIV>
    )
}

const DIV=styled.div`
    width: 100%;

`;



export default Comp;
