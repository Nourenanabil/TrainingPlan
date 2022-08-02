const minNumberOfWeeks = 8;
const OneWEEKMillisec = 1000 * 60 * 60 * 24 * 7;
const OneDayMillisec = 1000 * 60 * 60 * 24 * 1;
const weekDays = 7;

const FormattedDate = (date) => {
  let parsedDate = date.split(" ");
  let month = parsedDate[3];
  let day = parsedDate[1].replace(/\D/g, "");
  let year = parsedDate[4];
  let completeDate = new Date(Date.parse(month + " " + day + ", " + year));

  return completeDate;
};

export const TrainingWeeks = (StartDate, EndDate) => {
  const formattedStartDate = FormattedDate(StartDate);
  const formattedEndDate = FormattedDate(EndDate);
  const startDateMillisec = new Date(formattedStartDate).getTime();
  const endDateMillisec = new Date(formattedEndDate).getTime();
  const NumberOfWeeks = Math.round(
    Math.abs(startDateMillisec - endDateMillisec) / OneWEEKMillisec
  );
  return [NumberOfWeeks, formattedStartDate];
};

export const TrainigPlan = (NumberOfWeeks, startDate) => {
  const planValidation = NumberOfWeeks % 4;
  if (NumberOfWeeks < minNumberOfWeeks) {
    throw Error(
      "Number of weeks is less than the minimum number of weeks (8) "
    );
  } else {
    switch (planValidation) {
      case 0:
        eightWeeksPlan(NumberOfWeeks, startDate);
        break;
      case 1:
        nineWeeksPlan(NumberOfWeeks, startDate);
        break;
      case 2:
        tenWeeksPlan(NumberOfWeeks, startDate);
        break;
      case 3:
        elevenWeeksPlan(NumberOfWeeks, startDate);
        break;
    }
  }
};

const eightWeeksPlan = (NumberOfWeeks, startDay) => {
  var count = 1;
  for (let i = 1; i < NumberOfWeeks + 1; i++) {
    switch (i) {
      case 1:
        Print(i, "Test", startDay);
        break;
      case 2:
        Print(i, "Test", startDay);
        break;
      case NumberOfWeeks - 1:
        Print(i, "Taper", startDay);
        break;
      case NumberOfWeeks:
        Print(i, "Race", startDay);
        break;
      default:
        MainBlockWeeks(i, count, startDay);
        count++;
        break;
    }
  }
};

const tenWeeksPlan = (NumberOfWeeks, startDay) => {
  var count = 1;
  for (let i = 1; i < NumberOfWeeks + 1; i++) {
    switch (i) {
      case 1:
        Print(i, "Test", startDay);
        break;
      case 2:
        Print(i, "Test", startDay);
        break;
      case 3:
        Print(i, "Build2", startDay);
        break;
      case 4:
        Print(i, "Key", startDay);
        break;
      case NumberOfWeeks - 1:
        Print(i, "Taper", startDay);
        break;
      case NumberOfWeeks:
        Print(i, "Race", startDay);
        break;
      default:
        MainBlockWeeks(i, count, startDay);
        count++;
        break;
    }
  }
};

const nineWeeksPlan = (NumberOfWeeks, startDay) => {
  var count = 1;
  for (let i = 1; i < NumberOfWeeks + 1; i++) {
    switch (i) {
      case 1:
        Print(i, "Test", startDay);
        break;
      case 2:
        Print(i, "Test", startDay);
        break;
      case 3:
        Print(i, "Filler", startDay);
        break;
      case NumberOfWeeks - 1:
        Print(i, "Taper", startDay);
        break;
      case NumberOfWeeks:
        Print(i, "Race", startDay);
        break;
      default:
        MainBlockWeeks(i, count, startDay);
        count++;
        break;
    }
  }
};

const elevenWeeksPlan = (NumberOfWeeks, startDay) => {
  var count = 1;
  for (let i = 1; i < NumberOfWeeks + 1; i++) {
    switch (i) {
      case 1:
        Print(i, "Test", startDay);
        break;
      case 2:
        Print(i, "Test", startDay);
        break;
      case 3:
        Print(i, "Build1", startDay);
        break;
      case 4:
        Print(i, "Build2", startDay);
        break;
      case 5:
        Print(i, "Key", startDay);
        break;
      case NumberOfWeeks - 1:
        Print(i, "Taper", startDay);
        break;
      case NumberOfWeeks:
        Print(i, "Race", startDay);
        break;
      default:
        MainBlockWeeks(i, count, startDay);
        count++;
        break;
    }
  }
};

const MainBlockWeeks = (i, count, startDay) => {
  var numberOfRepeat = count % 4;
  switch (numberOfRepeat) {
    case 1:
      Print(i, "Recovery", startDay);

      break;
    case 2:
      Print(i, "Build1", startDay);

      break;
    case 3:
      Print(i, "Build2", startDay);

      break;
    case 0:
      Print(i, "Key", startDay);

      break;
  }
};

const Print = (i, type, startDay) => {
  var startDate = startDay
    .toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .split(" ");
  var newWeek = startDay.setDate(new Date(startDay).getDate() + weekDays);

  var endDate = new Date(startDay).getTime() - OneDayMillisec;
  endDate = new Date(endDate)
    .toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .split(" ");

  if (startDate[2] < "09") {
    startDate[2] = startDate[2].slice(1, -1);
  } else {
    startDate[2] = startDate[2].slice(0, -1);
  }
  if (endDate[2] < "09") {
    endDate[2] = endDate[2].slice(1, -1);
  } else {
    endDate[2] = endDate[2].slice(0, -1);
  }
  console.log(
    "Week # " +
      i +
      " - " +
      type +
      " - " +
      " from " +
      startDate[2] +
      " " +
      startDate[1] +
      " to " +
      endDate[2] +
      " " +
      endDate[1]
  );
};
