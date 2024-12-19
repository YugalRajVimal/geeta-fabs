import React from "react";
import QuestionForm from "../components/QuestionForm";

const Contact = () => {
  return (
    <div className="-mt-[116px] bg-gray-50">
      <div className="pt-[116px] w-full h-full px-6 md:px-10">
        <h1 className="text-center text-5xl italic text-black mb-4 pt-4 font-serif">
          Contact Us
        </h1>
        <h5 className="text-center px-4 w-full  md:px-20  text-lg text-gray-700">
          Whether you have a question about features, trials, pricing, need a
          demo, or anything else, our team is ready to answer all your
          questions.
        </h5>
        <div className="w-full h-full bg-white mt-8 flex flex-col md:flex-row rounded-lg">
          <div className="w-full md:w-1/2 bg-cover bg-center rounded-l-lg flex justify-center items-center">
            <div className="h-[70%] w-[80%] bg-pink-400 -translate-x-6 -translate-y-6">
              <div className="h-full w-full bg-pink-800 translate-x-6 translate-y-6">
                <img src="/home/gallery-06.jpg" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 md:p-8 text-center flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl  mb-4 text-blue-800 font-serif">
              Get in Touch
            </h1>
            <p className="text-gray-600 mb-6">
              Your contact details will not be published. We promise not to
              spam!
            </p>
            <div className="flex flex-col md:flex-row justify-around mb-6">
              <div className="mb-4 md:mb-0">
                <h5 className="text-xl font-semibold text-gray-800">Phone</h5>
                <p className="text-gray-600">+91 95801 91637</p>
              </div>
              <div>
                <h5 className="text-xl font-semibold text-gray-800">Email</h5>
                <p className="text-gray-600">info@geetafabs.com</p>
              </div>
            </div>
            <div className="flex flex-col items-center mb-6">
              <h5 className="text-xl font-semibold text-gray-800">Location</h5>
              <p className="text-gray-600">Plot No-550, Udyog Vihar, Phase 5, Sector 19, Gurgaon</p>
            </div>
            <QuestionForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
