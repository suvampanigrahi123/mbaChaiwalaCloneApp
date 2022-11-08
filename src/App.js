import IntroVideo from "./components/IntroVideo";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Misc from "./components/Misc";
import "./styles/intro.scss"
import "./styles/section.scss"
import "./styles/footer.scss"
import "./styles/misc.scss"
import "./styles/app.scss"
import "./styles/mediaQuery.scss"
import freshTopicImg from "./assets/academy.png"
import freshTopic2Img from "./assets/story.png"
import tedTalksimg from "./assets/in-the-news.gif"
import franchiseimg from "./assets/franchise.gif"
import mapimg from "./assets/locations.png"
import coursesimg from "./assets/image2.png"
import albumimg from "./assets/mba-cares.gif"
import baratimg from "./assets/image1.png"
import chaiwalaimg from "./assets/image3.png"
import data from "./data/data.json"
import { useEffect } from "react";
const yellow="#fff100", pink="#ed1e79", white="#ffff", brown="#6d3d0f";
function App() {
  const {freshTopic,freshTopic2,tedTalks,franchise,map,courses,album,barat,chaiwala  }=data;
const dotCursor=(e)=>{
const cursor=document.querySelector('.cursor');
cursor.style.top=`${e.pageY-14}px`;
cursor.style.left=`${e.pageX-14}px`

const element=e.target;
if(element.getAttribute("data-cursorpointer")){
  cursor.classList.add("cursorHover")
}else if(element.getAttribute("data-cursorpointermini")){
  cursor.classList.add("cursorHoverMini")
}
else{
  cursor.classList.remove("cursorHover")
  cursor.classList.remove("cursorHoverMini")

}

}
  useEffect(() => {
    window.addEventListener("mousemove",dotCursor)
    return () => {
      window.removeEventListener("mousemove",dotCursor)
    }
  }, [])
  

  return (
    <div>
    <IntroVideo />
    {/* Fresh Topic 1 */}
    <Section heading={freshTopic.heading} text={freshTopic.text} btntxt={freshTopic.btn} imgsrc={freshTopicImg}  backgroundColor={pink} textColor={yellow} btnBgclr={yellow} btnColor={pink} headingColor={yellow}/>
    {/* Fresh Topic 2*/}
    <Section heading={freshTopic2.heading} text={freshTopic2.text} btntxt={freshTopic2.btn}  imgSize="25%" imgsrc={freshTopic2Img}  backgroundColor={pink} textColor={yellow} btnBgclr={yellow} btnColor={pink} headingColor={yellow}/>
    {/* Ted Talks */}
    <Section heading={tedTalks.heading} text={tedTalks.text} btntxt={tedTalks.btn} imgsrc={tedTalksimg}  backgroundColor={yellow} textColor={pink} btnBgclr={pink} btnColor={yellow} headingColor={pink}/>
    {/* franchise */}
    <Section heading={franchise.heading} text={franchise.text} btntxt={franchise.btn} imgsrc={franchiseimg}  backgroundColor={white} textColor={brown} btnBgclr={brown} btnColor={yellow} headingColor={pink}/>
    {/* map */}
    <Section heading={map.heading} text={map.text} hasButton={false} imgsrc={mapimg}  imgSize="60%" backgroundColor={pink} textColor={yellow} btnBgclr={brown} btnColor={yellow} headingColor={yellow}/>
    {/* courses */}
    <Section heading={courses.heading} text={courses.text} btntxt={courses.btn}  imgsrc={coursesimg} imgSize="30%"  backgroundColor={yellow} textColor={pink} btnBgclr={pink} btnColor={yellow} headingColor={pink}/>

    {/* album */}
    <Section heading={album.heading} text={album.text} btntxt={album.btn}  imgsrc={albumimg}   backgroundColor={white} textColor={brown} btnBgclr={brown} btnColor={yellow} headingColor={pink}/>

    {/* barat */}
    <Section heading={barat.heading} text={barat.text} btntxt={barat.btn}  imgsrc={baratimg}   backgroundColor={pink} textColor={yellow} btnBgclr={yellow} btnColor={brown} headingColor={yellow}/>

    {/* chaiwala */}
    <Section heading={chaiwala.heading} text={chaiwala.text} btntxt={chaiwala.btn}  imgsrc={chaiwalaimg}   backgroundColor={white} textColor={brown} btnBgclr={brown} btnColor={yellow} headingColor={pink}/>

    <Footer />
    <Misc />
    </div>
  );
}

export default App;