import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dogImgUrl from "../../assets/images/courageNoEye.png";
import dogEyeImgUrl from "../../assets/images/eyeHole1.png";

const DogCreeping = () => {

  const [MousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("mousemove", (ev) => handleMouseMove(ev));
  });

  const handleMouseMove = (ev) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
    const mouseX = MousePosition.x;
    const mouseY = MousePosition.y;

    const anchor = document.getElementById("dogLogo");
    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
    const eyeLeft = document.getElementById("eyeLeft");
    const eyeRight = document.getElementById("eyeRight");
    eyeLeft.style.transform = `rotate(${90 + angleDeg}deg)`;
    eyeRight.style.transform = `rotate(${90 + angleDeg}deg)`;

    //console.log(angleDeg);
  };

  const angle = (cx, cy, ex, ey) => {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx); // range -Pi, Pi for rotation onMouseMove={(ev)=> handleMouseMove(ev)}
    const deg = (rad * 180) / Math.PI;
    return deg;
  };

  return (
    <div
      className="hidden md:flex md:relative md:m-0 md:p-0 md:place-items-center md:w-[100px] md:mt-4"
      onClick={() => navigate("/")}
    >
      <img
        id="dogLogo"
        className="h-[100px] w-[100px]"
        src={dogImgUrl}
        alt="courage the dog"
      ></img>
      <img
        id="eyeLeft"
        className="absolute bottom-[71px] left-[26px] h-[22px] w-[22px]"
        src={dogEyeImgUrl}
        alt="dog left eye"
      ></img>
      <img
        id="eyeRight"
        className="absolute bottom-[77px] left-[61px] h-[19px] w-[19px]"
        src={dogEyeImgUrl}
        alt="dog right eye"
      ></img>
    </div>
  );
};

export default DogCreeping;
