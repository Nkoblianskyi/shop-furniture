import { Link } from 'react-router-dom';

export const Menu = () => {
    const navigation = [
        { text: 'Home', href: '/' },
        { text: 'Shop', href: '/shop' },
        { text: 'About US', href: '/about' },
        { text: 'Contact', href: '/contact' },
    ];

    return (
        <div className="menu">
            {navigation.map((link, index) => (
                <div key={index} className="menu-item">
                    <Link to={link.href} className='menu-item-link'>
                        {link.text}
                    </Link>
                </div>
            ))}
        </div>
    );
};
