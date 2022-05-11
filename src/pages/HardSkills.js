import Nav from "./components/Nav";
import { Link } from "react-router-dom";

export default function HardSkills(props) {

    return (
        <>
            <Nav />
            <div>
                <h1>Hard Skills</h1>
                <Link to='/home' >Go Home</Link>
            </div>
        </>
    );
}