import { Box, Grid, List, ListItem, Typography } from "@mui/material";


export default function Footer(){
    return(
        <>
        <Box id='texture' sx={{ height:{xs:'100vw', md:'45vw'} }} />

        <section id="footer" style={{padding:'5% 5% 2%'}}>
            <Grid container spacing={2}>

                <Grid item md={6}>

                    <Typography variant="h5" style={{marginBottom:'5%'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Typography>

                    <button className="lite"> Hire Me! </button>

                </Grid>

                <Grid item md={2}/>

                <Grid item md={4}>
                    <Typography variant="h6"> Explore Me! </Typography>
                    <Grid container>
                        <Grid item md={6}>
                            <List>
                                <ListItem style={{paddingLeft:'0'}}>
                                    <a href="." className="link"> About </a>
                                </ListItem>
                                <ListItem style={{paddingLeft:'0'}}>
                                    <a href="." className="link"> Projects </a>
                                </ListItem>
                                <ListItem style={{paddingLeft:'0'}}>
                                    <a href="." className="link"> Works </a>
                                </ListItem>
                            </List>
                        </Grid>

                        <Grid item md={6}>
                            <List>
                                <ListItem style={{paddingLeft:'0'}}>
                                    <a href="." className="link"> Instagram </a>
                                </ListItem>
                                <ListItem style={{paddingLeft:'0'}}>
                                    <a href="." className="link"> FaceBook </a>
                                </ListItem>
                                <ListItem style={{paddingLeft:'0'}}>
                                    <a href="." className="link"> Twitter </a>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>

            <p style={{margin:0, marginTop:'5%'}}>
                Have me as part of your journey with love
                <strong> Lorem Ipsum </strong>
            </p>
        </section>
        </>
    )

}