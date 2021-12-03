import './app.css'
import Sidebar from "./components/sidebar/Sidebar"
import Topbar from "./components/topbar/Topbar"
import Home from './pages/Home'
import UserList from './pages/UserList'
import User from './pages/User'
import NewUser from './pages/NewUser'
import ProductList from './pages/ProductList'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

function App() {
  return (
    <Router className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
      <Routes className="others">
        <Route exact path="/"element={<Home />} />
        <Route path="/users"element={<UserList />} />
        <Route path="/users/:userId"element={<User />} />
        <Route path="/newUser/"element={<NewUser />} />
        <Route exact path="/products"element={<ProductList />} />
        <Route exact path="/products/:productId"element={<ProductList />} />
        <Route path="/newProduct"element={<UserList />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
