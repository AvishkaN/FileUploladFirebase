import styled from 'styled-components';



function ProgressBar(props) {

  return (
    <DIV className={`${props.className}`} color={props.color} width={props.width} minHeigh={props.minHeigh}>

        <div className="bar border-radius-10" >
           {props.barContent}
        </div>

    </DIV>
  );
}


const DIV=styled.div`
    width: 99%;
    outline:2px solid ${props => props.color};
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ProgressBar */

    .bar{
        background:${props => props.color};
        width:${props => props.width?props.width+"%":"1%"};
        min-height:${props => props.minHeigh?props.minHeigh:"1.8rem"};
        position: relative;
        transition:all .5s; 

        .bar-content{
            position: absolute;
            top: 50%;
            left:${props => props.width};
            left:50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
        }

    }
    
 
`;

export default ProgressBar;
