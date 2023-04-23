
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Error from './Error';
import Login from './Login';
import Shopping from './Shopping';
import Singlepage from './Singlepage';
import Shoppingcart from './Shoppingcart';
import PrivateRoutes from './PrivateRoutes'


//react router rendering
function App() {

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoutes/>}>
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/item/:productid" element={<Singlepage />} />
        <Route path="/shoppingcart" element={<Shoppingcart />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  )

}


export default App;
