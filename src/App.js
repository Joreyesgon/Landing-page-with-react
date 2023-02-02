import './App.css';
import Navbar from './js/components/Navbar';
import CardImage from './js/components/CardImage';
import Services from './js/components/Services';
import Portfolio from './js/components/Portfolio';
import Contact from './js/components/Contact';
import Footer from './js/components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CardImage />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
