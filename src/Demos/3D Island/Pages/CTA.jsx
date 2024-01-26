import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
    return (
        <section className='cta'>
            <p className='cta-text text-center'>Have a project idea? <br className='sm:block hidden'></br>
                Let's build something together!</p>
            <Link to='/3d-island/contact' className='btn-new'>Contact Me</Link>
        </section>
    )
}

export default CTA