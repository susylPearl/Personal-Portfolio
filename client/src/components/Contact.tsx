import React, { useState, useCallback, useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import resumeDataType from '../interfaces/dataType';
import { submitForm } from '../actions/portfolioAsynAction';
import { toastSuccessMsg, toastErrorMsg, toastStyle } from '../utilities/ToastConstant';
import { Loader } from '../utilities/Loader';
import { RESET_SENT_STATUS } from '../actions/actionTypes';

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

    const [loading, setLoading] = useState(false);
    const [btnClass, setBtnClass] = useState('submit');

    let sentSuccess = useSelector((state: any) => state.contactDataReducer.emailSuccess);
    let sentError = useSelector((state: any) => state.contactDataReducer.emailError);

    const reduxDispatch = useDispatch();

    const reducer = (state: any, action: any) => {
        if (action.type === 'RESET') {
            return initialFormData;
        }
        const result = { ...state };
        result[action.type] = action.value;
        return result;
    }

    const [state, dispatch] = useReducer(reducer, initialFormData);
    const { contactName, contactEmail, contactSubject, contactMessage } = state;

    useEffect(() => {
        toast.configure();
    });

    useEffect(() => {
        setLoading(false);
        setBtnClass('submit');
        if (sentSuccess) {
            toast.success(toastSuccessMsg, toastStyle);
            dispatch({ type: 'RESET' });
        }
        sentError && toast.error(toastErrorMsg, toastStyle);
        reduxDispatch({ type: RESET_SENT_STATUS });
    }, [sentSuccess, sentError, reduxDispatch]);

    const handleChange = useCallback((e: any) => {
        e.preventDefault();
        const { name, value } = e.target;
        dispatch({ type: name, value })
    }, [dispatch]);

    const handleFormSubmit = useCallback((e: any) => {
        e.preventDefault();
        setLoading(true);
        setBtnClass('submit noHover');
        reduxDispatch(submitForm(state));
    }, [reduxDispatch, state]);

    return (
        resumeData ?
            <div>
                <Loader loading={loading} />
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
                                        <input type="text" value={contactName} size={20} id="contactName" name="contactName" onChange={handleChange} disabled={loading} />
                                    </div>
                                    <div>
                                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                        <input type="text" value={contactEmail} size={20} id="contactEmail" name="contactEmail" onChange={handleChange} disabled={loading} />
                                    </div>
                                    <div>
                                        <label htmlFor="contactSubject">Subject</label>
                                        <input type="text" value={contactSubject} size={20} id="contactSubject" name="contactSubject" onChange={handleChange} disabled={loading} />
                                    </div>
                                    <div>
                                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                        <textarea value={contactMessage} cols={30} rows={10} id="contactMessage" name="contactMessage" onChange={handleChange} disabled={loading}></textarea>
                                    </div>
                                    <div>
                                        <button className={btnClass} onClick={e => handleFormSubmit(e)} disabled={loading}>Submit</button>
                                        <span id="image-loader">
                                            <img alt="" src="images/loader.gif" />
                                        </span>
                                    </div>
                                </fieldset>
                            </form>

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
                </section>
            </div>
            : <div></div>
    );
}