const Invoice = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Names",
    selector: (row) => row.user,
    sortable: true,
  },
  {
    name: "Amount",
    selector: (row) => row.amount,
    sortable: true,
  },
  {
    name: "Date",
    selector: (row) => row.date,
    sortable: true,
  },
];

const Patient = [
  {
    name: "First Names",
    selector: (row) => row.firstnames,
    sortable: true,
  },
  {
    name: "Last Name",
    selector: (row) => row.lastname,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
];

module.exports = {Patient,Invoice}