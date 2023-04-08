import React from "react";
import { Link } from "react-router-dom";
import codeforces from "../../assets/codeforces.png";
import leetcode from "../../assets/leetcode.png";
import utkarsh from "../../assets/utkarsh.jpg";
import "./SocialCard.css";

const SocialCard = ({ user }) => {
  return (
    <div className="socialcard">
      <div className="socialcard-image">
        <img src={user.photo} alt="user-image" />
      </div>
      <div className="socialcard-details">
        <div className="socialcard-user">{user.name}</div>
        <div className="socialcard-user-rating">
          
        </div>
        <Link
          to={`/profile/${user.name ? user.name : ""}`}
          className="btn-round"
        >
          show profile
        </Link>
      </div>
    </div>
  );
};

export default SocialCard;
