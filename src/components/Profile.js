import React from "react";

const Profile = (props) => {
  console.log(props);
  return (
    <form>
      <label htmlFor="name">Name: </label>
      <input type="text" value={props[0]} id="name" />
      <label htmlFor="email">Email: </label>
      <input type="email" value={props[1]} id="email" />
      <label htmlFor="phone">Phone: </label>
      <input type="tel" value={props[2]} id="phone" />
    </form>
  );
};
export default Profile;
