import React, { Component, Fragment, useRef, useState } from "react";
import randomcolor from "randomcolor";

import data from "./feedback.json";

// hover 
import ReactHover, { Trigger, Hover } from 'react-hover'
import TriggerComponent from './components/TriggerComponent'
import HoverComponent from './components/HoverComponent'


// material
import {Card, CardContent, CardActions,
        IconButton, Button, Stack,
        Popover, Typography} from '@mui/material';
import {ArrowForwardIos} from '@mui/icons-material/';


function timeout(delay){
  return new Promise(res => setTimeout(res, delay));
}
let depth =0;
const Cards = (props) => {
  const levelColor = randomcolor({
    count :5,
    hue : "red"
  });
  const [openedPopover, setOpenedPopover] = useState(false)
  const popoverAnchor = useRef(null);

  const ShowFeedbackButton = (props) => {
    if (props){
      return (
        <IconButton variant="conatined" onClick={popoverOnClickOpen}><ArrowForwardIos/></IconButton>
      )
    }
  }
  const popoverEnter = ({ currentTarget }) => {
    timeout(3000);
    setOpenedPopover(true);
  };
  const popoverLeave = ({ currentTarget }) => {
    timeout(3000);
    setOpenedPopover(false);
  };
  const popoverOnClickOpen = ({currentTarget}) => {
    setOpenedPopover(true);
  }; 
  const popoverOnClickLeave = ({currentTarget}) => {
    setOpenedPopover(false);
  }
  const classes = useState();
  return (
    <ul>
      {props.data.map((item) => (
        <Fragment key={item.ID}>
          <li>
            <div className="card">
              <div className="card-body">
                <div ref={popoverAnchor} aria-haspopup="true"  >
                  <Typography  component="span"> 
                      {item.Name}
                  </Typography>
                  {ShowFeedbackButton(item.feedback)}
                  {/* <conButton variant="conatined" onClick={popoverOnClickOpen}><ArrowForwardIos/></IconButton> */}
                  <Popover
                    className={classes.popover}
                    classes={{paper: classes.popoverContent}}
                    open={openedPopover}
                    anchorEl={popoverAnchor.current}
                    anchorOrigin={{
                      horizontal: "left",
                      vertical: "bottom"
                    }}
                    transformOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    PaperProps={{onMouseEnter: popoverEnter, onMouseLeave: popoverLeave}}
                    >
                      {/* this is where feedback should go */}
                      <Card>
                        <CardContent>
                          <Typography variant="h5" >
                          {item.feedback}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small" onClick={popoverOnClickLeave}>close</Button>
                        </CardActions>
                      </Card>
                  </Popover>
                  </div>
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
  return (

      <div className="org-tree">
        <Cards data={data} />
      </div>
  );
};

export default Chart;
