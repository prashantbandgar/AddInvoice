import { AppBar, Toolbar } from '@mui/material'


const Header =() => {
    const logo="https://static.vecteezy.com/system/resources/previews/000/395/417/original/modern-company-logo-design-vector.jpg"
    return(
       <AppBar colour="secondary" position="static">
        <Toolbar>
            <img src={logo} alt="logo" style={{width:100}} />
        </Toolbar>
       </AppBar>
    )
}
export default Header;