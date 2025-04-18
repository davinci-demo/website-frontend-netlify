import { useEffect, useState } from "react";
import styles from "./appMenu.module.scss";
import { NAV_ITEMS_LEFT, NAV_ITEMS_RIGHT } from "./navbarItems";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

//*  Upper menu on mobile

type MenuObject = {
  section: {
    headerName: string;
    menuItems: {
      itemName: string;
      url: string;
    }[];
  };
}[];

function AppMenu({ alignment="flex-col" }) {
  const [isOpen, setIsOpen] = useState(false);
  // menuStyle state is just for testing //
  const [menuStyle,setMenuStyle] = useState(0)

  const mobileMenuHandler = () => {
    setIsOpen(!isOpen);
  }

  const menu = [...NAV_ITEMS_LEFT,...NAV_ITEMS_RIGHT];
  
  useEffect(() => {
    let appMenuWidth;
    if(window.innerWidth >= 800){
      appMenuWidth = "800px"
    }else{
      appMenuWidth = window.innerWidth + "px";
    }
    document.documentElement.style.setProperty('--appMenuWidth',appMenuWidth);
  },[]);

  return (
    <div className={styles.appMenu}>
      <div className={styles.appMenuContainer}>
        <div onClick={mobileMenuHandler}>
          <GiHamburgerMenu fill="#C07F00" size="2em" />
        </div>
        {isOpen && (
          <div  className={(menuStyle === 1)?`${styles.menuBG} `:`${styles.wideMenuBG}`}>
            {menu.map((category, index) => (
              <div key={index} style={{border:(menuStyle === 1)?"none":"2px rgba(255,255,255,.25) solid"}} className="w-full">
                <div style={{padding:(menuStyle === 1)?"0px 0px 4px 0px":"0px"}} className={styles.category}>{category.name}</div>
                <ul  className={` ${alignment} w-full h-full`}>
                  {category.menuItems.map((item, index) => (
                    <li key={`${category.name}-item-${index}`} className="xs:text-xs md:text-base text-center font-normal transition-all hover:font-bold p-1 border-1">
                      <Link href={item.url} onClick={mobileMenuHandler}>{item.option}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AppMenu;


