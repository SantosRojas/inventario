import CodigosReprecentante from "../data/codigoReprecentante.json"
import CodigosCliente from "../data/codigoCliente.json"
import CodigosServicio from "../data/codigoServicio.json"
import TiposBomba from "../data/tipobomba.json"
import ModelosBomba from "../data/modelobomba.json"
import { BtnR, ColorBorderTextField, DropdownFilter } from "./elements"
import { InputForm } from "./views"

const CamposTexto = { margin: "10px 0" }

const Formulario = ({ data, changeData, dataRows, setDataRows, showButtonSave }) => {


    const handleAddData = (e) => {
        e.preventDefault();
        setDataRows([...dataRows, { codigoReprecentante, codigoCliente, codigoServicio, tipoBomba, modeloBomba, serie, qr, comentario, fecha }]);
        setSerie("")
        setQr("")
    };

    const { codigoReprecentante, codigoCliente, codigoServicio, tipoBomba, modeloBomba, serie, qr, comentario, fecha } = data
    const { setCodigoReprecentante, setCodigoCliente, setCodigoServicio, setTipoBomba, setModeloBomba, setSerie, setQr, setComentario } = changeData

    return (
        <InputForm onSubmit={handleAddData}>

            <DropdownFilter data={CodigosReprecentante} selectedOption={codigoReprecentante} setSelectedOption={setCodigoReprecentante} placeholder={"Seleccione su nombre"} />
            <DropdownFilter data={CodigosCliente} selectedOption={codigoCliente} setSelectedOption={setCodigoCliente} placeholder={"Seleccione el Cliente"} />
            <DropdownFilter data={CodigosServicio} selectedOption={codigoServicio} setSelectedOption={setCodigoServicio} placeholder={"Seleccione el servicio"} />
            <DropdownFilter data={TiposBomba} selectedOption={tipoBomba} setSelectedOption={setTipoBomba} placeholder={"Selecciona el tipo de bomba"} />
            <DropdownFilter data={ModelosBomba} selectedOption={modeloBomba} setSelectedOption={setModeloBomba} placeholder={"Selecciona el modelo de bomba"} />

            <ColorBorderTextField required style={CamposTexto} type="number" id="serie" label="N° Serie" variant="outlined" value={serie} onChange={(e) => setSerie(e.target.value)} />
            <ColorBorderTextField required style={CamposTexto} type="number" id="codigoqr" label="Codigo Qr" variant="outlined" value={qr} onChange={(e) => setQr(e.target.value)} />
            <ColorBorderTextField style={CamposTexto} type="text" id="comentario" label="Comentario" variant="outlined" value={comentario} onChange={(e) => setComentario(e.target.value)} />

            {showButtonSave && <BtnR type="submit">Agregar</BtnR>}
        </InputForm>
    )
}

export default Formulario;