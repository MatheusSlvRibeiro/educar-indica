import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import ProfessionalList from './components/ProfessionalCard/ProfessionalCard';

function App() {
    return (
        <div className="App bg-primary">
            <Navbar />
            <HeroSection />
            <ProfessionalList />
        </div>
    );
}

export default App;
