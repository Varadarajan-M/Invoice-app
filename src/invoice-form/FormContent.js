import React from "react";

function Form() {
  return (
    <div className="content-form">
      <label>Bill From</label>
      <div className="row">
        <div className="col mt-2">
          <label>Street Address</label>
          <input
            type="text"
            className="form-control"
            id="from-street-address"
          />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-sm-6  col-lg-4  col-6 ">
          <label>City</label>
          <input type="text" className="form-control" id="from-city" />
        </div>
        <div className="col-sm-6  col-lg-4 col-6 ">
          <label>Post Code</label>
          <input type="text" className="form-control" id="from-postcode" />
        </div>

        <div className="col-sm-12 col-lg-4 col-12 mt-4 mt-md-0">
          <label>Country</label>
          <input type="text" className="form-control" id="from-country" />
        </div>
      </div>
      <div className="row mt-4">
        <label>Bill To</label>
      </div>
      <div className="row">
        <div className="col mt-3">
          <label>Client Name</label>
          <input type="text" className="form-control" id="client-name" />
        </div>
      </div>
      <div className="row">
        <div className="col mt-3">
          <label>Client Email</label>
          <input type="text" className="form-control" id="client-email" />
        </div>
      </div>
      <div className="row">
        <div className="col mt-3">
          <label>Street Address</label>
          <input
            type="text"
            className="form-control"
            id="from-street-address"
          />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-sm-6  col-lg-4  col-6 ">
          <label>City</label>
          <input type="text" className="form-control" id="from-city" />
        </div>
        <div className="col-sm-6  col-lg-4 col-6 ">
          <label>Post Code</label>
          <input type="text" className="form-control" id="from-postcode" />
        </div>

        <div className="col-sm-12 col-lg-4 col-12 mt-4 mt-md-0">
          <label>Country</label>
          <input type="text" className="form-control" id="from-country" />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <label>Invoice Date</label>
          <input type="text" className="form-control" id="invoice-date" />
        </div>
        <div className=" col">
          <label>Payment Terms</label>
          <input type="text" className="form-control" id="payment-terms" />
        </div>
      </div>
      <div className="row">
        <div className="col mt-4">
          <label>Description</label>
          <input type="text" className="form-control" id="description" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-4">
          <button type="button" className="btn btn-primary w-100" id="add-new">
            Add New Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
