function Navbar() { 
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
    >
     <h1
        style={{
          color: "#d3d3d3",
          backgroundColor: "darkblue",
          borderRadius: "50%",
          paddingTop: "10px",
          paddingBottom: "10px",
          marginLeft: "36%",
        }}
      >
        Lua
      </h1>{" "}
      <h1 className="mx-3" style={{ color: "#d3d3d3" }}>
        {" "}
        Pattern<br></br>Tester
      </h1> <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse mx-5"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link active" aria-current="page" href="/">
              <i className="fa fa-house-user" style={{ fontSize: "20px" }}></i>
           <br></br>  Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/montymahato/lua-pattern-tester/fork"
            >
              <i className="fa fa-code-fork" style={{ fontSize: "20px" }}></i><br></br>  Fork
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/montymahato/lua-pattern-tester/issues/new/choose"
            >
              <i className="fa fa-edit" style={{ fontSize: "20px" }}></i>{" "}
              <br></br>  Issue
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              target="_blank"
              rel="noreferrer"
              href="https://montymahato.github.io/regex-validator"
            >
              <i className="fa fa-dollar" style={{ fontSize: "20px" }}></i>{" "}
              <br></br>  Regex
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link mx-5"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/montymahato"
            >
            
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
