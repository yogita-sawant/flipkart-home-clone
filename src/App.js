import Navbar from './components/Navbar';
import Banner from './components/Banner';
import DealsSection from './components/DealsSection';
import FestiveSection from './components/FestiveSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="bg-gray-200 ">
      <Navbar />
      <Banner />
      <DealsSection />
      <FestiveSection />
      <Footer />
    </div>
  );
}

export default App;
