import Nav from "./components/Nav";
import { Link } from "react-router-dom";

export default function Home(props) {

    return (
        <>
            <Nav />
            <div>
                <h1>Home</h1>
                <Link to='/hard-skills' >Go</Link>
            </div>
        </>
    );
}