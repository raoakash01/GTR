import Home from './components/home';
import AboutUs from './components/aboutus';
import Banner2 from './components/banner2';
import Advisory from './components/advisory';
import Banner3 from './components/banner3';
import Faq from './components/faq';
import GetStarted from './components/getstarted';
import Banner4 from './components/banner4';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Banner from './components/banner';
import Overview from './components/overview';
import WhyGtr2 from './components/whygtr2';
import Modalities from './components/modalities';
import Spservices from './components/spservices';
import Partner from './components/partner';
import Vision2 from './components/vision2';
import Gtr from './components/gtr';
import Accuracy from './components/accuracy';

function Homepage() {
  return (
    <>
      <div ><Banner/></div>
      <div><Navbar /></div>
      <div id="home"><Home /></div>
      <div id="about"><AboutUs /></div>
      <div id="whygtr"><WhyGtr2 /></div>
      <div id='banner2'><Banner3 /></div>
      <div id="vision"><Vision2 /></div>
      <div id='modalities' ><Modalities/></div>
      <div id="spservices"><Spservices /></div>
      <div id="qa"><Gtr/></div>
      <div > <Accuracy/></div>
      <div id="banner3"><Banner2 /></div>
      <div id="overview"><Overview /></div>
      <div id="partner"><Partner/></div>
      <div id="advisory"><Advisory /></div>
      <div id="faq"><Faq /></div>
      <div id="join"><GetStarted /></div>
      <div id="banner4"><Banner4 /></div>
      <div id="contact"><Footer /></div>
    </>
  );
}

export default Homepage;
