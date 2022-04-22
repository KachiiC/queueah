import { QrcodeOutlined, UserOutlined } from "@ant-design/icons";
import Events from "./Events";
import Profile from "./Profile";

const AuthticatedPages = [
  {
    key: "events",
    path: "/events",
    element: <Events />,
    icon: <QrcodeOutlined />,
    authentication: true,
  },
  {
    key: "profile",
    path: "/profile",
    element: <Profile />,
    icon: <UserOutlined />,
    authentication: true,
  },
];

export default AuthticatedPages;
