import axios from "axios";

export const EventPost  = (organizer_id: string, formData: any) => {
    axios({
        method: "post",
        url: `http://127.0.0.1:8000/add_event/`,
        data: formData,
        headers: { "Content-Type": "JS" },
      })
        .then((res) => console.log(res))
        .catch((res) => console.log(res));
}