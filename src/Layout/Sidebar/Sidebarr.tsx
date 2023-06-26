import { useState } from 'react';
import '../../Styles/Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faChevronLeft, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { RouteIModel, routes } from '../../utils/MenuItem';
import { Link } from 'react-router-dom';
import { GenerateIcon } from './sidefn';

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeMenu, setActiveMenu] = useState<number | null>(null);
    const [subNav, setSubNav] = useState(false)
    // console.log("🚀 ~ file: Sidebarr.tsx:12 ~ Sidebar ~ activeMenu:", activeMenu)


    // -------------------------- Filterd Routes (parent menu) --------------------- //
    const Routes = routes.filter((froute) => {
        return froute.ParentRouteId === null;
    });

    const handleToggleSubMenu = (menuId) => {
        setActiveMenu(menuId);
        const isItemActive = menuId === activeMenu;
        
        if (isItemActive) {
            const hasSubMenuItems = routes.some((menuItem) => menuItem.ParentRouteId === menuId);
            console.log("🚀 ~ file: Sidebarr.tsx:27 ~ handleToggleSubMenu ~ hasSubMenuItems:", hasSubMenuItems)
            if(hasSubMenuItems){
                setSubNav(true)
            }
        }

    };

    return (
        <div className={`${!isSidebarOpen ? 'sidebar-expanded' : ''} Sidebar`}>
            {/* ------------------------------- TOP SECTION ---------------------------------------- */}
            <div className="sidebar-header">
                <div className={`${!isSidebarOpen ? 'hide' : 'show'} logo`}>
                    {/* <img src={logo} alt="" height={100} width={100} /> */}
                    logo
                </div>

                <div className="Close-btn">
                    <div onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="toggleBtn">
                        <FontAwesomeIcon icon={!isSidebarOpen ? faBars : faChevronLeft} />
                    </div>
                </div>
            </div>

            {/* ------------------------------- MAIN SECTION  ---------------------------------------- */}
            <div className="menu-container">
                {Routes.map((item: RouteIModel) => {
                    const subMenuItems = routes.filter(
                        (menuItem) => menuItem.ParentRouteId === item.id
                    );

                    return (
                        <div key={item.id}>
                            {/* ----------------------  Parent menu -----------------------*/}
                            <Link
                                to={item.path || ''}
                                className={`menu-title row ${activeMenu === item.id ? 'active' : ''}`}
                                // className={({ isActive }) => `${isActive ? "active" : ""}`}
                                // activeClassName="active"
                                onClick={() => handleToggleSubMenu(item.id)}
                                activeClassName="active"
                            >
                                <div className="Parent-icon">
                                    <div className="icon">{GenerateIcon(item.Name)}</div>
                                    <div className={`menu-title`}>{item.Name}</div>
                                </div>

                                <div className="dropdown-icon">
                                    {subMenuItems.length > 1 ? (
                                        activeMenu === item.id ? (
                                            <FontAwesomeIcon
                                                icon={faChevronUp}
                                                style={{ opacity: "0.3" }}
                                            />
                                        ) : (
                                            <FontAwesomeIcon
                                                icon={faChevronDown}
                                                style={{ opacity: "0.3" }}
                                            />
                                        )
                                    ) : null}
                                </div>
                            </Link>

                            {/* ----------------------  Dropdown -----------------------*/}
                            {activeMenu === item.id && (
                                <div className="Dropdown">
                                    {subMenuItems.map((subMenuItem) => (
                                        <div className="DropdownLink" key={subMenuItem.id} >
                                            <Link
                                                to={subMenuItem.path || ""}
                                                className={`links ${activeMenu === subMenuItem.id ? "active" : ""}`}
                                            >
                                                {subMenuItem.Name}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

export default Sidebar;
