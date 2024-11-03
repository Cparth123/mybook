"use client";
import React, { useEffect, useState } from "react";
import { Edit, Delete, Add, Download } from "@mui/icons-material"; // Material UI Icons
import * as XLSX from "xlsx"; // Import XLSX package
import Filter from "../compoents/Filter";

function Page() {
  const [value, SetValue] = useState("days");

  

  const [data, setData] = useState([
    {
      id: 1,
      incomeName: "Salary",
      incomeAmount: 5000,
      expenseName: "Rent",
      expenseAmount: 2000,
      total: 3000,
    },
    {
      id: 2,
      incomeName: "Freelance",
      incomeAmount: 7000,
      expenseName: "Groceries",
      expenseAmount: 3000,
      total: 4000,
    },
  ]);

  // Filter state
  const [filter, setFilter] = useState("all");

  // Handle adding new data
  const handleAdd = () => {};

  // Handle editing data
  const handleEdit = (id) => {
    // console.log("Edit row with id:", id);
  };

  // Handle removing data
  const handleRemove = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleDownload = () => {
    const worksheetData = data.map((item) => ({
      "Income Name": item.incomeName,
      "Income Amount": item.incomeAmount,
      "Expense Name": item.expenseName,
      "Expense Amount": item.expenseAmount,
      Total: item.total,
    }));

    // Create a new workbook and worksheet
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(worksheetData);

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Data");

    // Trigger download
    XLSX.writeFile(wb, "table_data.xlsx");
  };

  // Filtered data based on filter selection
  const filteredData =
    filter === "all" ? data : data.filter((item) => item.total > 0);

  return (
    <div className="px-4 pb-3">
      {/* Filter dropdown */}
      <h6 className="text-center text-2xl font-medium">your {value} data</h6>
      <div className="max-w-[150px]">
        <Filter savabtn={false} SetValue={SetValue} />
      </div>

      {/* Income Table */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-2">Income Table</h2>
        <div className="w-[100%] p-3 overflow-x-auto shadow-lightmode dark:shadow-customshadow rounded-lg">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className=" text-start b p-2">
                  Income Name
                </th>
                <th className=" text-green-500 !text-start  p-2">
                  Income Amount
                </th>
                <th className=" !text-end  p-2">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="!font-bold">
              {data.map((item) => (
                <tr key={item.id}>
                  <td className=" p-2">
                    {item.incomeName}
                  </td>
                  <td className=" text-green-500 p-2">
                    {item.incomeAmount}
                  </td>
                  <td className=" p-2 flex justify-end gap-2">
                    {/* Edit button */}
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => handleEdit(item.id)}
                    >
                      <Edit />
                    </button>
                    {/* Delete button */}
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleRemove(item.id)}
                    >
                      <Delete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Expense Table */}
      <div>
        <h2 className="text-lg font-bold mb-2">Expense Table</h2>
        <div className="w-[100%] p-3 overflow-x-auto shadow-lightmode dark:shadow-customshadow rounded-lg">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className=" text-start  p-2">
                  Expense Name
                </th>
                <th className=" text-red-500 !text-start  p-2">
                  Expense Amount
                </th>
                <th className=" !text-end  p-2">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="!font-bold">
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="  p-2">
                    {item.expenseName}
                  </td>
                  <td className="  text-red-500 p-2">
                    {item.expenseAmount}
                  </td>
                  <td className="  p-2 flex justify-end gap-2">
                    {/* Edit button */}
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => handleEdit(item.id)}
                    >
                      <Edit />
                    </button>
                    {/* Delete button */}
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleRemove(item.id)}
                    >
                      <Delete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Button */}
      <button
        className="mt-4 bg-green-500 text-white p-2 rounded hover:bg-green-600"
        onClick={handleAdd}
      >
        <Add /> Add Entry
      </button>

      {/* Download Button */}
      <button
        className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 flex items-center"
        onClick={handleDownload}
      >
        <Download className="mr-2" /> Export to Excel
      </button>
    </div>
  );
}

export default Page;
