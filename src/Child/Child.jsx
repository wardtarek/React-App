import React from "react";

export default function Child({ pro, index, del, inc, dec }) {
  return (
    <div className="bg-slate-300 flex-auto py-8 px-4 rounded-md shadow-lg relative">
      <h2 className="font-semibold">
        Name : <span className="font-normal">{pro.name}</span>
      </h2>
      <h2 className="font-semibold">
        Price : <span className="font-normal">{pro.price}</span>
      </h2>
      <h2 className="font-semibold">
        Category : <span className="font-normal">{pro.category}</span>
      </h2>
      {pro.onSale ? (
        <div className="bg-red-700 absolute top-0 end-0 rounded-md py-1 px-3 text-slate-300">
          Sale
        </div>
      ) : (
        ""
      )}
      <h2 className="font-semibold">
        Count : <span className="font-normal">{pro.count}</span>
      </h2>
      <button
        onClick={() => {
          del(index);
        }}
        className="text-red-600 border-2 border-red-600 rounded-md px-4 py-1 w-full mt-2 hover:bg-red-600 hover:text-slate-300 transition-all duration-500"
      >
        Delete
      </button>
      <button
        onClick={() => {
          inc(index);
        }}
        className="text-green-600 border-2 border-green-600 rounded-md px-4 py-1 w-full mt-2 font-semibold hover:bg-green-600 hover:text-slate-300 transition-all duration-500"
      >
        +
      </button>
      <button
        onClick={() => {
          dec(index);
        }}
        className="text-yellow-600 border-2 border-yellow-600 rounded-md px-4 py-1 w-full mt-2 font-semibold hover:bg-yellow-600 hover:text-slate-300 transition-all duration-500"
      >
        -
      </button>
    </div>
  );
}
