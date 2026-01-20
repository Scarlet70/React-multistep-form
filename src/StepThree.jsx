import { FaCircleCheck } from "react-icons/fa6";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const StepThree = () => {
    const { data, setData } = useContext(DataContext);

    return (
        <article className="formStep">
            <div className="inputBox">
                <label
                    className="offScreen"
                    htmlFor="link"
                >
                    Link
                </label>
                <input
                    type="url"
                    id="link"
                    placeholder="link"
                    required
                    value={data.profileLink}
                    onChange={(e) =>
                        setData({ ...data, profileLink: e.target.value })
                    }
                />
                <FaCircleCheck
                    style={{
                        color:
                            data.profileLink !== "" ? "limegreen" : "#5a5959",
                    }}
                />
            </div>
            <label htmlFor="message">Send us a message</label>
            <textarea
                id="message"
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
            ></textarea>
            <label>
                Subscribe to our newsletter <input type="checkbox" />
            </label>
        </article>
    );
};

export default StepThree;
