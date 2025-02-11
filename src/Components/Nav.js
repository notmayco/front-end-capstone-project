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



export default function () {
    return (
        <nav>
            <ul>
                {navItems.map((item, index) => (
                    <li key={index}><a href={item.to}>{item.title}</a></li>
                ))}
            </ul>
        </nav>
    )
};

export {navItems};