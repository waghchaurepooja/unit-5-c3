
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
import { ProtectedRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* Routes here */}
        <Route path = "/" element = {<Home />}></Route>  
        <Route path = "/employees" element = {
        <ProtectedRoute>
          <EmployeeList />
        </ProtectedRoute>
        }></Route>  
        <Route path = "/admin" element = {
        <ProtectedRoute>
          <Admin />
        </ProtectedRoute>
        }></Route>  
        <Route path = "/login" element = {<Login />}></Route>  
        <Route path = "/logout" element = {<Logout />}></Route>  
      </Routes>
    </div>
  );
}

export default App;