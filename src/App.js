import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Blog from './Pages/Blog/Blog';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import Portfolio from './Pages/Portfolio/Portfolio';
import Purchase from './Pages/Purchase/Purchase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='bg-base-200'>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto relative">
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/home" element={<Home></Home>} />
            <Route path="/products/:productId" element={<RequireAuth><Purchase /></RequireAuth>} />
            <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
              <Route index element={<MyOrders />} />
              <Route path="/dashboard/addreview" element={<AddReview />} />
              <Route path="/dashboard/myprofile" element={<MyProfile />} />
            </Route>
            <Route path="/blog" element={<Blog />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
