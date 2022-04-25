import axios from "axios";
import { useForm } from "react-hook-form";

interface AddAttendeesProps {
  organizer_id: string;
  event_id: string;
}

const AddAttendees = (props: AddAttendeesProps) => {
  const { organizer_id, event_id } = props;
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("csv_file", data.file[0]);
    axios({
      method: "post",
      url: `http://127.0.0.1:8000/add_attendees/${organizer_id}/${event_id}`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
  };

  return (
    <div className="m-auto my-10 w-11/12">
      <h1 className="text-center text-3xl m-5">Add Attendees File here</h1>
      <form className="" onChange={handleSubmit(onSubmit)}>
        <label className="w-screen border text-center px-5 py-10 text-xl">
          Click here to attendees. (only csv files will be accepted).
          <input
            {...register("file")}
            className="sr-only"
            type="file"
            accept=".csv"
          />
        </label>
      </form>
    </div>
  );
};

export default AddAttendees;
