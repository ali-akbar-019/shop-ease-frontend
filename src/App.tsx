import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./page/HomePage"
import AboutPage from "./page/AboutPage"
import ContactPage from "./page/ContactPage"
import ProfilePage from "./page/ProfilePage"
import ProductsPage from "./page/ProductsPage"
import SingleProductPage from "./page/SingleProductPage"
import BillingPage from "./page/BillingPage"

const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/about" element={<AboutPage />}/>
    <Route path="/contact" element={<ContactPage />}/>
    <Route path="/products" element={<ProductsPage />}/>
    <Route path="/products/:id" element={<SingleProductPage />}/>
    <Route path="/billing" element={<BillingPage />}/>
    <Route path="/profile" element={<ProfilePage />}/>
   </Routes>
   
   </BrowserRouter>
   
   </>
  )
}

export default App