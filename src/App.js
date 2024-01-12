import './App.css';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import Youtube from './components/Youtube';
import Courses from './components/Courses';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Header />
      <main>
        <LandingSection />
        <Youtube />
        <Courses />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
