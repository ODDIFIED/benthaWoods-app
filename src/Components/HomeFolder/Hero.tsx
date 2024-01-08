import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <div
        className=" w-full  border border-white md:h-[100vh]  :leading-3 xxs:h-[50vh] bg-cover  
    xxs:bg-right-bottom bg-no-repeat xxs:bg-mobile   md:bg-deskstop px-6 "
      >
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, duration: 2 }}
          className=" font-roboto xxs:mt-5 xs:mt-14  sm:mt-32  lg:mt-52 xl:mt-32 text-white border-black xxs:text-center sm:text-left lg:text-5xl ss:text-4xl xxs:text-xl xs:text-2xl sm:text-5xl xxs:w-[100%] sm:w-[53%] lg:w-[50%] "
        >
          <h3 className="leading-tight">
            Experience the allure of home sophistication with{" "}
            <span className=" font-bold text-black font-jose">Benthawoods</span>
          </h3>
          <button className=" xxs:text-xs  xs:text-xl border bg-black text-white px-4 py-2 border-black  rounded-xl xxs:mt-10 xs:mt-20  sm:mt-10">
            View Collection
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
