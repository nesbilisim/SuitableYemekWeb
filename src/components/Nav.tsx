import { Link, NavLink } from "react-router-dom"
import newLogo from '../assets/images/new_logo.png'

export const Nav = () => {

    const normalClassName = 'p-2 border-b-4 border-b-white'
    const activeClassName = 'p-2 border-b-4 border-b-orange-500 text-orange-500'

    return (
        <nav className='shadow-sm py-6 px-12 flex justify-between items-centerl'>
            {/* <NavLink to='/' className='font-bold text-2xl hover:text-orange-600 transition-colors'>Suitable Yemek</NavLink> */}
            <NavLink to='/'>
                <img src={newLogo} className='w-40' />
            </NavLink>
            <div className="flex gap-x-5 items-center">
                <NavLink to='/' className={({ isActive }) => (isActive ? activeClassName : normalClassName)}>
                    Ana Sayfa
                </NavLink>
            </div>
        </nav>
    )
}