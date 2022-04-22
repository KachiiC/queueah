import { useEffect, useState } from "react";
import { emptyAttendee } from "./data";

const AttendeesServices = (organizer_name: String, event_id: String) => {
  const [attendees, setAttendees] = useState([emptyAttendee]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_HEROKU_LINK}/attendees_list/${organizer_name}/${event_id}`
    )
      .then((res) => res.json())
      .then((res) => {
        setAttendees(res);
      });
  }, [organizer_name, event_id]);

  return attendees;
};

export default AttendeesServices;
