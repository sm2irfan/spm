import React from "react";

const Listcustomeritem = ({ promotion }) => {

  return (
    <tbody>
      <tr>
      <th>
                     <img src={promotion.photo} height="130" width="130" />
        </th>
        <th>{promotion.name}</th>
        <th>{promotion.detail}</th>
        <th>{promotion.discount}</th>
        <th>{promotion.from}</th>
        <th>{promotion.to}</th>
       
      </tr>
    </tbody>
  );
};

export default Listcustomeritem;
