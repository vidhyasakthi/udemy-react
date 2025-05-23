import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar(){
  return(
   <div class="navbar">
        <div class="navbar_s1">
            <h1>Udemy</h1>
        </div>

        <div class="navbar_s2">
            <FontAwesomeIcon icon="faMagnifyingGlass" style={{color:" #00040a"}}/>
            <input placeholder="Search for anything here. Tech, Business, Art..."/>
        </div>

        <div class="navbar_s3">
            <p>Courses</p>
            
             <div class="mylearning">
                <p>My Learniing</p>
                <div class="mylearning__popup">
                    <p>You did not purchase anything yet</p>
                </div>
             </div>
            <FontAwesomeIcon icon="faCartShopping" style={{color:" #00040a"}}/>
            <FontAwesomeIcon icon="faBell" style={{color:" #00040a"}}/>
            <FontAwesomeIcon icon="faUser" style={{color:" #00040a"}}/>
        </div>

        <div class="navbar_s4">
            <FontAwesomeIcon icon="faBars" style={{color:" #010813"}}/>
        </div>

    </div>
  )
}
export default Navbar
 