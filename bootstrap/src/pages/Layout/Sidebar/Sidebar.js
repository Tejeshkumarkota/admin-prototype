import { Link } from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu";

const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className="logo">
                <Link to={''}>
                    <img src="https://res.cloudinary.com/cloudexalogic/image/upload/exa-blue-logo.png" alt="logo" />
                </Link>
            </div>
            <NavMenu />
        </div>
     );
}
 
export default Sidebar;