import './App.css';
import FooterComponents from './components/FooterComponenets';
import HeaderComponents from './components/HeaderComponents';
import ListEmployeeComponents from './components/ListEmployeeComponents';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import CreateEmployeeComponents from './components/CreateEmployeeComponents';


function App() {
  return (
    <div>
    <Router>  <HeaderComponents/>
                <div className="container">
                  
                    <div className="container">
                        <Routes>
                            <Route path="/" exact element={<ListEmployeeComponents/>}/>
                            <Route path="/employees" element={<ListEmployeeComponents/>}/>
                            <Route path="/add-employee" element={<CreateEmployeeComponents/>}/>
                        </Routes>
                    </div>
                    <FooterComponents/>
                </div>
            </Router>
    </div>
  );
}

export default App;
