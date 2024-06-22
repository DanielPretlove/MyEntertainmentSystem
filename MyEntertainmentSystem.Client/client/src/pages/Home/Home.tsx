import Carousel from "react-material-ui-carousel";
import BodyContent from "../../components/BodyContent/BodyContent";
import "./Home.less"


export default function Home() {
  return (
    <BodyContent>
      <h2>Welcome to MyEntertainmentSystem project, here i have created hobbies as a list of hobbies that i'm keeping track of, which consists of anime / games and movies at this current time</h2>
      <h2>I have also created a blogs page to discuss about my opinions on my interests and a forum for open discussions</h2>
      <div className="image-container">
        <img className="heading desktop" alt="heading" src={process.env.PUBLIC_URL + "/images/pages/Home/SekiroHeading.jpg"} />
        <img className="heading mobile" alt="heading" src={process.env.PUBLIC_URL + "/images/pages/Home/SekiroMobileHeading.jpg"} />
      </div>
    </BodyContent>
    )
}