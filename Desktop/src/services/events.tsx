import { useEffect, useState } from "react";
import { emptyEvent } from "./data";

const GetEvent = (organizer_id: String, event_id: String) => {
  const [event, setEvent] = useState(emptyEvent);

  const FetchUrl = `${process.env.REACT_APP_HEROKU_LINK}/event/${organizer_id}/${event_id}`;
  console.log(FetchUrl);

  useEffect(() => {
    fetch(FetchUrl)
      .then((res) => res.json())
      .then((res) => {
        setEvent(res);
      });
  }, [FetchUrl]);

  return event;
};

export default GetEvent;
