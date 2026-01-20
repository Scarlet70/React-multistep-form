import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import { useContext, useEffect } from "react";
import DataContext from "./context/DataContext";

const Content = () => {
    const {
        data,
        step,
        setStep,
        setData,
        errMessage,
        setErrMessage,
        setNameErr,
        isValidName,
        setIsValidName,
        setPwdErr,
        isValidPwd,
        setIsValidPwd,
        setEmailErr,
        isValidEmail,
        setIsValidEmail,
        setPhoneErr,
        isValidPhone,
        setIsValidPhone,
    } = useContext(DataContext);

    const pwdRegex = /\d/;

    useEffect(() => {
        if (
            step === 0 &&
            (data.firstname.length < 4 || data.lastname.length < 4)
        ) {
            setIsValidName(false);
        } else {
            setIsValidName(true);
        }

        if (
            step === 0 &&
            (data.password.length < 8 || !pwdRegex.test(data.password))
        ) {
            setIsValidPwd(false);
        } else {
            setIsValidPwd(true);
        }

        if (step === 1 && !data.email.includes("@")) {
            setIsValidEmail(false);
        } else {
            setIsValidEmail(true);
        }

        if (step === 1 && data.phoneId.length < 11) {
            setIsValidPhone(false);
        } else {
            setIsValidPhone(true);
        }
    }, [data]);

    const formSections = [
        <StepOne pwdRegex={pwdRegex} />,
        <StepTwo />,
        <StepThree />,
        <StepFour />,
    ];

    const titles = {
        0: "Personal Info",
        1: "Contact Info",
        2: "Links & Summary",
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step === 2 && data.profileLink === "") {
            setErrMessage("Please fill out all fields");
            return;
        }
        setStep((prev) => prev + 1);
        setErrMessage("");
    };

    const increment = (e) => {
        e.preventDefault();

        //name input validation step
        if (!isValidName) {
            setNameErr("name must be at least 4 characters long!");
            return;
        } else {
            setNameErr(null);
        }

        //password input validation step
        if (!isValidPwd) {
            setPwdErr("Please enter a valid password");
            return;
        } else {
            setPwdErr(null);
        }

        //email input validation step

        if (!isValidEmail) {
            setEmailErr("Please enter a valid email");
            return;
        } else {
            setEmailErr(null);
        }

        //Phone number validation step
        if (!isValidPhone) {
            setPhoneErr("Enter a Valid phone number");
            return;
        } else {
            setPhoneErr(null);
        }

        //General Input Validation
        if (
            step === 0 &&
            (data.firstname === "" ||
                data.lastname === "" ||
                data.password === "")
        ) {
            setErrMessage("Please fill out all fields");
            return;
        }

        if (
            step === 1 &&
            (data.email === "" || data.address === "" || data.phoneId === "")
        ) {
            setErrMessage("Please fill out all fields");
            return;
        }

        setStep((prev) => prev + 1);
        setErrMessage("");
        setNameErr(null);
        setPwdErr(null);
    };

    const decrement = (e) => {
        e.preventDefault();
        setStep((prev) => prev - 1);
        setErrMessage("");
        setIsValidEmail(true);
        setEmailErr(null);
    };

    const handleSignIn = () => {
        setData({
            firstname: "",
            lastname: "",
            password: "",
            email: "",
            address: "",
            phoneId: "",
            profileLink: "",
            message: "",
        });
        setStep(0);
    };

    const progress = ((step + 1) / formSections.length) * 100;

    return (
        <main>
            <h2>Client Registration Form</h2>
            <div className="progressBarContainer">
                <span
                    className={`
                        ${step === 0 || step > 0 ? "active" : null} 
                       ${step === formSections.length - 1 ? "endStyle" : null}
                    `}
                >
                    1
                </span>
                <span
                    className={`
                        ${step > 0 ? "active" : null} 
                       ${step === formSections.length - 1 ? "endStyle" : null}
                    `}
                >
                    2
                </span>
                <span
                    className={`
                        ${step > 1 ? "active" : null} 
                       ${step === formSections.length - 1 ? "endStyle" : null}
                    `}
                >
                    3
                </span>
                <span
                    className={`
                        ${step > 2 ? "active" : null} 
                       ${step === formSections.length - 1 ? "endStyle" : null}
                    `}
                >
                    4
                </span>
                <div
                    className="progressBar"
                    style={{
                        width: `${progress}%`,
                        background:
                            step === formSections.length - 1
                                ? "limegreen"
                                : "#ad3145",
                    }}
                ></div>
            </div>
            <section className="signUp">
                <h3 style={{ marginBottom: "1rem", color: "gold" }}>
                    {titles[step]}
                </h3>
                <form>
                    {formSections[step]}
                    <p style={{ marginBottom: "2rem", color: "red" }}>
                        {errMessage}
                    </p>
                    <button
                        type="button"
                        className="scrollRightBtn"
                        onClick={decrement}
                        disabled={
                            step <= 0 || step === formSections.length - 1
                                ? true
                                : false
                        }
                    >
                        <FaAngleLeft />
                    </button>
                    {step === formSections.length - 2 ? (
                        <button
                            type="submit"
                            className="submitBtn"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="scrollLeftBtn"
                            onClick={increment}
                            disabled={
                                step >= formSections.length - 1 ? true : false
                            }
                        >
                            <FaAngleRight />
                        </button>
                    )}
                    {step === formSections.length - 1 && (
                        <button
                            type="button"
                            className="endRegister"
                            onClick={handleSignIn}
                        >
                            Sign in
                        </button>
                    )}
                </form>
            </section>
        </main>
    );
};

export default Content;
