import { Grid } from "@mui/material";
import ProCard from "./ProCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Projects(props){

    const [products, setProducts] = useState([]);
    const params = window.location.pathname;


    useEffect(()=>{

        axios('https://dummyjson.com/products')
        .then(res=> {
            console.log(res.data.products);
            if(res.data.products.length!==0 && products.length===0) setProducts(res.data.products);
        });

    })

    return(
        <section id="projects" style={{padding:'2% 5%'}}>

            <Grid container spacing={2}>

                { products.slice(0, (params !== '/works' ? 4 : products.length)).map(product=>{
                    return(
                        <Grid item md={6} style={{width:'100%'}}>
                            <ProCard 
                                id={product.id}
                                title={product.title}
                                img={product.thumbnail}/>
                        </Grid>
                )})}

                <Grid item md={12} style={{width:'100%', textAlign:'center'}}>
                    { params !== '/works' &&
                    <a href="/works" className="link"  style={{margin:'4% auto 0'}}>
                        <button className="lite"> View All! </button>
                    </a> }
                </Grid>

            </Grid>
            
        </section>
    )

}