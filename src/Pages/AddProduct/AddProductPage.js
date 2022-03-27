import React from 'react'
import styled from 'styled-components';
import AddCardComp from './AddProductComp';
import LinkComp from '../../Components/UI/Link/Link';

function Comp() {
    return (
        <DIV>
            <div className="addProductPage-wrapper">
                    <AddCardComp/>

                    <LinkComp to="/preview-page">preview Page</LinkComp>

            </div>

        </DIV>
    )
}

const DIV=styled.div`

        .addProductPage-wrapper{

            width: var(--page-content-width);
            margin-left: auto;
            margin-right: auto; 
        }

`;



export default Comp;
