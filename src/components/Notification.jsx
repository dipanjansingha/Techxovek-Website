import PropTypes from 'prop-types';

const Notification = ({ message, onClose }) => {
    return (
        <div className="fixed top-24 right-0 bg-[#3f2dd7] rounded-md text-white px-4 py-2 rounded">
            <div className="flex w-fit">
                <div>{message}</div>
                <button
                    className="ml-2 text-white hover:text-gray-200 focus:outline-none"
                    onClick={onClose}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 0a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 0 10 10 10 0 0 1 10 0zm5.657 5.657a.5.5 0 0 0-.707 0L10 9.293 5.657 4.95a.5.5 0 0 0-.707.707L9.293 10l-4.343 4.343a.5.5 0 0 0 .707.707L10 10.707l4.343 4.343a.5.5 0 0 0 .707-.707L10.707 10l4.343-4.343a.5.5 0 0 0 0-.707z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Notification;
