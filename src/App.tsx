import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./page/Home";

function App() {
     return (
          <div className="min-h-screen bg-background">
               <Navbar />
               <Home />
               <Footer />
          </div>
     );
}

export default App;
