import { useContext } from "react";
import DataContext from "./DataContext";

const StepThree = () => {
    const { data, setData } = useContext(DataContext);

    return (
        <article className="formStep">
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
