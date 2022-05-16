import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState, useEffect} from "react";
function OrderModal(props) {
  const [delivery, setDelivery] = useState();


  /*const getAllDeliveriesModal = () => {
    DeliveryService.getAllDeliveries().then((res) => {
      console.log(res)
      setDeliveries(res.data.CompanyName)
      console.log(deliveries)
    })
  }*/

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;

    setDelivery(value);
    console.log(value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.order.Name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div>
            Status: {props.order.Status}
            <br />
            Date aquired: {props.order.Date}
            <br />
            Type: {props.order.Type}
            <br />
            Price: {props.order.Price}
            <br />
            <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Delivery Options:
            </label>
            <select
              onChange={handleChange}
              className="form-select"
              id="endTime"
              name="endTime"
            >
              <option>Choose...</option>
              {props.deliveries?.map((object, i) => {
                return (
                  <option
                    key={i}
                    value={
                      object.companyName
                    }
                  >
                    {object.companyName}
                  </option>
                );
              })}
            </select>
          </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit}>Ok</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OrderModal;