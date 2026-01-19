import { FaCircleCheck, FaHandSparkles } from "react-icons/fa6";

const StepFour = () => {
    return (
        <article className="greetMsg">
            <h2>
                Welcome!!! <FaHandSparkles />
            </h2>
            <p>
                Dear user, your registration details have been successfully
                submitted and uploaded to the server
            </p>
            <p>
                <FaCircleCheck />
            </p>
            <a href="#">Visit our home page</a>
        </article>
    );
};

export default StepFour;
