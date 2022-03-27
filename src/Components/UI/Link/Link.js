import { Link } from 'react-router-dom';
import styled from 'styled-components';



function LinkComp(props) {
  return (
    <Link to={props.to} className={`${props.className} a`}>
                {props.children}  

      </Link>
  );
}



export default LinkComp;
