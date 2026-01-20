import { FaCircleCheck } from "react-icons/fa6";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const StepTwo = () => {
    const { data, setData, emailErr, phoneErr } = useContext(DataContext);

    return (
        <article className="formStep">
            <div className="inputBox">
                <label
                    className="offScreen"
                    htmlFor="email"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="email"
                    required
                    value={data.email}
                    onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                    }
                />
                <p className="errorMsg">{emailErr}</p>
                <FaCircleCheck
                    style={{
                        color: data.email.includes("@")
                            ? "limegreen"
                            : "#5a5959",
                    }}
                />
            </div>
            <div className="inputBox">
                <label
                    className="offScreen"
                    htmlFor="address"
                >
                    Address
                </label>
                <input
                    type="text"
                    id="address"
                    placeholder="address"
                    required
                    value={data.address}
                    onChange={(e) =>
                        setData({ ...data, address: e.target.value })
                    }
                />
                <FaCircleCheck
                    style={{
                        color:
                            data.address !== "" && data.address.length > 4
                                ? "limegreen"
                                : "#5a5959",
                    }}
                />
            </div>
            <div className="phoneBox">
                <select
                    name="country-code"
                    id="country"
                >
                    <option value="1">+234</option>
                    <option value="2">+233</option>
                    <option value="1">+91</option>
                    <option value="1">+474</option>
                </select>
                <div
                    className="inputBox"
                    id="phoneInput"
                >
                    <label
                        className="offScreen"
                        htmlFor="phone"
                    >
                        Phone
                    </label>
                    <input
                        type="number"
                        id="phone"
                        placeholder="phone"
                        required
                        value={data.phoneId}
                        onChange={(e) =>
                            setData({ ...data, phoneId: e.target.value })
                        }
                    />
                    <p className="errorMsg">{phoneErr}</p>
                    <FaCircleCheck
                        style={{
                            color:
                                data.phoneId.length >= 11
                                    ? "limegreen"
                                    : "#5a5959",
                        }}
                    />
                </div>
            </div>
        </article>
    );
};

export default StepTwo;
