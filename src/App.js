import './App.scss';
import AboutUs from './Pages/AboutUs/AboutUs';
import Header from './Pages/Header/Header';
import Main from './Pages/Header/Main/Main';
import PaymentInfo from './Pages/PaymentInfo/PaymentInfo';
import Products from './Pages/Products/Products';
import TopCollection from './Pages/TopCollections/TopCollection';
import OurFriends from './components/OurFriends/OurFriends';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <TopCollection></TopCollection>
      <Products></Products>
      <OurFriends></OurFriends>
      <AboutUs></AboutUs>
      <PaymentInfo></PaymentInfo>
    </div>
  );
}

export default App;
