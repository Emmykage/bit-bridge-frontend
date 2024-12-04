import { NavLink } from "react-router-dom";
import "./nav.scss";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const Nav = ({ open, setToggle }) => {
  const navRef = useRef(null);
  const closeNav = (e) => {
    console.log(e.target, open);
    console.log("just clicked so should be false now")

    // setToggle(false)
    if ( navRef.current && !navRef.current.contains(e.target)) {
      setToggle(false);
      console.log("close triggered");
    }
  };

  useEffect(() => {
    
    if(open){
        document.addEventListener("click", closeNav);

    }


    return () => {
      document.removeEventListener("click", closeNav);
    };
  }, []); // Add `open` as a dependency

  return (
    <div
      ref={navRef}
      className={`md:my-0 fixed md:static h-screen md:h-auto top-0 shadow md:shadow-none rounded transition-all duration-150 ease-linear ${
        open ? "left-0" : "-left-full"
      } bg-white z-50 max-w-sm md:max-w-7xl w-full`}
    >
      <Button
        onClick={() => setToggle((prev) => !prev)}
        className="md:hidden mt-10 ml-auto flex mr-5"
        shape="circle"
        icon={<CloseOutlined />}
      />
      <ul className="flex px-5 md:px-0 py-10 md:py-5 bg-red-4 flex-col md:flex-row hidde gap-5 text-lg font-semibold">
        <li to="#" className="font-medium">
          <NavLink>Gift Cards</NavLink>
        </li>
        <li>
          <NavLink to={"/phone-top-up"}>Phone Top Ups</NavLink>
        </li>
        <NavLink>Crypto Exchange</NavLink>
        <li>
          <NavLink to={"#"}>Utility & Services       {open.toString()}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

Nav.propTypes = {
  setToggle: PropTypes.func,
  open: PropTypes.bool,
};
export default Nav;
