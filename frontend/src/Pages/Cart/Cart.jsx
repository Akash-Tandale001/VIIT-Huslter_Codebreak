import axios from "axios";
import React, { useState } from "react";

const Cart = () => {
    const [list, setList] = useState([])
    const checkout = async () => {
        const res = await axios.post(
          "https://ecommerceserver-ten.vercel.app/api/auth/create-checkout-session",
          { userName: sessionStorage.getItem("userName"), list }
        );
        if (res.data.url) {
          window.location.href = res.data.url;
        } else {
          window.alert("Error in processing your request");
        }
      };
  return (
    <div>
      <div className="border-4 border-gray-500 rounded-md p-4 hover:bg-black flex justify-center">
        <p
          className="italic drop-shadow-2xl font-bold pt-2 text-purple-600 "
          style={{ fontSize: "2em", textAlign: "center" }}
        >
          Cart View
        </p>
        <div style={{
            position:"absolute",
            right:"1em",
        }}>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={checkout}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
          </svg>
          <span>Checkout</span>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
