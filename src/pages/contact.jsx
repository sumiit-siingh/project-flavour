import React, { useEffect } from "react";
import { MdConnectWithoutContact } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { VscCallOutgoing } from "react-icons/vsc";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Contact() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      {/* Top section */}
      <div className="mt-20 flex w-full text-[15rem] relative items-center justify-center px-4 ">
        <motion.img
          src="https://res.cloudinary.com/dq829orud/image/upload/v1745255111/telephone-laptop-flat-lay-with-workspace-yellow-background_140725-23283_eugykf.jpg"
          className="h-120 w-full shadow-lg shadow-white rounded-lg"
          initial={{ y: 400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <MdConnectWithoutContact className="absolute text-9xl mt-10 text-black" />
        <motion.p
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 100 }}
          transition={{ duration: 1 }}
          className="absolute text-5xl font-extrabold text-black"
        >
          Connect to our team....
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 0.7, y: 145 }}
          transition={{ duration: 1 }}
          className="absolute text-xl font-extrabold text-white text-outline"
        >
          Let us know how can we help
        </motion.p>
      </div>

      {/* Contact options */}
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-2xl h-50 w-full flex justify-around -translate-y-15"
      >
        {/* Chat card */}
        <div className="relative text-[#e56023] bg-gradient-to-r from-gray-700 via-gray-900 to-black shadow-lg shadow-white/50 w-60 p-4 rounded-lg">
          <div className="absolute top-4 left-4 text-3xl text-[#ffcc70]">
            <IoChatbubblesOutline />
          </div>
          <div className="absolute bottom-4 left-4 flex flex-col">
            <a className="text-xl text-white">Chat to support team</a>
            <a className="text-sm text-[#ffcc70]">Talk to our friendly team</a>
          </div>
        </div>

        {/* Email card */}
        <div className="relative text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black shadow-lg shadow-white/50 rounded-lg h-52 w-60 p-4">
          <div className="absolute top-4 left-4 text-3xl text-[#ffcc70]">
            <HiOutlineMail />
          </div>
          <div className="absolute bottom-4 left-4 flex flex-col">
            <a className="text-xl">Email us</a>
            <a className="text-sm text-[#ffcc70]">Drop us your Query</a>
          </div>
        </div>

        {/* Call card */}
        <div className="relative text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black shadow-lg shadow-white/50 rounded-lg h-52 w-60 p-4">
          <div className="absolute top-4 left-4 text-3xl text-[#ffcc70]">
            <VscCallOutgoing />
          </div>
          <div className="absolute bottom-4 left-4 flex flex-col">
            <a className="text-xl">Call us</a>
            <a className="text-sm text-[#ffcc70]">Get in touch</a>
          </div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={controls}
        className="flex items-center justify-center"
      >
        <div className=" mt-10 text-white">
          <a className="text-3xl mb-4 text-[#ffcc70]">Frequently asked questions</a>

          {[
            {
              q: "Is there free trial available?",
              a: "Yes, we offer a free trial for new users to enjoy our service before subscribing!",
            },
            {
              q: "Can I change my plan later?",
              a: "Yes, you can easily change your plan anytime through your account settings!",
            },
            {
              q: "What is your cancellation policy?",
              a: "Please note that cancellation policies vary depending on the restaurant and order stage. Review terms during checkout or contact support.",
            },
            {
              q: "Can I edit my email later?",
              a: "Yes, you can easily edit your email anytime through your account settings!",
            },
            {
              q: "How does your support work?",
              a: "Our support works 24/7 through chat, email, and phone to quickly help you with any issue or question!",
            },
          ].map((item, idx) => (
            <details
              key={idx}
              className="p-4 w-full flex flex-col items-center max-w-md  bg-opacity-10 backdrop-blur-sm rounded mb-2"
            >
              <summary className="cursor-pointer text-lg">{item.q}</summary>
              <p className="mt-2 text-gray-300">{item.a}</p>
            </details>
          ))}
        </div>
      </motion.div>
      <div className=" border-red-500 border mt-10 flex">
        <a className=" text-[#ffcc70] text-5xl font-bold">Download the app now</a>
        <motion.img  initial={{ x: 480, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-50"
        src="https://res.cloudinary.com/dq829orud/image/upload/v1745279459/1_YDTco_dV-qqFP7EtPEERVw_uylyfg.png"/>
      </div>
    </div>
  );
}

export default Contact;
