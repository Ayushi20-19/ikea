import React from "react";
import logo from "./ikea-logo.svg";
import "./App.css";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";

const Navbar = () => {
  return (
    <>
      <div className='msg'>Updates on safe shopping in our stores</div>
      <nav className='header'>
        <img
          className='header_logo'
          src='https://www.ikea.com/nl/en/static/ikea-logo.f88b07ceb5a8c356b7a0fdcc9a563d63.svg'
          alt=''
        />

        <div className='header_search'>
          <input
            type='text'
            className='header_search_input'
            placeholder='What are you looking for?'
          />
          <SearchIcon className='header_search_icon' />
          <CameraAltOutlinedIcon className='header_camera_icon' />
        </div>

        <div className='header_nav'>
          <div className='location'>
            {" "}
            <LocationOnOutlinedIcon className='img' />
            Tempe
          </div>
          <div className='my_profile'>
            <PersonOutlineIcon className='imgp' />
          </div>
          <div className='favourite'>
            {" "}
            <FavoriteBorderOutlinedIcon className='imgf' />
          </div>
          <div className='shoppingbag'>
            <ShoppingBasketOutlinedIcon className='imgs' />
          </div>
          <div className='menu'>
            <MenuOutlinedIcon className='imgm' />
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
