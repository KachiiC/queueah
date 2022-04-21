import { MailOutlined } from "@ant-design/icons";

const Pages = [
    {
        key: "about",
        path: "/about",
        element: <h1>About World</h1>,
        icon: <MailOutlined />
    },
    {
        key: "profile",
        path: "/profile",
        element: <h1>Profile</h1>,
        icon: <MailOutlined />
    },
    {
        key: "home",
        path: "/",
        element: <h1>Hello World</h1>,
        icon: <MailOutlined />
    },
] 



export default Pages