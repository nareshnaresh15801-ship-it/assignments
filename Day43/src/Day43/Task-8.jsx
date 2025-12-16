

const ProductItem = ({ title, price, currency = "$" }) => {
  return (
    <div className="border rounded p-4 flex justify-between items-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <span className="text-gray-700 font-medium">
        {currency}
        {price}
      </span>
    </div>
  );
};

export default ProductItem;
