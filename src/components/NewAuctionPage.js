import React from "react";
import { useState } from "react";
import AuctionHeader from "./AuctionHeader";

const NewAuctionPage = () => {
  const categories = [
    "Pokemon",
    "Hockeykort",
    "Digimon",
    "Magic, The Gathering",
    "Fotbollskort",
  ];

  const [auctionList, setAuctionList] = useState([]);

  const [auction, setAuction] = useState({
    image: "",
    category: "",
    name: "",
    description: "",
    bidPrice: "",
    buyout: "",
    endDate: "",
  });

  const handleAuctionSubmit = (e) => {
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
      <div className="new-auction-page-container">
        <h1>Post new auction!!</h1>
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
              onChange={handleChange}
              type="file"
              class="form-control"
              id="inputGroupFile02"
              name="image"
            />
            <label class="input-group-text" for="inputGroupFile02">
              Upload
            </label>
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
