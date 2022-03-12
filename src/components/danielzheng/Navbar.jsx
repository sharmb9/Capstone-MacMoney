function Navbar (props) {

    return (

        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <span class=" mb-0  nav-logo">MacMoney</span>
                <div class=" d-flex justify-content-end">
                <ul class="navbar-nav ">
                    <li class="nav-item">
                    <a class="nav-btn tut" href="#">Tutorial</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-btn resource" href="#">Resource</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-btn contact" href="#">Contact Us</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

        
    );

}

export default Navbar;