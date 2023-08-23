import { Link } from "react-router-dom"

const NavPage = () => {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Homepage</Link></li>
                <li><Link to='/product'>Product</Link></li>
                <li><Link to='/pricing'>Pricing</Link></li>
            </ul>
        </nav>
    )
}

export default NavPage