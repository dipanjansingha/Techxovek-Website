import {
    flexible_requirement,
    quick_approval,
    expert_advice,
    software_security,
} from '../assets/images';

const Features = () => {
    const styles = {
        underLine: {
            position: 'absolute',
            transform: 'scaleX(0)',
            height: '2px',
            bottom: '0',
            left: '0',
            backgroundColor: '#3f2dd7',
            transformOrigin: 'bottom left',
            transition: 'transform 0.25s ease-out',
        },
        underLineOnHover: {
            transform: 'scaleX(1)',
            width: '100%',
            transformOrigin: 'bottom left',
        },
    };

    return (
        <>
            <section
                id="features"
                className="mt-[90px] mr-[20px] ml-[20px] flex flex-col"
            >
                <div
                    className="sm:grid flex flex-wrap justify-center mx-6 mb-11 gap-6 items-center"
                    style={{ gridTemplateColumns: '1fr 1fr' }}
                >
                    <div className="flex flex-col gap-5">
                        <p
                            className="font-poppins font-[500] md:text-[35px] text-[28px] 
                    relative z-40 md:leading-[56px] leading-[42px]
                    sm:text-left items-center"
                        >
                            Empower Your Business with Our Cutting-Edge{' '}
                            <span className="text-[#3f2dd7]">Features</span>
                        </p>
                        <div
                            className="grid border-r-2 border-[#3f2dd7] px-3 py-4 rounded-md"
                            style={{
                                gridTemplateColumns: '1.5fr 1fr',
                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                            }}
                        >
                            <div className="flex flex-col gap-3">
                                <p className="text-2xl font-[500]">
                                    Flexible Requirement Options
                                </p>
                                <p className="text-[14px] text-justify">
                                    We strive to provide flexible requirement
                                    options to empower clients with tailored
                                    solutions, fostering agility, innovation,
                                    and long-lasting customer partnerships
                                    growth.
                                </p>
                                <div style={{ ...styles.underLine }}></div>
                            </div>
                            <img
                                src={flexible_requirement}
                                alt="Flexible Requirement"
                                className="object-fill h-full"
                            />
                        </div>
                        <div
                            className="flex flex-col gap-4 p-4 rounded-md justify-start border-r-2 border-[#3f2dd7]"
                            style={{
                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                            }}
                        >
                            <img
                                src={quick_approval}
                                alt="Customer Satisfaction"
                                className="w-full "
                            />
                            <p className="text-2xl font-[500]">
                                Quick Approval Process
                            </p>
                            <p className="text-[14px]  text-pretty">
                                Efficiently processing customer change requests
                                to cultivats a responsive and adaptive business
                                environment.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div
                            className="flex flex-col gap-4 p-4 rounded-md justify-start border-r-2 border-[#3f2dd7]"
                            style={{
                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                            }}
                        >
                            <img
                                src={software_security}
                                alt="Software Security"
                                className="w-full h-[210px]"
                            />
                            <p className="text-2xl font-[500]">
                                Robust Data Security Across Development Cycle
                            </p>
                            <p className="text-[14px]  text-justify">
                                From inception to deployment, our stringent data
                                security measures ensure your information
                                remains shielded. With advanced encryption,
                                regular audits, and industry compliance, trust
                                in a fortified development cycle.
                            </p>
                        </div>
                        <div
                            className="grid border-r-2 border-[#3f2dd7] px-3 py-4 rounded-md gap-3 items-center justify-end"
                            style={{
                                gridTemplateColumns: '1.5fr 1fr',
                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                            }}
                        >
                            <div className="flex flex-col gap-3">
                                <p className="text-2xl font-[500]">
                                    Expert Advice and Support
                                </p>
                                <p className="text-[14px] text-justify">
                                    Access to expert advice and support,
                                    empowering you to make informed decisions,
                                    achieve optimal solutions, and approach
                                    every business endeavor with unwavering
                                    confidence{' '}
                                </p>
                            </div>
                            <img
                                src={expert_advice}
                                alt="Expert Advice"
                                className="object-fill h-[160px]"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
