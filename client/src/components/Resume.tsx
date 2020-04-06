import React from 'react';
import resumeDataType from '../interfaces/dataType';

export const Resume = (props: resumeDataType) => {
    let skillmessage,
        education,
        work,
        skills;

    if (props.data) {
        skillmessage = props.data.skillmessage;
        education = props.data.education.map((education) => {
            return <div key={education.school}><h3>{education.school}</h3>
                <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
                <p>{education.description}</p></div>
        });
        work = props.data.work.map((work) => {
            return <div key={work.title}><h3>{work.company}</h3>
                <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                <p>{work.description}</p>
            </div>
        });
        skills = props.data.skills.map((skill) => {
            var projectImage = 'images/tech/' + skill.image;
            return <div key={skill.name} className="columns feature-item">
                <img style={{ height: '150px', width: '100%' }} className='skill' alt={skill.name} src={projectImage} />
                <h5>{skill.name}</h5>
                <p>{skill.description}</p>
            </div>
        });
    }

    return (
        props.data ?
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                {education}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {work}
                    </div>
                </div>

                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <p className="lead center">{skillmessage}</p></div>
                    <ul className="bgrid-quarters s-bgrid-thirds cf">
                        {skills}
                    </ul>
                </div>
            </section> : <div></div>
    );
}