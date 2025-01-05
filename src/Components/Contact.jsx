import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const Contact = () => {
const form = useRef()
  const handleSubmitForm = e => {
    // const form = e.target;
    // const email = form.email.value;
    // const name = form.name.value;
    // const number = form.number.value;
    // const subject = form.subject.value;
    // const message = form.message.value
    e.preventDefault();

    emailjs
    .sendForm(
      "service_4loj07e", // Your EmailJS Service ID
      "template_ke145ka", // Your EmailJS Template ID
      form.current, // Reference to the form
      "qC2BZNfLR14MaH9Hi" // Your Public Key (User ID)
    )
    .then(
      () => {
        // SweetAlert2Show success message
        Swal.fire({
          title: "SUCCESS!",
          text: "Email sent successfully!",
          icon: "success",
        });
        form.current.reset();
      },
      (error) => {
        Swal.fire({
          icon: `FAILED... ${error.message}`,
          title: "Oops...",
          text: "Failed to send email. Please try again.",
        });
      }
    );
  }


  return (
    <section id="contact" className="py-16 md:py-20">
      <h2 className="text-center mb-6 md:mb-10  text-2xl font-semibold">
        Contact <span className="text-mainColor">Me!</span>
      </h2>
      <div className="max-w-3xl mx-auto w-11/12">
        <form ref={form} onSubmit={ handleSubmitForm} className="bg-secondbBgColor shadow-lg rounded-lg p-5 md:p-8 space-y-6">
          {/* first row  */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            {/* name  */}
            <div className="w-full">
              <label
                htmlFor="name"
                className="block text-sm md:text-lg font-medium opacity-70 mb-2 "
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full placeholder:text-sm md:placeholder:text-base bg-bgColor  rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mainColor"
                required
              />
            </div>
            {/* email  */}
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm md:text-lg font-medium opacity-70 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full bg-bgColor placeholder:text-sm md:placeholder:text-base rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mainColor"
                required
              />
            </div>

          </div>
          {/* second row  */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            {/* phone  */}
            <div className="w-full">
              <label
                htmlFor="phone"
                className="block text-sm md:text-lg font-medium opacity-70 mb-2"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="number"
                name="number"
                placeholder="Enter your phone number"
                className="w-full placeholder:text-sm md:placeholder:text-base  bg-bgColor rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mainColor"
                required
              />
            </div>
            {/* subject  */}
            <div className="w-full">
              <label
                htmlFor="subject"
                className="block text-sm md:text-lg font-medium opacity-70 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter your subject"
                className="w-full placeholder:text-sm md:placeholder:text-base bg-bgColor rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mainColor"
                required
              />
            </div>
          </div>

          {/* message  */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm md:text-lg font-medium opacity-70 mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Enter your message"
              className="w-full placeholder:text-sm md:placeholder:text-base bg-bgColor rounded-lg px-4 py-2 focus:outline-none focus:ring-2 resize-none focus:ring-mainColor"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full text-sm md:text-base bg-mainColor text-textColor font-semibold py-2 rounded-lg shadow hover:shadow-custom-glow"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
