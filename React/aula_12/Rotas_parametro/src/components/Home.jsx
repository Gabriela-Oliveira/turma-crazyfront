import { Link } from "react-router-dom";

function Home() {
    return(
        <div>
            <h3>Página principal</h3>

            <p>Escolha um post:</p>

            <ul>
                <li>
                    <Link to="/blog/1">Post 1</Link>
                </li>
                <li>
                    <Link to="/blog/2">Post 2</Link>
                </li>
                <li>
                    <Link to="/blog/3">Post 3</Link>
                </li>
            </ul>

            <p>Ou digite manualmente na URL: ex: /blog/99</p>
        </div>
    );
}

export default Home;