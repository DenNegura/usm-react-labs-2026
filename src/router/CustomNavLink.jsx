import {NavLink} from "react-router";

export default function CustomNavLink({children, ...rest}) {
    return (
        <NavLink {...rest} style={({isActive}) => ({
            color: isActive ? "blue" : "white",
        })}>
            {({isActive}) => (
                <span className={isActive ? "active" : ""}>
                    {isActive ? ">" : ""} {children}
                </span>
            )}
        </NavLink>
    )
}

