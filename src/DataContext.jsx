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
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
