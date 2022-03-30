import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Movies from '../components/Movies/Movies';
import AddMovie from '../components/AddMovie/AddMovie';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Movies />
      <AddMovie />
      <Footer />
    </div>
  );
}

export default Home;
