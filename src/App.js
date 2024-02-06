
import './App.css';
import { Provider } from 'react-redux'
import {store} from './Redux/Store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mainpage from './Components/Mainpage';

function App() {
  return (
    <div className="">
     <BrowserRouter>
     <Provider store={store}>
      <Routes>
        <Route path='/' element={<Mainpage/>} />
      </Routes>
     </Provider>
     </BrowserRouter>
    </div>
  );
}

export default App;
