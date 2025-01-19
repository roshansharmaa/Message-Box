import React, { useState, useEffect } from "react";
// import "./Home.css";
import styled from "styled-components";
import { IoIosAddCircle } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { BsIncognito } from "react-icons/bs";
import Inputfield from "./Inputfield";
import logo from "../../fav.png";
import XAdmin from "./XAdmin";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { Data } from "../component/Data";
function Home() {
  const [adminpannel, setadminpannel] = useState("");
  const [message, setmessage] = useState([]);
  const [inpfild, setinpfild] = useState(false);
  const [mainAdmin, setmainAdmin] = useState(false);
  const [edit, setedit] = useState(false);
  const [update, setupdate] = useState(false);
  const [activateeverything, setactivateeverything] = useState(false);
  const [enable, setenable] = useState("");

  const deleteitem = async (id) => {
    try {
      activateeverything
        ? await deleteDoc(doc(Data, "second", id))
        : console.log("You are not an admin");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsCollection = collection(Data, "second");
        onSnapshot(contactsCollection, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setmessage(contactLists);
          return contactLists;
        });
      } catch (error) {}
    };
    getContacts();
  }, []);

  let inputtrue = () => {
    setinpfild(true);
  };

  useEffect(() => {}, [inpfild]);
  return (
    <>
      <Mainwrapper>
        <div className="inp">
          <img src={logo} alt="logo" />
          <h1>{adminpannel ? "Admin's page" : "Drop a Message"}</h1>
        </div>
        <button className="add" onClick={inputtrue}>
          Add a Message <IoIosAddCircle />
        </button>
        <div className="data">
          {message.map((e) => (
            <div className="first" key={e.id}>
              <div className="info">
                <div className="name">{e.Name}</div>
                <div className="msg">{e.Message}</div>
              </div>
              <div className="update">
                <button
                  className="edit"
                  onClick={() => {
                    if (enable) {
                      setedit(true);
                      setinpfild(true);
                    } else {
                      setmainAdmin(true);
                    }
                    setupdate(e.id);
                  }}
                >
                  <FaRegEdit />
                </button>
                <button
                  className="delet"
                  onClick={() => {
                    return enable ? deleteitem(e.id) : setmainAdmin(true);
                  }}
                >
                  <MdDeleteForever />
                </button>
              </div>
            </div>
          ))}
        </div>
        <a
          href="https://github.com/roshansharmaa"
          target="blank"
          className="footer"
        >
          <BsIncognito />
        </a>
      </Mainwrapper>
      <Inputfield
        setinpfild={setinpfild}
        update={update}
        inpfild={inpfild}
        message={message}
        edit={edit}
        setedit={setedit}
        adminpannel={adminpannel}
        setenable={setenable}
        enable={enable}
      />
      {mainAdmin ? (
        <XAdmin
          setinpfild={setinpfild}
          update={update}
          inpfild={inpfild}
          message={message}
          edit={edit}
          setedit={setedit}
          setmainAdmin={setmainAdmin}
          mainAdmin={mainAdmin}
          setadminpannel={setadminpannel}
          activateeverything={activateeverything}
          setactivateeverything={setactivateeverything}
          setenable={setenable}
          enable={enable}
        />
      ) : (
        <></>
      )}
    </>
  );
}
export default Home;
const Mainwrapper = styled.div`
  position: absolute;
  /* top: 50%; */
  width: 100%;
  margin: 0 auto;
  width: auto;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-image: linear-gradient(180deg, #8aacc5 5%, #0396ff 100%);
  margin: 0 auto;
  height: 100vh;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 1024px;
  /* align-items: center; */
  .inp {
    padding: 3px 20px 3px 10px;
    display: flex;
    flex-direction: row;
    width: 90%;
    /* justify-content: space-; */
    gap: 3rem;
    align-items: center;
    margin: 0 auto;
    margin-top: 10px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    /* border-radius: 20px; */
    border: 1px solid #00000087;
    box-shadow: -2px 10px 10px #00000080;
    h1 {
      color: #000;
      margin: 0;
    }
  }
  .inp input {
    width: 85%;
    padding: 0.5rem;
    border-radius: 5px;
    border: 2px solid #000;
    font-size: 1rem;
    color: black;
    letter-spacing: 1px;
    font-weight: 600;
    background-color: transparent;
    backdrop-filter: blur(10px);
  }
  .inp .btns {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  .inp img {
    height: 2rem;
    background-color: white;
    border-radius: 10px;
  }
  .data {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0rem auto 2rem;
    gap: 5px;
    height: 70vh;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid #00000087;
    padding: 1rem 0;
    box-shadow: -2px 10px 10px #00000080;
    color: black;
    overflow: scroll;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    /* height: 200vh; */
  }
  .first {
    width: 95%;
    background-image: linear-gradient(90deg, #0396ff 20%, #8aacc5 70%);
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0.1rem 0.5rem;
    border-radius: 10px;
  }
  .info {
    display: flex;
    flex-direction: column;
    overflow: scroll;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    margin: 0 5px 0 0;
  }
  .update {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    button {
      border-radius: 50%;
    }
  }
  .first .name {
    font-size: 0.8rem;
  }
  .first .msg {
    font-size: 1.2rem;
  }
  .delet {
    /* background: #000; */
    padding: 5px;
  }
  .delet {
    margin: 0 auto;
    padding: 0.5rem;
    display: flex;
    place-content: center;
    font-size: 1rem;
    background-color: red;
    border: none;
    border-radius: 5px;
    &:hover {
      background-color: #a70000;
    }
  }
  .edit {
    margin: 0 auto;
    padding: 0.5rem;
    display: flex;
    place-content: center;
    font-size: 1rem;
    background-color: #00b400;
    border: none;
    border-radius: 5px;
    &:hover {
      background-color: #007b00;
    }
  }
  .serch,
  .add {
    margin: 0 auto;
    padding: 0.5rem;
    display: flex;
    place-content: center;
    font-size: 1rem;
    background-color: #0396ff;
    border: none;
    border-radius: 5px;
    &:hover {
      background-color: #005592;
    }
  }
  .serch {
    font-size: 1.3rem;
  }
  .add {
    width: 90%;
    display: flex;
    border-radius: 20px;
    place-items: center;
    gap: 0.5rem;
    font-size: 1.2rem;
    align-items: center;
    box-shadow: 1px 5px 5px #00000080;
  }
  button {
    color: black;
    &:hover {
      color: white;
    }
  }
  @media screen and (max-width: 768px) {
    .inp {
      width: 100%;
      input {
        width: 60%;
      }
    }
    .data {
      width: 100%;
      /* padding: rem; */
    }
    .add {
      width: 100%;
    }
    .first {
      width: 85%;
    }

    .inp h1 {
      font-size: 1.5rem;
    }
  }
  .footer {
    position: fixed;
    max-width: 1024px;
    bottom: 0;
    width: 100%;
    color: white;
    text-align: center;
    margin: 0 auto;
    transition: 0.3s ease-in;
    &:hover {
      font-size: 2rem;
      transition: 0.3s ease-out;
      color: black;
    }
  }
`;
