import React from "react";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";
import { Button } from "@mui/material";
import image from '../assets/images/banner.png'
import EditRoundedIcon from "@mui/icons-material/EditRounded";

import "./ProfileCard.scss";

const ProfileCard = () => {
  return (
    <div className="profileCardWrapper">
      <div className="profileCard">
        <div className="displayImage">
          <img className="profilePic" src={image} alt=""></img>
          {/* <FileUploadRoundedIcon className="editButton"></FileUploadRoundedIcon> */}
        <div className="profileHeader">
          <div className="profileTitle">alen dennis</div>
          <div className="memberDate">Member Since February 2017</div>
          <div className="userName">aaaa@gmail.com</div>
        </div>
        </div>
        <div className="editProfile">
          <Button className="editButton">
            Edit Profile{" "}
            <EditRoundedIcon
              style={{ "margin-left": "10px" }}
              fontSize="small"
            ></EditRoundedIcon>
          </Button>
          <Button className="logout">Logout</Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
