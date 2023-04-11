import { useState } from "react"
import { close, menu } from "../assets"
import { navLinks } from "../constants"

export default function Navbar() {

    const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-full flex py-6 justify-between items-center bg-secondary sm:flex-row flex-col border-b-[3px] border-1 border-turquoise">

            <p className="ml-20 font-roboto text-[18px] text-turquoise">Felipe Leão</p>

            {/*navbar for desktop*/}
            <ul className="sm:flex hidden">
                {navLinks.map((nav) => (
                    <li key={nav.id} className={`font-poppins text-[18px] text-turquoise mr-10`}>
                        <a href={`${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul> 
            {/*menu for mobile*/}           
            <div className="sm:hidden flex  flex-col p-6 items-center">
            <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={ () => setToggle((prev) => !prev)}/>
            <div className={`${toggle ? 'flex' : 'hidden'} text-center`}>
                <ul className="flex flex-col">
                {navLinks.map((nav) => (
                    <li key={nav.id} className={`font-poppins text-[14px] text-turquoise mb-5`}>
                        <a href={`${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
                </ul>
            </div>

            </div>


        </nav>
        
    )
}