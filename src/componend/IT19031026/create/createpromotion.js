import React, { useState } from "react";
import axios from "axios";

const CreatePromotion = () => {
  const [newPromotion, setNewPromotion] = useState({
    name: "",
    detail: "",
    discount: 0,
    from: "",
    to: "",
    decision: "",
    photo: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", newPromotion.photo);
    formData.append("name", newPromotion.name);
    formData.append("detail", newPromotion.detail);
    formData.append("discount", newPromotion.discount);
    formData.append("from", newPromotion.from);
    formData.append("to", newPromotion.to);
    formData.append("decision", "pending");

    axios
      .post("http://localhost:4000/users/fileupload", formData)
      .then((res) => {
        console.log(res.data.data);
        alert("inserted");
        window.location = "/admin/admin-list-promotion";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChange = (e) => {
    setNewPromotion({ ...newPromotion, [e.target.name]: e.target.value });
  };

  // const onChange2 = (e) => {
  //   setNewPromotion({...newPromotion, [e.target.va'MMMM dd, yyyy']: e.target.value});
  // }

  const onPhoto = (e) => {
    setNewPromotion({ ...newPromotion, photo: e.target.files[0] });
  };

  return (
    <div className="container">
      <h1>Promotional Products Management</h1>
      <form onSubmit={onSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="subjectName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={newPromotion.name}
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="subjectName" className="form-label">
            Detail
          </label>
          <input
            type="text"
            className="form-control"
            id="detail"
            name="detail"
            value={newPromotion.detail}
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="subjectName" className="form-label">
            Discount (Rs)
          </label>
          <input
            type="text"
            className="form-control"
            id="discount"
            name="discount"
            value={newPromotion.discount}
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="subjectName" className="form-label">
            From
          </label>
          <input
            type="date"
            className="form-control"
            id="from"
            name="from"
            value={newPromotion.from}
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="subjectName" className="form-label">
            To
          </label>
          <input
            type="date"
            className="form-control"
            id="to"
            name="to"
            value={newPromotion.to}
            onChange={onChange}
          />
        </div>
        <br />
        <label htmlFor="subjectName" className="form-label">
          Picture
        </label>
        <br />
        <input
          type="file"
          accept=".png, .jpg, .jpeg, .pdf, .pptx"
          name="photo"
          onChange={onPhoto}
        />
        <br />
        <br />
        <center>
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            ADD
          </button>
        </center>
      </form>
    </div>
  );
};

export default CreatePromotion;
