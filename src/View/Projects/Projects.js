import React from 'react'
import './Projects.css';



import Projectitem from './Projectitem';



class Projects extends React.Component {


  state = {
    sections: [
      {
        info: 'write your app little info here',
        linkUrl: 'deployment link',
      title: '  your app name',

      id: 1,
    },
    {
      info: 'write your app little info here',
      linkUrl: 'deployment link',
    title: '  your app name',
     
      id: 2,     
    },
    {
      info: 'write your app little info here',
      linkUrl: 'deployment link',
    title: '  your app name',
    
      id: 3,
    }
    , {
      info: 'write your app little info here',
      linkUrl: 'deployment link',
    title: '  your app name',
 
        id: 4,
      }
      , {
        info: ' “Try to learn something about everything and everything about something :) "',
        linkUrl: '',
        title: 'Work in Progres',
        id: 5,
      }
    ]

  }



  render() {
    return (
      <div className='projects-page' id='projects' >

        <h1 className='te'>  <span role="img" aria-label="cd"  > 💿 Projects 🚀</span>  </h1>

        <hr />


        <div className='directory-project'>


       <Projectitem/>

        </div>

        <div className='gitwork' >
          <hr />
          <span className='work'  >Like my work ? OR want to see more work..!? well You can see all on  my Github. </span>

          <button
            className='button-30'

            onClick={(e) => {
              e.preventDefault();
              window.open('https://github.com/vijaypozz');
            }}
          > <i className="cib-github"></i>
            {' '}Github</button>
          <hr />

        </div>

      </div>

    )
  }
}
export default Projects;
