import React, { useState } from "react"
import "./navmobile.scss"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

// class NavMobile extends Component {
//   constructor() {
//     super()
//     this.state = {
//       menuIsActive: false,
//     }
//   }
//   menuToggle = () => {
//     this.setState({ menuIsActive: this.state.menuIsActive ? false : true })
//   }
//   render() {
//     return (
//       <div id="navContainer">
//         <ul id="mobileNav">
//           <li>
//             <FontAwesomeIcon
//               icon={faBars}
//               style={{ color: "#707070" }}
//               onClick={this.menuToggle}
//             />
//           </li>
//           <li>
//             <Link to="/">The Nerd Store</Link>
//           </li>
//           <li>{/* for alignment */}</li>
//         </ul>
//         <div
//           id="menuContainer"
//           style={{ display: this.state.menuIsActive ? "" : "none" }}
//         >
//           <ul id="dropMenu">
//             <li>
//               <Link to="/" activeClassName="activeNav">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/announcements" activeClassName="activeNav">
//                 Announcements
//               </Link>
//             </li>
//             <li>
//               <Link to="/gallery" activeClassName="activeNav">
//                 Gallery
//               </Link>
//             </li>
//             <li>
//               <Link to="/events" activeClassName="activeNav">
//                 Events
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" activeClassName="activeNav">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     )
//   }
// }

// export default NavMobile

const NavMobile = () => {
  const [menuIsActive, toggleBool] = useState(false)
  const menuToggle = () => {
    toggleBool(menuIsActive ? false : true)
  }
  return (
    <div id="navContainer">
      <ul id="mobileNav">
        <li>
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#707070" }}
            onClick={menuToggle}
          />
        </li>
        <li>
          <Link to="/">The Nerd Store</Link>
        </li>
        <li>{/* for alignment */}</li>
      </ul>
      <div id="menuContainer" style={{ display: menuIsActive ? "" : "none" }}>
        <ul id="dropMenu">
          <li>
            <Link to="/" activeClassName="activeNav">
              Home
            </Link>
          </li>
          <li>
            <Link to="/announcements" activeClassName="activeNav">
              Announcements
            </Link>
          </li>
          <li>
            <Link to="/gallery" activeClassName="activeNav">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/events" activeClassName="activeNav">
              Events
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName="activeNav">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavMobile
