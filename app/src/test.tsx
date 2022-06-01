import React from "react";
import ReactDOM from "react-dom";
import Button from "./component/UI/button";

import "./styles.css";
const DatePicker = require("react-mobile-datepicker");

const monthMap = {
  "1": "Jan",
  "2": "Feb",
  "3": "Mar",
  "4": "Apr",
  "5": "May",
  "6": "Jun",
  "7": "Jul",
  "8": "Aug",
  "9": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec",
};

// const DatePickerContainer = styled.div`
//   .datepicker {
//     position: initial;
//   }

//   /* .datepicker-navbar {
//     display: none;
//   } */
// `;

const Test = () => {
  return (
    <div className="datePicker">
      <Button />
      <DatePicker
        showHeader={false}
        showFooter={false}
        confirmText="OK"
        cancelText={false}
        isOpen={true}
        isPopup={false}
        showCaption={false}
        dateConfig={{
          year: {
            format: "YYYY",
            caption: "Year",
            step: 1,
          },
          month: {
            format: (value) => monthMap[value.getMonth() + 1],
            caption: "Mon",
            step: 1,
          },
          date: {
            format: "D",
            caption: "Day",
            step: 1,
          },
        }}
      ></DatePicker>
    </div>
  );
};

export default Test;
