class App extends React.Component{
  render(){
  const btnClass = ['btn text-dark pt-0 bi bi-instagram', 'btn text-dark pt-0 bi bi-github', 'btn text-dark pt-0 bi-envelope', 'btn text-dark pt-0 bi-whatsapp'];
  const items = []
  for (const [index, value] of btnClass.entries()) {
    items.push(<a className={value}></a>)
  }
  const mySkill = ['myskillitem devicon-html5-plain colored mx-2', 'myskillitem devicon-css3-plain colored mx-2', 'myskillitem devicon-javascript-plain colored mx-2', 'myskillitem devicon-php-plain colored mx-2', 'myskillitem devicon-python-plain colored mx-2', 'myskillitem devicon-bash-plain colored mx-2', 'myskillitem devicon-typescript-plain colored mx-2', 'myskillitem devicon-bootstrap-plain colored mx-2', 'myskillitem devicon-vuejs-plain colored mx-2', 'myskillitem devicon-react-plain colored mx-2', 'myskillitem devicon-laravel-plain colored mx-2', 'myskillitem devicon-codeigniter-plain colored mx-2'];
  const skill = []
  for (const [index, value] of mySkill.entries()){
    skill.push(<div className={value}></div>)
  }
  const other = ['OpenCV', 'JavaScript', 'MySQL', 'MongoDB', 'HTML', 'CSS', 'Python', 'PHP', 'Laravel', 'Sublime Text', 'VCode', 'Git', 'Github', 'BurpSuite', 'Linux'];
  const otherSkill = []
  for (const [index, value] of other.entries()){
    otherSkill.push(<div className="btn btn-light">{value}</div>)
  }
  const projectItem = ['E-Store | Toko Online', 'E-Management', 'Company Website Profile', 'School Website Profile'];
  const project = []
  for (const [index, value] of projectItem.entries()){
    project.push(<div className="projectMenu mb-2 p-2 w-100 bg-light rounded">
        <img src="electronic.png"/> {value}
      </div>)
  }
    return(
<div className="content">
  <nav className="navbar">
    <div className="container p-4">
      <a className="px-3 navbar-brand ridhomr">ridhomr</a>
      <a className="navbar-brand btn shadow-sm rounded ridhomr pt-0 pb-2">
        <span className="bi bi-cpu-fill pt-0"></span>
      </a>
    </div>
  </nav>
  <div className="container text-center mt-3">
    <img src="ridhomr.jpg" width="200px" height="200px" className="rounded-circle"/>
    <div className="WhoAmI mt-4">Hai, Saya Ridhomr!</div>
    <div className="type btn btn-dark pb-0 pt-0 mt-3 mb-3">
      <div className="typeInHere"></div>
    </div>
    <div className="socialMedia mt-3 mb-3">
      <div>{items}</div>
    </div>
  </div>
  <div className="container">
    <div className="tagContent px-4">About Me</div>
    <div className="myText px-4">
      I am a teenager who likes to spend time behind the computer screen, spending a lot of time on the internet. Trying new things is my passion, at least I want to be someone who is an expert in various things.<br/>now i am developing my hobby which is writing a program code. I really like the world of Information Technology and Science, since (junior high school) I was inspired by an intelligent computer programmer, Mark Zuckerberg, he is the founder of the Facebook network, he is the motivation that has brought me closer to the IT world.<br/>
      <a href="#" className="btn btn-light w-100 mt-3">View More</a>
    </div>
    
    <div className="tagContent px-4 pt-5">My Story❤</div>
    <div className="px-4">
      <div className="myText">
        This is a true story that happened in my life. I made it because I wanted to remember the person who has value to my life.
      </div>
      <div className="storyItem my-3 p-2">
        <img src="kakek.png" className="w-100"/>
        <div className="storyTitle my-2">My Life Path Guide, Love You Grandfather And Now I Miss You. I'm sorry, it didn't turn out as good as you wanted it to be.</div>
        <a href="/story/kakek" className="btn btn-light w-100">Read More</a>
      </div>
    </div>
    
    <div className="tagContent px-4 pt-5">Which I Have Created</div>
    <div className="px-4">
      <div className="myText pb-2">
        I am not showing everything that I have created here, because there may be some things that I don't think look perfect.
      </div>
      {project}
      <div className="projectMenu text-center mb-2 p-2 w-100 bg-light rounded">
         Contact Me To Know More,
         <a href="#" className="btn text-primary">Here!</a>
      </div>
    </div>
    
    <div className="tagContent px-4 pt-5">What I Can?</div>
    <div className="myText px-4">
      Because I love to learn new things, I have been able to master at least a few things.
    </div>
    <div className="myskillmenu mx-4 p-1 pt-2 my-3 rounded bg-light">
      {skill}
    </div>
    <div className="px-4 otherSkill">
      {otherSkill}
    </div>
    <div className="tagContent px-4 pt-5">Team</div>
    <div className="px-4 pb-4">
      <div className="myText mb-3">I join several teams or organizations that discuss technology.</div>
      <div className="teamItem text-center mb-3">
        <img src="act.png" className="w-50"/>
        <div className="teamName">AnonCyberTeam</div>
      </div>
      <div className="teamItem text-center mb-3">
        <img src="indox.png" className="w-50"/>
        <div className="teamName">IndoXploit</div>
      </div>
      <div className="teamItem text-center mb-3">
        <img src="haxor.png" className="w-50"/>
        <div className="teamName">HaxorSecurity</div>
      </div>
      <div className="teamItem text-center mb-3">
        <img src="dsc.png" className="w-50"/>
        <div className="teamName">Developer Student Club</div>
      </div>
    </div>
    <div className="tagContent px-4 pt-5">Sertifikat</div>
    <div className="px-4 pb-4">
      <div className="myText mb-3">my certificate during the experience of participating in programs and training.</div>
      <div className="teamItem text-center mb-3">
        <img src="image/cnss.png" className="w-50"/>
        <div className="teamName">Certified Network Security Specialist</div>
      </div>
      <div className="teamItem text-center mb-3">
        <img src="image/bssn.png" className="w-50"/>
        <div className="teamName">Badan Siber Dan Sandi Negara</div>
      </div>
      <div className="teamItem text-center mb-3">
        <img src="image/google.png" className="w-50"/>
        <div className="teamName">Google Bisnisku</div>
      </div>
      <div className="teamItem text-center mb-3">
        <img src="image/cyber.jpg" className="w-50"/>
        <div className="teamName">Cisco</div>
      </div>
    </div>
  </div>
  
  <footer className="text-center p-2 mb-4 mt-5">
    Build On Linux Mint 20😎
    <br/>
    Copyright © ridhomr 2021 • All rights reserved.
  </footer>
</div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))

new Typed('.typeInHere',{
  strings : ['Student', 'Bug Hunter', 'Worker', 'Cyber Security', 'Programmer'],
  typeSpeed : 100,
  delaySpeed : 100,
  loop : true
});

$(".bi-envelope").click(function(){
  window.location.href = "mailto:ridhomr404@gmail.com";
});

$(".bi-instagram").click(function(){
  window.location.href = "https://instagram.com/ridhomarhaban";
});

$(".bi-github").click(function(){
  window.location.href = "https://github.com/ridhomr";
});

$(".bi-whatsapp").click(function(){
  window.location.href = "https://api.whatsapp.com/send/?phone=#&text=Hi,+Ridhomr!&sent=0";
});


