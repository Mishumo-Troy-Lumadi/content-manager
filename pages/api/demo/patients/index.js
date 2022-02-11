const users = [
  {
    id: 1,
    firstnames: "Khuthadzo",
    lastname: "Thovhakale",
    email: "better@betteryourhealth.co.za",
    password: "password",
  },
  {
    id: 2,
    firstnames: "Thendo",
    lastname: "Thovhakale",
    email: "thendo@betteryourhealth.co.za",
    password: "password",
  },
  {
    id: 3,
    firstnames: "Mishumo Troy",
    lastname: "Lumadi",
    email: "troy@betteryourhealth.co.za",
    password: "password",
  }
];

export default function (req, res) {
  users.forEach(user=>{
      user.password = undefined
  })

  res.status(200).json(users)
}
