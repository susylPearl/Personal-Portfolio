type Network = {
    name: string,
    url: string,
    className: string
};

type Project = {
    title: string,
    category: string,
    image: string,
    url: URL
};

type Education = {
    school: string,
    degree: string,
    graduated: Date,
    description: string
};

type Skill = {
    image: string,
    name: string,
    description: string
};

type Work = {
    company: string,
    title: string,
    years: Date,
    description: string
};

export default interface resumeDataType {
    data: {
        name: string,
        image: string,
        bio: string,
        address: {
            street: string,
            city: string,
            state: string,
            zip: string
        },
        phone: string,
        email: string,
        resumedownload: string,
        occupation: string,
        description: string,
        social: Array<Network>,
        contactmessage: string,
        projects: Array<Project>,
        skillmessage: string,
        education: Array<Education>,
        work: Array<Work>,
        skills: Array<Skill>
    },
    formData: {
        contactName: string,
        contactEmail: string,
        contactSubject: string,
        contactMessage: string
    }
}