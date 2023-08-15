import {BrowserRouter, Routes, Route} from "react-router-dom"
import ScrollToTop from "./utils/scrollToTop";
//components:
import HeaderComponent from "./components/HeaderComkponentPage";
import FooterComponent from "./components/FooterComponentPage";

//user component:
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";

import HomePage from "./pages/homepage";

import ProductDetailsPage from "./pages/ProductDetailsPage";

import ProductListPage from "./pages/ProductListPage";

import CartPage from "./pages/CartPage";

import LoginPage from "./pages/LoginPage";

import RegisterPage from "./pages/RegisterPage";

import UserProfilePage from "./pages/user/UserProfilePage";

import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";

import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";

import UserOrdersPage from "./pages/user/UserOrdersPage";

import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";

import AdminAnalyticPage from "./pages/admin/AdminAnalyticPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminOrderPage from "./pages/admin/AdminOrderPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";

function App() {
  return (
   <BrowserRouter>
   <ScrollToTop/>
   <HeaderComponent />
   <Routes>
        <Route element = {<RoutesWithUserChatComponent />}>
            <Route path="/" element={<HomePage />}/>
            <Route path="/product-list" element={<ProductListPage />}/>
            <Route path="/product-details" element={<ProductDetailsPage />}/>
            <Route path="/cart" element={<CartPage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="*" element="Page not exists 404 "/>
        </Route>
            <Route element={<ProtectedRoutesComponent admin ={false} />}>
              <Route path="/user" element={<UserProfilePage />}/>
              <Route path="/user/my-orders" element={<UserOrdersPage/>}/>
              <Route path="/user/cart-details" element={<UserCartDetailsPage />}/>
              <Route path="/user/order-details" element={<UserOrderDetailsPage />}/>
            </Route>

      {/* admin protected routes: */}

      <Route element={<ProtectedRoutesComponent admin={true} />}>
        <Route path="/admin/users" element={<AdminUsersPage/>}/>
        <Route path="/admin/edit-user" element={<AdminEditUserPage/>}/>
        <Route path="/admin/products" element={<AdminProductsPage/>}/>
        <Route path="/admin/create-new-product" element={<AdminCreateProductPage/>}/>
        <Route path="/admin/edit-product" element={<AdminEditProductPage/>}/>
        <Route path="/admin/orders" element={<AdminOrderPage/>}/>
        <Route path="/admin/order-details" element={<AdminOrderDetailsPage/>}/>
        <Route path="/admin/chats" element={<AdminChatsPage/>}/>
        <Route path="/admin/analytics" element={<AdminAnalyticPage/>}/>
      </Route>
   </Routes>
   <FooterComponent />
   </BrowserRouter>
  );
}

export default App;
