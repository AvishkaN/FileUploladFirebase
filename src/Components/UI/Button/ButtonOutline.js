import styled from 'styled-components';



function ButtonOutline(props) {
  return (
    <ButtonComp type="button"  className={`${props.className} btn`}   id={props.id}  border={props.border} color={props.color}>

                {props.children}  
    </ButtonComp>
  );
};


const ButtonComp=styled.button`

    border:1px solid ${props => props.color} !important;
    color:${props => props.color};
    
    
    &:hover{

    }
  
`;

export default ButtonOutline;
