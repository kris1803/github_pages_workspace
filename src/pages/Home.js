import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

export default function Home(props) {

    return (
        <>
            <Navbar />
            <div>
                <h1>Home</h1>
                <Link to='/hard-skills' >Go</Link>
            </div>
        </>
    );
}