import { Link, Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <nav>
                <Link to="/sobre">Sobre </Link> 
                <Link to="/usuario">Usuário</Link>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default Home;