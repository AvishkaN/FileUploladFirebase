import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { setPreviewPageFN, setViewPageFN } from '../../../Redux/slices/UploadSlice';




function TimeComp({className="",uploadedDocDetails}) {
    const[MinTime,setMinTime]=useState('00');
    const[SecTime,setSecTime]=useState('00');

    let interval=useRef();
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const startTimer=()=>{

        let countDownTime=new Date();

        // add minitus and seconds countdown time 
        countDownTime.setMinutes(countDownTime.getMinutes()+(0));
        countDownTime.setSeconds(countDownTime.getSeconds()+(10));

        countDownTime=countDownTime.getTime();


        interval=setInterval(()=>{


            const now=new Date().getTime();
            const distance=countDownTime-now; 

            
            const minutes=Math.floor((distance % (1000*60*60) )/(1000*60));
            const seconds=Math.floor( (distance % (1000*60) )/1000);
            
            console.log(minutes);

            if(distance < 0){
                
                // stop  timer
                clearInterval(interval.current);
                
                console.log('clear');
                dispatch(setViewPageFN())
                // dispatch(setPreviewPageFN(null));


                // navigate('/view-page');
            }else{
                setMinTime(minutes);
                setSecTime(seconds);
            }


        },1000)
    };


    useEffect(()=>{

        console.log('🔥🔥',uploadedDocDetails.CurrentUploadedFileDocument);


        if(uploadedDocDetails.CurrentUploadedFileDocument){
            startTimer();   

        }


        return()=>{
            clearInterval(interval.current);
        }

    },[uploadedDocDetails.CurrentUploadedFileDocument]);


 

  return (
    <DIV className={`${className}`}>
        
            <span className='font-2'>{`${MinTime}`.padStart(2, '0')}</span>
            <span className='font-2'>:{`${SecTime}`.padStart(2, '0')}</span>
            {/* <span className='font-2'>: {SecTime}</span> */}

    </DIV>
  );
}


const DIV=styled.div`
    /* width: 100%; */
    /* margin-top: var(--margin-top-fix-nav);  */  /*only TimeComp */
    
 
`;

export default TimeComp;
