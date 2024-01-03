import { motion } from "framer-motion";



const Hero = () => {
  return (
    <div>
      <div
        className=" w-full  border border-white xs:h-screen bg-cover  
    xs:bg-right-bottom bg-no-repeat xs:bg-mobile   md:bg-deskstop px-6 "
      >
        <motion.div 
        initial={{ x:'-100vw'}}
         animate={{ x: 0}}
          transition={{delay: 0.2 , duration: 2}}
         className=" font-roboto  mt-52 leading-relaxed text-white border-black text-left text-5xl w-[45%] ">
          <p>
           Experience the allure of home sophistication with benthawoods Furniture.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
