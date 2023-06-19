import React from "react";

function DateDifference() {
  const date1 = new Date("2022-01-01");
  const date2 = new Date("2022-02-10");

  const currentDate = new Date();
  const year = currentDate.getFullYear() - 18;
  const month = currentDate.getMonth();
  const day = currentDate.getDate();

  const date18YearsBefore = new Date(year, month, day);
  const disableYear = new Date(date18YearsBefore).toISOString().split("T")[0];
  return (
    <div>
      <p>Date 1: {date1.toDateString()}</p>
      <p>Date 2: {date2.toDateString()}</p>
      <p>Difference in time: {disableYear}</p>
      <input type="date" max={disableYear} />
    </div>
  );
}

export default DateDifference;
