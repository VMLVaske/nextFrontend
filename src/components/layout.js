import Navbar from './navbar/navbar'
import Footer from './footer'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            {/*<Footer />*/}
        </>
    )
}