import HeroBanner from '../../compnents/hero/Hero'

import Header from '../../compnents/header/Header'

const ContactUs = () => {
  return (
    <div>
       
        <Header/>
        <HeroBanner text={"Contact Us"}/>

        <section className='py-10 px-5'>
        <div>

          <p className='text-center font-medium text-gray-600 max-w-4xl m-auto my-6'>
          Fill Out Our Contact Form
          Need assistance? Simply fill out our contact form with your details and inquiry, and our support team will get back to you as soon as possible. We’re here to help with any questions or concerns you may have.

          </p>

        </div>
      </section>

      <section id='contact-form' className='get-in-touch text-white py-20 px-4'>
        <div className='max-w-4xl  m-auto my-14'>
        <h3 className='text-5xl text-center font-semibold text-primary '>Get In Touch</h3>
        <p className='md:text-2xl my-5 text-center text-gray-700'>
        Contact Us:
        Have questions? Reach out to our support team via email or live chat.
        </p>

        </div>
        <form  className='max-w-7xl m-auto md:p-10 border-[5px] px-3 border-gray-300'>
          <div className='flex flex-col md:flex-row gap-6 my-6'>
            <div className='flex-1'>
              <label htmlFor="name"></label>
              <input type="text" placeholder='Name' name='name' className='border rounded p-5 focus:border-none text-gray-900 w-full font-semibold'/>

            </div>
          
            <div className='flex-1'>
              <label htmlFor="email">
              <input type="text"  placeholder='Email' name='email' className='p-5 rounded focus:outline-none text-gray-900 w-full font-semibold'/>

              </label>
            </div>
          </div>
          <div className='my-6'>
          <div className='flex-1'>
              <label htmlFor="phone_no">
              <input type="text"  placeholder='phone_no' name='Phone Number' className='p-5 rounded focus:outline-none text-gray-900 w-full font-semibold'/>

              </label>
            </div>
          </div>
          <div>
            <textarea name="message" id="message" placeholder='Message' className='p-5 focus:outline-none h-40 rounded-lg text-gray-900 w-full font-semibold'></textarea>
          </div>

          <div>
            <button className='py-4 px-14 bg-gray-900 my-5 rounded w-full md:w-max'>Submit</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default ContactUs