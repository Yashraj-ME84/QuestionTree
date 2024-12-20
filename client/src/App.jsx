
import React from "react";
import Home from "./pages/Home";
import CurrentQuestion from "./pages/Question";
import QuestionList from "./pages/QuestionList";
import PaperMaker from "./pages/PaperMaker";
import Author from "./pages/Author";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";
import CourseDetail from './pages/CourseDetail'; 
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Settings from "./pages/Settings";
import QuestionMaker from "./pages/QuestionMaker";
import PreviewPaper from "./pages/PreviewPaper";
import { Routes, Route, Navigate} from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import { load } from "./redux/apiCalls";
import { useEffect } from "react";
import { setCart } from "./redux/cartRedux";


function App() {

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state) => state.cart);
  let verified = false;
  if (user) verified = user.isVerified;

  useEffect(() => {
    load(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      const userEmail = user.email;
      const storedCart = localStorage.getItem(`cart_${userEmail}`);
      if (storedCart) {
        dispatch(setCart(JSON.parse(storedCart)));
      }
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (user) {
      saveCartToLocalStorage(cart, user.email);
    }
  }, [cart, user]);

  const saveCartToLocalStorage = (cart, userEmail) => {
    if (userEmail) {
      if (cart.products.length === 0) {
        if (localStorage.getItem(`cart_${userEmail}`)) {
          localStorage.removeItem(`cart_${userEmail}`);
        }
      } else {
        try {
          const serializedState = JSON.stringify(cart);
          localStorage.setItem(`cart_${userEmail}`, serializedState);
        } catch (err) {
          console.error("Error saving cart state to localStorage:", err);
        }
      }
    }
    
  };
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Questions" element={<QuestionList />} />
        <Route path="/Question/:id" element={<CurrentQuestion/>} />
        <Route path="/QuestionMaker" element={<QuestionMaker/>} />
        <Route path="/PaperMaker" element= {<PaperMaker />} />
        <Route path="/course/:id" element={<CourseDetail/>} /> 
        <Route path="/Author/:id" element={<Author/>} /> 
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/Login" element={verified ? <Navigate to="/" /> : <Login />} />
        <Route path="/Settings/:id" element={<Settings/>} />
        <Route path="/Register" element ={verified ? <Navigate to="/" /> : <Register />}/>
        <Route path="/Profile/:activepage" element={<Profile />}></Route>
        <Route path="/PreviewPaper" element={<PreviewPaper/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
