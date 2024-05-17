import { SolutionsData } from '../constants';
import Card from '../components/Card';

const Services = () => {
    return (
        <section id="services" className="container mx-auto p-8">
            <div className=" font-poppins font-[500] md:text-[36px]  text-[28px] relative z-40 md:leading-[52px] leading-[48px] mb-8">
                <p className="text-center">
                    Unlocking Potential {' '}
                    <span className="text-[#3f2dd7]">
                        Our Suite of IT Solutions
                    </span>
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
                {SolutionsData.map((card, index) => (
                    <div key={index} className="w-full md:w-auto">
                        <Card {...card} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
