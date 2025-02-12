import Logo from '../assets/Logo.jpg'

function Header() {
    return (
        <header>
            <img src={Logo} alt='logo' height={'60px'} width={'auto'}/>
        </header>
    )
}

export default Header