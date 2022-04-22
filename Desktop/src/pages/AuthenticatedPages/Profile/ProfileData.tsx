import { useAuth0 } from "@auth0/auth0-react";
import { Skeleton } from "antd";
import OrganizerFinder from "services/organizers";
import ProfileLayout from "./ProfileLayout";

const ProfileData = () => {
  const { user } = useAuth0();

  const data = OrganizerFinder();

  return [
    {
      title: "About me",
      content: <ProfileLayout data={data} image={user?.image} />,
    },
    {
      title: "Stats",
      content: <Skeleton />,
    },
    {
      title: "Settings",
      content: <Skeleton />,
    },
  ];
};

export default ProfileData;
