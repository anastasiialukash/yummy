import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styled from "styled-components";
import { formatCurrency } from "../../utils";

const trashIcon = "/assets/trash-outline.svg"
const plusIcon = "/assets/add-circle-outline.svg"
const minusIcon = "/assets/remove-circle-outline.svg"

const CartItem = ({ product }) => {
    const { removeFromCart, increase, decrease } = useContext(CartContext);

    return (
        <SingleCartItem>
            <div>
                <h5>{product.name}</h5>
                <p>{formatCurrency(product.price)}</p>
            </div>
            <BtnContainer>
                <button
                    onClick={() => increase(product)}
                    className="btn btn-primary btn-sm mr-2 mb-1"
                >
                    <Icon src={plusIcon} alt="" />
                </button>

                <div>
                    <p>amount: {product.quantity}</p>
                </div>

                {product.quantity > 1 && (
                    <button onClick={() => decrease(product)} className="btn">
                        <Icon src={minusIcon} alt="" />
                    </button>
                )}

                {product.quantity === 1 && (
                    <button onClick={() => removeFromCart(product)} className="btn">
                        <Icon src={trashIcon} alt="" />
                    </button>
                )}
            </BtnContainer>
        </SingleCartItem>
    );
};

const SingleCartItem = styled.div`
  border-bottom: 1px solid gray;
  padding: 60px 10px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 150%;

  &:nth-child(1) {
    border-top: 1px solid gray;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Icon = styled.img`
  width: 1.6rem;
  height: auto;
`;

export default CartItem;