import { useState } from "react";
import AntdList from "../../../components/AntdList";
import SiteModal from '../../../components/SiteModal'
import OrganizerFinder from "../../../services/organizers";
import SingleEvent from "./SingleEvent";

const Events = () => {
  const [currentEvent, setCurrentEvent] = useState("");

  const data = OrganizerFinder();

  const refactoredData = data.events.map((evt) => {
    const modalButton = (
      <button onClick={() => setCurrentEvent(evt._id)}>Here</button>
    );
    const component = (
      <>
        <h1>{evt.event_name}</h1>
        <h1>Event ID: {currentEvent}</h1>
        <SingleEvent event={evt._id} organizer={evt.organizer}/>
      </>
    );
    const modal = <SiteModal component={modalButton} content={component} type="modal"/>;

    return {
      description: evt.date,
      title: evt.description,
      content: modal,
    };
  });

  return (
    <>
      <AntdList data={refactoredData} />
    </>
  );
};

export default Events;
