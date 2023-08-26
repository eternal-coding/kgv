import { Link, useParams } from "react-router-dom";


export default function ProCard(props){

    const { projectName } = useParams();

    return(

        <Link to={'/works/:'+props.id}>
            <section id="ProCard">
                <img src={props.img} alt=""/>
                <p style={{textAlign:'left'}}> {props.title} &#8599; </p>
            </section>
        </Link>

    )
}