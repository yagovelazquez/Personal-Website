import { Link } from "react-router-dom";
import Collapse from "../styled/Collapse.styled";
import { BodyContainer, BodyParagraph, BodyTitle } from "./AboutMeCollapseBody.styled";
import { useMediaQuery } from "../Hooks/useMediaQuery";







function AboutMeCollapse(props) {



   const isBiggerThan685 = useMediaQuery('(min-width: 685px)');
   const isBiggerThan540 = useMediaQuery('(min-width: 540px)');
   const isBiggerThan460 = useMediaQuery('(min-width: 460px)');
   const isBiggerThan380 = useMediaQuery('(min-width: 380px)');



   let height

   if (isBiggerThan380) {
    height = "750px"
   }


   if (isBiggerThan460) {
    height = "650px"
   }


   if (isBiggerThan540) {
    height = "550px"
   }

   if (isBiggerThan685) {
    height = "450px"
   }


    const {isOpen} = props

    const CollapseBody = () => {

        return(
        <BodyContainer>
          <BodyTitle>Studious JavaScript enthusiast.</BodyTitle>
          <BodyParagraph>Although I chose to do the mechanical engeneering, I come from a family of developers and always liked to program, but it was since last year I started to take it more serious and learn better javascript.</BodyParagraph>
          <BodyParagraph>Since the beggining I felt in love with programming and understood that this was what I wanted. I'm willing to work and study on my free time (apart of work) the amount of hours that it takes to learn and be an useful asset to your company.</BodyParagraph>
          <BodyParagraph>I do believe that nowdays you can learn much on internet, and I've always been self taught. That's how apart of learning for the university and programming, I learnt english, spanish and have a very good understanding of italian. When you're not finding me programming, you can find me studying languages or exercising.</BodyParagraph>
          <BodyParagraph>If you’d like to find out more about me, don't hesitate to get in touch with me <Link style={{ textDecoration: 'none'  }} to="./contact">here </Link> or sending an email to yagovelazquezsouzaa@gmail.com. Additionally, all my details are available on my <Link style={{ textDecoration: 'none', marginLeft: "4px"  }} to="/CVYago Velazquez.pdf" target="_blank" download>
CV right here.
</Link></BodyParagraph>
        </BodyContainer>)
    }

    
    return (<Collapse height={height} justifyContent="flex-start" padding="20px 0" isOpen={isOpen} CollapseBody={CollapseBody}></Collapse>
    );
}

export default AboutMeCollapse;