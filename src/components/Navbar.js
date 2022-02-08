function Navbar (props) {

    return (
        <div className="navbar">
            {/* <div className="nav-logo">
                MacMoney
            </div>
            <button className='nav-btn tut' onClick={''}>
                Tutorial
            </button>
            <button className='nav-btn resource' onClick={''}>
                Resource
            </button>
            <button className='nav-btn contact' onClick={''}>
                Contact 
            </button> */}
            <li className="nav-logo">
              MacMoney
            </li>
            <li className="nav-item">
                <button className='nav-btn tut' onClick={''}>
                    Tutorial
                </button>
            </li>
            <li className="nav-item"> 
                <button className='nav-btn resource' onClick={''}>
                    Resource
                </button>
            </li>
            <li className="nav-item">
                <button className='nav-btn contact' onClick={''}>
                    Contact Us
                </button>
            {/* <Link to="/"></Link> */}
            </li>

        </div>
    );

}

export default Navbar;