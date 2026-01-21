import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useContext } from "react";
import DataContext from "./context/DataContext";

function App() {
    const { isDarkTheme } = useContext(DataContext);

    return (
        <div
            className="App"
            id={isDarkTheme ? "null" : "light"}
        >
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default App;
