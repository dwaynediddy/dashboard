import './app.css'
import Sidebar from "./components/sidebar/Sidebar"
import Topbar from "./components/topbar/Topbar"
import Home from './pages/Home'
import UserList from './pages/UserList'
import User from './pages/User'
import NewUser from './pages/NewUser'

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
      </Routes>
      </div>
    </Router>
  );
}

export default App;
