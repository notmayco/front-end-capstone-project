import Logo from '../assets/Logo.jpg'

const navItems = [
    {
        to: "/",
        title: "Home",
    },
    {
        to: "/",
        title: "About",
    },
    {
        to: "/",
        title: "Menu",
    },
    {
        to: "/",
        title: "Reservation",
    },
    {
        to: "/",
        title: "Order Online",
    },
    {
        to: "/",
        title: "Login",
    },
];



function Nav() {
    return (
        <>
            <header>
            <img src={Logo} alt='logo' height={'60px'} width={'auto'}/>
            </header>
            <nav>
                <ul className="navList">
                    {navItems.map((item, index) => (
                        <li key={index}><a href={item.to}>{item.title}</a></li>
                    ))}
                </ul>
            </nav>
        </>
    )
};

export {navItems};
export default Nav;