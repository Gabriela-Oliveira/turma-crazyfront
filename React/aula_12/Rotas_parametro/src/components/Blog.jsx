import { Link, useParams } from "react-router-dom";

function Blog() {
    const { id } = useParams();
    
    return(
        <div>
            <h3>Post número: {id}</h3>

            <Link to="/">Voltar para a página inicial</Link>
        </div>
    );
}

export default Blog;