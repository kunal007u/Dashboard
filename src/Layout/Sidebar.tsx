import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { IconDefinition, faBars, faChartLine, faChartPie, faChevronDown, faChevronLeft, faChevronUp, faCircleNotch, faComment, faDownLeftAndUpRightToCenter, faG, faGauge, faGear, faLandmark, faMagnifyingGlassChart, faShop, faStar, faStarHalf, faStarHalfStroke, faUser, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RouteIModel, routes } from '../utils/MenuItem';
import '../Styles/Sidebar.css'
import { SidebarProps } from '../Model/account';




const Sidebar: React.FC<SidebarProps> = ({ setIsOpen, isOpen }) => {

    const getInitialActiveMenu = () => {
        const foundItem = routes.find((item) => item.path === location.pathname);
        return foundItem ? foundItem.id : null;
    };

    const [subnav, setSubnav] = useState(false);

    const [activeMenu, setActiveMenu] = useState<number | null>(getInitialActiveMenu());
    const [activesubMenu, setActivesubMenu] = useState<number | null | boolean>(false);

    const menuOpenOnClick = useRef<HTMLDivElement>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);



    // -------------------------- Filterd Routes (parent menu) --------------------- //
    const Routes = routes.filter((froute) => {
        return froute.ParentRouteId === null;
    });

    // ---------------------- close on click outside ---------------------- //

    // useEffect(() => {
    //     const handleClickOutside = (event: MouseEvent) => {
    //         if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
    //             setIsOpen(false);
    //         }
    //     };

    //     const handleEscapeKey = (event: KeyboardEvent) => {
    //         if (event.key === "Escape") {
    //             setIsOpen(false);
    //         }
    //     };

    //     document.addEventListener('mousedown', handleClickOutside);
    //     document.addEventListener('keydown', handleEscapeKey);

    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //         document.removeEventListener('keydown', handleEscapeKey);
    //     };
    // }, [setIsOpen]);

    //---------------------- close if the esc key is pressed (👍) ---------------------- //
    useEffect(() => {
        const keyHandler = (event: KeyboardEvent) => {
            if (!isOpen || event.key !== "Escape") return;
            setIsOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    // ---------------------- Sidebar get close - Top = 0 (👍) ----------------------


    useEffect(() => {
        if (!isOpen) {
            if (sidebarRef.current) {
                sidebarRef.current.scrollTop = 0;
            }
        }
    }, [isOpen]);


    // ---------------------- Sidebar Handler to open and close Sidebar (👍)---------------------- // 

    const handleSidebarToggle = (): void => {
        setIsOpen(!isOpen);
    };

    //---------------------- If the submenu is already active, close it visa versa  ---------------------- //


    const showSubnav = (item: RouteIModel) => {



        const isItemActive = item.id === activeMenu;

        if (localStorage.getItem("activeSubMenu") || isItemActive) {
            localStorage.removeItem('activeSubMenu');
            setSubnav(false)
        }
        else {
            localStorage.removeItem('activeSubMenu');
            setSubnav(true)
        }
        // if (isItemActive) {
        //     // If the clicked menu item is already active and has sub-menu items, close the submenu
        //     const hasSubMenuItems = routes.some((menuItem) => menuItem.ParentRouteId === item.id);
        //     if (hasSubMenuItems) {
        //         setSubnav(false);
        //         setActiveMenu(getInitialActiveMenu());
        //     }
        //     localStorage.removeItem('activeSubMenu');
        // } else {
        //     // If the clicked menu item is not active, open the submenu and update the activeMenu state
        //     setSubnav(true);
        //     setActiveMenu(item.id);
        //     setActivesubMenu(false);
        //     localStorage.setItem('activeSubMenu', String(item.id));
        // }
    };


    //--------------------------- Hover out side the Sidebar get close visa - versa --------------------------- //

    // const handleHover = () => {
    //     if (isHoverEnabled && !isOpen) {
    //         setIsOpen(true);
    //     }
    // };

    // const handleMouseOut = () => {
    //     if (!isMouseWithinSidebar) {
    //         setIsOpen(false);
    //     }
    // };

    // const handleSidebarMouseEnter = () => {
    //     setIsMouseWithinSidebar(true);
    // };

    // const handleSidebarMouseLeave = () => {
    //     setIsMouseWithinSidebar(false);
    // }

    // ------------------------- submenu should remain open after a page refresh -------------------------------//
    useEffect(() => {
        const storedActiveSubMenu = localStorage.getItem('activeSubMenu');
        const initialActiveMenu = storedActiveSubMenu ? parseInt(storedActiveSubMenu) : getInitialActiveMenu();
        setActiveMenu(initialActiveMenu);
    }, [])


    // ------------------------- Side bar sub-menu -------------------------------//

    const renderSubMenuItems = (parentRouteId: number) => {
        // Filter sub-menu items based on parentRouteId
        const subMenuItems = routes.filter(
            (menuItem) => menuItem.ParentRouteId === parentRouteId
        );

        // Check if there are no sub-menu items to render
        const isSubMenuActive = parentRouteId === activeMenu;

        if (subMenuItems.length === 0 && !subnav || !isSubMenuActive || !isOpen) {
            return;
        }


        return (
            <div className="Dropdown" >
                {subMenuItems.map((subMenuItem) => {

                    return (
                        <div className="DropdownLink" key={subMenuItem.id}>
                            <NavLink to={subMenuItem.path || ""} className={`links ${activesubMenu === subMenuItem.id ? "ActiveSubMenu" : ""}`} onClick={() => setActivesubMenu(subMenuItem.id)}>
                                {subMenuItem.Name}
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        );
    };

    // ----------------------------- Sidebar Icon --------------------------//
    const iconMapping: Record<string, IconDefinition> = {
        Dashboard: faGauge,
        Users: faUser,
        UserWallet: faWallet,
        Markets: faShop, // Added icon for Markets
        MarketResults: faChartLine, // Added icon for MarketResults
        WithdrawalRequest: faLandmark,
        MarketProfitLoss: faUser,
        Settings: faGear,
        StarLineMarkets: faStar,
        Feedback: faComment,
        Analysis: faChartPie,
        DebitCreditAnalysis: faMagnifyingGlassChart
    };

    const GenerateIcon = (icon: string): JSX.Element | null => {
        const selectedIcon = iconMapping[icon];

        if (selectedIcon) {
            return <FontAwesomeIcon icon={selectedIcon} />;
        }

        return null;
    };

    // ------------------------------------- active menu to change according to the current location ------------------------------------- //
    useEffect(() => {
        const handlePopstate = () => {
            // When the user navigates using the browser's back button,
            // update the active menu based on the new location
            setActiveMenu(getInitialActiveMenu());
        };

        window.addEventListener("popstate", handlePopstate);

        return () => {
            window.removeEventListener("popstate", handlePopstate);
        };
    }, []);

    return (
        <>
            <div className={`${!isOpen ? "sidebar-expanded" : ""} Sidebar `} ref={sidebarRef} >

                {/* Sidebar header */}
                <div className='sidebar-header'  >
                    <div className={`${!isOpen ? "hide" : "show"} logo`}>
                        {/* <img src={logo} alt="" height={100} width={100} /> */}
                        logo
                    </div>
                    <div className='Close-btn' >
                        <div onClick={() => handleSidebarToggle()} className='toggleBtn'>
                            {
                                <FontAwesomeIcon icon={!isOpen ? faBars : faChevronLeft} />
                            }
                        </div>
                    </div>

                </div>
                {/* {
                    (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: "start",
                                marginLeft: "20px",
                                opacity: isOpen ? "0.6" : "0",
                                // transform: isOpen ? "translateX(0px)" : "translateX(-200px)",
                                transition: "opacity 0.3s ease, transform 0.3s ease"
                            }}
                        >
                            pages
                        </div>

                    )
                } */}

                <div className='menu-container' ref={menuOpenOnClick} >
                    {
                        Routes.map((item: RouteIModel) => {
                            const subMenuItems = routes.filter(
                                (menuItem) => menuItem.ParentRouteId === item.id
                            );
                            return (
                                <div key={item.id}>

                                    <NavLink
                                        to={item.path || ''}
                                        onClick={(event) => {
                                            event.stopPropagation(); // Stop event propagation
                                            showSubnav(item);
                                        }}

                                        className={`menu-title row ${activeMenu === item.id ? "Activemenu" : ""} `}
                                    >
                                        <div className='Parent-icon'>
                                            <div className='icon'>
                                                {GenerateIcon(item.Name)}
                                            </div>
                                            <div className={`menu-title`}>
                                                {item.Name}
                                            </div>
                                        </div>
                                        <div className='dropdown-icon'>
                                            {subMenuItems.length > 1 ? (
                                                activeMenu === item.id ? (
                                                    <FontAwesomeIcon icon={faChevronUp} style={{ opacity: "0.3" }} />
                                                ) : (
                                                    <FontAwesomeIcon icon={faChevronDown} style={{ opacity: "0.3" }} />
                                                )
                                            ) : null}

                                        </div>
                                    </NavLink>
                                    {renderSubMenuItems(item.id)}
                                </div>


                            )
                        })
                    }

                </div>

            </div >

        </>
    )
}

export default Sidebar