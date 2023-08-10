import '../styles/Index.css'
import { Link } from "react-router-dom";

const Index = () => {
    return (
        <div className="index">
            <div className="welcoming-section">
                <h1>Welcome to IddraderExpress!</h1>
                <p>In my store you can find a wide variety of products!</p>
                <Link to='products'><button>Shop now!</button></Link>
            </div>
        </div>
    )
}

export default Index;