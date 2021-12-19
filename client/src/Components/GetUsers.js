import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../Graphql/Queries";

function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  return (
    <div>
      <h2>Get Users</h2>
      {/* {users.map((val) => {
        return <h1 key={val.id}>{val.firstName}</h1>;
      })} */}
    </div>
  );
}

export default GetUsers;
