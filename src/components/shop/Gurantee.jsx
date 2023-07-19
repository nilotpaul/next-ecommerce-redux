import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { BsArrowReturnLeft } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";

import "@/styles/gurantee.scss";

export default function Gurantee() {
  return (
    <div className="gurantee_inside">
      <div className="items-1">
        <i>
          <FaShippingFast id="shop_ico" />
        </i>
        <div className="info">
          <h4>Free Shipping</h4>
          <p>When spend minimum of ₹ 2000</p>
        </div>
      </div>
      <div className="items-2">
        <i>
          <BiSupport id="support_ico" />
        </i>
        <div className="info">
          <h4>24/7 Customer Support</h4>
          <p>Need help? contact us anytime!</p>
        </div>
      </div>
      <div className="items-3">
        <i>
          <BsArrowReturnLeft id="return_ico" />
        </i>
        <div className="info">
          <h4>Not Satisfied? Easy Return</h4>
          <p>30-day return policy</p>
        </div>
      </div>
      <div className="items-4">
        <i>
          <RiSecurePaymentFill id="payment_ico" />
        </i>
        <div className="info">
          <h4>100% Secure Payments</h4>
          <p>Visa, Masterdcard, Stripe</p>
        </div>
      </div>
    </div>
  );
}
