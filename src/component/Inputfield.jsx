import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdCancel } from "react-icons/md";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { Data } from "./Data";

function Inputfield({
  setinpfild,
  inpfild,
  setedit,
  edit,
  update,
  adminpannel,
}) {
  const [name, setname] = useState(false);
  const [msg, setmsg] = useState(false);

  const [finalinp, setfinalinp] = useState(false);

  const updating = async (x) => {
    try {
      const contectref = doc(Data, "second", update);
      await updateDoc(contectref, x);
      setfinalinp(false);
      setinpfild(false);
      setedit(false);
    } catch (error) {
      console.log(error);
    }
  };
  const adding = async () => {
    try {
      const contectref = collection(Data, "second");
      console.log("object", finalinp);
      await addDoc(contectref, finalinp);
      setfinalinp(false);
      setinpfild(false);
      console.log("object", finalinp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    name || msg
      ? setfinalinp(() => {
          let obj = {
            Name: `${name}`,
            Message: `${msg}`,
          };
          setfinalinp(obj);
        })
      : console.log("Name, Message Not Found");
  }, [name, msg]);

  let inputtrue = () => {
    setinpfild(false);
  };
  let everythigfalse = () => {
    inputtrue();
    setfinalinp(false);
    setinpfild(false);
    setedit(false);
    setmsg(false);
  };

  return (
    <>
      {inpfild ? (
        <>
          <Inputarea>
            <div className="maindata">
              <h1>
                {edit ? "Update Message" : "Add Message"}
                <MdCancel className="xbtn" onClick={everythigfalse} />
              </h1>
              <input
                type="text"
                placeholder="Name"
                name=""
                id=""
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Message"
                name=""
                id=""
                onChange={(e) => {
                  setmsg(e.target.value);
                }}
              />
              <div className="submit">
                <button
                  onClick={() => {
                    edit ? (updating(finalinp), setedit(false)) : adding(),
                      everythigfalse();
                  }}
                  type="submit"
                >
                  {edit ? "Update" : "Submit"}
                </button>
              </div>
            </div>
            <div className="fixed" onClick={everythigfalse}></div>
          </Inputarea>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
export default Inputfield;
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
      h1 {
        font-size: 1.4rem;
      }
    }
    .submit {
      button {
        width: 40%;
        height: 4%.5;
        font-size: 1.4rem;
      }
    }
  }
`;
