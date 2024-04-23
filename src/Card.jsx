import { Link } from "react-router-dom"

function Card() {
  return (
    <div className="p-5">
      <Link to='/'>{'<- Back'}</Link>
      <h1>Contact Card</h1>
      <div>
      <div class="card">
        <div class="photo">
            <img class="rounded-circle" src="./img/blogpic.jpg"/>
        </div>
        <ul>
            <li style="margin-top: 30px;"><b>Jay Miller</b></li>
            <Link to="https://github.com/Jaymiller2002?tab=repositories"><li>Full-Stack Developer</li>click to see projects</Link>
        </ul>
        <div class="social-media-banner" style="margin-top: 75px;">
            <Link to="https://github.com/"><i class="fa-brands fa-square-github" style="font-size: 50px;"></i></Link>
            <Link to= "mailto:jay.miller02@icloud.com"><i class="fa-solid fa-square-envelope" style="font-size: 50px;"></i></Link>
            <Link to="tel:+8594758431"><i class="fa-solid fa-square-phone" style="font-size: 50px;"></i></Link>
            <Link to="https://www.linkedin.com/feed/"><i class="fa-brands fa-linkedin" style="font-size: 50px;"></i></Link>
            <Link to="https://www.instagram.com/"><i class="fa-brands fa-square-instagram" style="font-size: 50px;"></i></Link>
            <Link to="https://twitter.com/"><i class="fa-brands fa-square-x-twitter" style="font-size: 50px;"></i></Link>
            <Link to="https://www.youtube.com/"><i class="fa-brands fa-square-youtube" style="font-size: 50px;"></i></Link>
            <Link to="https://www.google.com/"><i class="fa-brands fa-square-google-plus" style="font-size: 50px;"></i></Link>
        </div>
        </div>
      </div>
    </div>
  )
}


export default Card