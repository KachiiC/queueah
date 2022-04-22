import { CodeSandboxOutlined, HomeFilled } from "@ant-design/icons";
import { PagesProps } from "../papesProps";
import About from "./About";
import Home from "./Home";

const DefaultPages: PagesProps[] = [
  {
    key: "home",
    path: "/",
    element: <Home />,
    icon: <HomeFilled />,
    authentication: false,
  },
  {
    key: "about",
    path: "/about",
    element: <About />,
    icon: <CodeSandboxOutlined />,
    authentication: false,
  },
];

export default DefaultPages;
