import React from 'react'
import './Home.css';
import ReactRotatingText from 'react-rotating-text';
import image from "../../assets/Image/mb.svg"

const Main = () => {
    return (

        <div className='main' id='main' >

        <img className='sv' src={image} alt="" />
        
            <div className='writ' >
                <span style={{ color: 'white' }} className='hy' > Hey, </span>
                <span style={{ color: '#E6E7E8' }} className='hy' > I'm Your vijay. </span>  <br />
                <br />
                <span style={{ color: ' #DCE5E7' }} className='senior' >Full Stack Developer.</span>
                <br />
                <br />

                <ReactRotatingText
                    className='blink'

                    items={['I love to create.',]}
                    color={'grey'}
                    typingInterval={20}
                    pause={2000}
                />

            </div>

        </div>

    )
}

export default Main;
