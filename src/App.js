import styled from 'styled-components';
import AddProductPage from './Pages/AddProduct/AddProductPage';
import PreviewPage from './Pages/PreviewPage/PreviewPage';
import ViewPage from './Pages/ViewsPage/ViewPage';
import OverlayFull from './Components/Overlay/OverlayFull';


import { useSelector } from 'react-redux';
import {  selectUploads } from './Redux/slices/UploadSlice';
import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {   



  const UploadSelecter=useSelector(selectUploads)


  return (
    
    <DIV className="App">
      {console.log(UploadSelecter)}

              <BrowserRouter>

                        <Routes>

                                    {/* home */}
                                    <Route path="/" element={ 
                                      <>
                                          { !(UploadSelecter.progressBar == 100) && <AddProductPage/>}
                                          { (UploadSelecter.progressBar == 100) && <PreviewPage/>}
                                          { UploadSelecter.viewPage && <ViewPage/>}

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
