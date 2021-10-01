import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import AdminPaymentItem from "./listcustomeritem";
import CustomerFooter from "../../customerFooter";
import CustomerNavigation from "../../customerNavigation";

const AdminPayment = () => {
  const [promotion, setpromotion] = useState([]);
  const [SearchPromotion, setSearchPromotion] = useState(false);
  const [SearchID, setSearchID] = useState("");

  useEffect(() => {
    const sendRequest = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/promotion/getallpromotion"
      );
      setpromotion(data.data);
      console.log(data.data)
    };
    sendRequest();
  }, []);

  useEffect(() => {
    const data2 = promotion.filter(function (mov) {
      if (mov.name.includes(SearchID)) {
        return mov;
      } else {
        return null;
      }
    });

    if (data2.length !== 0) {
      setSearchPromotion(data2);
    }
  }, [SearchID]);

  return (
    <React.Fragment>
      <CustomerNavigation/>
      <center>
      <h1 class="text-center"> Promotional Details </h1>
      <br></br>

      <div className="col-md-11">
        <div class="input-group mb-3">
          <input
            class="form-control"
            type="text"
            placeholder="Find By ID..."
            onChange={(e) => {
              setSearchID(e.target.value);
            }}
          />
        </div>

        <br></br>
        <table class="table table-dark">
          <thead>
            <tr>
            <th>Photo</th>
               <th>Name</th>
               <th>Detail</th>
               <th>Discount (Rs)</th>
               <th>From</th>
               <th>To</th>
            </tr>
          </thead>
          {(SearchPromotion || promotion).map((promotion) => (
            <AdminPaymentItem promotion={promotion} />
          ))}
        </table>
      </div>
      </center>
      <CustomerFooter/>
    </React.Fragment>
  );
};

export default AdminPayment;
