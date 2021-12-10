import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TimelineIcon from '@material-ui/icons/Timeline';import PublicIcon from '@material-ui/icons/Public';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ReceiptIcon from '@material-ui/icons/Receipt';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak';
import {Link} from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function StatsNavbar({detailedStats}) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root} id = 'statsNavBar'>
      <List component="nav" aria-label="main mailbox folders">
      <Link to ='/'>
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <TimelineIcon />
          </ListItemIcon>
          <ListItemText primary="Routes" />
        </ListItem>
        </Link>

        <Link to = '/fromcountry'>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <PublicIcon />
          </ListItemIcon>
          <ListItemText primary="From Country" />
        </ListItem>
        </Link>

        <Link to = '/frombranch'>
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <LocationCityIcon />
          </ListItemIcon>
          <ListItemText primary="From Branch" />
        </ListItem>
        </Link>

        <Link to = '/fromagency'>
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <EmojiTransportationIcon />
          </ListItemIcon>
          <ListItemText primary="From Agency" />
        </ListItem>
        </Link>

        <Link to = '/fromtraveldesk'>
        <ListItem
          button
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemIcon>
            <FlightTakeoffIcon />
          </ListItemIcon>
          <ListItemText primary="From Travel Desk" />
        </ListItem>
        </Link>

<Link to = '/visacategory'>
        <ListItem
          button
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemIcon>
            <RecentActorsIcon />
          </ListItemIcon>
          <ListItemText primary="Visa Category" />
        </ListItem>
        </Link>

      <Link to = '/visatype'>
        <ListItem
          button
          selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Visa Type" />
        </ListItem>
      </Link>

      <Link to = 'payment'>
        <ListItem
          button
          selected={selectedIndex === 7}
          onClick={(event) => handleListItemClick(event, 7)}
        >
          <ListItemIcon>
            <ReceiptIcon />
          </ListItemIcon>
          <ListItemText primary="Payments" />
        </ListItem>
        </Link>

        <Link to ='/costcenters'>
        <ListItem
          button
          selected={selectedIndex === 8}
          onClick={(event) => handleListItemClick(event, 8)}
        >
          <ListItemIcon>
            <CenterFocusWeakIcon />
          </ListItemIcon>
          <ListItemText primary="Cost Centers" />
        </ListItem>
        </Link>
      </List>
    </div>
  );
}
