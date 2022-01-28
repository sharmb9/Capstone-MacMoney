import React from "react";

//nodes for trree
import { Tree, TreeNode } from "react-organizational-chart";

//to transform/operate on data
import _ from "lodash";
//from material core
import {Card,CardContent, CardHeader,
   Typography,Box, IconButton,Avatar,Menu , 
   MenuItem, ListItemIcon,ListItemText, Tooltip} from "@material-ui/core";

// from material icons
import BusinessIcon from "@material-ui/icons/Business";
import { Add } from "@material-ui/icons";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import MoreVertIcon from "@material-ui/icons/MoreVert";

//data
import organization from "./org.json";

import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  //child nodes (use it for non selected options)
  root: { //non selected ones
    background: "white",
    display: "inline-block",
    borderRadius: 100
  },
  //color behind icons
  avatar: {
    backgroundColor: "#fffff"
  }
}));
//use this selected decisions and giving feedback
function SelectedNode({ org, onCollapse, collapsed }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //color of card
  let backgroundColor = "white";

  return (
    <Card className={classes.root} style={{ backgroundColor }}>
      <CardHeader
        //icon beside the name can remove
        avatar={
          //hover on icon - text
          <Tooltip title={org.name}>
            <Avatar className={classes.avatar}>
              {/* change icon  here */}
              <Add color="primary" />
            </Avatar>
          </Tooltip>
        }
        //text for card - read from json
        title={org.tradingName}
        action={
          <IconButton onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        }
      />
      {/*  here is event handler  - rn itis drop down*/}

      <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <BusinessIcon />
          </ListItemIcon>
          <ListItemText primary="see resources? " />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText primary="feedback" />
        </MenuItem>
      </Menu>
    </Card>
  );
}
function EndNode({ a }) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
    >
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            <AccountBalanceIcon />
          </Avatar>
        }
        title={a.name}
      />
    </Card>
  );
}
function Node({ o, parent }) {

  const T = parent
    ? TreeNode
    : (props) => (
        <Tree //prop is the frst node
          {...props}
          //css for lines from node to node
          lineWidth={"20px"}
          lineHeight={"50px"}
          lineColor={"#bbc"}
          lineBorderRadius={"120px"}
        >
          {props.children}
        </Tree>
      );
  return (//set up of nodes from json should be here
    <T
      label={
        <SelectedNode
          org={o}
        />
      }
    > 
      {/* use of lodash to add condition if option was selected */}
      {_.map(o.account, (a) => (
        <TreeNode label={<EndNode a={a} />}>
        </TreeNode>
      ))}
      {_.map(o.organizationChildRelationship, (c) => (
        <Node o={c} parent={o} />
      ))}
    </T>
  );
}
const theme = createMuiTheme({
  palette: {
    background: "#ECECF4"
  },
  fontFamily: "Roboto, sans-serif"
});

export default function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="background" padding={4} height="80vh">
        {/* <DndProvider backend={HTML5Backend}> */}
          <Node o={organization} />
        {/* </DndProvider> */}
      </Box>
    </ThemeProvider>
  );
}
