import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

export default function HardSkills(props) {

    return (
        <>
            <Navbar />
            <div>
                <h1>Hard Skills</h1>
                <Link to='/home' >Go Home</Link>
            </div>
        </>
    );
}