type network = {
    name: string,
    url: string,
    className: string
};

export default interface resumeDataType {
    data:{
        name: string,
        image: string,
        bio: string,
        address: {
            street: string,
            city: string,
            state: string,
            zip: string
        }
        phone: string,
        email: string,
        resumedownload: string,
        occupation: string,
        description: string,
        social: Array<network>
    }
}