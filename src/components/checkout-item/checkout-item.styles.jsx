import styled from "styled-components";

export const Name = styled.span``;

export const Quantity = styled.span`
  display: flex;

  .arrow {
    cursor: pointer;
  }

  .value {
    margin: 0 10px;
  }
`;

export const Price = styled.span``;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  ${Name},
  ${Price},
  ${Quantity} {
    width: 23%;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export const RemoveButton = styled.span`
  padding-left: 12px;
  cursor: pointer;
`;

// .checkout-item-container {

//   .image-container {

//     img {

//   }

//   .name,
//   .quantity,
//   .price {

//   }

//   .quantity {
//     display: flex;

//   }

//   .remove-button {

//   }
// }
