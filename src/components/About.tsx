import React from 'react';
import resumeDataType from '../interfaces/dataType';

export const About = (props: resumeDataType) => {

    let resumeData = props.data ? {
        name: props.data.name,
        profilepic: "images/"+props.data.image,
        bio: props.data.bio,
        street: props.data.address.street,
        city: props.data.address.city,
        state: props.data.address.state,
        zip: props.data.address.zip,
        phone: props.data.phone,
        email: props.data.email,
        resumeDownload: props.data.resumedownload
    } : null;

    return (
        resumeData ?
        <section id="about">
        <div className="row">
            <div className="three columns">
                <img className="profile-pic"  src={resumeData.profilepic} alt="Chiranjhivi Ghimire" />
            </div>
            <div className="nine columns main-col">
                <h2>About Me</h2>

                <p>{resumeData.bio}</p>
                <div className="row">
                <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="address">
                            <span>{resumeData.name}</span><br />
                            <span>{resumeData.street}<br />
                                    {resumeData.city} {resumeData.state}, {resumeData.zip}
                    </span><br />
                            <span>{resumeData.phone}</span><br />
                        <span>{resumeData.email}</span>
                        </p>
                </div>
                </div>
            </div>
        </div>

        <div className="columns download">
                    <p>
                        <a href={resumeData.resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                    </p>
        </div>

       </section> : <div></div>
    );
}