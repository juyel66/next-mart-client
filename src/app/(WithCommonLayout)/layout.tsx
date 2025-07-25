import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";



const CommonLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>

            <Navbar></Navbar>
           <div className="min-h-screen"> {children}</div>
            <Footer></Footer>
            
        </div>
    );
};

export default CommonLayout;