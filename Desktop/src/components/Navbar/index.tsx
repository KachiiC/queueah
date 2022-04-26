import { useAuth0 } from "@auth0/auth0-react";
import { Menu } from "antd";
import defaultMenu from "./defaultMenu";
import authenticatedMenu from "./authenicatedMenu";
import LogButton from "./authenicationButton";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Menu mode="horizontal" theme="dark">
      {isAuthenticated ? authenticatedMenu : defaultMenu}
      <LogButton/>
    </Menu>
  );
};

export default Navbar;
