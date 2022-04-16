import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Home/Header/Header";
import Blogs from "./component/Blogs/Blogs";
import Home from "./component/../Home/Home/Home";
import LogIn from "./component/Login&Sign up/Login/LogIn";
import Abouts from "./component/Abouts/Abouts";
import Signup from "./component/Login&Sign up/Signup/Signup";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/abouts" element={<Abouts></Abouts>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="" element></Route>
      </Routes>
    </div>
  );
}

export default App;
