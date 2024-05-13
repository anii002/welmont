import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Header />
      <Home />
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
}

export default App;
