import { Grid, List, ListItem, Typography } from "@mui/material";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import { EastOutlined } from "@mui/icons-material";


export default function AboutMe(params) {
    const scroll = (e)=>{ 
        document.getElementById(e).scrollIntoView({ behavior: 'smooth' })
    }

    return(
        <>
            <Navbar />

            <section id="about" style={{padding:'3% 8%'}}>
                <Typography variant="h5"> Myself, </Typography>
                <Typography variant="h2" fontWeight={700} fontSize={'7vw'}> Vigneshwaran K G </Typography>
                <p style={{textAlign:'center'}}>
                    <button className="lite link" style={{marginRight:'1%'}} onClick={()=>{scroll('g-about')}}> About </button>
                    <button className="lite link" onClick={()=>{scroll('g-contact')}}> Contact </button>
                </p>

                {/* We are goint to start from here! */}

                <Grid container rowSpacing={10} marginTop={1}>
                    <Grid item sx={12} md={2}/>
                    <Grid item sx={12} md={8}>
                        <img 
                            src="https://cdn.dribbble.com/userupload/2994910/file/original-82810242e87881a3435f4c434968379a.jpg?resize=1024x946"
                            alt=""
                        />
                    </Grid>
                    <Grid item sx={12} md={2}/>

                    <Grid item sx={12} md={12} id='g-about' padding={'10% 0%'}>
                        <Typography variant="h3" marginBottom={1} fontWeight={500}>
                            About Me
                        </Typography>
                        <Typography variant="h6">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged.
                        </Typography>

                        <Grid container columnSpacing={10} style={{padding:'5% 0'}}>
                            <Grid item sx={12} md={6} justifyContent={'right'} display={'flex'} alignItems={'center'}>
                                <Typography variant="h5" fontWeight={500} textAlign={'center'}>
                                    More about myself <br />
                                    <EastOutlined /> 
                                </Typography>
                            </Grid>
                            
                            <Grid item sx={12} md={6}>
                                <List>
                                    <ListItem style={{paddingLeft:'0'}}>
                                        <a href="." className="link"> Travel &#8599; </a>
                                    </ListItem>
                                    <ListItem style={{paddingLeft:'0'}}>
                                        <a href="." className="link"> Shots &#8599; </a>
                                    </ListItem>
                                    <ListItem style={{paddingLeft:'0'}}>
                                        <a href="." className="link"> Shadow Cuts &#8599; </a>
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid item sx={12} md={12} id='g-contact' padding={'10% 0% 0'}>

                        <Typography variant="h3" marginBottom={1} fontWeight={500}>
                            Contact Me!
                        </Typography>

                        <Typography variant="h6">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </Typography>

                        <Grid container columnSpacing={10} style={{padding:'5%'}}>

                            <Grid item sx={12} md={8}>
                                <input placeholder="Name" type="text"/> <br/>
                                <input placeholder="Email" type="text"/> <br/>
                                <textarea placeholder="Message"/> <br/>
                            </Grid>

                            <Grid item sx={12} md={1} justifyContent={'center'} display={'flex'} alignItems={'center'}>
                                    or
                            </Grid>
                            
                            <Grid item sx={12} md={3} justifyContent={'center'} display={'flex'} alignItems={'center'}>
                                <List>
                                    <ListItem style={{paddingLeft:'0'}}>
                                        <a href="." className="link"> LinkedIn &#8599; </a>
                                    </ListItem>
                                    <ListItem style={{paddingLeft:'0'}}>
                                        <a href="." className="link"> Facebook &#8599; </a>
                                    </ListItem>
                                    <ListItem style={{paddingLeft:'0'}}>
                                        <a href="." className="link"> Instagram &#8599; </a>
                                    </ListItem>
                                </List>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
                
            </section>
            <Footer />
        </>
    )
}