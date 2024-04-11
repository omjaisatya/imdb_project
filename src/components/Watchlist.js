import React from "react";

function Watchlist() {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-900 shadow-md m-5 ">
      <table className="w-full border-collapse bg-white text-left text-5m text-gray-700">
        <thead className="bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Name
            </th>
            <th>
              <div className="flex">
                <div>Rating</div>
              </div>
            </th>
            <th>
              <div className="flex">
                <div>Popularity</div>
              </div>
            </th>
            <th>
              <div className="flex">
                <div>Genre</div>
              </div>
            </th>
            <th>
              <div className="flex">
                <div>Delete</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          <tr className="hover:bg-gray-50 ">
            <td className="flex items-center px-6 py-4 font-normal text-gray-900 space-x-2">
              <img className="h-[6rem] w-[10rem] object-fill" src="" alt="" />
              <div className="font-medium text-gray-700 text-sm">Sci-fi</div>
            </td>
            <td className="pl-6 py-4 ">9.5</td>
            <td className="pl-6 py-4">9.3</td>
            <td className="pl-6 py-4">Action</td>
            <td className="pl-6 py-4">
              <button className="text-red-600 ">Delete Me</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Watchlist;
