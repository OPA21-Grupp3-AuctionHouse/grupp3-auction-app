import React from "react";
import { useContext, useState } from "react";
import PhotoService from "../services/PhotoService";
import ProductService from "../services/ProductService";

import { DataContext } from "./AuctionPage";

const NewAuctionPage = () => {
  const provider = useContext(DataContext);
  const [formData, setFormData] = useState();
  const [imagePreview, setImagePreview] = useState("");

  const categories = [
    "Baseball Cards",
    "Football Cards",
    "Hockey Cards",
    "Pokémon",
    "Magic: The Gathering",
    "Sorcerer",
    "Final Fantasy",
    "Star Realms/Hero Realms",
    "Skyforge",
    "Yu-Gi-Oh!",
    "Android: Netrunner",
    "MetaZoo",
    "Other",
  ];

  /*
  let allCategories = provider.products.map((product) => product.category);
  let categories = allCategories.filter(
    (item, i, arr) => arr.indexOf(item) === i
  );
  */

  const timeCategoriesValues = {
    Oneday: 86400000,
    Twodays: 172800000,
    Oneweek: 604800000,
    Twoweeks: 1209600000,
    Onemonth: 2592000000,
  };

  const [auction, setAuction] = useState({
    image: "",
    category: "",
    name: "",
    description: "",
    price: "",
    endTime: "",
    ownerId: "",
    orderStatus: "Active",
    buyout: "",
    winner: "",
  });

  const handleChangeImage = (e) => {
    e.preventDefault();
    let tempImage = e.target.files[0];
    setImagePreview(URL.createObjectURL(tempImage));

    console.log(tempImage);
    setFormData(tempImage);
    console.log(formData);
  };

  const imageSubmit = (e) => {
    e.preventDefault();
  };

  const handleAuctionSubmit = (e) => {
    e.preventDefault();
    console.log(auction);
    if (parseInt(auction.price) > parseInt(auction.buyout)) {
      alert("Buyout must be higher than price");
    } else if (auction.category && auction.name && auction.description) {
      var bodyFormData = new FormData();
      bodyFormData.append("file", formData);
      console.log(bodyFormData);
      PhotoService.addPhoto(bodyFormData).then((res) => {
        auction.image = res.data;

        setImagePreview("");
        ProductService.createProduct(auction).then((res) => {
          setAuction({
            image: "",
            category: "",
            name: "",
            description: "",
            price: "",
            endTime: "",
            ownerId: provider.user,
            orderStatus: "Active",
            buyout: "",
            winner: "",
          });

          ProductService.getProducts().then((res) => {
            provider.setProducts(res.data);
          });
        });
      });
      document.querySelector(".new-auction-page-form").reset();
      document.querySelector(".new-auction-page-form-secondary").reset();
    } else {
      alert("Enter all fields");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setAuction({ ...auction, [name]: value });

    if (auction.ownerId === "") {
      setAuction({ ...auction, ownerId: provider.user });
    }
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
              maxLength="30"
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
                return (
                  <option key={category} value={category}>
                    {category}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Description:
            </span>
            <input
              type="text"
              maxLength="550"
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
              type="number"
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
        <form className="new-auction-page-form-secondary">
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Buyout:
            </span>
            <input
              type="number"
              min={auction.price + 1}
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
            id="post-auction"
            className="submit-button-profile"
            onClick={handleAuctionSubmit}
          >
            Submit
          </button>
        </form>
        {imagePreview !== "" ? (
          <img
            src={imagePreview}
            id="uploaded-img"
            className="new-auction-page-picture"
            alt="Preview av bild"
            type="image/*"
          />
        ) : (
          <img
            src="https://preyash2047.github.io/assets/img/no-preview-available.png?h=824917b166935ea4772542bec6e8f636"
            id="preview-img"
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
