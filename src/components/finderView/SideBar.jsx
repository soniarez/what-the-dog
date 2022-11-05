import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const dogs = [
    {
      id: 1,
      breed: "chihuahua",
      subBreed: "",
    },
    {
      id: 2,
      breed: "pug",
      subBreed: "",
    },
    {
      id: 3,
      breed: "bulldog",
      subBreed: ["boston", "english", "french"],
    },
  ];

  return (
    <div>
      {dogs.map((dog) => (
        <List
          key={dog.id}
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {dog.subBreed.length === 0 ? (
            <ListItemButton>
              <ListItemText primary={dog.breed} />
            </ListItemButton>
          ) : (
            <>
              <ListItemButton onClick={handleClick}>
                <ListItemText primary={dog.breed} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                {dog.subBreed.map((subBreed)=> (
                  <List key={subBreed.index} component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary={subBreed} />
                  </ListItemButton>
                </List>
                ))}
              </Collapse>
            </>
          )}
        </List>
      ))}
    </div>
  );
};

export default SideBar;
