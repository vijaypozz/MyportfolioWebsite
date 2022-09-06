import React from 'react';
import './Projectitem.css';
import Abot from '../../assets/Image/torchlite-dashboard.jpg';
const About = () => {
  return (
    <div  >
      <div className='foter' id='footer' >



        <div className='touch' >
          <h2 className='touchtext' >Torchlite </h2>
          <p style={{ width: '100%' }} >“Torchlite is by far the most innovative partner platform I’ve ever seen. It has everything you and your team needs to accelerate partner performance.”</p>
          <span  >Torchlite Product Solutions
          </span>
          <p>Our product innovations are designed to help you not only reach your goals, but exceed them in ways you may haven’t even imagined.
          </p>
          <ul>
            <li><a href="https://torchlite.com/solutions/">Crossbeam Account Mapping and Followup</a></li>
            <li><a href="https://torchlite.com/solutions/">Deal Registration</a></li>
            <li><a href="https://torchlite.com/solutions/">Partner Portal and Directory</a></li>
            <li><a href="https://torchlite.com/solutions/">Channel Marketing and Journey Building</a></li>
            <li><a href="https://torchlite.com/solutions/">Playbooks</a></li>
          </ul>

          <div className='row' >
          </div>
        </div>
        <img className='picl' src={Abot} alt="" />
      </div>
    </div>
  )
}

export default About;

