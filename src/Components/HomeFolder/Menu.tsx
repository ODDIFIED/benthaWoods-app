import { Props, furniDetails } from "../../Data";

const Menu = () => {
  return (
    <div className=" w-full capitalize px- lg:px-6 mt-20">
      <div className=" px-6 text-left">
        <h5 className="uppercase  ">| Recently released</h5>
        <p className="font-roboto font-extralight xxs:text-3xl sm:text-4xl">
          lastest collection
        </p>
      </div>
      <div className=" xxs:grid xxs:grid-cols-2  sm:grid sm:grid-cols-3 lg:grid lg:grid-cols-4 justify-items-center  mt-14     ">
        {furniDetails.map((item: Props) => {
          return (
            <div className=" xxs:w-[40vw] xxs:h-[32vh] xs:w-[42vw] xs:h-[30vh] sm:w-[30vw] sm:h-[39vh]  lg:w-[20vw] lg:h-[42vh] lg:mb-36 mb-28 cover">
              <div>
                <img
                  className=" xxs:w-[40vw] xxs:h-[32vh] xs:w-[42vw] xs:h-[30vh] sm:w-[30vw] sm:h-[30vh] lg:w-[20vw] lg:h-[42vh] "
                  src={item.product_img}
                  alt={item.product_name}
                />
              </div>
              <div className="   pt-2 font-roboto font-semibold text-base  ">
                <div className="text-center">
                  <p>{item.product_name}</p>
                  <p className="text-sm">{item.price}</p>
                </div>
                <div className="sm:mt-3">
                  <button className="font-poppins w-full jusitfy-items-center capitalize border border-gray-400  hover:text-white  hover:bg-green-700 text-black  rounded-md px-2 py-2   ">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
