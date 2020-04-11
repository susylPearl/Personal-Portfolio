const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
);

export const formValueChanged = ({ type, value, ...state }: any) => {
    let isError = { ...state.isError };

    switch (type) {
        case "contactName":
            isError.contactName =
                value.length < 4 ? "Atleast 4 characaters required" : "";
            break;
        case "contactEmail":
            isError.contactEmail = regExp.test(value)
                ? ""
                : "Email address is invalid";
            break;
        case "contactMessage":
            isError.contactMessage =
                value.length < 100 ? "Atleast 50 words required" : "";
            break;
        default:
            break;
    }
    return isError;
};

export const formValid = ({ isError, ...rest }: any) => {
    let isValid = false;

    Object.values(isError).forEach((val: any) => {
        if (val.length > 0) {
            isValid = false
        } else {
            isValid = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            isValid = false
        } else {
            isValid = true
        }
    });

    return isValid;
};