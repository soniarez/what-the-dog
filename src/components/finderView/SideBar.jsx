import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import axios from "axios";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  const [animal, setAnimal] = useState(null);

  
useEffect(() => {
  const getDogs = async () => {
    try {
      const dogsFromApi = await fetchDogs();
      console.log(dogsFromApi, "dogs from api");
      setAnimal(dogsFromApi);
    } catch (err) {
      console.log(err, "error fetching data from API");
    }
  }
  getDogs();
}, []);

  //FETCHING DOG DATA FROM API
const fetchDogs = async () => {
  try {
    let res = await axios.get("https://dog.ceo/api/breeds/list/all");
    let data = await res.data;
    return data;
  } catch (err) {
    if (err.response) {
      console.log(err.response.status);
      console.log(err.response.data)
    }
  }
}

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
            <ListItemButton selected={selected} onClick={()=>setSelected(!selected)}>
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
