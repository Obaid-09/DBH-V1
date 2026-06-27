const Products = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h1 className="text-3xl font-bold mb-6">
        Products
      </h1>

      <button className="bg-[#C9A227] px-5 py-3 rounded-lg mb-6">
        Add Product
      </button>

      <table className="w-full">

        <thead>
          <tr className="border-b">
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>

      </table>

    </div>
  );
};

export default Products;