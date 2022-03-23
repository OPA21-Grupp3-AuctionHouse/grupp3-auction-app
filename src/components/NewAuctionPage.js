import React from "react";
import { useContext, useState } from "react";
import Products from "./data/products.json";
import { DataContext } from "./AuctionPage";

const NewAuctionPage = () => {
  const products = useContext(DataContext);

  let allCategories = products.map((product) => product.category);
  let categories = allCategories.filter(
    (item, i, arr) => arr.indexOf(item) === i
  );

  const [auctionList, setAuctionList] = useState(products);
  console.log(auctionList);
  const [auction, setAuction] = useState([
    {
      image: "",
      category: "",
      name: "",
      description: "",
      bidPrice: "",
      buyout: "",
      endDate: "",
      endTime: ""
    },
  ]);

  const handleChangeImage = (e) => {
    e.preventDefault();
    const tempImage = URL.createObjectURL(e.target.files[0]);
    setAuction({ ...auction, image: tempImage });
  };

  const handleAuctionSubmit = (e) => {
    alert("Auction posted!!");
    setAuctionList([...auctionList, auction]);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setAuction({ ...auction, [name]: value });
  };

  return (
    <>
      <h1>Post new auction!!</h1>
      <div className="new-auction-page-container">
        <form className="new-auction-page-form">
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Name:
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              id="name"
              name="name"
              onChange={handleChange}
            />
          </div>

          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">
              Category:
            </label>
            <select
              onClick={handleChange}
              class="form-select"
              id="category"
              name="category"
            >
              <option>Choose...</option>
              {categories.map((category) => {
                return <option value={category}>{category}</option>;
              })}
            </select>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Description:
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              id="description"
              name="description"
              defaultValue={auction.description}
              onChange={handleChange}
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Bid price:
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              id="bidPrice"
              name="bidPrice"
              defaultValue={auction.bidPrice}
              onChange={handleChange}
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Buyout:
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              id="buyout"
              name="buyout"
              defaultValue={auction.buyout}
              onChange={handleChange}
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              End Time:
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              id="endTime"
              name="endTime"
              defaultValue={auction.endTime}
              onChange={handleChange}
            />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              End Date:
            </span>
            <input
              placeholder="Select date"
              type="date"
              id="example"
              class="form-control"
              name="endDate"
              onChange={handleChange}
            />
          </div>

          <div class="input-group mb-3">
            <input
              onChange={handleChangeImage}
              type="file"
              class="form-control"
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
        <div>
          <img src={auction.image} className="new-auction-page-picture" />
        </div>
      </div>
    </>
  );
};

export default NewAuctionPage;
