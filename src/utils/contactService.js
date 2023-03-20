import axios from "axios";

const url = "http://3.7.81.243:3253/api/contact/send";

export function contactData(user) {
  return axios.post(url, {
    fname: user.fname,
    lname: user.lname,
    email: user.email,
    phone: user.phone,
    budget: user.budget,
    description: user.description,
  });
}
