//

import { useState } from "react";

export function toggleMenu() {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
  }

  export function toggleDiv() {
    const innerDiv = document.getElementById('inner-div');

    innerDiv.classList.toggle('hidden');
  }

  const ButtonToggle = () => {
    const [isActive, setIsActive] = useState(false);
  
    const toggleMenuButton = () => {
      setIsActive((prevState) => !prevState)
    }
  
    return (
      <div className={`button ${isActive ? 'active' : ''}`} id='toggle-button' onClick={toggleMenuButton}>
          <div className='button-menu'></div>
      </div>
    );
  };
  
  export default ButtonToggle;
  