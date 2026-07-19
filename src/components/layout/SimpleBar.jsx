import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { forwardRef } from 'react'

const Layout = forwardRef(({ children }, ref) => {
    return (
        <SimpleBar style={{ height: '100vh' }} ref={ref}>
            <div className="min-h-screen flex flex-col">
                {children}
            </div>
        </SimpleBar>
    );
});

export default Layout