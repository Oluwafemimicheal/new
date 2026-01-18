import { GoMail } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import ContactBox from "./ContactBox";
import { useRef } from "react";
import { useScroll } from "../../util/useScroll";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mdaakrbd");
  
  const feature1 = useRef(null);
  const feature3 = useRef(null);

  useScroll([feature1], {
    origin: "left",
  });
  useScroll([feature3], {
    origin: "right",
  });
  return (
    <div className='contact px-5 lg:px-0' id="contact">
      <div className="max-w-6xl mx-auto py-20 gap-10 flex flex-col lg:flex-row justify-between ">
        <div className='lg:w-[40%] mb-2 lg:mb-10' ref={feature1}>
          <div>
            <h3 className='mb-1 text-4xl text-gray-700 font-semibold leading-12 '>Get in Touch</h3>
            <p className='text-lg text-gray-700'>Have a question for me, or need my skills in your project?</p>
          </div>
          <div className="mt-10 flex flex-col gap-2">

            <ContactBox href={"mailto:femi4410@gmail.com?subject=Inquiry&body=Hello%20Oluwafemi"} icon={<GoMail size={30} color="white" />} title={"Email Me"} address={"femi4410@gmail.com"} />
            <ContactBox href={"tel:+2349163657267"} icon={<FiPhoneCall size={30} color="white" />} title={"Call Me"} address={"09163657267 | 09023403761"} />
            <ContactBox href={"https://www.google.com/maps?q=6.6018,3.3515"} icon={<SlLocationPin size={30} color="white" />} title={"My Location"} address={"Ikaja, Lagos, NG"} />
          </div>
        </div>
        <div className='lg:w-[50%]' ref={feature3}>
          <form action={"https://formspree.io/f/mdaakrbd"} method="POST" onSubmit={handleSubmit} className='flex flex-col gap-3 w-full'>
            <input type='text' id="name" name="name" placeholder='Full Name' className='p-3 border-2 border-gray-700 focus:border-sky-500 text-gray-700 rounded-md outline-none' required />
            <ValidationError
              prefix="Name"
              field="text"
              errors={state.errors}
            />
            <input type='email' id="email" name="email" placeholder='Email' className='p-3 border-2 border-gray-700 text-gray-700 rounded-md outline-none focus:border-sky-500' required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea id="message"
              name="message" placeholder='Drop your message here...' rows={6} className='p-2 border-2 border-gray-700 text-gray-700 rounded-md outline-none focus:border-sky-500 resize-none' required></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type='submit' disabled={state.submitting} className='w-max py-2 px-10 hover:bg-gray-700 bg-gray-800 rounded-md cursor-pointer font-bold text-white'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
