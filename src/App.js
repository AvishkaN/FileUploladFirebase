import styled from 'styled-components';
import AddProductPage from './Pages/AddProduct/AddProduct';
import PreviewPage from './Pages/PreviewPage/PreviewPage';
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
                                            <AddProductPage/>

                                      </>
                                    } />


                                    {/* previewPage */}
                                    <Route path="/preview-page" element={ 
                                      <>
                                            <PreviewPage/>

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
