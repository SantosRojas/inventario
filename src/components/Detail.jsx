
import { Colors } from "./colors"
import { Container } from "./views"
import {RiArrowGoBackFill} from "react-icons/ri"

const borderStyle ={borderBottom:`.2rem solid ${Colors.primary}`,color:"black"}

const styleBack = {right:"-15px", top:"-15px", position:"absolute",
borderRadius:"50%",width:"2.1rem",height:"2.1rem",
display:"flex",justifyContent:"center",alignItems:"center"}
const Detail = ({ data, CloseInfo }) => {

    const closeInfo =() => {
        CloseInfo() 
    }

    return (
        <Container>
            <div style={{display:"flex", flexDirection:"column", padding:"5px 0",position:"relative",gap:"7px"}}>
                <span onClick={closeInfo} style={styleBack}><RiArrowGoBackFill style={{transform:"scale(1.7)"}} /></span>
                <span style={borderStyle}>{data.codigoReprecentante.label}</span>
                <span style={borderStyle}>{data.codigoCliente.label}</span>
                <span style={borderStyle}>{data.codigoServicio.label}</span>
                <span style={borderStyle}>Tipo: {data.tipoBomba.label}</span>
                <span style={borderStyle}>Modelo: {data.modeloBomba.label}</span>
                <span style={borderStyle}>SN: {data.serie}</span>
                <span style={borderStyle}>QR: {data.qr}</span>
                <span style={borderStyle}>{data.comentario}</span>
            </div>
        </Container>
    )
}

export default Detail
