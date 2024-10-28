import PropTypes from 'prop-types';
import { FaCheckCircle } from 'react-icons/fa';

const Feature = ({ feature }) => {
    return (
        <div className='ml-10'>
            <p className='flex items-center gap-2 '>
                <FaCheckCircle className='text-blue-200-500' />
                {feature}
            </p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
};

export default Feature;
