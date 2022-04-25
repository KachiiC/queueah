import axios from "axios";
import { useEffect } from "react";

export const AddAttendee = ({ organizer_id, event_id, input_csv }) => {
  const evt_params = `${organizer_id}/${event_id}`;

  useEffect(() => {
    if (input_csv !== undefined) {
      axios({
        method: "post",
        url: `http://127.0.0.1:8000/add_attendees/${evt_params}`,
        data: input_csv,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((res) => console.log(res))
        .catch((res) => console.log(res));
    }
  }, [input_csv, evt_params]);
};
