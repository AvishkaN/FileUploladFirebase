import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import Loading from './Loading';
import FIleUpload from './../../Components/UI/FileUpload/FIleUpload';
import Button from './../../Components/UI/Button/Button';
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
    const [ShowLoadingBar,setShowLoadingBar]=useState(null);
    const dispatch=useDispatch();
    const UploadSelects=useSelector(selectUploads);

    useEffect(async()=>{ 

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
        setShowLoadingBar(true)

        const file=fileRef.current.files[0];

        UploadFile(dispatch,file,setFileUrl);   // sent file and use selector


        
    };


    // Add product 
    const submitHandler=async(imgUrl)=>{


        // setShowLoadingBar(true);

        const data={inputs:[...[formRef.current][0]]};

        let lastDataObj={};


        const newObj=data.inputs.map(input=>{
            return [ input.classList[2] , input.value ]
        }
        );


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
        <DIV className='display-flex align-item-center'>

            <div className="row col-12 p-3 align-item-cente">

                        <div className="col-lg-3 col-12 select row  pe-lg-4  mb-lg-0 pe-0 ps-4 mb-3">

                                    <select name="col-12 border border-radius-5 " className='border-primary- border-radius-10 pt-2 pb-2 mb-2  ' id="" ref={selectRef}>
                                        <option value="image">image</option>
                                        <option value="video">Video</option>
                                    </select>

                                  <FIleUpload className='col-12 background-aqu border-primary- border-radius-10  file-upload'  FileInputref={fileRef} ></FIleUpload>

                        </div>


                        <form  className="col-lg-8  display-flex flex-direction-column background-aqu " onSubmit={handlefileUpload}  ref={formRef}>

                                                {/* Loding */}
                                                    {                                               
                                                        ShowLoadingBar  && <Loading className='mt-3 mb-3 '   progressBarWidth={UploadSelects.progressBar}    ></Loading>
                                                    }
                        


                                                <div className="ps-1   fw-bold font-1-3   ">Your Name</div>
                                                <Input    className="Name background-transparent border-primary- border-radius-5   mb-3  pt-2   ps-3  pb-2    " placeholder={""} ></Input>
                                    
                                    
                                                <div className="ps-1   fw-bold font-1-3   ">Dispay Duration</div>
                                                <Input    className="DispayDuration background-transparent border-primary- border-radius-5   mb-3   pt-2   ps-3  pb-2   " placeholder={""} ></Input>
                                            
                                            
                                                <div className="ps-1   fw-bold font-1-3   ">Start Time</div>
                                                <Input    className="DispayDuration background-transparent border-primary- border-radius-5   mb-3   pt-2   ps-3  pb-2   " placeholder={""} ></Input>
                                                
                                                <div className="ps-1   fw-bold font-1-3   ">Expire Time </div>
                                                <Input    className="DispayDuration background-transparent border-primary- border-radius-5   mb-3   pt-2   ps-3  pb-2   " placeholder={""} ></Input>




                                                     <Button type="submit" className="background-primary col-4 col-md-2 pt-3 pb-2 border-radius-5 text-color-white mt-3 font-1-5 ">{ShowLoadingBar?"Uploading...":"Upload"}</Button>
                                                {/* <div className="" onClick={()=>setShowLoadingBar(true)}>
                                                </div> */}


                        </form>
            </div>



                 

        </DIV>
    )
}

const DIV=styled.div`
    width: 100%;

    min-height:100vh;

    .select{

        select{

            @media(min-width:992px){     
                      height:15%;
        }
        
        
    }
    
    .file-upload{
            @media(min-width:992px){     
                height: 80%;
        }

        }

    }



`;



export default Comp;
