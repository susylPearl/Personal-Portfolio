import React, { useState, useCallback }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import resumeDataType from '../interfaces/dataType';
import { submitForm } from '../actions/portfolioAsynAction';

export const Contact = (props: resumeDataType) => {
    const initialFormData = {
        contactName: '',
        contactEmail: '',
        contactSubject: '',
        contactMessage: ''
    };

    const resumeData = props.data ? {
        name: props.data.name,
        street: props.data.address.street,
        city: props.data.address.city,
        state: props.data.address.state,
        zip: props.data.address.zip,
        phone: props.data.phone,
        email: props.data.email,
        message: props.data.contactmessage
    } : null;

    const formDataSubmitted = useSelector((state: any) => state.contactDataReducer);
    const [ contactFormData, setData ] = useState(initialFormData);
    const dispatch = useDispatch();

    const handleChange = useCallback((e: any) => {
        e.preventDefault();
        setData({...contactFormData,
            [e.target.name]: e.target.value
        });
    }, [contactFormData]);

    const resetFormData = useCallback(() => {
        setData(initialFormData);
    }, [initialFormData]);

    const handleFormSubmit = useCallback(async () => {
        dispatch(submitForm(contactFormData));
        if(formDataSubmitted) resetFormData();
    }, [dispatch, contactFormData, formDataSubmitted, resetFormData]);

    return (
        resumeData ?
            <section id="contact">
                <div className="row section-head">
                    <div className="two columns header-col">
                        <h1><span>Get In Touch.</span></h1>
                    </div>
                    <div className="ten columns">
                        <p className="lead">{resumeData.message}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="eight columns">
                        <form action="" method="post" id="contactForm" name="contactForm">
                            <fieldset>
                                <div>
                                    <label htmlFor="contactName">Name <span className="required">*</span></label>
                                    <input type="text" defaultValue={contactFormData.contactName} size={20} id="contactName" name="contactName" onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                    <input type="text" defaultValue={contactFormData.contactEmail} size={20} id="contactEmail" name="contactEmail" onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="contactSubject">Subject</label>
                                    <input type="text" defaultValue={contactFormData.contactSubject} size={20} id="contactSubject" name="contactSubject" onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                    <textarea value={contactFormData.contactMessage} cols={30} rows={10} id="contactMessage" name="contactMessage" onChange={handleChange}></textarea>
                                </div>
                                <div>
                                    <button className="submit" onClick={handleFormSubmit}>Submit</button>
                                    <span id="image-loader">
                                        <img alt="" src="images/loader.gif" />
                                    </span>
                                </div>
                            </fieldset>
                        </form>

                        <div id="message-warning"> Error boy</div>
                        <div id="message-success">
                            <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                        </div>
                    </div>

                    <aside className="four columns footer-widgets">
                        <div className="widget widget_contact">
                            <h4>Address and Phone</h4>
                            <p className="address">
                                {resumeData.name}<br />
                                {resumeData.street} <br />
                                {resumeData.city}, {resumeData.state} {resumeData.zip}<br />
                                <span>{resumeData.phone}</span>
                            </p>
                        </div>
                    </aside>
                </div>
            </section> : <div></div>
    );
}