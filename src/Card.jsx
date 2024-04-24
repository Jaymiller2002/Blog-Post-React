import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"
import './App.css'
import PictureOf from './assets/blogpic.jpg'
function Card() {
  return (
    <div className="p-5" style={{
        fontFamily: "sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "linear-gradient(to bottom, #a371ff, #4171c9)"
        }}>
      <Link className="text-light" to='/' style={{position: "absolute", alignSelf: "flex-start", marginTop: "-5px", marginLeft: "-1000px"}}>{'<- Back'}</Link>
      <div style={{height: "calc(100vh - 100px"}}>
      <Container style={{marginBottom: "6000px" }}>
      <div style={{
        backgroundImage: "linear-gradient(to bottom right, #ac571f, #b3b02c)",
        height: "350px"}}>
        <div className="photo">
            <img className="rounded-circle" src={PictureOf}/>
        </div>
        <ul style={{margin: "20px", marginTop: "65px"}}>
            <li><b>Jay Miller</b></li>
            <Link to="https://github.com/Jaymiller2002?tab=repositories"><li>Full-Stack Developer</li>click to see projects</Link>
        </ul>
        <div class="container d-flex" style={{marginTop: "80px"}}>
            <Link to="https://github.com/" style={{
              fontSize: "2rem", 
              color: "purple"}}><i className="fa-brands fa-square-github"></i></Link>
            <Link to= "mailto:jay.miller02@icloud.com" style={{
              fontSize: "2rem", 
              color: "purple"}}><i className="fa-solid fa-square-envelope"></i></Link>
            <Link to="tel:+8594758431" style={{
              fontSize: "2rem", 
              color: "purple"}}><i className="fa-solid fa-square-phone"></i></Link>
            <Link to="https://www.linkedin.com/feed/" style={{
              fontSize: "2rem", 
              color: "purple"}}><i className="fa-brands fa-linkedin"></i></Link>
            <Link to="https://www.instagram.com/" style={{
              fontSize: "2rem", 
              color: "purple"}}><i className="fa-brands fa-square-instagram"></i></Link>
            <Link to="https://twitter.com/" style={{
              fontSize: "2rem", 
              color: "purple"}}><i className="fa-brands fa-square-x-twitter"></i></Link>
            <Link to="https://www.youtube.com/" style={{
              fontSize: "2rem", 
              color: "purple"}}><i className="fa-brands fa-square-youtube"></i></Link>
            <Link to="https://www.google.com/" style={{
              fontSize: "2rem", 
              color: "purple"}}><i className="fa-brands fa-square-google-plus"></i></Link>
        </div>
        </div>
        </Container>
      </div>
    </div>
  )
}


export default Card