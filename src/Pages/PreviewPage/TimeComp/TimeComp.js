import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';





function TimeComp({className=""}) {
    const[MinTime,setMinTime]=useState('00');
    const[SecTime,setSecTime]=useState('00');

    let interval=useRef();

    const startTimer=()=>{

        let countDownTime=new Date();

                // add minitus and seconds countdown time 
                countDownTime.setMinutes(countDownTime.getMinutes()+(0));
                countDownTime.setSeconds(countDownTime.getSeconds()+(10));

        countDownTime=countDownTime.getTime();


        interval=setInterval(()=>{

            console.log('🚗🚗');

            const now=new Date().getTime();
            const distance=countDownTime-now; 

            
            const minutes=Math.floor((distance % (1000*60*60) )/(1000*60));
            const seconds=Math.floor( (distance % (1000*60) )/1000);
            
            console.log(minutes);

            if(distance < 0){
                
                // stop  timer
                clearInterval(interval.current);
                
                console.log('clear');
            }else{
                console.log(seconds);
                setMinTime(minutes);
                setSecTime(seconds);
            }


        },1000)
    };


    useEffect(()=>{
        startTimer();

        return()=>{
            clearInterval(interval.current);
        }

    },[]);


 

  return (
    <DIV className={`${className}`}>
        {console.log(MinTime)}
        {console.log(SecTime)}
        
            <span className='font-2'>{MinTime}</span>
            <span className='font-2'>: {SecTime}</span>

    </DIV>
  );
}


const DIV=styled.div`
    /* width: 100%; */
    /* margin-top: var(--margin-top-fix-nav);  */  /*only TimeComp */
    
 
`;

export default TimeComp;
