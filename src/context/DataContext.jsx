import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(
        JSON.parse(localStorage.getItem("user")) || {
            firstname: "",
            lastname: "",
            password: "",
            email: "",
            address: "",
            phoneId: "",
            profileLink: "",
            message: "",
        },
    );
    const [step, setStep] = useState(0);
    const [errMessage, setErrMessage] = useState(null);
    const [nameErr, setNameErr] = useState(null);
    const [isValidName, setIsValidName] = useState(false);
    const [pwdErr, setPwdErr] = useState(null);
    const [isValidPwd, setIsValidPwd] = useState(false);
    const [emailErr, setEmailErr] = useState(null);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [phoneErr, setPhoneErr] = useState(null);
    const [isValidPhone, setIsValidPhone] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(
        JSON.parse(localStorage.getItem("App Theme")) || false,
    );

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(data));
    }, [data]);

    return (
        <DataContext.Provider
            value={{
                data,
                setData,
                step,
                setStep,
                errMessage,
                setErrMessage,
                nameErr,
                setNameErr,
                isValidName,
                setIsValidName,
                pwdErr,
                setPwdErr,
                isValidPwd,
                setIsValidPwd,
                emailErr,
                setEmailErr,
                isValidEmail,
                setIsValidEmail,
                phoneErr,
                setPhoneErr,
                isValidPhone,
                setIsValidPhone,
                isDarkTheme,
                setIsDarkTheme,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
