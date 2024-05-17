import { Link as ScrollLink } from 'react-scroll';
import Button from '../components/Button';

const Hero = () => {
    return (
        <>
            <section
                id="home"
                className="gap-5 flex flex-col justify-center items-center pt-10 pb-16 text-white"
            >
                <div className="py-2 sm:ml-10 ml-8 sm:mr-0 mr-8 relative sm:block flex flex-col justify-center items-center sm:text-start text-start">
                    <p className="font-poppins font-semibold md:text-[52px] sm:text-[42px] text-[36px] relative z-40 md:leading-[70px] sm:leading-[62px] leading-[48px] text-center">
                        <span className="text-[#fff]">Accelerate</span>
                        <span>
                            {' '}
                            your <span className="text-[#fff]">
                                Business
                            </span>{' '}
                            easily
                        </span>
                        <br className="md:block hidden" />{' '}
                        <span>
                            toward <span className="text-[#fff]">Success</span>{' '}
                            with us.
                        </span>
                    </p>
                    <p className="font-poppins relative z-40 leading-6 md:text-md text-sm text-center mt-5">
                        Embark on a transformative journey towards success with
                        us
                        <br className="md:block hidden" />
                        as we collaborate to streamline your business processes,
                        <br className="md:block hidden" />
                        leveraging innovation and expertise to propel you ahead
                        in the competitive landscape.
                    </p>

                    <span className="flex flex-row gap-6 relative my-8 justify-center">
                        <ScrollLink
                            to="connect"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-100}
                        >
                            <Button
                                label="Get a demo"
                                styles="sm:flex btn text-[#fff] border-[2.5px]"
                            />
                        </ScrollLink>
                        <ScrollLink
                            to="connect"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-100}
                            className="z-40"
                        >
                            <Button
                                label="Request Pricing"
                                styles="sm:flex btn-reverse bg-[#3f2dd7] text-[#fff] border-[1.5px]"
                            />
                        </ScrollLink>
                    </span>
                </div>
            </section>
        </>
    );
};

export default Hero;
