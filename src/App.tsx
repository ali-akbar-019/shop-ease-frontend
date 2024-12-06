import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import ContactPage from "./page/ContactPage";
import ProfilePage from "./page/ProfilePage";
import ProductsPage from "./page/ProductsPage";
import SingleProductPage from "./page/SingleProductPage";
import BillingPage from "./page/BillingPage";
import AdminHomePage from "./page/Admin/HomePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<SingleProductPage />} />
          <Route path="/billing" element={<BillingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/admin" element={<AdminHomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<p>404 Not Found!</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
