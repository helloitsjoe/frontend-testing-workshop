import axios from "axios";

export const fetchUsers = () =>
  axios.get("https://randomuser.me/api/?results=20&inc=name,dob,login,email");
