import { QrcodeOutlined, UserOutlined } from "@ant-design/icons";
import Events from "./Events";
import AddEvent from "./AddEvent";
import Profile from "./Profile";

const AuthticatedPages = [
  {
    key: "events",
    path: "/events",
    element: <Events />,
    icon: <QrcodeOutlined />,
  },
  {
    key: "profile",
    path: "/profile",
    element: <Profile />,
    icon: <UserOutlined />,
  },
  {
    key: "add_event",
    path: "/add_event",
    element: <AddEvent />,
    hidden: true
}
];

export default AuthticatedPages;
