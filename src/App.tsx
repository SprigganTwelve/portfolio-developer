import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ArticlePage from "./page/ArticlePage";
import Home from "./page/Home";
import NotFoundPage from "./page/NotFoundPage";

function App() {
     return (
          <BrowserRouter>
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
