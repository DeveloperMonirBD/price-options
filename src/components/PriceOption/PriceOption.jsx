import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="bg-blue-500 rounded-xl p-10 text-white flex flex-col mt-12">
            <h2 className="text-center">
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h4 className="text-3xl text-center my-4 flex-grow">{name}</h4>
            <div className="pl-6">
                {features.map((feature, index) => (
                    <Feature key={index} feature={feature} />
                ))}
            </div>
            <button className=" mt-12 w-full bg-blue-100 hover:bg-blue-200 text-xl border-none py-4 rounded-xl text-blue-500 hover:text-blue-600 ">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
};

export default PriceOption;