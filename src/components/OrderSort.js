import React, { useContext } from "react";
import { DataContext } from "./AuctionPage";

const OrderSort = () => {
  const provider = useContext(DataContext);

  const sortOrderColumn = (e) => {
    e.preventDefault();

    if (e.target.value === "name") {
      if (provider.filteredView) {
        provider.setSearchResult([
          ...provider.searchResult.sort(compareName),
        ]);
      } else {
        provider.setOrderProducts([
          ...provider.products.sort(compareName),
        ]);
      }
    } else if (e.target.value === "orderStatus") {
      if (provider.filteredView) {
        provider.setSearchResult([
          ...provider.searchResult.sort(compareStatus),
        ]);
      } else {
        provider.setOrderProducts([
          ...provider.products.sort(compareStatus),
        ]);
      }
    } else if (e.target.value === "endTime") {
      if (provider.filteredView) {
        provider.setSearchResult([
          ...provider.searchResult.sort(compareDate),
        ]);
      } else {
        provider.setOrderProducts([
          ...provider.products.sort(compareDate),
        ]);
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
        provider.setSearchResult([
          ...provider.searchResult.sort(comparePrice),
        ]);
      } else {
        provider.setOrderProducts([
          ...provider.products.sort(comparePrice),
        ]);
      }
    }
  };

  return (
    <div className="orderSort-outer-container">
      <button className="images-head">Image</button>
      <button className="names-head" onClick={sortOrderColumn} value="name">
        Name
      </button>
      <button className="status-head" onClick={sortOrderColumn} value="orderStatus">
        Status
      </button>
      <button className="date-head" onClick={sortOrderColumn} value="endTime">
        Date
      </button>
{/*       <button className="type-head" onClick={sortOrderColumn} value="Type">
        Type
      </button> */}
      <button className="prices-head" onClick={sortOrderColumn} value="price">
        Price
      </button>
    </div>
  );

  function compareName(a, b) {
    if (a.name.toLowerCase()  < b.name.toLowerCase()) {
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
