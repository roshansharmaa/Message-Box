import React, { useEffect, useState } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Don't forget to import the CSS for styling
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { MdCancel } from "react-icons/md";
function XAdmin({
  setmainAdmin,
  setadminpannel,
  setactivateeverything,
  activateeverything,
  setenable,
}) {
  const [ActivateEdting, setActivateEdting] = useState("");
  const [Adminpassword, setAdminpassword] = useState("");

  const checkpassword = () => {
    if (Adminpassword == "XXXXXXXXXX") {
      setactivateeverything("true");
      setadminpannel(true);
      setenable(true)
      setmainAdmin(false);

      toast("Login Successfull");
    } else {
      setadminpannel(false);
      toast("Login Failed");
    }
  };
  useEffect(() => {
  }, [activateeverything]);
  return (
    <>
      {/* {adminpannel?} */}
      <ToastContainer
        position="bottom-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      {!ActivateEdting ? (
        <Inputarea>
          <div className="maindata">
            <h1>
              Admin Page
              <MdCancel
                className="xbtn"
                onClick={() => {
                  setmainAdmin(false);
                }}
              />
            </h1>
            <h3>Only Admin can update & delet this Data</h3>
            <h4
              href=""
              onClick={() => {
                setActivateEdting(true);
              }}
            >
              <p>Yes I'm Admin</p>
            </h4>
          </div>
          <div
            className="fixed"
            onClick={() => {
              setmainAdmin(false);
            }}
          ></div>
        </Inputarea>
      ) : (
        <>
          <Inputarea>
            <div className="maindata">
              <h1>
                Enter Admin Password
                <MdCancel
                  className="xbtn"
                  onClick={() => {
                    setmainAdmin(false);
                  }}
                />
              </h1>
              <input
                type="password"
                name=""
                id=""
                placeholder="Enter Password"
                onChange={(e) => {
                  setAdminpassword(e.target.value);
                }}
              />
              <h4
                href=""
                onClick={() => {
                  setActivateEdting(true);
                  checkpassword();
                }}
              >
                <p>Submit</p>
              </h4>
            </div>
            <div
              className="fixed"
              onClick={() => {
                setmainAdmin(false);
              }}
            ></div>
          </Inputarea>
        </>
      )}
    </>
  );
}
export default XAdmin;
const Inputarea = styled.div`
  position: absolute;
  /* top: 50%; */
  width: 100%;
  z-index: 10;
  background-color: #0000005c;
  display: flex;
  place-content: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  .xbtn {
    cursor: pointer;
    color: red;
    font-size: 2.5rem;
    background-color: red;
    border-radius: 50%;
    color: white;
    transition: 0.3s ease-in;
    &:hover {
      transition: 0.3s ease-out;
      background-color: white;
      border-radius: 50%;
      color: red;
    }
  }

  h4 p {
    font-size: 1.3rem;
  }
  .fixed {
    padding: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .maindata {
    background-color: white;
    color: black;
    padding: 1rem;
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    gap: 1rem;
    border-radius: 1rem;
    h4 {
      color: #1984ff;
      text-decoration: underline;
      margin: 0%;
      cursor: pointer;
      h3 {
        margin: 0 0 20px;
      }
    }
    h1 {
      margin: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    input {
      padding: 1rem;
      font-size: 1.2rem;
      background-color: transparent;
      border: 2px solid black;
      color: black;
      letter-spacing: 1px;
    }
  }
  .submit {
    display: flex;
    justify-content: end;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    button {
      padding: 0.5rem;
      width: 20%;
      font-size: 1rem;
      border-radius: 20px;
      color: black;
      font-weight: 700;
      letter-spacing: 1px;
      background-image: linear-gradient(90deg, #8aacc5 5%, #0396ff 100%);
    }
  }
  @media screen and (max-width: 768px) {
    .maindata {
      width: 80%;
    }
    .submit {
      button {
        width: 40%;
        height: 4%.5;
        font-size: 1.4rem;
      }
    }
    .maindata h1 {
      font-size: 1.2rem;
    }
  }

  /* toast('Login Successfull') */
`;
