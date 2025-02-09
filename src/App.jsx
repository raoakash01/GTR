import Home from './components/home';
import AboutUs from './components/aboutus';
import Banner2 from './components/banner2';
import Vision from './components/vision';
import Advisory from './components/advisory';
import Banner3 from './components/banner3';
import WhyUs from './components/whyUs';
import WhyGtr from './components/whygtr';
import Radiology from './components/radiology';
import Modality from './components/modality';
import Services from './components/services';
import Proprietary from './components/proprietary';
import ProcessFlow from './components/processFlow';
import Faq from './components/faq';
import GetStarted from './components/getStarted';
import Banner4 from './components/banner4';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Banner from './components/banner';

function App() {
  return (
    <>
      <div ><Banner/></div>
      <div><Navbar /></div>
      <div id="home"><Home /></div>
      <div id="about"><AboutUs /></div>
      <div id='banner2'><Banner2 /></div>
      <div id="vision"><Vision /></div>
      <div id="advisory"><Advisory /></div>
      <div id="banner3"><Banner3 /></div>
      <div id="whyus"><WhyUs /></div>
      <div id="whygtr"><WhyGtr /></div>
      <div id="radiology"><Radiology /></div>
      <div id="modality"><Modality /></div>
      <div id="banner2"><Banner2 /></div>
      <div id="services"><Services /></div>
      <div id="proprietary"><Proprietary /></div>
      <div id="processflow"><ProcessFlow /></div>
      <div id="faq"><Faq /></div>
      <div id="join"><GetStarted /></div>
      <div id="banner4"><Banner4 /></div>
      <div><Footer /></div>
    </>
  );
}

export default App;
