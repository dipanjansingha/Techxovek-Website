import React from 'react';
import {
    companyDetails,
    companyLinks,
    connectFormElements,
} from '../constants/index.js';
import { useState } from 'react';
import Button from '../components/Button.jsx';
import emailjs from 'emailjs-com';
import Notification from '../components/Notification.jsx';

const Connect = () => {
    const CONNECT_MESSAGE = "Let's get in touch";
    const MESSAGE = "We're open for any suggestion or just to have a chat";

    const [showNotification, setShowNotification] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const getFormDataValue = id => {
        return formData[id] || '';
    };

    const handleInputChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const sendEmail = () => {
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            from_phone: formData.phone.toString(),
            message: formData.message,
        };

        emailjs
            .send(
                'service_9y2yjcj',
                'template_z6ecspm',
                templateParams,
                'Zr2SvNEBd5aBiRqGo'
            )
            .then(response => {
                console.log('Email sent successfully!', response);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                });
                setShowNotification(true);
                setTimeout(() => {
                    setShowNotification(false);
                }, 3000);
            })
            .catch(error => {
                console.error('Error sending email:', error);
                // You can add further actions here like showing an error message to the user.
            });
    };

    const container = {
        gridTemplateColumns: '1fr 2fr',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    };

    const form_input_border = {
        border: 'none',
        borderBottom: '1px solid rgba(1, 1, 1, 0.5)',
    };

    return (
        <>
            <section
                id="connect"
                className="mt-[50px] mr-[40px] ml-[40px] mb-[60px]"
            >
                <div
                    className="sm:grid flex flex-col-reverse sm:ml-[100px] sm:mr-[100px] mt-0 mb-0 ml-auto mr-auto"
                    style={container}
                >
                    <div className="bg-[#3f2dd7] text-white pt-[45px] pl-[20px] pr-[20px]">
                        <h1 className="mb-4 text-[27px] font-[500]">
                            {CONNECT_MESSAGE}
                        </h1>
                        <p className="text-sm">{MESSAGE}</p>
                        <div className="mt-10 mb-10 flex flex-col gap-8">
                            {companyDetails.map(detail => (
                                <div
                                    key={detail.id}
                                    className="flex gap-8 items-center justify-start"
                                >
                                    <span className={detail.iconClass}></span>
                                    <p className="justify-end text-[14px] font-[200]">
                                        <b className="font-[600]">
                                            {detail.displayName} :{' '}
                                        </b>
                                        {detail.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-around items-center mb-[20px]">
                            {companyLinks.map(companyLink => (
                                <a
                                    href={companyLink.link}
                                    key={companyLink.id}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className={companyLink.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#f9f9fa] flex flex-col gap-5 pt-[45px] pl-[20px] pr-[20px] pb-5">
                        <h1 className="mb-0 font-[500] text-[27px]">
                            Get in touch
                        </h1>
                        {connectFormElements.map(formElement => (
                            <div key={formElement.id} className="mb-2">
                                <label className="text-black uppercase text-[16px] font-[600] p-2">
                                    {formElement.label} :{' '}
                                </label>
                                <br />
                                {formElement.type === 'text' ||
                                formElement.type === 'textarea'
                                    ? React.createElement(
                                          formElement.type === 'textarea'
                                              ? 'textarea'
                                              : 'input',
                                          {
                                              type:
                                                  formElement.type ===
                                                  'textarea'
                                                      ? 'text'
                                                      : 'text',
                                              name: formElement.name,
                                              id: formElement.id,
                                              value: getFormDataValue(
                                                  formElement.id
                                              ),
                                              onChange: handleInputChange,
                                              placeholder:
                                                  formElement.placeholder,
                                              className:
                                                  'font-[15px] w-[100%] p-2 block bg-inherit focus:border-none focus:outline-none',
                                              style: form_input_border,
                                          }
                                      )
                                    : null}
                            </div>
                        ))}
                        <Button
                            label="Send Message"
                            onClick={sendEmail}
                            styles="flex bg-[#3f2dd7] text-[#fff] z-40 w-[180px] justify-around"
                        />
                    </div>
                </div>
            </section>
            {showNotification && (
                <Notification
                    message="Email sent successfully!"
                    onClose={() => setShowNotification(false)}
                />
            )}
        </>
    );
};

export default Connect;
