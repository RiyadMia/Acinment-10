import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Home/Header/Header";
import Blogs from "./component/Blogs/Blogs";
import Home from "./component/../Home/Home/Home";
import LogIn from "./component/Login&Sign up/Login/LogIn";
import Abouts from "./component/Abouts/Abouts";
import CheckoutDatail from "./Checkout/CheckoutDatil/CheckoutDetail";
import Signup from "./component/Login&Sign up/Signup/Signup";
import Footer from "./Home/Footer/Footer";
import Service from "./component/Services/Service/Service";
import Checkout from "./Checkout/Checkout/Checkout";
import RequireAuth from "./component/Login&Sign up/RequireAuth/RequewAuth";
import NotFound from "./component/NotFound/NotFound";

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
        <Route
          path="/checkoutdatail/:checkoutdatailId"
          element={
            <RequireAuth>
              <CheckoutDatail></CheckoutDatail>
            </RequireAuth>
          }
        ></Route>
        <Route path="/servise" element={<Service></Service>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
