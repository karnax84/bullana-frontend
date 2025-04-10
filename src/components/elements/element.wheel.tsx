import React, { useState } from 'react';
import styled from 'styled-components';

// Wheel container with a maximum width of 300px
const WheelContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1 / 1; /* Ensures the wheel stays circular */
  border-radius: 50%;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
`;

// Crimson pointer at the top
const WheelPointer = styled.div`
  z-index: 2;
  aspect-ratio: 1 / cos(30deg);
  background-color: crimson;
  clip-path: polygon(50% 100%, 100% 0, 0 0);
  content: "";
  height: 20px;
  position: absolute;
  place-self: start center;
  scale: 1.4;
`;

// Button to spin the wheel
const SpinButton = styled.button`
  position: absolute;
  z-index: 3;
  background-color: black;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WheelList = styled.ul<{ rotation: number }>`
  all: unset;
  clip-path: inset(0 0 0 0 round 50%);
  display: grid;
  inset: 0;
  place-content: center start;
  width: 100%;
  height: 100%;
  transform: rotate(${(props) => props.rotation}deg);
  transition: transform 4s cubic-bezier(0.440, -0.205, 0.000, 1.130);
`;

const WheelItem = styled.li<{ _idx: number; items: number }>`
  align-content: center;
  aspect-ratio: 1 / calc(2 * tan(180deg / ${(props) => props.items}));
  background: hsl(calc(360deg / 12 * ${(props) => props._idx}), 100%, 75%);
  clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
  display: grid;
  font-size: 20px;
  grid-area: 1 / -1;
  padding-left: 5px;
  rotate: calc(360deg / ${(props) => props.items} * (${(props) => props._idx} - 1));
  transform-origin: center right;
  user-select: none;
  width: 128.5px;
`;

// Wheel items
const items = [
  '$1000', '$2000', '$3000', '$4000', '$5000', '$6000',
  '$7000', '$8000', '$9000', '$10000', '$11000', '$12000'
];

const WheelOfFortune: React.FC = () => {
  const [rotation, setRotation] = useState(0);

  const spin = () => {
    const degreesPerItem = 360 / items.length; // Degrees each item occupies

    const randomItemIndex = Math.floor(Math.random() * items.length); // Randomly select an item
    const targetRotation = randomItemIndex * degreesPerItem; // Target rotation for that item

    const totalRotations = 10; // Number of full rotations before stopping
    const baseDegrees = totalRotations * 360; // Ensure it spins 5 times

    // Calculate the final rotation to stop at the selected item with the center aligned
    const finalRotation = baseDegrees + targetRotation;

    // Adjust the total rotation based on the current rotation to ensure continuous spinning
    setRotation((prevRotation) => prevRotation + finalRotation);
  };

  return (
    <WheelContainer>
      <WheelPointer /> {/* Crimson pointer */}
      <WheelList rotation={rotation}>
        {items.map((item, index) => (
          <WheelItem key={index} items={items.length} _idx={index + 1}>{item}</WheelItem>
        ))}
      </WheelList>
      <SpinButton onClick={spin}>SPIN</SpinButton>
    </WheelContainer>
  );
};

export default WheelOfFortune;
