const invoices = [
  {
    id: 1,
    user: "Mishumo Troy Lumadi",
    amount: "R150.00",
    date: "06 Jan 2022",
  },
  {
    id: 2,
    user: "Thendo Thovhakale",
    amount: "R150.00",
    date: "05 Jan 2022",
  },
  {
    id: 3,
    user: "Khuthadzo Thovhakale",
    amount: "R150.00",
    date: "08 Jan 2022",
  },
];

export default function (req, res) {
    res.status(200).json(invoices)
}
