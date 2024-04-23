import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"

function Card() {
  return (
    <div className="p-5">
      <Link to='/'>{'<- Back'}</Link>
      <h1>Contact Card</h1>
      <div style={{fontFamily: "sans-serif", }}>
      <Container>
      <div>
        <div class="photo">
            <img class="rounded-circle" src="./img/blogpic.jpg"/>
        </div>
        <ul>
            <li><b>Jay Miller</b></li>
            <Link to="https://github.com/Jaymiller2002?tab=repositories"><li>Full-Stack Developer</li>click to see projects</Link>
        </ul>
        <div className="social-media-banner">
            <Link to="https://github.com/"><i className="fa-brands fa-square-github"></i></Link>
            <Link to= "mailto:jay.miller02@icloud.com"><i className="fa-solid fa-square-envelope"></i></Link>
            <Link to="tel:+8594758431"><i className="fa-solid fa-square-phone"></i></Link>
            <Link to="https://www.linkedin.com/feed/"><i className="fa-brands fa-linkedin"></i></Link>
            <Link to="https://www.instagram.com/"><i className="fa-brands fa-square-instagram"></i></Link>
            <Link to="https://twitter.com/"><i className="fa-brands fa-square-x-twitter"></i></Link>
            <Link to="https://www.youtube.com/"><i className="fa-brands fa-square-youtube"></i></Link>
            <Link to="https://www.google.com/"><i className="fa-brands fa-square-google-plus"></i></Link>
        </div>
        </div>
        </Container>
      </div>
    </div>
  )
}


export default Card