import React, { useEffect, useState } from "react";
import Persons from "../components/Persons";
import Navbar from "../components/Navbar";
import classRoomService from "../services/classroom-service";

const Classroom = () => {
  const [persons, setPersons] = useState([]);
  const queryId = localStorage.getItem("classRoomId");

  useEffect(() => {
    async function fetchClassroomData() {
      const response = await classRoomService.joinClassroom({ id: queryId });
      setPersons(response);
    }
    fetchClassroomData();
  }, [queryId]);

  return (
    <div className="classRoom">
      <Navbar />
      <Persons persons={persons} />
    </div>
  );
};

export default Classroom;
