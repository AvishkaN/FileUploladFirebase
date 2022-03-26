import styled from 'styled-components';
import AddProductPage from './Pages/AddProduct/AddProduct';


import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {




  return (
    
    <DIV className="App">

              <BrowserRouter>


              <Routes>

                          {/* All product */}
                          <Route path="/add-product" element={ 
                            <>
                                  <AddProductPage/>

                            </>
                          } />


              </Routes>


              </BrowserRouter>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;


`;

export default App;
