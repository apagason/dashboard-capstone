import React from "react";
import { Container } from "react-bootstrap";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

export default function Discover() {
  return (
    <div className="discover mb-5 text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
      <Container>
        <div className="text-center">
          <h1 className="text-black py-2 mb-3">What Ultra Foundation Does?</h1>
          <div className="seperator"></div>
        </div>

        <div className="d-sm-flex pt-5 align-items-center justify-content-center">
          <div className=" text-warning w-50 d-none d-sm-block">
            <VolunteerActivismOutlinedIcon sx={{ fontSize: 300 }} />
          </div>
          <div className="dis-box">
            <h3 className="text-center text-black mt-5">DONATION PROGRAM</h3>
          </div>
        </div>
      </Container>
    </div>
  );
}
