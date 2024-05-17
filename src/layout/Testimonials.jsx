import { features } from '../constants/index.js';

const Testimonials = () => {
    const styles = {
        grid_cols: {
            gridTemplateColumns: '1fr 1fr',
        },
        transition: {
            transition3D: {
                transition: 'transform 0.8s ease',
                transformStyle: 'preserve-3d',
            },
            rotateY0Deg: {
                backfaceVisibility: 'hidden',
                transform: 'rotateY(0deg)',
                transition: 'background-color 0.5s ease',
            },
            rotateY180Deg: {
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                transition: 'background-color 0.5s ease',
            },
        },
    };

    const handleCardHover = e => {
        e.currentTarget.querySelector('.flip-card-inner').style.transform =
            'rotateY(180deg)';
    };

    const handleCardLeave = e => {
        e.currentTarget.querySelector('.flip-card-inner').style.transform =
            'rotateY(0deg)';
    };

    return (
        <>
            <section
                id="testimonials"
                className="flex flex-col-reverse justify-start items-center  md:py-9 py-4 px-4 md:gap-0 gap-5"
            >
                <div>
                    <div className=" font-poppins font-[500] md:text-[36px]  text-[28px] relative z-40 md:leading-[52px] leading-[48px] mb-4">
                        <p className="text-center">
                            <span className="text-[#3f2dd7]">Elevate </span>
                            your journey with seamless{' '}
                            <span className="text-[#3f2dd7]">efficient </span>
                            solution.
                        </p>
                    </div>
                    <ul className="list-none flex justify-center items-center flex-wrap gap-4 px-4 py-4">
                        {features.map(feature => (
                            <li
                                key={feature.id}
                                className="relative sm:my-1 sm:mx-1 w-40 sm:h-56 h-44 origin-[1000px] md:basis-1/5 "
                                onMouseEnter={handleCardHover}
                                onMouseLeave={handleCardLeave}
                            >
                                <div
                                    className="flip-card-inner absolute w-full h-full cursor-pointer"
                                    style={styles.transition.transition3D}
                                >
                                    <div
                                        className="flex flex-col justify-center items-center bg-white w-full h-full
                                        gap-5 shadow-2xl absolute rounded-bl-3xl rounded-tr-3xl"
                                        style={styles.transition.rotateY0Deg}
                                    >
                                        <img
                                            src={feature.icon}
                                            alt=""
                                            className="md:w-20 w-16 md:h-20 h-16"
                                        />
                                        <h3 className="font-bold md:text-base text-sm text-center">
                                            {feature.title}
                                        </h3>
                                    </div>
                                    <div
                                        className="flex flex-col justify-center items-center px-2 py-2 text-center bg-[#3f2dd7]
										w-full h-full gap-5 shadow-2xl absolute rounded-br-3xl rounded-tl-3xl text-white"
                                        style={styles.transition.rotateY180Deg}
                                    >
                                        <p className="md:text-base text-xs font-normal md:leading-6 leading-5">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
