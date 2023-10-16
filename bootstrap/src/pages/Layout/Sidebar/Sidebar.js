import { Link } from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu";

const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className="logo">
                <Link to={''}>
                    <img src="/images/logo.png" alt="logo" height="100" width="100" />
                </Link>
            </div>
            <NavMenu />
        </div>
     );
}
 
export default Sidebar;