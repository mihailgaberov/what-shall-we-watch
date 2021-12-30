import { FunctionComponent } from "react";

import './Header.scss'

interface HeaderProps {
    onClickCallback: Function;
}
 
const Header: FunctionComponent<HeaderProps> = ({onClickCallback}) => {
    return (
        <header className="app-header">
          <div className="stripe"></div>
          <div className="text" onClick={() => onClickCallback()}>Ко Да Глеам!?</div>
          <div className="stripe"></div>
      </header>
    );
}
 
export default Header;