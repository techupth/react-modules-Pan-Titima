import "./App.css";
import { Header, MainContent, ProductSection, Footer, FAQ } from "./components/WebComponents.jsx"
import Button from "./components/common.jsx";




function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
