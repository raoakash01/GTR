import Home from './components/home';
import AboutUs from './components/aboutUs';
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

function App() {
  return (
    <>
      <div id="home"><Home /></div>
      <div id="about"><AboutUs /></div>
      <div><Banner2 /></div>
      <div><Vision /></div>
      <div><Advisory /></div>
      <div><Banner3 /></div>
      <div id="whyus"><WhyUs /></div>
      <div><WhyGtr /></div>
      <div><Radiology /></div>
      <div><Modality /></div>
      <div><Banner2 /></div>
      <div id="services"><Services /></div>
      <div><Proprietary /></div>
      <div><ProcessFlow /></div>
      <div><Faq /></div>
      <div id="join"><GetStarted /></div>
      <div><Banner4 /></div>
      <div><Footer /></div>
    </>
  );
}

export default App;
