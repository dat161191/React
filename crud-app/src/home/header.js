import {NavLink} from "react-router-dom";

export function Header() {
    return (
        <div>
            <header className="bg-black text-light mt-1" style={{fontSize:30}}>
                <NavLink
                    style={({isActive}) => {
                        return {
                            textDecoration: "none", marginRight: "5px", color: isActive ? "red" : "white"
                        };
                    }}
                    to="/"> <i className="bi bi-house-heart-fill"></i> Home |</NavLink>

                <NavLink
                    style={({isActive}) => {
                        return {
                            textDecoration: "none", marginRight: "5px", color: isActive ? "red" : "white"
                        };
                    }}
                    to="/list"> <i className="bi bi-list-check"></i> List |</NavLink>

                <NavLink
                    style={({isActive}) => {
                        return {
                            textDecoration: "none", marginRight: "5px", color: isActive ? "red" : "white"
                        };
                    }}
                    to="/create"> Create </NavLink>

            </header>
        </div>
    )
}
