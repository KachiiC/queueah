interface profileProps {
  image: string;
  data: {
    name: string;
    email: string;
    _id: string;
    events: any[];
  };
}

const ProfileLayout = (props: profileProps) => {
  const { name, email, _id, events } = props.data;
  const { image } = props;

  return (
    <>
      <img src={image} alt={name} />
      <h1>Name: {name}</h1>
      <p>Email: {email}</p>
      <p>Account ID: {_id}</p>
      <p>total events: {events.length}</p>
    </>
  );
};

export default ProfileLayout;
