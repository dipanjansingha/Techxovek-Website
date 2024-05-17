import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';

const Card = ({ title, description, imageSrc }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <ScrollLink
            to="connect"
            spy={true}
            smooth={true}
            duration={500}
            offset={-90}
            className="scroll-link"
        >
            <div className="max-w-md mx-auto mb-8">
                <div
                    className="bg-white shadow-md rounded-md overflow-hidden cursor-pointer"
                    onMouseEnter={handleCardFlip}
                    onMouseLeave={handleCardFlip}
                >
                    <div className="relative">
                        <img
                            src={imageSrc}
                            alt={title}
                            className="w-full h-40 object-cover transition-transform duration-300 transform"
                        />
                        <div
                            className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 transform ${
                                isFlipped ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <div className="absolute inset-0 flex justify-center items-center">
                                <p className="text-white text-bold font-poppins text-left text-sm p-4">
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <h2 className="text-lg font-semibold mb-2 text-center">{title}</h2>
                    </div>
                </div>
            </div>
        </ScrollLink>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
};

export default Card;
