import './App.css';
// import Product from '../Product/product';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

function App() {
  return (
    // <Product title="Em gái xinh tươi" imgLink="https://live.staticflickr.com/65535/51378045537_5eeeba9c92_z.jpg"/>
    // <Product width="200px" height="200px" background="yellow"></Product>
    <div id="container">
      {/* this is header area */}
      <Header/>
      {/* this is content area */}
      <Content/>
      {/* this is footer area */}
      <Footer/>
    </div>
  );
}

export default App;





