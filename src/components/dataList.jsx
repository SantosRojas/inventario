import { styled } from "styled-components"
import { BsFillTrashFill } from "react-icons/bs"
import { FaEdit } from "react-icons/fa"
import { Link } from "react-router-dom"
import { Colors } from "./colors"
import Detail from "./Detail"
import { useState } from "react"

const Listado = styled.div`
    list-style: none;
    width: 100%;
    justify-content: center;
    padding-inline-start:0px ;
`
const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin:5px;
    padding: 5px 0;
    border-bottom: .2rem solid ${Colors.primary};
`

export const TitleData = styled.div`
text-align: center;
margin-top: 0;
font-size: 1.2em;
font-weight: bold;
margin-bottom: 10px;
color:${Colors.primary};
`

const DataList = ({ setOpenDialog, changeData, dataRows, setIndexDelete }) => {

    const [showIndex,setShowIndex] = useState(-1)
    const { setIndexEdit, setCodigoReprecentante, setCodigoCliente, setCodigoServicio, setTipoBomba, setModeloBomba, setSerie, setQr, setComentario } = changeData


    const handleEdit = (index) => {
        setCodigoReprecentante(dataRows[index].codigoReprecentante);
        setCodigoCliente(dataRows[index].codigoCliente);
        setCodigoServicio(dataRows[index].codigoServicio);
        setTipoBomba(dataRows[index].tipoBomba)
        setModeloBomba(dataRows[index].modeloBomba)
        setSerie(dataRows[index].serie)
        setQr(dataRows[index].qr)
        setComentario(dataRows[index].comentario)
        setIndexEdit(index)

    };

    const ShowInfo = (index) => {
        setShowIndex(index)
    }

    const CloseInfo =() => {
        setShowIndex(-1);
    }
    

    return (
        <>
            <TitleData color={Colors.primary}>Datos Agregados</TitleData>
            <Listado>
                {dataRows.map((data, index) => {
                    return (
                        <ListItem key={index}>
                            {showIndex === index ? (
                                <Detail data ={data}  CloseInfo  ={CloseInfo }/>
                            ) : (
                                <>
                                    <Link style={{ color: "#000" }} to={`/edit/${index}`} onClick={() => handleEdit(index)}><FaEdit color="#000" /></Link>
                                    <span style={{ color: "#000" }}>{data.serie}</span>
                                    <span style={{ color: "#000" }} onClick={() => ShowInfo(index)} >{data.qr}</span>
                                    <span style={{ color: "#000" }}>{data.modeloBomba.label}</span>
                                    <span style={{ color: "#000" }} onClick={() => {
                                        setIndexDelete(index) 
                                        setOpenDialog(true)}}>
                                    <BsFillTrashFill /></span></>
                            )}
                        </ListItem>

                    )
                })}

            </Listado>
        </>
    )
}

export default DataList;