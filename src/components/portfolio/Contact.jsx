import { GoMail } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import React, { useRef, useState } from "react";
import { useScroll } from "../../util/useScroll";
import axios from "axios";
const ContactBox = React.lazy(() => import("./ContactBox"));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await axios.post(
        "https://formspree.io/f/mdaakrbd",
        formData,
        {
          headers: { Accept: "application/json" },
        }
      );
      if (response.status === 200) {
        setStatus("success");
        setTimeout(() => {
          setStatus(null)
        }, 2000)
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };



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
            <h2 className='mb-1 text-2xl lg:text-4xl text-gray-700 font-semibold leading-12 '>Get in Touch</h2>
            <p className='text-lg text-gray-700'>Have a question for me, or need my skills in your project?</p>
          </div>
          <div className="mt-10 flex flex-col gap-2">

            <ContactBox href={"mailto:femi4410@gmail.com?subject=Inquiry&body=Hello%20Oluwafemi"} icon={<GoMail size={30} color="white" />} title={"Email Me"} address={"femi4410@gmail.com"} />
            <ContactBox href={"tel:+2349163657267"} icon={<FiPhoneCall size={30} color="white" />} title={"Call Me"} address={"09163657267 | 09023403761"} />
            <ContactBox href={"https://www.google.com/maps?q=6.6018,3.3515"} icon={<SlLocationPin size={30} color="white" />} title={"My Location"} address={"Ikaja, Lagos, NG"} />
          </div>
        </div>
        <div className='lg:w-[50%]' ref={feature3}>
          <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-full'>
            <input type='text' id="name" name="name" value={formData.name}
              onChange={handleChange} placeholder='Full Name' className='p-3 border-2 border-gray-700 focus:border-sky-500 text-gray-700 rounded-md outline-none' required />

            <input type='email' id="email" name="email" value={formData.email}
              onChange={handleChange} placeholder='Email' className='p-3 border-2 border-gray-700 text-gray-700 rounded-md outline-none focus:border-sky-500' required />

            <textarea id="message"
              name="message" placeholder='Drop your message here...' value={formData.message}
              onChange={handleChange} rows={6} className='p-2 border-2 border-gray-700 text-gray-700 rounded-md outline-none focus:border-sky-500 resize-none' required></textarea>

            <button
              type="submit"
              disabled={status === "loading"}
              className='w-max py-2 px-10 hover:bg-gray-700 bg-gray-800 rounded-md cursor-pointer font-bold text-white'
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-600 mt-2">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-2">Oops! Something went wrong.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
