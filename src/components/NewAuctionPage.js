import React from "react";
import { useContext, useState } from "react";
import ProductService from "../services/ProductService";

import AuctionPage, { DataContext, getProducts } from "./AuctionPage";

const NewAuctionPage = () => {
  const provider = useContext(DataContext);

  let allCategories = provider.products.map((product) => product.category);
  let categories = allCategories.filter(
    (item, i, arr) => arr.indexOf(item) === i
  );

  const timeCategoriesValues = {
    Oneday: 86400000,
    Twodays: 172800000,
    Oneweek: 604800000,
    Twoweeks: 1209600000,
    Onemonth: 2592000000,
  };

  const [auction, setAuction] = useState({
    imageURL: "",
    category: "",
    name: "",
    description: "",
    price: "",
    endTime: "",
    ownerId: provider.user.id,
    orderStatus: "bidding",
    buyout: "",
  });

  const handleChangeImage = (e) => {
    e.preventDefault();
    const tempImage = URL.createObjectURL(e.target.files[0]);
    setAuction({ ...auction, imageURL: tempImage });
  };

  const handleAuctionSubmit = (e) => {
    e.preventDefault();
    if (auction.category && auction.name && auction.description) {
      ProductService.createProduct(auction).then((res) => {
        setAuction({
          name: "",
          category: "",
          description: "",
          buyout: "",
          startPrice: "",
        });
        ProductService.getProducts().then((res) => {
          provider.setProducts(res.data);
          console.log(res.data);
        });
      });
    } else {
      alert("enter values");
    }
  };

  console.log(auction);
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setAuction({ ...auction, [name]: value });
  };

  return (
    <>
      <div className="new-auction-page-container">
        <form className="new-auction-page-form">
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Name:
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              id="name"
              name="name"
              value={auction.name}
              onChange={handleChange}
            />
          </div>

          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Category:
            </label>
            <select
              onClick={handleChange}
              className="form-select"
              id="category"
              name="category"
            >
              <option>Choose...</option>
              {categories.map((category) => {
                return <option value={category}>{category}</option>;
              })}
            </select>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Description:
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              id="description"
              name="description"
              value={auction.description}
              onChange={handleChange}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Start price:
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              id="price"
              name="price"
              value={auction.price}
              onChange={handleChange}
            />
          </div>
        </form>
        <form className="new-auction-page-form">
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Buyout:
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              id="buyout"
              name="buyout"
              value={auction.buyout}
              onChange={handleChange}
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Auction time:
            </label>
            <select
              onClick={handleChange}
              className="form-select"
              id="endTime"
              name="endTime"
            >
              <option>Choose...</option>
              {Object.keys(timeCategoriesValues).map((category, i) => {
                return (
                  <option
                    key={i}
                    value={
                      new Date(
                        new Date().getTime() + timeCategoriesValues[category]
                      )
                    }
                  >
                    {category.substring(0, 3) + " " + category.substring(3)}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="input-group mb-3">
            <input
              onChange={handleChangeImage}
              type="file"
              className="form-control"
              id="inputGroupFile02"
              name="image"
            />
          </div>
          <button
            className="submit-button-profile"
            onClick={handleAuctionSubmit}
          >
            Submit
          </button>
        </form>
        {auction.imageURL !== "" ? (
          <img
            src={auction.imageURL}
            className="new-auction-page-picture"
            alt="Preview av bild"
            type="image/*"
          />
        ) : (
          <img
            src="https://preyash2047.github.io/assets/img/no-preview-available.png?h=824917b166935ea4772542bec6e8f636"
            className="new-auction-page-picture"
            alt="Preview av bild"
            type="image/*"
          />
        )}
      </div>
    </>
  );
};

export default NewAuctionPage;

/*
<div className="input-group mb-3">
<span className="input-group-text" id="inputGroup-sizing-default">
  End Date:
</span>
<input
  placeholder="Select date"
  type="date"
  id="example"
  className="form-control"
  name="endDate"
  onChange={handleChange}
/>
</div>
*/
