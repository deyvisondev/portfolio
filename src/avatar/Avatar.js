import React from 'react'
import PropTypes from "prop-types"
import avatarImage from "../assets/avatar-image.png"
import "../styles/avatar.css"

const Avatar = ({page}) => {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay-${page}`;

  return (
    <>
      <span className={spanClass}></span>
      <img src={avatarImage} className={avatarClass} alt="avatar" />
    </>
  )
}

Avatar.prototypes = {
  page: PropTypes.string.isRequired,
}

export default Avatar;
