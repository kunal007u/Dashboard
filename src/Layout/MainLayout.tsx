import React, { ReactNode, useState } from 'react'
import "../Styles/Dashboard.css"
import Sidebar from './Sidebar'
import Header from './Header'
import Sidebarr from './Sidebar/Sidebarr';
import Side3 from './Sidebar/Side3';


interface LayoutProps {
    children: ReactNode; //AppRouting
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="containerr">
                {/* <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} /> */}
                <Sidebarr />
                {/* <Side3 /> */}

                <div className='header-section'>
                    <Header />

                    <main style={{ padding: "15px" }}>
                        {children}
                    </main>
                </div>

            </div>

        </>
    )
}

export default MainLayout