// Following is an Additional Component which was added to populate the Sidebar .
// For now it serves no purpose except showing my skill to integrate inbuilt components to the Layout component of Ant Design  

import { Calendar} from 'antd'
import React from 'react'
import "../Calendar/CalendarComp.css"

const CalendarComp = () => {


    function dateCellRender(date) {
        const month = date.month() + 1;
        const day = date.date();
        if (month === 9 && day === 1) {
          return <div className="date-cell">Labor Day</div>;
        }
        return null;
      }



  return (
    <div>
        <h1>View Todos in calendar</h1>
        <Calendar
        cellRender={dateCellRender}
        style={{ padding:"5px",boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)"}}
        />
    </div>
  )
}

export default CalendarComp