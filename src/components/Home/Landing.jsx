import { Box, Grid, Typography } from "@mui/material";

export default function Landing(params) {

    const scroll =()=>{ 
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
    }

    return(
        <section id="landing" style={{ padding:'5%', marginTop:'3%' }}>
            <Grid container spacing={2}>

                <Grid item sm={12} sx={{display:{xs:'block', md:'none'}, width:'100%'}}>
                       
                    <div id="bg">
                        <Typography variant="h2" fontWeight={'700'}> 
                            K G Vigneshwaran
                        </Typography>
                        <Typography variant="h3" fontWeight={'300'}>
                            Professional Videographer.
                        </Typography>
                    </div>
                  
                </Grid>

                <Grid item md={5} sx={{display:{xs:'none', md:'block'}, width:'100%'}}>
                    <Typography variant="h5" fontSize={'3vw'}> 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </Typography>
                </Grid>

                <Grid item md={7} sx={{display:{xs:'none', md:'block'}}}></Grid>

                <Grid item md={8} sx={{display:{xs:'none', md:'block'}, width:'100%'}}>
                    <Typography variant="h2" fontWeight={'700'} fontSize={'7vw'}>
                        A Professional Videographer.
                    </Typography>
                </Grid>

                <Grid item md={4}  sx={{display:{xs:'none', md:'block'}, width:'100%'}} style={{ display:'flex', justifyContent:'end', alignItems:'end', flexDirection:'column' }}>
                    
                    <Box sx={{ display:{xs:'none', md:'block'} }}>
                        <p style={{ maxWidth:"max-content", textAlign:'right', borderRadius:'999px', border:'#ffffff80 2px dashed', padding:'0.5em 2em', cursor:"pointer", background:"#ffffff30"}} onClick={scroll}>
                            My Projects
                        </p>
                        <p style={{textAlign:'right'}}>
                            kgvgmail@gmail.com <br/>
                            <span style={{ opacity:'0.8' }}> Scroll to explore! </span>
                        </p>
                    </Box>
                </Grid>

            </Grid>
        </section>
    )
    
}
