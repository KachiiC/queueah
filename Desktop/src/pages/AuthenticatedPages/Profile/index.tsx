import AntdTabs from "../../../components/AntdTabs";
import ProfileData from "./ProfileData";

const Profile = () => {
  return (
    <div className="antd">
      <AntdTabs data={ProfileData()} />
    </div>
  );
};

export default Profile;
