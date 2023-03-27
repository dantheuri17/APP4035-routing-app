import "antd/dist/reset.css";

import './App.css';
import Navigation from './Components/Navigation';
import RoutesTree from './Components/RoutesTree'
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <RoutesTree />
      <Footer />
      
    </div>
  );
}

export default App;
