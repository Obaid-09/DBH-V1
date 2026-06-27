import React from "react";

const Coupons = () => {
  const coupons = [
    {
      code: "DBH10",
      discount: "10%",
    },
    {
      code: "EID25",
      discount: "25%",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <div className="flex justify-between mb-8">

        <h1 className="text-3xl font-bold">
          Coupons
        </h1>

        <button className="bg-[#C9A227] text-white px-5 py-3 rounded">
          Add Coupon
        </button>

      </div>

      <table className="w-full">

        <thead className="border-b">
          <tr>
            <th className="py-4">Coupon Code</th>
            <th>Discount</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {coupons.map((coupon) => (
            <tr key={coupon.code} className="border-b">

              <td className="py-4">{coupon.code}</td>

              <td>{coupon.discount}</td>

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

export default Coupons;