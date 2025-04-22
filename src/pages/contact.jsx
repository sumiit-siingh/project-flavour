import React, { useEffect } from "react";
import { MdConnectWithoutContact } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { VscCallOutgoing } from "react-icons/vsc";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

function Contact() {
  const downloadControls = useAnimation();
  const [downloadRef, downloadInView] = useInView({ triggerOnce: true });
  const [ref, inView] = useInView({ triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    if (downloadInView) {
      downloadControls.start("visible");
    }
  }, [downloadInView, downloadControls]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="h-full relative flex flex-col bg-gradient-to-r from-gray-700 via-gray-900 to-black overflow-hidden">
      {/* Top section */}
      <div className="mt-20 flex w-full text-[15rem] relative items-center justify-center px-4  ">
        <motion.img
          src="https://res.cloudinary.com/dq829orud/image/upload/v1745255111/telephone-laptop-flat-lay-with-workspace-yellow-background_140725-23283_eugykf.jpg"
          className="h-120 w-full shadow-lg shadow-white rounded-lg bg-white "
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
          <a className="text-3xl mb-4 text-[#ffcc70] text-outline">Frequently asked questions</a>

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
              <summary className="cursor-pointer text-lg text-outline">{item.q}</summary>
              <p className="mt-2  text-[#ffcc70] text-outline">{item.a}</p>
            </details>
          ))} {/* Your FAQ items */}

        </div>
      </motion.div>
      <div className="mt-20 flex w-full  text-[15rem]  items-center justify-center px-4 overflow-hidden">

        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-outline text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-left pr-10 text-[#ffcc70]"
        >
          Download our app now
        </motion.div>
        <motion.img
           ref={downloadRef}
           initial="hidden"
           animate={downloadControls}
           variants={{
             hidden: { x: 500, opacity: 0 },
             visible: {x: 0,opacity: .3,
               transition: { duration: 1, ease: "easeOut" },
             },
           }}
         src="https://res.cloudinary.com/dq829orud/image/upload/v1745063312/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA3L2hpcHBvdW5pY29ybl9waG90b19vZl9kaXNzZWN0ZWRfZmxvYXRpbmdfdGFjb19zZXBhcmF0ZV9sYXllcl9vZl84M2Q0ODAwNC03MDc0LTRlZjItYjYyOC1jZTU3ODhiYzQxOGEucG5n-removebg-previe_oozrky.png" className="absolute opacity-20 translate-x-150  " />
        <motion.img  
        ref={downloadRef}
           initial="hidden"
           animate={downloadControls}
           variants={{
             hidden: { y: 500, opacity: 0 },
             visible: {y: 0,opacity: .3,
               transition: { duration: 1, ease: "easeOut" },
             },
           }}
         src="https://res.cloudinary.com/dq829orud/image/upload/v1745063313/delicious-spaghetti-dish-with-fresh-ingredients-pan-with-transparent-background_84443-25952-removebg-preview_n938nc.png" className="absolute opacity-50 -translate-x-120  " />

        <motion.img
          ref={downloadRef}
          initial="hidden"
          animate={downloadControls}
          variants={{
            hidden: { y: 150, opacity: 0 },
            visible: {
              y: 0,
              opacity: .7,
              transition: { duration: 1, ease: "easeOut" },
            },
          }}
          className="h-32 sm:h-36 md:h-40 border-2 border-amber-600 backdrop-blur-2xl bg-white/50 rounded-lg"
          src="https://res.cloudinary.com/dq829orud/image/upload/v1745279459/1_YDTco_dV-qqFP7EtPEERVw_uylyfg.png"
        />
      </div>
      <div className="flex items-center justify-center mt-65 flex-col mb-10">
        <div className="text-white text-2xl font-roboto pb-10 ">We are also on</div>
        <div className="flex mt-5 space-x-15 text-2xl ">
          <FcGoogle className="cursor-pointer" />
          <SiFacebook className="text-blue-600 bg-white rounded-3xl cursor-pointer" />
          <FaInstagram className="text-white bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded cursor-pointer" />
          <FaLinkedin className="text-blue-600 bg-white rounded cursor-pointer" />
          <FaXTwitter className="text-black bg-white rounded cursor-pointer" />
          <FaYoutube className="text-red-600 bg-white rounded cursor-pointer" />
        </div>
      </div>
      <div className=""><img className="w-full h-full opacity-50" src="https://res.cloudinary.com/dq829orud/image/upload/v1745321204/92448687770_vqdle1.png " /></div>
    </div >
  );
}

export default Contact;
