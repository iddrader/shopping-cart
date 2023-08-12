import '../styles/Index.css'
import { Link } from "react-router-dom";

const Index = () => {
    return (
        <div className="index">
            <div className="welcoming-section">
                <h1>Welcome to <br/> New Day Shop!</h1>
                <Link to='products'><button>Click here to start shopping!</button></Link>
            </div>
        </div>
    )
}

export default Index;