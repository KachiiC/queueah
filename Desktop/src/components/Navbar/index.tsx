import { Menu } from "antd";
import { Link } from "react-router-dom";
import Pages from "../../pages";

const Navbar = () => {
  const { Item } = Menu;

  const displayLinks = Pages.map((page) => {
    const { key, icon, path } = page;
    return (
      <Item key={key} icon={icon}>
        <Link to={path}>{key}</Link>
      </Item>
    );
  });

  return (
    <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
      {displayLinks}
    </Menu>
  );
};

export default Navbar;
