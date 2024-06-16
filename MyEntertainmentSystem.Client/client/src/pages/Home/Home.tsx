import { useEffect, useState } from "react";
import BodyContent from "../../components/BodyContent/BodyContent";
import Carousel from 'react-material-ui-carousel';
import { groupIntoChunks } from "../../utils/carouselGrouping";
import { createTheme, useMediaQuery, useTheme } from "@mui/material";
import "./Home.less";
import { IHobbies } from "../../interfaces/IHobbies";

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
  }
}

export default function Home() {
  const [popularHobbies, setPopularHobbies] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7212/popularHobbies")
      .then(response => response.json())
      .then(data => setPopularHobbies(data));
  }, []);

  // Determine the chunk size based on device
  const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 800,
        tablet: 1410,
      },
    },
  });
  
  const isMobile = useMediaQuery(theme.breakpoints.down('mobile'));
  const isTablet = useMediaQuery(theme.breakpoints.down('tablet'));
  const chunkSize = isTablet ? (isMobile ? 1 : 2) : 3;
  
  return (
    <BodyContent>
      <h2>Welcome to MyEntertainmentSystem project, here i have created hobbies as a list of hobbies that i'm keeping track of, which consists of anime / games and movies at this current time</h2>
      <h2>I have also created a blogs page to discuss about my opinions on my interests and a forum for open discussions</h2>  
      <div className="carousel">
        <Carousel animation="fade" autoPlay={true} navButtonsAlwaysInvisible height={'650px'}>
          {groupIntoChunks(popularHobbies, chunkSize).map((group: Array<IHobbies>, groupIndex: Number) => (
            <div className="container">
              {group.map((data: IHobbies, index: Number) => (
                <div className="card">
                  <div className="image-section">

                    {(data.imagePath === "" ? 
                      <img className="skeletion" alt="Skeleton" src={process.env.PUBLIC_URL + "/images/Skeleton.png"} /> : 
                      <img className="skeletion" alt={data.name} src={data.imagePath} />
                    )}
                  </div>
                  <div className="info-section">
                    <h2>{data.name}</h2>
                    <p>{data.description}</p>
                  </div>
                </div>
              ))}
              </div>
            ))}
        </Carousel>
      </div>
    </BodyContent>
    )
}


/* 
  * User Auth
  * Hobbies page
  * Forum for specific game / anime or whatever
  * Blogs for these sections
  * And obviously have add these as completed with ratings or whatever
  * Make sure to have a proper filtering option with these i would like to say filter by Type rather
  * Have proper Authentication happening with the backend using Fluent Validation
*/