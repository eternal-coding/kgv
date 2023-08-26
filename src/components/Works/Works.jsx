import { Box, Typography } from "@mui/material";
import Projects from "../Home/Projects";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

export default function Works(){
    return(
        <section id="works">
            <Navbar />
            <div style={{padding:'1% 5%'}}>
                <Typography variant="h2" style={{padding:'5% 0 2%'}} fontWeight={700}>
                    Works
                </Typography>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.
                </p>
            </div>

            <Projects/> 
            <Footer />
        </section>
    )
}