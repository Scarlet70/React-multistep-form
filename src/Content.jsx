import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import { useContext } from "react";
import DataContext from "./DataContext";

const Content = () => {
    const {
        data,
        step,
        setStep,
        setData,
        errMessage,
        setErrMessage,
        nameErr,
        setNameErr,
    } = useContext(DataContext);
    const formSections = [
        <StepOne />,
        <StepTwo />,
        <StepThree />,
        <StepFour />,
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
        if (step === 2 && data.profileLink === "") {
            setErrMessage("Please fill out all fields");
            return;
        }
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
        setStep((prev) => prev + 1);
        setErrMessage("");
    };

    const increment = (e) => {
        e.preventDefault();
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
    };

    const decrement = (e) => {
        e.preventDefault();
        setStep((prev) => prev - 1);
        setErrMessage("");
    };

    const handleSignIn = () => {
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
                        Prev
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
                            Next
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
