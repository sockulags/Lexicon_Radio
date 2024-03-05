import "./Navbar.css";
import { Link } from "react-router-dom";

interface IRoutes{
    id: number;
    name: string;
    path: string;
}

const routes: IRoutes[] = [{
    id: 1,
    name: "Start",
    path: "/",
},
{
    id: 2,
    name: "Kanaler",
    path: "/channels"
},
{
    id: 3,
    name: "Program",
    path: "/programs"
}
]

export function Navbar() {
    return (
        <nav>
            {routes.map((route) => (
                <Link to={route.path} key={route.id}>{route.name}</Link>
            ))}
        </nav>
    );
}

