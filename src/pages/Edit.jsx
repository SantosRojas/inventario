
import Formulario from "../components/formulario";
import { BtnR } from "../components/elements";
import { Container } from "../components/views";
import { Link, useNavigate} from "react-router-dom";
import { TitleData } from "../components/dataList";

const VistaEdit = ({ data, changeData, dataRows, setDataRows }) => {
    const { indexEdit, codigoReprecentante, codigoCliente, codigoServicio, tipoBomba, modeloBomba, serie, qr, comentario } = data
    const { setIndexEdit, setSerie, setQr, setComentario } = changeData

    const styleBtnEdit = { textDecoration: 'none', width: "40%", textAlign: "center" }
    const navigate = useNavigate();

    const handleSaveEdit = () => {
        
        if (
            codigoReprecentante !== null &&
            codigoCliente !== null &&
            codigoServicio !== null &&
            serie !== "" &&
            qr !== "" &&
            tipoBomba !== null &&
            modeloBomba !== null
        ) {

            
            const updatedRows = [...dataRows];
            updatedRows[indexEdit].codigoReprecentante = codigoReprecentante;
            updatedRows[indexEdit].serie = serie;
            updatedRows[indexEdit].qr = qr;
            updatedRows[indexEdit].codigoCliente = codigoCliente;
            updatedRows[indexEdit].codigoServicio = codigoServicio;
            updatedRows[indexEdit].tipoBomba = tipoBomba;
            updatedRows[indexEdit].modeloBomba = modeloBomba;
            updatedRows[indexEdit].comentario = comentario;
            setDataRows(updatedRows);
            setIndexEdit(-1);
            setSerie("")
            setQr("")
            setComentario("")
            navigate("/")
        }else{
            alert("Todos los campos son obligatorios")
        }


    };

    const handleCancelEdit = () => {
        setIndexEdit(-1);
        setSerie("")
        setQr("")
        setComentario("")
    };

    return (
        <Container>
            <TitleData>Datos a Editar</TitleData>
            <Formulario data={data}
                changeData={changeData}
                dataRows={dataRows}
                setDataRows={setDataRows}
                showButtonSave={false} />

            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <BtnR  onClick={() => handleSaveEdit()} style={styleBtnEdit}>Guardar</BtnR>
                <BtnR as={Link} to="/" onClick={handleCancelEdit} style={styleBtnEdit}>Cancelar</BtnR>

            </div>
        </Container>
    )
}

export default VistaEdit

// style={{ display: "flex", flexDirection: "column", width: "100%" }}