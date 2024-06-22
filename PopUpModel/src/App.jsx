import { useState } from "react";



export default function App() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal
          id={"custom-id"}
          header={<h1>PopUp</h1>}
          onClose={onClose}
          body={
            <div>
              Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Iusto, provident? Iure ducimus sed consectetur error id,
              eligendi similique ab, voluptate aut, quod optio omnis unde.
              Laboriosam tenetur vero non expedita dolor sit amet consectetur
              adipisicing elit. Veritatis esse commodi facilis sunt aliquam nam
              omnis amet dolor repellendus quasi!
            </div>
          }
        />
      )}
    </div>
  );
}


function Modal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, provident? Iure ducimus sed consectetur error id, eligendi similique ab, voluptate aut, quod optio omnis unde. Laboriosam tenetur vero non expedita?</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
