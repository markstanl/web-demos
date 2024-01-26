import React from 'react';
import { Link } from 'react-router-dom';


const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'
        >{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn w-100'>
            {btnText}
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-primary
        py-4 px-8 text-white mx-5"
        >Hi, I am <span className='font-semibold'> Mark </span> 👋
            <br />
            A Software Engineer based in <span className='font-semibold'> Wisconsin </span>
        </h1>
    ),
    2: (
        <InfoBox
            text="Worked with companies, picked up many skills"
            link="/3d-island/about"
            btnText="Learn More" />
    ),
    3: (
        <InfoBox
            text="I've made some good projects, check them out!"
            link="/3d-island/projects"
            btnText="Visit my portfolio" />
    ),
    4: (
        <InfoBox
            text="Need a project done? I am your guy!"
            link="/3d-island/contact"
            btnText="Contact Me" />
    )

}

const HomeInfo = ({ currentStage }) => {
    return (
        renderContent[currentStage] || null
    )
}

export default HomeInfo
