import { Calendar , Badge} from 'antd'
import React from 'react'
import "../Calendar/CalendarComp.css"

const CalendarComp = () => {


    function dateCellRender(date) {
        console.log(date)
        const month = date.month() + 1;
        const day = date.date();
        if (month === 9 && day === 1) {
          return <div className="date-cell">Labor Day</div>;
        }
        return null;
      }

    const getListData = (value) => {
        let listData;
        switch (value.date()) {
          case 8:
            listData = [
              {
                type: 'warning',
                content: 'This is warning event.',
              },
              {
                type: 'success',
                content: 'This is usual event.',
              },
            ];
            break;
          case 10:
            listData = [
              {
                type: 'warning',
                content: 'This is warning event.',
              },
              {
                type: 'success',
                content: 'This is usual event.',
              },
              {
                type: 'error',
                content: 'This is error event.',
              },
            ];
            break;
          case 15:
            listData = [
              {
                type: 'warning',
                content: 'This is warning event',
              },
              {
                type: 'success',
                content: 'This is very long usual event。。....',
              },
              {
                type: 'error',
                content: 'This is error event 1.',
              },
              {
                type: 'error',
                content: 'This is error event 2.',
              },
              {
                type: 'error',
                content: 'This is error event 3.',
              },
              {
                type: 'error',
                content: 'This is error event 4.',
              },
            ];
            break;
          default:
        }
        return listData || [];
      };

      const getMonthData = (value) => {
        if (value.month() === 8) {
          return 1394;
        }
      };




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