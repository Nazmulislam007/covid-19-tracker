import React from "react";
import "./Table.css";

const Table = ({ countries }) => {
  return (
    <>
      <div className="table">
        <tbody>
          {countries.map(({ country, cases }) => (
            <tr>
              <td>{country}</td>
              <td>
                <strong>{cases}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </div>
    </>
  );
};

export default Table;
