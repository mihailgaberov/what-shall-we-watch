import { FunctionComponent } from "react";

import './Header.scss'

interface HeaderProps {
    
}
 
const Header: FunctionComponent<HeaderProps> = () => {
    return (
        <header className="app-header">
          <div className="stripe"></div>
          <div className="text">Ко Да Глеам!?</div>
          <div className="stripe"></div>
      </header>
    );
}
 
export default Header;