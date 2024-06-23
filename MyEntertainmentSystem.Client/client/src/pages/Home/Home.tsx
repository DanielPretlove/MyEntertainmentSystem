import BodyContent from "../../components/BodyContent/BodyContent";
import "./Home.less";

export default function Home() {
  return (
    <BodyContent>
      <div className="content">
        <h1>Welcome to my Hobby Project</h1>
        <p>This includes a lot of features including using Blogs, Forums, Quizzes, Dashboard, Purchases Order and a Messenger App.</p>
      </div>
      <div className="image-container">
        <img
          className="heading desktop"
          alt="heading"
          src={process.env.PUBLIC_URL + "/images/pages/Home/SekiroHeading.jpg"}
        />
        <img
          className="heading mobile"
          alt="heading"
          src={
            process.env.PUBLIC_URL +
            "/images/pages/Home/SekiroMobileHeading.jpg"
          }
        />
      </div>
    </BodyContent>
  );
}
