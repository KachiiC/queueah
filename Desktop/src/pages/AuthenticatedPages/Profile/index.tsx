
import "./Profile.css";
import { useAuth0 } from "@auth0/auth0-react";
import OrganizerFinder from "services/organizers";
import Loading from "helpers/loading";

const Profile = () => {
  const data = OrganizerFinder();
  const { isLoading, user } = useAuth0();
  const { name, email, _id, events } = data;

  const OrganzierInfo = (
    <>
      <img src={user?.picture} alt={name} className="profile-image" />
      <h1>Name: {name}</h1>
      <p>Email: {email}</p>
      <p>Account ID: {_id}</p>
      <p>total events: {events.length}</p>
      <p>total attendees: 0</p>
    </>
  );

  return isLoading ? <Loading /> : OrganzierInfo;
};

export default Profile;
