import './App.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './config/Request';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title='Seulement sur Netflix' url={requests.fetchNetflixOriginals} isPoster ={true} />
      <Row title='Les plus populaires' url={requests.fetchPopular} />
      <Row title='Films tendance de la semaine' url={requests.fetchTrending} />
      <Row title='Science Fiction' url={requests.fetchScienceFiction}/>
      <Row title='Films d&#39;horreur' url={requests.fetchHorrorMovies} />
      <Row title='Entrez dans l&#39;action !' url={requests.fetchActionMovies} />
      <Row title='Documentaires' url={requests.fetchDocumentaries} />
      <Row title='Films Romantiques' url={requests.fetchRomanceMovies} />
      {/* video */}
      {/* quick view */}
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;