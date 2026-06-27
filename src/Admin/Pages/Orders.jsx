import React from "react";

const Orders = () => {
  const orders = [
    {
      _id: "ORD001",
      customer: "Obaid",
      amount: 2999,
      status: "Processing",
      date: "26 June 2026",
    },
    {
      _id: "ORD002",
      customer: "Ahmed",
      amount: 4999,
      status: "Delivered",
      date: "25 June 2026",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-6">Orders</h1>

      <div className="overflow-x-auto">
        <table className="w-full text-left">

          <thead className="border-b">
            <tr>
              <th className="py-4">Order ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="border-b hover:bg-gray-50">

                <td className="py-4">{order._id}</td>
                <td>{order.customer}</td>
                <td>₹{order.amount}</td>
                <td>{order.date}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm
                    ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>

                <td>
                  <button className="bg-[#C9A227] text-white px-4 py-2 rounded">
                    Update
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Orders;