import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <div
        className=" w-full  border border-white md:h-[80vh] xs:h-[50vh] bg-cover  
    xs:bg-right-bottom bg-no-repeat xs:bg-mobile   md:bg-deskstop px-6 "
      >
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, duration: 2 }}
          className=" font-roboto xs:mt-14  sm:mt-36 lg:mt-52 leading-relaxed text-white border-black xs:text-center sm:text-left lg:text-6xl ss:text-4xl xs:text-2xl sm:text-5xl xs:w-[100%] sm:w-[53%] lg:w-[50%] "
        >
          <h3>
            Experience the allure of home sophistication with{" "}
            <span className=" font-bold text-black font-jose">Benthawoods</span>
          </h3>
          <button className="text-xl border bg-black text-white px-4 py-2 border-black  rounded-xl xs:mt-20  sm:mt-10">
            View Collection
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
