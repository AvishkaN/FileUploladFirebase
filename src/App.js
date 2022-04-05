import styled from 'styled-components';
import AddProductPage from './Pages/AddProduct/AddProductPage';
import PreviewPage from './Pages/PreviewPage/PreviewPage';
import ViewPage from './Pages/ViewsPage/ViewPage';
import OverlayFull from './Components/Overlay/OverlayFull';


import { useDispatch, useSelector } from 'react-redux';
import {  selectUploads, setViewCount } from './Redux/slices/UploadSlice';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useEffect, useState } from 'react';


function App() {   



  const UploadSelecter=useSelector(selectUploads);
  const dispatch=useDispatch();


  // useEffect(()=>{
    
  //   if(UploadSelecter.viewPage){
  //     console.log(UploadSelecter.viewPage);
  //     setViewCount(dispatch);
      
      
  //   }
  // },[UploadSelecter]); 
  
  
  // useState(()=>{
    
  //   console.log(`👍👍`);

  //   console.log();

  // },[UploadSelecter]);


  return (
    
    <DIV className="App">

              <BrowserRouter>

                        <Routes>

                                    {/* home */}
                                    <Route path="/" element={ 
                                      <>
                                      {/* { console.log(UploadSelecter.viewPage)} */}
                                          

                                          
                                           <AddProductPage className={`${UploadSelecter.progressBar == 100 ?"display-none":""}`}  />
                                          <PreviewPage  className={`${UploadSelecter.previewPage?"":"display-none"}`} />
                                          <ViewPage  className={`${UploadSelecter.viewPage ?"":"display-none"}`} UploadSelecter={UploadSelecter} />
                                        
                                        
                                        
                                          {/* <PreviewPage/> */}
                                          {/* <ViewPage/> */}

                                      </>
                                    } />


                                    {/* previewPage */}
                                    <Route path="/preview-page" element={ 
                                      <>
                                      {/* <PreviewPage/> */}

                                      </>
                                    } />


                                    {/* previewPage */}
                                    <Route path="/view-page" element={ 
                                      <>
                                            {/* <ViewPage/> */}

                                      </>
                                    } />


                        </Routes>


              </BrowserRouter>


              {UploadSelecter.showOverlay && <OverlayFull></OverlayFull>}

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    min-height:100vh; 
    position:relative;


`;

export default App;
