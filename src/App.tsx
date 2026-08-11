import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ArticlePage from "./page/ArticlePage";
import Home from "./page/Home";
import NotFoundPage from "./page/NotFoundPage";

type Route = { page: "home" } | { page: "article"; id: string } | { page: "404" };

function App() {
     const [route, setRoute] = useState<Route>({ page: "home" });

     const navigate = (page: string, id?: string) => {
          if (page === "home") setRoute({ page: "home" });
          else if (page === "article" && id) setRoute({ page: "article", id });
          else setRoute({ page: "404" });
     };

     return (
          <div className="min-h-screen bg-background">
               <Navbar onToggleDark={() => navigate("404")} onNavigate={(page) => navigate(page)} />
               {route.page === "home" && <Home onViewArticle={(id) => navigate("article", id)} onNavigate={navigate} />}
               {route.page === "article" && (
                    <ArticlePage
                         articleId={route.id}
                         onBack={() => navigate("home")}
                         onViewArticle={(id) => navigate("article", id)}
                    />
               )}
               {route.page === "404" && <NotFoundPage />}
               <Footer />
          </div>
     );
}

export default App;
