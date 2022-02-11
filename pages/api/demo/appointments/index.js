const appointments = [
  {
    title: "Thendo Thovhakale",
    allDay: false,
    start: new Date(2022, 0, 8, 10, 0),
    end: new Date(2022, 0, 8, 11, 0),
  },
  {
    title: "Mishumo Troy Lumadi",
    allDay: false,
    start: new Date(2022, 0, 9, 11, 0),
    end: new Date(2022, 0, 9, 12, 0),
  },
  {
    title: "Khuthadzo Thovhakale",
    allDay: false,
    start: new Date(2022, 0, 20, 10, 0),
    end: new Date(2022, 0, 20, 11, 0),
  },
  {
    title: "Mishumo Troy Lumadi",
    allDay: false,
    start: new Date(2022, 0, 20, 11, 0),
    end: new Date(2022, 0, 20, 12, 0),
  },
];

export default function (req, res) {
  res.status(200).json(appointments);
}
