import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import getAllBreedList from "../../helpers/getAllBreedList";

const SideBar = ({currentSelected}) => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [breeds, setBreeds] = useState([]);

  const [selectedBreed, setSelectedBreed] = useState([]);

  const addSelectedBreed = (breed) => {
    if (selectedBreed.includes(breed)) {
      setSelectedBreed(selectedBreed.filter((item) => item !== breed));
    } else {
      setSelectedBreed([...selectedBreed, breed]);
    }
  }

  useEffect(() => {
    const getAllDogs = async () => {
      try {
        const dogsFromApi = await getAllBreedList();
        breedArray(dogsFromApi);
        setBreeds(dogsFromApi.message);
        //setDogImages(imagesFromApi);
      } catch (err) {
        console.log(err, "error fetching data from API");
      }
    };
    getAllDogs();
  }, []);

  //CONVERTING OBJECT INTO ARRAY
  const breedArray = (breedObjects) => {
    for (const breed in breedObjects.message) {
      return breedObjects.message[breed];
    }
  };

  const handleClick = (e) => {
    console.log(e.currentTarget.id);
    setOpen(!open);
    addSelectedBreed(e.currentTarget.id);
    console.log(selectedBreed)
    setSelectedBreed(selectedBreed);
  };

  //aca estamos sacando una lista de nombres de perro exrtayendo las llaves esto es una lista de string
  const listOfBreeds = Object.keys(breeds);

  return (
    <div className="overflow-scroll overflow-x-hidden h-screen">
      {listOfBreeds.map((breed, index) => (
        <List
          className="hidden md:flex md:flex-col md:justify-center md:items-center"
          key={index}
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {breeds[breed].length === 0 ? (
            <ListItemButton
              onClick={handleClick}
              id={breed}
            >
              <ListItemText primary={breed} />
            </ListItemButton>
          ) : (
            <>
              <ListItemButton onClick={handleClick} id={breed}>
                <ListItemText primary={breed} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                {breeds[breed].map((subBreed, index) => (
                  <List key={index} component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={handleClick} id={subBreed}>
                      <ListItemText primary={subBreed} />
                    </ListItemButton>
                  </List>
                ))}
              </Collapse>
            </>
          )}
        </List>
      ))}

      {/*Hambuerger Menu*/}
      <div
        onClick={() => setHamburgerMenu(!hamburgerMenu)}
        className="cursor-pointer pr-4 z-10 md:hidden"
      >
        {hamburgerMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {hamburgerMenu ?
        listOfBreeds.map((breed, index) => (
          <List
            className="flex flex-col justify-center items-center "
            key={index}
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            {breeds[breed].length === 0 ? (
              <ListItemButton
                selected={selected}
                onClick={() => setSelected(!selected)}
              >
                <ListItemText primary={breed} />
              </ListItemButton>
            ) : (
              <>
                <ListItemButton onClick={handleClick}>
                  <ListItemText primary={breed} />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  {breeds[breed].map((subBreed, _subIndex) => (
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
        )) : null}
    </div>
  );
};

export default SideBar;
