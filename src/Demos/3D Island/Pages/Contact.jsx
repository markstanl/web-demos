import React, { useRef } from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    console.log(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID);
    console.log(import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID);
    console.log(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: 'Mark',
                from_email: form.email,
                to_email: 'mgstanley1@gmail.com',
                message: form.message

            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setIsLoading(false);


            setForm({ name: '', email: '', message: '' });
        }).catch((error) => {
            setIsLoading(false);
            console.log(error);
        })
    }

    const handleFocus = (e) => {
    }

    const handleBlur = (e) => {
    }


    return (
        <section className='relative flex lg:flex-row flex-column max-container'>
            <div classname='flex-1 min-w-[50%] flex flex-col'>
                <h1 className='head-text'>Get in touch</h1>
                <form className='flex flex-col gap-7 w-full mt-14'
                    onSubmit={handleSubmit}>
                    <label className='text-black-500 font-semibold'>
                        Name
                        <input type='text' name='name' className='input' placeHolder='John'
                            required
                            value={form.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur} />
                    </label>
                    <label className='text-black-500 font-semibold'>
                        Email
                        <input type='email' name='email' className='input' placeHolder='john@front-end-demos.com'
                            required
                            value={form.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur} />
                    </label>
                    <label className='text-black-500 font-semibold shadow-none'>
                        Your Message
                        <textarea type='text' name='message' rows={4} className='textarea' placeHolder='Let me know how I can help you!'
                            required
                            value={form.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur} />
                    </label>
                    <button
                        type='submit'
                        className='btn'
                        disabled={isLoading}
                        onFocus={handleFocus}
                        onBlur={handleBlur}>
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact