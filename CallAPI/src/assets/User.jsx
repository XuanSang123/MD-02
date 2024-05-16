import axios from "axios";
import React, { useEffect, useState } from "react";

export default function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        console.log("res", res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div>
      {users?.map((user, index) => {
        return (
          <div key={user.id}>
            <p>STT {index + 1} </p>
            <p> id: {user.id}</p>
            <p> student_name: {user.student_name}</p>
            <p> email: {user.email}</p>
            <p> address: {user.address}</p>
            <p> phone: {user.phone}</p>
            <p> status: {user.status}</p>
            <p> created_at: {user.created_at}</p>
          </div>
        );
      })}
    </div>
  );
}
