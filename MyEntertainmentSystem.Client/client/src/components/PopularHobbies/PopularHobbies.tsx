import { createTheme, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { groupIntoChunks } from "../../utils/carouselGrouping";
import { IHobbies } from "../../interfaces/IHobbies";
import Carousel from 'react-material-ui-carousel';
import "./PopularHobbies.less";


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

export default function PopularHobbies() {
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
                {/* <p>{data.description}</p> */}
              </div>
            </div>
          ))}
          </div>
        ))}
    </Carousel>
  </div>
  )
}