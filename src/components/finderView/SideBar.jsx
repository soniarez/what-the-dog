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
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const getDogs = async () => {
      try {
        const dogsFromApi = await fetchDogs();
        dogConverter(dogsFromApi);
        setBreeds(dogsFromApi.message);
      } catch (err) {
        console.log(err, "error fetching data from API");
      }
    };
    getDogs();
  }, []);

  //CONVERTING OBJECT INTO ARRAY
  const dogConverter = (rawDogs) => {
    for (const breed in rawDogs.message) {
      return rawDogs.message[breed];
    }
  };

  //FETCHING DOG DATA FROM API
  const fetchDogs = async () => {
    try {
      let res = await axios.get("https://dog.ceo/api/breeds/list/all");
      let breedsObject = await res.data;
      return breedsObject;
    } catch (err) {
      if (err.response) {
        console.log(err.response.status);
        console.log(err.response.data);
      }
    }
  };

  const handleClick = () => {
    setOpen(!open);
  };

  //aca estamos sacando una lista de nombres de perro exrtayendo las llaves esto es una lista de string
  const listOfBreeds = Object.keys(breeds);

  return (
    <div>
      {listOfBreeds.map((dog, index) => (
        <List
          key={index}
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {breeds[dog].length === 0 ? (
            <ListItemButton
              selected={selected}
              onClick={() => setSelected(!selected)}
            >
              <ListItemText primary={dog} />
            </ListItemButton>
          ) : (
            <>
              <ListItemButton onClick={handleClick}>
                <ListItemText primary={dog} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                {breeds[dog].map((subBreed, _subIndex) => (
                  <List key={_subIndex} component="div" disablePadding>
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
