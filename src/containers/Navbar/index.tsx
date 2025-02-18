import Link from "next/link";

import { LuSearch, LuHouse } from "react-icons/lu";
import { FiCalendar } from "react-icons/fi";

// Styles
import './navbar-style.scss'

export default function Navbar(){
    return (
        <nav className="navbar">
            <Link href='/aktiviteter'>
                <LuHouse />
            </Link>
            <Link href='/search'>
                <LuSearch />
            </Link>
            <Link href='/kalender'>
                <FiCalendar />
            </Link>
        </nav>
    )
}