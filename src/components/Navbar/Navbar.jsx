import { useState } from 'react';
import { IoClose, IoMenuSharp } from 'react-icons/io5';
import Link from '../Link/Link';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '/login', name: 'Login', id: 'login' },
        { path: '/signup', name: 'Signup', id: 'signup' }
    ];

    return (
        <div className="bg-blue-500 text-lg font-bold">
            <nav className="text-black max-w-7xl mx-auto p-6">
                <div className="md:hidden" onClick={() => setOpen(!open)}>
                    {open === true ? <IoClose className="text-2xl" /> : <IoMenuSharp className="text-2xl" />}
                </div>
                <ul
                    className={`md:flex absolute duration-1000 md:static 
            ${open ? 'top-16' : '-top-60'}
                 bg-blue-500 text-blue-100 text-lg px-6 pb-4`}>
                    {routes.map(route => (
                        <Link key={route.id} route={route} />
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
