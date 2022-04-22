import AntdTable from "../../../components/AntdTable";
import AttendeesServices from "../../../services/attendees";

interface SingleEventProps {
  event: string;
  organizer: string
}

const SingleEvent = (props: SingleEventProps) => {
  const data = AttendeesServices(props.organizer, props.event)
  return <AntdTable data={data} />
};

export default SingleEvent;
