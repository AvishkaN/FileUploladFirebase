import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';



function PopUp(props) {
  return (


  <DIV className={`${props.className}  border-radius-5  background-white `}>
    <div className="PopUp-wrapper ">

                <div className="pop-up-content p-3 pt-2">
                      {props.children}  

                </div>

    </div>
  </DIV>

  );
}

const DIV=styled.div`

  width: 100%;
  height:50vh;
    
    .PopUp-wrapper{


    }
`;



export default PopUp;
