import './App.css';
import { useState } from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import ProfessionalList from './components/ProfessionalList/ProfessionalList';
import Guest from './components/Guest/Guest';
import Footer from './components/Footer/Footer';
import BackgroundVisual from './components/BackgroundVisual/BackgroundVisual';

function App() {
    const [selectedState, setSelectedState] = useState(null);

    return (
        <div className="App relative min-h-screen  overflow-hidden">
            <BackgroundVisual />
            <Navbar />
            <HeroSection selectedState={selectedState} setSelectedState={setSelectedState} />
            <ProfessionalList selectedState={selectedState} />
            <Guest />
            <Footer />
        </div>
    );
}

export default App;
