import React, { useContext } from "react";
import { DataContext } from "./AuctionPage";

const OrderSort = () => {
  const orderProvider = useContext(DataContext);

  const sortOrderColumn = (e) => {
    e.preventDefault();

    if (e.target.value === "Name") {
      if (orderProvider.filteredView) {
        orderProvider.setSearchResult([
          ...orderProvider.searchResult.sort(compareName),
        ]);
      } else {
        orderProvider.setOrderProducts([
          ...orderProvider.orderProducts.sort(compareName),
        ]);
      }
    } else if (e.target.value === "Status") {
      if (orderProvider.filteredView) {
        orderProvider.setSearchResult([
          ...orderProvider.searchResult.sort(compareStatus),
        ]);
      } else {
        orderProvider.setOrderProducts([
          ...orderProvider.orderProducts.sort(compareStatus),
        ]);
      }
    } else if (e.target.value === "Date") {
      if (orderProvider.filteredView) {
        orderProvider.setSearchResult([
          ...orderProvider.searchResult.sort(compareDate),
        ]);
      } else {
        orderProvider.setOrderProducts([
          ...orderProvider.orderProducts.sort(compareDate),
        ]);
      }
    } else if (e.target.value === "Type") {
      if (orderProvider.filteredView) {
        orderProvider.setSearchResult([
          ...orderProvider.searchResult.sort(compareType),
        ]);
      } else {
        orderProvider.setOrderProducts([
          ...orderProvider.orderProducts.sort(compareType),
        ]);
      }
    } else if (e.target.value === "Price") {
      if (orderProvider.filteredView) {
        orderProvider.setSearchResult([
          ...orderProvider.searchResult.sort(comparePrice),
        ]);
      } else {
        orderProvider.setOrderProducts([
          ...orderProvider.orderProducts.sort(comparePrice),
        ]);
      }
    }
  };

  return (
    <div className="orderSort-outer-container">
      <button className="images-head">Image</button>
      <button className="names-head" onClick={sortOrderColumn} value="Name">
        Name
      </button>
      <button className="status-head" onClick={sortOrderColumn} value="Status">
        Status
      </button>
      <button className="date-head" onClick={sortOrderColumn} value="Date">
        Date
      </button>
      <button className="type-head" onClick={sortOrderColumn} value="Type">
        Type
      </button>
      <button className="prices-head" onClick={sortOrderColumn} value="Price">
        Price
      </button>
    </div>
  );

  function compareName(a, b) {
    if (a.Name.toLowerCase()  < b.Name.toLowerCase()) {
      return -1;
    }
    if (a.Name.toLowerCase() > b.Name.toLowerCase()) {
      return 1;
    }
    return 0;
  }

  function compareStatus(a, b) {
    if (a.Status.toLowerCase() < b.Status.toLowerCase()) {
      return -1;
    }
    if (a.Status.toLowerCase() > b.Status.toLowerCase()) {
      return 1;
    }
    return 0;
  }
  function compareType(a, b) {
    if (a.Type.toLowerCase() < b.Type.toLowerCase()) {
      return -1;
    }
    if (a.Type.toLowerCase() > b.Type.toLowerCase()) {
      return 1;
    }
    return 0;
  }

  function compareDate(a, b) {
    if (a.Date < b.Date) {
      return -1;
    }
    if (a.Date > b.Date) {
      return 1;
    }
    return 0;
  }

  function comparePrice(a, b) {
    return a.Price - b.Price;
  }
};
export default OrderSort;
