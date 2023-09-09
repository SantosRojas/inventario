import { styled } from "styled-components";
import { Colors } from "./colors";

export const InputForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;`

export const Container = styled.div`
    width: 90%;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    box-shadow:0px 0px 5px 5px rgba(0, 0, 0, 0.1);
    @media (min-width:700px){
        max-width:600px;
    }`;

    

export const Registro = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 10px;
`

export const SelectContainer = styled.div`
    margin-bottom: 10px;
`

export const EditContainer = styled.div`
display:flex;
justify-content:space-between;
margin-top:10px;`

export const TitleG = styled.div`
text-align: center;
margin-bottom: 10px;
font-size: 1.3em;
font-weight: bold;
color: ${Colors.primary};
`