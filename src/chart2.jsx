import React, { Component, Fragment, useRef, useState } from "react";
import randomcolor from "randomcolor";

import data from "./feedback.json";

// popupbox
import FeedbackPopUp from "./components/FeedbackPop";
// material
import {Card, CardContent, CardActions,
        IconButton, Button, Stack,
        Popover, Typography,Modal} from '@mui/material';
import {ArrowForwardIos} from '@mui/icons-material/';



let depth =0;
const Cards = (props) => {
  const levelColor = randomcolor({
    count :5,
    hue : "red"
  });
  //states for popUp and feedback graph itself
  const [openedPopover, setOpenedPopover] = useState(false)
  const [openFeedBack, setOpenFeedBack] = useState(false);
//   helper functions that will be used to change states
  const feedbackOpen = ({currentTarger}) => {
    setOpenFeedBack(true);
  }
  const feedbackClose = ({currentTarger}) => {
    setOpenFeedBack(false);
  }

  const popoverOnClickOpen = ({currentTarget}) => {
    setOpenedPopover(true);
  }; 
  const popoverOnClickLeave = ({currentTarget}) => {
    
    setOpenedPopover(false);
  }

//   function that will show feedback button
  const ShowFeedbackButton = (props) => {
    if (props){
      return (
        <IconButton variant="conatined" onClick={popoverOnClickOpen}><ArrowForwardIos/></IconButton>
      )
    }
  }
  return (
    <ul>
      {props.data.map((item) => (
        <Fragment key={item.ID}>
          <li>
            <div className="card">
              <div className="card-body">
                  <Typography  component="span"> 
                      {item.Name}
                  </Typography>
                  {ShowFeedbackButton(item.feedback)}
                  <Modal open={openedPopover} onClose={popoverOnClickLeave}>
                        <FeedbackPopUp opened={openedPopover} feedback={item.feedback} button={popoverOnClickLeave}></FeedbackPopUp>
                  </Modal>
                  </div>
              <div className="card-footer" style={{ background: levelColor.at(depth)}}>
                </div>

            </div>
            {item.options?.length && <Cards data={item.options}  />}
            {increment(depth)}
          </li>
        </Fragment>
        
      ))}
    </ul>
  );
};
function increment(numb){
  ++numb
}

const Chart = () => {
    const [openFeedBack, setOpenFeedBack] = useState(false);
    //   helper functions that will be used to change states
      const feedbackToggle = ({currentTarger}) => {
        setOpenFeedBack(!openFeedBack);
      }

    
  return (

      <div className="org-tree">
        <Button variant="primary" onClick={feedbackToggle}>Click </Button>
        {openFeedBack ? <Cards data={data}  /> : null }
      </div>
  );
};

export default Chart;
