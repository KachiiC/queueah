import axios from "axios";
import { useForm } from "react-hook-form";
import { Button, message } from "antd/lib";
import { useParams } from "react-router-dom";
import OrganizerFinder from "services/organizers";
import "./AddAttendees.css";

const AddAttendees = () => {
  const { event_id } = useParams();
  const { register, handleSubmit } = useForm();
  const organizer_data = OrganizerFinder();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("csv_file", data.file[0]);
    axios({
      method: "post",
      url: `http://127.0.0.1:8000/add_attendees/${organizer_data._id}/${event_id}`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => message.success("worked"))
      .catch((res) => message.error("error"));
  };

  return (
    <div className="add-attendees-container">
      <h1>Add Attendees File here</h1>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <label className="">
        Click here to attendees. (only csv files will be accepted).
          <input
            {...register("file")}
            className="sr-only"
            type="file"
            accept=".csv"
          />
        </label>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddAttendees;
