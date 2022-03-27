import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';





function TimeComp({className=""}) {
    const[MinTime,setMinTime]=useState('00');
    const[SecTime,setSecTime]=useState('00');

    let interval=useRef();

    const startTimer=()=>{
        // const countDownTime=new Date().getTime()+Math.floor(( (3.10) % (1000*60*60) )*(1000*60));
        const countDownTime=new Date(5).getTime();

        interval=setInterval(()=>{

            console.log('🚗🚗');

            const now=new Date().getTime();
            const distance=now-countDownTime;

            
            const minutes=Math.floor((distance % (1000*60*60) )/(1000*60));
            const seconds=Math.floor( (distance % (1000*60) )/1000);
            
            console.log(minutes);

            if(distance < 0){
                console.log('clear');

                // stop our timer
                clearInterval(interval.current);

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
        
            <span className=''>{MinTime}</span>
            <span className=''>: {SecTime}</span>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only TimeComp */
    
 
`;

export default TimeComp;
