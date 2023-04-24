import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import alreno from "../images/alreno.png";
import aurelio from "../images/aurell.jpg";
import Checkbox from "@mui/material/Checkbox";

const Form = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <body id="nightcarbg">
      <div className="allreg">
        <div className="forlogin">
          <div className="loginfields">
            <TextField
              label="username"
              id="outlined-size-small"
              size="small"
              style={{ backgroundColor: "white", borderRadius: "4px" }}
            />
            <TextField
              classes={{ backgroudColor: "white" }}
              label="password"
              id="outlined-size-small"
              size="small"
              style={{ backgroundColor: "white", borderRadius: "4px" }}
              // type="password"
            />
            <Button variant="contained">Log in</Button>
          </div>
          <div className="title-logo">
            <h1>LOREM IMPSUM</h1>
          </div>
          <div className="alreno">
            <img className="alreno-logo" src={alreno} />
          </div>
        </div>
        <div className="for-register">
          <div className="register-display">
            <div className="register-fields">
              <TextField
                label="First name"
                id="outlined-size-small"
                size="small"
                style={{ backgroundColor: "white", borderRadius: "4px" }}
              />
            </div>
            <div className="register-fields">
              <TextField
                label="Last name"
                id="outlined-size-small"
                size="small"
                style={{ backgroundColor: "white", borderRadius: "4px" }}
              />
            </div>
          </div>
          <div className="register-display">
            <div className="register-fields">
              <TextField
                label="Email"
                id="outlined-size-small"
                size="small"
                style={{ backgroundColor: "white", borderRadius: "4px" }}
              />
            </div>
            <div className="register-fields">
              <TextField
                label="Password"
                id="outlined-size-small"
                size="small"
                style={{ backgroundColor: "white", borderRadius: "4px" }}
              />
            </div>
          </div>
          <div className="register-display">
            <div className="register-fields">
              <TextField
                label="Birthday"
                id="outlined-size-small"
                type="date"
                defaultValue="Birthday"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
                style={{ backgroundColor: "white", borderRadius: "4px" }}
              />
            </div>
            <div className="register-fields">
              <Checkbox {...label} defaultChecked size="small" />
              <text> Terms and Conditions</text>
            </div>
          </div>
          <div className="aurell">
            <img className="aurell-logo" src={aurelio} />
          </div>
        </div>
      </div>
    </body>
    //   <div>
    //   <button class="button button1">Login</button>
    // </div>
  );
};

export default Form;
