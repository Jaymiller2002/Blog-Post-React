import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"
const Title = () => {
  return (
    <h1>
      Blog Post
    </h1>
  )
}

function App() {
  return (
    <div 
      className="bg-dark h-100 p-5"
      style={{ color: 'white' }}
    >
      <Link className="text-light" to='/about'>{'Sprint 2 ->'}</Link>
      <Title />
      <div style={{fontFamily: "sans-serif", }}>
      <Container>
      <h1>What are your thoughts about the roles HTML, CSS, and JavaScript play in the process of rendering content and providing user experience?</h1>
      <p>I find it extremely cool to see everything finally come together to make a fully functional page or website.</p>
      <h1>What are your thoughts on pseudocoding?</h1>
      <p>pusedocoding is SUPER helpful and I need to get better at it. I need to also work on organizing my pusedocode.</p>
      <h1>What was helpful during Onboarding that made working remotely easier?</h1>
      <p>I'd say the help channel on slack because usually I would be able to look through and see someone else having the same problem or just ask for help in the channel myself.</p>
      <h1>What hindered your progress during Onboarding?</h1>
      <p>Just my own personal life(family, time-management, sleep, etc)</p>
      <h1>How did you overcome challenges during Onboarding?</h1>
      <p>I overcame challenges through perseverance and by asking for help. I may have taken to long to ask for help so I'll do that sooner next week.</p> 
      <h1>What is the number one thing that held you back this week? Why?</h1>
      <p>Javascript because it's a whole new language for me so I just need to slow down a bit so I can understand what i'm doing.</p>
      <h1>What is one thing you would like to learn more about regarding JavaScript (JSON, Data Structures), Bootstrap, or Atomic Design?</h1>
      <p>I'd love to learn more about javascript and how to change anything in html</p>
      <h1>What is your “Why”?</h1>
      <p>I'd like to learn this since javascript is so powerful and there's a lot you can accomplish with it.</p>
      </Container>
      </div>
    </div>
  )
}


export default App
