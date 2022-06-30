import { ProjectExContainer } from "./ProjectExihibition.styled";
import Project from "./Project";



function ProjectExihibition() {

  const  imagesSpa = {hover:  "HushSunrise.png",
  link: "https://github.com/yagovelazquez/react-spa-app",
          hoverAlt:"Hush Sunrise Project",
        main: "HushCover.png",
        linkLive: "https://hush-sunrise.herokuapp.com/",
    mainAlt: "Hush Sunrise Cover Project"}

    const  imagesPortifolio = {hover:  "Portifolio.png",
    link: "https://github.com/yagovelazquez/react-spa-app",
            hoverAlt:"Portifolio Project",
          main: "PortifolioCover.png",
          linkLive: "https://yagovelazquez.com/contact/",
      mainAlt: "Portifolio Cover Project"}
  


    const descriptionSpa = {
        title: <>THE HUSH SUNRISE APP - <i>MAIN PROJECT</i></>,
        paragraphs: [
           "A fully responsive React CRUD application using my own backend for storing data, fetching data and authentication.  This app is my main portifolio project and  simulates a real SPA with hotels, residences and resorts. Users are able to login, recover their password and choose their preferences at profile which is stored at the database.",
         <>   This app features:<br></br> - Chakra Ui was used to style components.<br></br> - React Query was used to make API calls. <br></br> - Local Storage was used to persist data.<br></br> - React Router Dom was used for switching pages.<br></br> - Backend was built on Node.js/MySQL/Sequelize.</>,
           "I worked with Hush Sunrise for a few weeks to have a bigger website portifolio and get to know better the 'ins and outs' of a bigger project."
        ]
    }

    const descriptionPortifolio = {
      title: <>THE PORTIFOLIO APP - <i>THIS WEBSITE PROJECT</i></>,
      paragraphs: [
         "A fully responsive React application.  This app is my personal website project, the one you're seeing right now and it was made to show a little bit of myself and work.",
       <>   This app features:<br></br> - Styled components too style the components (CSS in JS).<br></br> - React Query was used to make API calls. <br></br> - The backend was made on Node.js, with express and nodemailer.<br></br> - React Router for the 2 available routes.</>,
         "Although this website was done with the sole purpose of showing a little bit of my work and myself, I got to learn more about styled components and it's usage, and now I feel very confident to develop applications with this technology."
      ]
  }


    return ( 
    <ProjectExContainer>

       <Project images={imagesSpa} description={descriptionSpa}></Project>
       <Project images={imagesPortifolio} description={descriptionPortifolio}></Project>


    </ProjectExContainer> );
}

export default ProjectExihibition;