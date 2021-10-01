import React from "react";

const AdminPaymentItem = ({ payment }) => {
  async function ApproveState() {
    const response = await fetch(
      `http://localhost:5000/api/payments/state/${payment._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          state: "Approved",
        }),
      }
    );

    window.location.reload();
  }

  async function DeliverState() {
    const response = await fetch(
      `http://localhost:5000/api/payments/state/${payment._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          state: "Delivered",
        }),
      }
    );

    window.location.reload();
  }

  async function RejectState() {
    await fetch(`http://localhost:5000/api/payments/${payment._id}`, {
      method: "DELETE",
    });
    window.location.reload();
  }

  return (
    <tbody>
      <tr>
        <th>{payment._id}</th>
        <td>{payment.email}</td>
        <td>{payment.address}</td>
        <td>{payment.totalPrice}</td>
        <td>{payment.state}</td>
        <td>
          <button class="btn  btn-success btn-block" onClick={ApproveState}>
            Approve
          </button>
        </td>
        <td>
          <button class="btn btn-primary btn-block" onClick={DeliverState}>
            Deliver
          </button>
        </td>
        <td>
          <button class="btn btn-danger btn-block" onClick={RejectState}>
            Reject
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default AdminPaymentItem;
