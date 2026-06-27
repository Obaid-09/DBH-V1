import React from "react";

const Users = () => {
  const users = [
    {
      _id: "1",
      fullname: "Obaid",
      email: "obaid@gmail.com",
      role: "Admin",
    },
    {
      _id: "2",
      fullname: "Ahmed",
      email: "ahmed@gmail.com",
      role: "User",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h1 className="text-3xl font-bold mb-6">
        Users
      </h1>

      <table className="w-full">

        <thead className="border-b">
          <tr>
            <th className="py-4">Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="border-b">

              <td className="py-4">{user.fullname}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>

              <td>
                <button className="bg-red-500 text-white px-4 py-2 rounded">
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default Users;