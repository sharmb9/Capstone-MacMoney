import React, {useState} from "react";
import { Handle } from "react-flow-renderer";

import { Typography, Popover, Modal, IconButton } from "@material-ui/core";
import FeedbackPopUp from "./FeedbackPopup";
function Node ({data})  {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpen = () => {
    setAnchorEl(true);
  };
  
  function popOver() {
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Typography>The content of the Popover.</Typography>
      </Popover>
    </div>;
  }
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const startHandle = (props) => {
    if (props !== "Start") {
      return (
      <Handle
        type="target"
        position="top"
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      );
    }
  };

  const hid = (props) => {
    if (props){
      return false
    }
    return true
  }
  return (
    <>
      {startHandle(data.label)}
      {data.label}

      <input type="button" class="nodrag" value="here" onClick={handleOpen}  hidden={hid(data.feedback)}>
      </input>
      <Modal open={anchorEl} onClose={handleClose}>
        <FeedbackPopUp
          opened={anchorEl}
          feedback={data.feedback}
          button={handleClose}
        ></FeedbackPopUp>
      </Modal>
      
      <Handle
        type="source"
        position="bottom"
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
    </>
  );

}
export default Node;
