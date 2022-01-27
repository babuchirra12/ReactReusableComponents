import {useState}  from 'react';
import {NavLink} from 'react-router-dom';

const SideMenu = () =>{
    const [menuEvent, setMenuEvent] = useState();
    const [sideMenuDate, setsideMenuDate] = useState(null)
    const [sideBarShoHide, setsideBarShoHide] = useState(false)
    const handleClick = (index) =>setMenuEvent(index);
    const sideNabarClick = () =>{
        setsideBarShoHide(!sideBarShoHide)
    }
    return(
        <>
        <button onClick={sideNabarClick}>Click</button>
        <div className={`scrollbar ${sideBarShoHide ? 'scrollBarHide' : 'scrollbarshow'}`} id="scrollStyle">

            <div className="sideMenu">
HHH
                {sideMenuDate && sideMenuDate.map((item, index) =>(
                       <div key={index}> <NavLink to={item.lin} 
                       onClick={() => handleClick(index+1)}
                        className={`menu-item ${(menuEvent !== index + 1) ? '': 'menuBg'}`}
                         activeClaaName="selected">{item.name}</NavLink></div>
                    ))
                }
            </div>
        </div>
        </>
    )
}