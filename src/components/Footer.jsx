import { Link } from "@mui/material";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Footer() {
  return (
    <footer className="bg-dark py-5 position-relative">
      <div className="container">
        <div className="row text-white g-4">
          <div className="col-md-6 col-lg-4 px-5">
            <Link
              href="#"
              className="brand text-decoration-none text-white fs-4"
            >
              Ultra Foundation
            </Link>
            <p className="text-white mt-3 text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ea
              error consectetur illum? Sint voluptatibus quae, sed et
              consectetur earum?
            </p>
          </div>

          <div className="col-md-6 col-lg-4 px-5">
            <h5 className="fw-light mb-3 fs-4">Contact Us</h5>

            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <i className="bi bi-pin-map-fill"></i>
              </span>
              <span className="fw-light">
                Ultra Street, Angeles City, Pampanga, Philippines
              </span>
            </div>

            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <i className="bi bi-phone"></i>
              </span>
              <span className="fw-light">09999321456</span>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 px-5">
            <h5 className="fw-light mb-3 fs-4">Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="text-decoration-none text-muted fs-4 me-4">
                <FacebookOutlinedIcon />
              </li>
              <li className="text-decoration-none text-muted fs-4 me-4">
                <TwitterIcon />
              </li>
              <li className="text-decoration-none text-muted fs-4 me-4">
                <InstagramIcon />
              </li>
              <li className="text-decoration-none text-muted fs-4 me-4">
                <TelegramIcon />
              </li>
            </ul>
          </div>
          <Link href="#" className="position-absolute start-0 end-0 p-5">
            <i className="bi bi-arrow-up-circle text-warning h1"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}
