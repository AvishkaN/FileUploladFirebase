import styled from 'styled-components';
import ProgressBar from '../../Components/UI/ProgressBar/ProgressBar';
import CheckIcon from '@mui/icons-material/CheckOutlined';


function Loading({className="",progressBarWidth}) {
  return (
    <DIV className={`${className} w-99 ms-auto me-auto `} >


                      <div className='text-right font-1-1 '>{progressBarWidth ?progressBarWidth+'%':""}</div>

                            <ProgressBar 
                                        className='border-radius-10  mb-1 ms-1  mt-2  '
                                        color={"red"}
                                        width={progressBarWidth}
                                        barContent={progressBarWidth==100 && <div className='text-color-white text-center'><CheckIcon className=''></CheckIcon></div>}
                                        minHeigh={"1.2rem"}
                            ></ProgressBar>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%; 
    
    
`;

export default Loading;
