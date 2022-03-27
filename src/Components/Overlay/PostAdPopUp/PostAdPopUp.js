import styled from 'styled-components';
import ProgressBar from '../../UI/ProgressBar/ProgressBar';
import PopUp from './../PopUp/PopUp';


const data=[
    "Air Conditioning",
    "Lawn",
    "Swimming Pool",
    "Barbeque",
    "Microwave",

    "Air Conditioning",
    "Lawn",
    "Swimming Pool",
    "Barbeque",
    "Microwave",
];



function PostAdPop({className=""}) {

  
  return (
    <DIV className={`${className}`}>
         <div className="PostAdPop-wrapper">
                <PopUp className="background-green  w-100">

                    <div className="display-flex align-items-center justify-content-center background-aqua h-100">

                                <ProgressBar 
                                                    className='border-radius-10  mb-1 ms-1  mt-2 background-yellow '
                                                    color={"red"}
                                                    width={"80%"}
                                                    barContent={<div className='text-center'>50%</div>}
                                                    minHeigh={"1.75rem"}
                                ></ProgressBar>


                    </div>


                </PopUp>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    
    .PostAdPop-wrapper{

        
    }


`;

export default PostAdPop;
