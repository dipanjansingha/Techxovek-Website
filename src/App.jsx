import {
    Navbar,
    Hero,
    Testimonials,
    Connect,
    Footer,
    Features,
    Services,
} from './layout/index.js';
import './App.css';

function App() {
    return (
        <>
            <div className="flex justify-center sticky top-0 z-50">
                <div className="w-full overflow-hidden bg-[#100e29]">
                    <div className="sm:px-8 px-6 flex justify-center items-center">
                        <div className="w-full">
                            <Navbar />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-start bg-[#100e29] h-[100%]">
                <div className="w-full">
                    <Hero />
                </div>
            </div>

            <div className="flex justify-center items-start bg-[#eeeef1] mb-10">
                <div className="w-full">
                    <Services />
                </div>
            </div>

            <div className="flex justify-center items-start bg-[#fff] mb-10">
                <div className="w-full">
                    <Features />
                </div>
            </div>

            <div className="flex justify-center items-start bg-[#eeeef1] mb-10">
                <div className="w-full">
                    <Testimonials />
                </div>
            </div>

            <div className="flex justify-center items-start bg-[#fff] mb-10 z-70">
                <div className="w-full">
                    <Connect />
                </div>
            </div>

            <div className="flex justify-center items-start bg-[#100e29]">
                <div className=" w-full">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
