import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ArticlePage from "./page/ArticlePage";
import Home from "./page/Home";
import NotFoundPage from "./page/NotFoundPage";

function InstantScrollToTop() {
     const { pathname } = useLocation();
     useEffect(() => {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
     }, [pathname]);
     return null;
}

function App() {
     return (
          <BrowserRouter>
               <InstantScrollToTop />
               <div className="min-h-screen bg-background">
                    <Navbar />
                    <Routes>
                         <Route path="/" element={<Home />} />
                         <Route path="/article/:articleId" element={<ArticlePage />} />
                         <Route path="/404" element={<NotFoundPage />} />
                    </Routes>

                    <Footer />
               </div>
          </BrowserRouter>
     );
}

export default App;
