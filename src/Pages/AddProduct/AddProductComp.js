import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import FIleUpload from './../../Components/UI/FileUpload/FIleUpload';
// import {AddProduct, UploadFile} from '../Redux/Slices/ProductSlice';
import {AddProduct, UploadFile} from '../../Redux/slices/ProductSlice';
import Input from '../../Components/UI/Input/Input';

function Comp() {

    const formRef=useRef();
    const fileRef=useRef();
    const selectRef=useRef();

    const [imgUrl,setImgUrl]=useState(undefined);

    useEffect(()=>{

        if(imgUrl){
            submitHandler(imgUrl);
        }
    },[imgUrl]);



    const handlefileUpload=async(e)=>{
        e.preventDefault();

        const file=fileRef.current.files[0];

        UploadFile(`_`,file,setImgUrl);   // sent file and use selector


        
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


        lastDataObj.ProductImage=imgUrl;  
        lastDataObj.uploladedDocumentType=selectRef.current.value;  


        AddProduct('_',lastDataObj);

        // handlefileUpload();  /// photo file upload
    };




    return (
        <DIV className='row '>

                        <div className="col-3 row">

                                    <select name="col-12" id="" ref={selectRef}>
                                        <option value="image">image</option>
                                        <option value="video">Video</option>
                                    </select>

                                  <FIleUpload className='col-12 background-aqu border '  FileInputref={fileRef} ></FIleUpload>

                        </div>


                        <form  className="col display-flex flex-direction-column background-aqua p-3" onSubmit={handlefileUpload}  ref={formRef}>



                                                <div className="ps-1 font-1-4">Your Name</div>
                                                <Input    className="Name background-transparent border-grey-light border-radius-5  pt-2  pb-2 ps-3 mt-2 mb-4" placeholder={""} ></Input>
                                    
                                    
                                                <div className="ps-1 font-1-4">Storage</div>
                                                <Input    className="storage background-transparent border-grey-light border-radius-5  pt-2  pb-2 ps-3 mt-2 mb-4" placeholder={""} ></Input>




                                                <input type="submit" value="Add product" />



                            </form>


                 

        </DIV>
    )
}

const DIV=styled.div`
    width: 100%;

`;



export default Comp;
