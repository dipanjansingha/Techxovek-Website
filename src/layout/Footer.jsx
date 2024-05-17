import { transparent } from '../assets/images.js';
import { footerLinks, companyLinks } from '../constants/index.js';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <section className="flex justify-center items-center sm:py-5 pt-3  flex-col">
                <div className="flex justify-center items-start  md:flex-row flex-col mb-2 w-full">
                    <div className="flex-1 flex flex-col justify-start ">
                        <div className="flex flex-1 justify-center max-w-[400px]">
                            <img
                                src={transparent}
                                alt="techxovek"
                                className="w-[170px] h-[70px] object-cover"
                            />
                        </div>

                        <p className=" font-poppins font-normal text-[#989797] text-[12px] leading-[24px] mt-4 max-w-[400px] p-4 text-justify">
                            Empower your business for swift and certain success
                            by partnering with us. Our dynamic suite of
                            cutting-edge strategies and comprehensive support is
                            meticlously crafted to propel your business forward
                            with unparalleled ease.
                        </p>
                    </div>

                    <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 gap-2 px-2">
                        {footerLinks.map(footerLink => {
                            return (
                                <div
                                    key={footerLink.links}
                                    className="flex flex-col ss:my-0 my-4 min-w-[150px]"
                                >
                                    <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                                        {footerLink.title}
                                    </h4>
                                    <ul className="list-none mt-4">
                                        {footerLink.links.map((link, index) => (
                                            <li
                                                key={link.name}
                                                className={`font-poppins font-normal text-[12px] leading-[20px]
                                                text-[#989797] cursor-pointer hover:font-semibold hover:text-white
                                                     ${
                                                         index !=
                                                         footerLink.links
                                                             .length -
                                                             1
                                                             ? 'mb-4'
                                                             : 'mb-0'
                                                     }`}
                                            >
                                                {link.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="w-full flex justify-between items-center md:flex-row flex-col  border-t-[1px] border-t-[#cecdd4] pt-6 px-6 pb-2">
                    <p className="font-poppins font-normal text-center text-[14px] leading-[24px] text-[#989797]">
                        Copyright Ⓒ {currentYear} TechXovek. All Rights
                        Reserved.
                    </p>

                    <div className="flex flex-row md:mt-0 mt-6 text-white gap-6">
                        {companyLinks.map(link => (
                            <a
                                href={link.link}
                                key={link.id}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className={link.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
