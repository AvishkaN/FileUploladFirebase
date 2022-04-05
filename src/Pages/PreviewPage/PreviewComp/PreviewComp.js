import styled from 'styled-components';



function PreviewComp({className="",uploadedDocDetails}) {

  return (
    <DIV className={` ${className}`}>


        <div className=" border-radius-10 mt-4" >

              {/*Image  */}
                  {             
                    uploadedDocDetails?.CurrentUploadedFileDocument?.uploladedFileType=='image' && (

                        <div className="col-md-11 col-10  ms-auto me-auto">

                              <img src={uploadedDocDetails.CurrentUploadedFileDocument.uploadedFile} className="w-100 border border-radius-10" alt="" />
                        </div>
                      )
                  }


              {/*Video  */}
                  {             
                    uploadedDocDetails?.CurrentUploadedFileDocument?.uploladedFileType=='video' && (
                        // <div className="text-center mt-5 ">
                        //     {/* <a href="https://firebasestorage.googleapis.com/v0/b/fileupload-d3355.appspot.com/o/0.9694503446870146%20dog.mp4?alt=media&token=6b93153b-fcee-4323-9656-7fcde50787b7" className='font-1-5'>click here</a> */}
                        //     {/* <a href={uploadedDocDetails.CurrentUploadedFileDocument.uploadedFile} className='font-1-5'>click here</a> */}
                        // </div>

                        <div className="display-flex justify-content-center   ">

                              <video  className="border-radius-10 col-md-10 col-11 " controls>
                                  <source src={uploadedDocDetails.CurrentUploadedFileDocument.uploadedFile} type="video/mp4" />
                                  <source src={uploadedDocDetails.CurrentUploadedFileDocument.uploadedFile} type="video/ogg" />
                                  Your browser does not support HTML video.
                            </video>

                        </div>





                    )
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
