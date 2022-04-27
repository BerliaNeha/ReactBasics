import React from "react";
import {Link} from "react-router-dom"
import user from "../images/user.png";

// Destructuring to use the props from ContactList parent

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  
  return (
    <div className="item">

      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
      {/* this link helps us make the email and name clickable and takes us to another page with the details of that id */}
        <Link to={{pathname:`contact/${id}`, state:{contact:props.contact}}}>
        <div>
        <div className="header">{name}</div>
        <div>{email}</div>
          </div>

        </Link>
       
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" , marginLeft:"10px" }}
        onClick={()=>props.clickHandler(id)}// click and run the anonymous arrow function
      ></i>

      <Link to= {{pathname: `/edit`, state:{contact:props.contact}}}>
       <i className="edit alternate outline icon"
        style={{ color: "green", marginTop: "7px" }}
        // click and run the anonymous arrow function
      ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
