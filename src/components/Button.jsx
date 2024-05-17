import PropTypes from 'prop-types';
import '../css/button.css';

const Button = ({ label, styles, onClick }) => {
    const handleClick = () => {
        onClick();
    };

    return (
        <button
            type="button"
            className={` ${styles} py-2 px-4 font-poppins font-medium text-[#3f2dd7] 
                md:text-[16px] sm:text-[14px] rounded-[30px] border-solid border-[#3f2dd7] 
                `}
            onClick={handleClick}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    styles: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default Button;
