import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import { Grid, List, ListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Single(){

    const navigate = useNavigate();
    const {id} = useParams();
    const projectName = id.substring(1);

    useEffect(()=>{ if(!projectName) navigate("/works"); });

    const [product, setProduct] = useState({});

    useEffect(()=>{

        axios(`https://dummyjson.com/products/${projectName}`)
        .then(res=> {
            console.log(res.data);
            if(res.data.length!==0 && Object.keys(product).length===0) setProduct(res.data);
        });

    })

    return(
        <>
        { (Object.keys(product).length!==0) ? (
            <>
                <Navbar/>
                <section id="Single" style={{ padding:'5%' }}>
    
                <Typography variant="h2" fontWeight={500}> {product.title} </Typography>
                <Typography variant="h4" style={{padding:'1% 0%'}}> {product.description} </Typography>
    
                <Grid container>
                    <Grid row item md={8}>
                        <Typography variant="h5" style={{padding:'7% 0% 2%'}}> 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Typography>
                    </Grid>
                </Grid>
    
                <div style={{marginTop:'5%'}}>
    
                    <Grid container>
                        <Grid row item md={3}>
                            <List>
                                <ListItem style={{padding:0}}> <strong> Client </strong> </ListItem>
                                <ListItem style={{padding:'1% 0%', fontSize:'1.1em', opacity:'0.7'}}> {product.brand} </ListItem>
                            </List>
                        </Grid>
                        <Grid row item md={3}>
                            <List>
                                <ListItem style={{padding:0}}> <strong> Services </strong> </ListItem>
                                <ListItem style={{padding:'1% 0%', fontSize:'1.1em', opacity:'0.7'}}> Service #1 </ListItem>
                                <ListItem style={{padding:'1% 0%', fontSize:'1.1em', opacity:'0.7'}}> Service #2 </ListItem>
                            </List>
                        </Grid>
                        <Grid row item md={3}>
                            <List>
                                <ListItem style={{padding:0}}> <strong> Industry </strong> </ListItem>
                                <ListItem style={{padding:'1% 0%', fontSize:'1.1em',opacity:'0.7'}}> Industry Name </ListItem>
                            </List>
                        </Grid>
                        <Grid row item md={3}>
                            <List>
                                <ListItem style={{padding:0}}> <strong> Delivered Date </strong> </ListItem>
                                <ListItem style={{padding:'1% 0%', fontSize:'1.1em'}}> 19 May, 2023 </ListItem>
                            </List>
                        </Grid>
                    </Grid>
    
                    <img 
                        style={{margin:'5% 0'}}
                        src={product.thumbnail}
                        alt=""
                    />
    
                    <img 
                        style={{margin:'5% 0'}}
                        src={product.images[1]}
                        alt=""
                    />
    
                    <Typography variant="h6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Typography>
    
    
                    <div style={{margin:'5% 0'}}>
                        <Typography variant="h3" fontWeight={500} style={{padding:'2% 0%'}}> Snapshots </Typography>
                        <Grid container spacing={4}> 
    
                            { product.images.map(img=>{
                            return(
                                <Grid item md={6}>
                                    <img 
                                        src={img}
                                        alt='' 
                                    />
                                </Grid>
                            )})}
 
                        </Grid>
                    </div>
                </div>
    
            </section>  
            <Footer />
            </>
        ) : (
            <div style={{ display:'flex', height:"100vh", flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                <lord-icon
                    src="https://cdn.lordicon.com/xjovhxra.json"
                    trigger="loop"
                    colors="primary:#fff,secondary:#08a88a"
                    style={{width:'100px',height:'100px'}}>
                </lord-icon>
                <Typography variant="h5"> Please Wait </Typography>
            </div>
        )

        }
    </>

   )

}