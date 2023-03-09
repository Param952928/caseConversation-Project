import React, {useState} from "react";

const Navbar = () => {
  const [Sentence, setSentence] = useState();
  const [newsentence, setNewsentence] = useState();

  const submithandlertoUppper = () => {
    const a = Sentence.toUpperCase();
    setNewsentence(a);
  }
  const submithandlertoLower = () => {
    const a = Sentence.toLowerCase();
    setNewsentence(a);
  }
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#00bfff" }}
      >
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">
            Home
          </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container">
        <p style={{ fontSize: "30px" }}>Enter Your Text</p>

        <div
          className="input-group mb-3"
          style={{
            marginTop: "25px",
            cursor: "pointer",
            marginTop:"10px"
          }}
        >
          <input
            type="text"
            name="sentencetext"
            value={Sentence}
            onChange={(e) => setSentence(e.target.value)}
            placeholder="Type your Sentence"
            className="form-control"
            style={{height: "40px", border: "2px solid"}}
            // aria-label="Text input with dropdown button"
          />
          {/* <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select
          </button> */}
          {/* <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <p className="dropdown-item" href="#" onChange={(e)=>e.target.value}>
                Change to UpperCase
              </p>
            </li>
            <li>
              <p className="dropdown-item" href="#">
                Change to LowerCase
              </p>
            </li>
          </ul> */}
        </div>
        <button onClick={submithandlertoUppper} className="btn btn-primary">
          toUpperCase
        </button>
        <button
          onClick={submithandlertoLower}
          className="btn btn-primary"
          style={{ marginLeft: "5px" }}
        >
          toLowerCase
        </button>
      </div>
      <div
        className="container"
        style={{
          marginTop: "25px",
          cursor: "pointer",
        }}
      >
        <p style={{ fontSize: "40px" }}>Your Result</p>
        <input
          type="text"
          value={newsentence}
          className="form-control"
          aria-label="Text input with dropdown button"
          style={{ height: "100px", border: "2px solid" }}
        />
      </div>
    </div>
  );
};

export default Navbar;
