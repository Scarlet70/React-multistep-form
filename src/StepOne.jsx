import { FaEye, FaEyeSlash, FaCircleCheck } from "react-icons/fa6";
import { useContext, useState } from "react";
import DataContext from "./context/DataContext";

const StepOne = ({ pwdRegex }) => {
    const { data, setData, nameErr, pwdErr } = useContext(DataContext);
    const [isVisible, setIsvisible] = useState(false);

    const toggleVisible = () => {
        setIsvisible(!isVisible);
    };

    return (
        <article className="formStep">
            <label
                className="offScreen"
                htmlFor="firstName"
            >
                Firstname
            </label>
            <div className="inputBox">
                <input
                    type="text"
                    id="firstName"
                    placeholder="firstname"
                    required
                    value={data.firstname}
                    onChange={(e) =>
                        setData({ ...data, firstname: e.target.value })
                    }
                />
                <p className="errorMsg">{nameErr}</p>
                <FaCircleCheck
                    style={{
                        color:
                            data.firstname !== "" && data.firstname.length > 4
                                ? "limegreen"
                                : "#5a5959",
                    }}
                />
            </div>
            <label
                className="offScreen"
                htmlFor="lastName"
            >
                Lastname
            </label>
            <div className="inputBox">
                <input
                    type="text"
                    id="lastName"
                    placeholder="lastname"
                    required
                    value={data.lastname}
                    onChange={(e) =>
                        setData({ ...data, lastname: e.target.value })
                    }
                />
                <p className="errorMsg">{nameErr}</p>
                <FaCircleCheck
                    style={{
                        color:
                            data.lastname !== "" && data.lastname.length > 4
                                ? "limegreen"
                                : "#5a5959",
                    }}
                />
            </div>
            <label
                className="offScreen"
                htmlFor="password"
            >
                Password
            </label>
            <div className="passwordBox inputBox">
                <input
                    type={isVisible ? "text" : "password"}
                    id="password"
                    placeholder="password"
                    required
                    value={data.password}
                    onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                    }
                />
                <p className="errorMsg">{pwdErr}</p>
                <FaCircleCheck
                    style={{
                        color:
                            data.password !== "" &&
                            data.password.length > 8 &&
                            pwdRegex.test(data.password)
                                ? "limegreen"
                                : "#5a5959",
                    }}
                />
                <button
                    type="button"
                    onClick={toggleVisible}
                >
                    {isVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
            </div>
        </article>
    );
};

export default StepOne;
