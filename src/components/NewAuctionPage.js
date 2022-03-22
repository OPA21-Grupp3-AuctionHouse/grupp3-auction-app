import React from "react";
import { useState } from "react";

const NewAuctionPage = () => {
  const categories = [
    "Pokemon",
    "Hockeykort",
    "Digimon",
    "Magic, The Gathering",
    "Fotbollskort",
  ];

  const [auction, setAuction] = useState({
    image:
      "https://i.pinimg.com/originals/f5/1d/08/f51d08be05919290355ac004cdd5c2d6.png",
    category: "pokemon",
    name: "pikachu",
    description: "BEST POKEMON IN TOWN",
    bidPrice: "10",
    buyout: "100",
    endDate: "2022-02-03",
  });

  return (
    <>
      <div className="new-auction-page-container">
        <h1>Post new auction!!</h1>

        <form>
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
              defaultValue={auction.name}
            />
          </div>

          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">
              Category:
            </label>
            <select class="form-select" id="category" name="category">
              <option selected>Choose...</option>
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
            />
          </div>
          <div class="input-group mb-3">
            <input type="file" class="form-control" id="inputGroupFile02" />
            <label class="input-group-text" for="inputGroupFile02">
              Upload
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewAuctionPage;
