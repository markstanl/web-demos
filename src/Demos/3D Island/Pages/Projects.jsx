import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../constants'
import CTA from './CTA.jsx'

const Projects = () => {
    return (
        <section className="max-container">
            <h1 className='head-text'>
                My <span className='primary-accent-gradient font-semibold drop-shadow'>
                    Projects</span> <br />
            </h1>

            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p> Throughout my time as a student, I have dabbled in a few important projects.
                    But, these projects are the ones I am most proud of.
                    All projects are open source, so feel free to explore my code in Github.
                </p>
            </div>

            <div className=' flex flex-wrap my-20 gap-16'>
                {projects.map((project) => (
                    <div className='lg:w-[400px] w-full' key={project.name}>
                        <div className='block-container w-12 h-12'>
                            <div className={`btn-black rounded-xl ${project.theme}`} />
                            <div className={'btn-front rounded-xl flex justify-center items-center'}>
                                <img
                                    src={project.image}
                                    alt="Project Icon"
                                    className='w-1/2 h-1/2 object-contain' />
                            </div>
                        </div>

                        <div className='mt-5 flex flex-col'>
                            <h4 className='text-2xl font-poppins font-semibold'>
                                {project.name}
                            </h4>
                            <p className='mt-2 text-slate-500'>
                                {project.description}
                            </p>
                            <div className='mt-5 flex items-center gap-2 font-poppins'>
                                <Link
                                    to={project.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='font-semibold text-secondary'>
                                    Live Link
                                </Link>
                            </div>

                        </div>
                    </div>

                ))}
            </div>

            <hr className='border-slate-200' />

            <CTA />
        </section>
    )
}

export default Projects