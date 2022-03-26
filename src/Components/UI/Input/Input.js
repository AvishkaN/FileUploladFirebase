import styled from 'styled-components';



function Input(props) {
  
  return (
         <InputComp  type={props.type}  className={` ${props.className} input `}   placeholder={props.placeholder}  border={props.border} ref={props.FileInputref}  >
        </InputComp>

  );
}



const InputComp=styled.input`
    width: 100%;
    border:${props => props.border? `1px solid black`:`none`};


`;

export default Input;
