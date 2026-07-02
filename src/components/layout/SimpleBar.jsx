import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

export default function Layout({ children }) {
    return (
        <SimpleBar style={{ height: '100vh' }}>
            <div className="min-h-screen flex flex-col">
                {children}
            </div>
        </SimpleBar>
    )
}