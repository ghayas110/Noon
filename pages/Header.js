/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function Header() {

  return (
    <div className="header">
    
        <img
          className="header__logo"
          src="https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
        />
      <div className="header__optionBasket">
      <img
          className="header__logos"
          src="https://z.nooncdn.com/s/app/com/common/images/flags/sa.svg"
        />
         <span className="header__optionLineTwo header__basketCount">
        

         </span>
       </div>
     <div className="header__option">
            <span className="header__optionLineOne">Deliver to</span>
            <span className="header__optionLineTwo">KSA</span>
          </div>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
       
      </div>

      <div className="header__nav">
    
         
          <div className="header__optionBasket">
         
            <span className="header__optionLineTwo header__basketCount">
            العربية

            </span>
          </div>

          <div className="header__optionBasket">
         SignIn
            <span className="header__optionLineTwo header__basketCount">
            <AccountCircleIcon/>
            </span>
          </div>
          <div className="header__optionBasket">
         0
            <span className="header__optionLineTwo header__basketCount">
            <ShoppingCartIcon/>
            </span>
          </div>
   
      </div>
    </div>
  );
}

export default Header;