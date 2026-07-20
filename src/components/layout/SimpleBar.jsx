import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { forwardRef } from 'react'

const Layout = ({ children, setSimpleBar }) => {
    return (
        <SimpleBar 
            className="h-screen" 
            ref={setSimpleBar}
        >
            <div className="min-h-screen flex flex-col">
                {children}
            </div>
        </SimpleBar>
    );
};

export default Layout