import React, { Component, Fragment, useRef, useState } from "react";
import randomcolor from "randomcolor";

import data from "./data.json";

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
const Cards = (props) => {
  const levelColor = randomcolor({
    count :props.data.length,
    hue : "green"
  });

  const [openedPopover, setOpenedPopover] = useState(false)
  const popoverAnchor = useRef(null);

  const popoverEnter = ({ currentTarget }) => {
    timeout(3000);
    setOpenedPopover(true);
  };

  const popoverLeave = ({ currentTarget }) => {
    timeout(3000);
    setOpenedPopover(false);
  };
  const classes = useState();
  return (
    <ul>
      {props.data.map((item) => (
        <Fragment key={item.ID}>
          <li>
            <div className="card">
              <div className="card-body" >
                <div ref={popoverAnchor} aria-haspopup="true" onMouseEnter={popoverEnter} onMouseLeave={popoverLeave}>
                  <Typography  component="span"> 
                      {item.Name}
                  </Typography>
                  <IconButton variant="conatined" ><ArrowForwardIos/></IconButton>
                  <Popover
                    className={classes.popover}
                    classes={{paper: classes.popoverContent}}
                    open={openedPopover}
                    anchorEl={popoverAnchor.current}
                    anchorOrigin={{
                      horizontal: "left",
                      vertical: "bottom"
                    }}
                    PaperProps={{onMouseEnter: popoverEnter, onMouseLeave: popoverLeave}}
                    >
                      {/* this is where feedback should go */}
                      <Card>
                        <CardContent>
                          <Typography variant="h5" component="div">
                            This is where feedback should be {item.Name}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small" onClick={popoverLeave}>close</Button>
                        </CardActions>
                      </Card>

                  </Popover>
                  </div>
                  </div>
              <div className="card-footer" style={{ background: levelColor }}>
                </div>
              <div>
              </div>
            </div>
            {item.options?.length && <Cards data={item.options} />}
          </li>
        </Fragment>
        
      ))}
    </ul>
  );
};

const Chart = () => {
  return (
    <div>
      <Typography>

      </Typography>
      <div className="org-tree">
        <Cards data={data} />
      </div>
    </div>
  );
};

export default Chart;
