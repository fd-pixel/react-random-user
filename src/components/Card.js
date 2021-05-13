import React from "react";
import "./Card.css";
import { useState, useEffect } from "react";
import axios from "axios";
import emailpic from "../assets/email.svg";
import phonepic from "../assets/phone.svg";
import locationpic from "../assets/location.svg";

const Card = () => {
  const [userList, setUserList] = useState([]);

  const getData = () => {
    axios.get("https://randomuser.me/api/").then((res) => {
      //   console.log(res.data.results);
      setUserList(res.data.results);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="main">
      <div id="container">
        {userList?.map((user, index) => (
          <div key={index}>
            <div className="content1 person pic">
              <img src={user.picture.thumbnail} alt="" srcset="" />
              <span className="content name">
                {user.name.title} {user.name.first} {user.name.last}
              </span>
            </div>
            <div className="content1 email pic">
              <img src={emailpic} alt="" srcset="" />

              <span className="content emailinfo">{user.email}</span>
            </div>
            <div className="content1 phone pic">
              <img src={phonepic} alt="" srcset="" />
              <span className="content phoneinfo">{user.phone}</span>
            </div>
            <div className="content1 location pic">
              <img src={locationpic} alt="" srcset="" />

              <span className="content locationinfo">
                {user.location.city}-{user.location.country}
              </span>
            </div>
            <div className="content2 ageinfo">Age: {user.dob.age}</div>
            <div className="content2 regdate">
              Register Date: {user.registered.date.slice(0, 10)}
            </div>
          </div>
        ))}
      </div>
      <button onClick={getData}>Random User</button>
    </div>
  );
};

export default Card;
