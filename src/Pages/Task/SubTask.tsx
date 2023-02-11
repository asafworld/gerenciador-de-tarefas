import React from "react";
import Header from "../../Components/Header/Header";
import CreateSubTasks from "../../Components/Task/CreateSubTasks";
import DisplaySubTasks from "../../Components/Task/DisplaySubTask";

function Subtask() {
  return(
    <article>
      <Header />
      <CreateSubTasks />
      <DisplaySubTasks />
    </article>
  )
}

export default Subtask;