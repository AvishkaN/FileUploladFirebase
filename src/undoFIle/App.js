import styled from 'styled-components';
import HomePage from './Pages/Home/HomePage';
import {BrowserRouter,Routes,Route} from "react-router-dom";



function App() {




  return (
    <DIV className="App">
         <div className="app-wrapper">
          <BrowserRouter>

                <div className="app-content">
                        <Routes>
                                    <Route path="/" element={ <HomePage></HomePage>} />
                        </Routes>
                </div>

          </BrowserRouter>





         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;

    .app-wrapper{
      position: relative; 

      width: 100%;
      
      .app-content{
        width: var(--nav-footer-width);
        margin: 0 auto; 
      }
    }

`;

export default App;
