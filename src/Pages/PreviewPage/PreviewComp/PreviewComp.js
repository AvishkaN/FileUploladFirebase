import styled from 'styled-components';



function PreviewComp({className="",uploadedDocDetails}) {

  return (
    <DIV className={`col-11  ms-auto me-auto ${className}`}>


        <div className=" border-radius-10 mt-4" >

              {/*Image  */}
                  {             
                    uploadedDocDetails?.CurrentUploadedFileDocument?.uploladedFileType=='image' && <img src={uploadedDocDetails.CurrentUploadedFileDocument.uploadedFile} className="w-100" alt="" />
                  }


              {/*Video  */}
                  {             
                    // uploadedDocDetails.uploladedFileType=='Video' && <img src={uploadedDocDetails.uploadedFile} className="w-100" alt="" />
                  }
        </div>


    </DIV>
  );
}


const DIV=styled.div`
    /* width: 100%; */
    /* margin-top: var(--margin-top-fix-nav);  */  /*only PreviewComp */
    
 
`;

export default PreviewComp;
