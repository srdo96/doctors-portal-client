import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const { data: users, isLoading } = useQuery("users", () =>
    fetch("http://localhost:5000/user").then((res) => res.json(2))
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      Users {users.length}
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <UserRow key={user._id} i={i} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
