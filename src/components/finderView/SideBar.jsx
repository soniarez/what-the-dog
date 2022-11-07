import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import getAllBreedList from '../../helpers/getAllBreedList';

const SideBar = ({ updateCurrentSelected, selectedBreed }) => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const getAllDogs = async () => {
      try {
        const dogsFromApi = await getAllBreedList();
        breedList(dogsFromApi);
        setBreeds(dogsFromApi.message);
      } catch (err) {
        console.log(err, 'error fetching data from API');
      }
    };
    getAllDogs();
    console.log(selectedBreed, 'perros seleccionados');
  }, [selectedBreed]);

  //CONVERTING OBJECT INTO ARRAY OF DOG BREEDS
  const breedList = breedObjects => {
    for (const breed in breedObjects.message) {
      return breedObjects.message[breed];
    }
  };

  const handleClick = e => {
    selectedBreed.includes(e.currentTarget.id);
    if (!selectedBreed.includes(e.currentTarget.id)) {
      e.currentTarget.style.backgroundColor = '#6b4ee5';
    } else {
      e.currentTarget.style.backgroundColor = '#f6e8f8';
    }
    updateCurrentSelected(e.currentTarget.id);
  };

  //Retrieving a list of dog's names by adding the keys, this is a list of strings.
  const listOfBreeds = Object.keys(breeds);

  return (
    <div className="overflow-scroll overflow-x-hidden h-screen ">
      <h2 className="text-center text-lg text-indigo-600 font-black underline cursor-default">
        All Dog Breeds
      </h2>
      {listOfBreeds.map((breed, index) => (
        <List
          className="hidden md:flex md:flex-col md:justify-center md:items-center"
          key={index}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {breeds[breed].length === 0 ? (
            <ListItemButton onClick={handleClick} id={breed}>
              <ListItemText primary={breed} />
            </ListItemButton>
          ) : (
            <>
              <ListItemButton onClick={() => setOpen(!open)} id={breed}>
                <ListItemText primary={breed} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                {breeds[breed].map((subBreed, index) => (
                  <List key={index} component="div" disablePadding>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      onClick={handleClick}
                      id={breed + '/' + subBreed}
                    >
                      <ListItemText primary={subBreed} />
                    </ListItemButton>
                  </List>
                ))}
              </Collapse>
            </>
          )}
        </List>
      ))}

      {/*Hamburger Menu Mobile*/}
      <div
        onClick={() => setHamburgerMenu(!hamburgerMenu)}
        className="cursor-pointer pr-4 z-10 md:hidden"
      >
        {hamburgerMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {hamburgerMenu
        ? listOfBreeds.map((breed, index) => (
            <List
              className="flex flex-col justify-center items-center "
              key={index}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              {breeds[breed].length === 0 ? (
                <ListItemButton onClick={handleClick} id={breed}>
                  <ListItemText primary={breed} />
                </ListItemButton>
              ) : (
                <>
                  <ListItemButton onClick={() => setOpen(!open)} id={breed}>
                    <ListItemText primary={breed} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    {breeds[breed].map((subBreed, index) => (
                      <List key={index} component="div" disablePadding>
                        <ListItemButton
                          sx={{ pl: 4 }}
                          onClick={handleClick}
                          id={breed + '/' + subBreed}
                        >
                          <ListItemText primary={subBreed} />
                        </ListItemButton>
                      </List>
                    ))}
                  </Collapse>
                </>
              )}
            </List>
          ))
        : null}
    </div>
  );
};

export default SideBar;
