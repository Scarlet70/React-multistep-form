import { useContext } from "react";
import DataContext from "./DataContext";

const StepTwo = () => {
    const { data, setData } = useContext(DataContext);

    return (
        <article className="formStep">
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
                onChange={(e) => setData({ ...data, email: e.target.value })}
            />
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
                onChange={(e) => setData({ ...data, address: e.target.value })}
            />
            <label
                className="offScreen"
                htmlFor="phone"
            >
                Phone
            </label>
            <input
                type="phone"
                id="phone"
                placeholder="phone"
                required
                value={data.phoneId}
                onChange={(e) => setData({ ...data, phoneId: e.target.value })}
            />
        </article>
    );
};

export default StepTwo;
