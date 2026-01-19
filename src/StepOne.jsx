import { FaEye, FaEyeSlash, FaCircleCheck } from "react-icons/fa6";
import { useContext, useState } from "react";
import DataContext from "./DataContext";

const StepOne = () => {
    const { data, setData, nameErr } = useContext(DataContext);
    const [isVisible, setIsvisible] = useState(false);

    const toggleVisible = () => {
        setIsvisible(!isVisible);
    };

    return (
        <article className="formStep">
            <label htmlFor="firstName">Firstname</label>
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
                <FaCircleCheck />
            </div>
            <label htmlFor="lastName">Lastname</label>
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
                <FaCircleCheck />
            </div>
            <label htmlFor="password">Password</label>
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
                <FaCircleCheck />
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
