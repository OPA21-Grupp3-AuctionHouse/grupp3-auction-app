import React, { useContext } from "react";
import { DataContext } from "./AuctionPage";

const OrderSort = () => {
  const provider = useContext(DataContext);

  const sortOrderColumn = (e) => {
    e.preventDefault();

    if (e.target.value === "name") {
      if (provider.filteredView) {
        provider.setSearchResult([...provider.searchResult.sort(compareName)]);
      } else {
        provider.setProducts([...provider.products.sort(compareName)]);
      }
    } else if (e.target.value === "orderStatus") {
      if (provider.filteredView) {
        provider.setSearchResult([
          ...provider.searchResult.sort(compareStatus),
        ]);
      } else {
        provider.setProducts([...provider.products.sort(compareStatus)]);
      }
    } else if (e.target.value === "endTime") {
      if (provider.filteredView) {
        provider.setSearchResult([...provider.searchResult.sort(compareDate)]);
      } else {
        provider.setProducts([...provider.products.sort(compareDate)]);
      }
      /*    } else if (e.target.value === "Type") {
      if (provider.filteredView) {
        provider.setSearchResult([
          ...provider.searchResult.sort(compareType),
        ]);
      } else {
        provider.setOrderProducts([
          ...provider.orderProducts.sort(compareType),
        ]);
      }*/
    } else if (e.target.value === "price") {
      if (provider.filteredView) {
        provider.setSearchResult([...provider.searchResult.sort(comparePrice)]);
      } else {
        provider.setProducts([...provider.products.sort(comparePrice)]);
      }
    }
  };

  return (
    <div className="orderSort-outer-container">
      <button className="history-image-bar">Image</button>
      <button
        className="history-name-bar"
        onClick={sortOrderColumn}
        value="name"
      >
        Name
      </button>
      <button
        className="history-status-bar"
        onClick={sortOrderColumn}
        value="orderStatus"
      >
        Status
      </button>
      <button
        className="history-date-bar"
        onClick={sortOrderColumn}
        value="endTime"
      >
        Date
      </button>
      {/*       <button className="type-head" onClick={sortOrderColumn} value="Type">
        Type
      </button> */}
      <button
        className="history-price-bar"
        onClick={sortOrderColumn}
        value="price"
      >
        Price
      </button>
    </div>
  );

  function compareName(a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  }

  function compareStatus(a, b) {
    if (a.orderStatus.toLowerCase() < b.orderStatus.toLowerCase()) {
      return -1;
    }
    if (a.orderStatus.toLowerCase() > b.orderStatus.toLowerCase()) {
      return 1;
    }
    return 0;
  }
  /*   function compareType(a, b) {
    if (a.Type.toLowerCase() < b.Type.toLowerCase()) {
      return -1;
    }
    if (a.Type.toLowerCase() > b.Type.toLowerCase()) {
      return 1;
    }
    return 0;
  } */

  function compareDate(a, b) {
    if (a.endTime < b.endTime) {
      return -1;
    }
    if (a.endTime > b.endTime) {
      return 1;
    }
    return 0;
  }

  function comparePrice(a, b) {
    return a.price - b.price;
  }
};
export default OrderSort;
