import React, { useState } from 'react'
import '../Styles/Header.css'
import { faExclamation, faMagnifyingGlass, faMoon, faRightFromBracket, faSnowman, faSun, faUnlockKeyhole, faUser, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../Store/Slices/CurrentThemeSlice'
import { RootState } from '../Store/Store'
import { Link } from 'react-router-dom'


const Header: React.FC = () => {

    // --------------------------------- For changing rhe theme --------------------------------- //
    const currentTheme = useSelector((state: RootState) => state.CurrentTheme.theme);
    const dispatch = useDispatch()

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };


    const handleCurrentTheme = () => {
        dispatch(toggleTheme());
    }

    return (
        // <div className={`${currentTheme === "dark" ? "dark" : ""} header-container`}>
        <div data-theme={currentTheme === "dark" ? "aqua" : "acid"}>
            <div className={`header `}>
                <div className="icons" >

                    <div className="search-section icon">
                        <div className="search-icon">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </div>
                    <div className="chat-section icon">
                        <div className="chat-icon">
                            <FontAwesomeIcon icon={faCommentDots} />

                        </div>
                    </div>
                    <div className="exclamation-section icon">
                        <div className="exclamation-icon">
                            <FontAwesomeIcon icon={faExclamation} />

                        </div>
                    </div>
                    <div className="theme-section icon" style={{ marginRight: "20px" }} onClick={() => handleCurrentTheme()}>
                        <div className="theme-icon" >

                            {
                                currentTheme === "dark" ? (

                                    <FontAwesomeIcon icon={faSun} />
                                ) : (
                                    <FontAwesomeIcon icon={faMoon} />

                                )
                            }
                        </div>
                    </div>

                </div>
                <hr style={{ textAlign: "right", height: "30px", margin: "0px 20px " }}></hr>

                {/* ------------------------- Account ------------------------- */}

                <div className='administer-section dropdown dropdown-end z-10' >
                    <div className="administer-logo " tabIndex={0} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <div className="admin icon " >
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        {isMenuOpen && (
                            <div
                                tabIndex={0}
                                onClick={() => setIsMenuOpen(false)}
                                className="dropdown-content menu p-5 text-[16px] shadow bg-base-200 rounded-box w-52 "
                            >
                                <h2 className="mb-4 text-xl">Welcome User-123</h2>
                                <div className="border-b-2 mb-2"></div>
                                <div>
                                    <Link to={""} onClick={closeMenu} className="flex gap-3 mt-3 text-center">
                                        <FontAwesomeIcon icon={faUserTie} />
                                        <span>My Profile</span>
                                    </Link>
                                    <Link to={""} onClick={closeMenu} className="flex gap-3 mt-8">
                                        <FontAwesomeIcon icon={faUnlockKeyhole} />
                                        <span>Change Password</span>
                                    </Link>
                                    <Link to={""} onClick={closeMenu} className="flex gap-3 mt-8">
                                        <FontAwesomeIcon icon={faRightFromBracket} />
                                        <span>Log out</span>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Header