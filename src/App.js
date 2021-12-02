import './app.css'
import Sidebar from "./components/sidebar/Sidebar"
import Topbar from "./components/topbar/Topbar"
import Home from './pages/Home'
import UserList from './pages/UserList'

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
        <Route path="/user"element={<UserList />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
