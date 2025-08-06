import React from "react";
import BannerImg from "../components/BannerImg";
import EventName from "../components/EventName";
// import EventScheduleList from '../components/Schedule/EventScheduleList'

const Event = () => {
  return (
    <>
      <BannerImg heading="The Future Tech 1.0" text="Events" />
      <EventName />
      {/* <EventScheduleList/> */}
    </>
  );
};

export default Event;
