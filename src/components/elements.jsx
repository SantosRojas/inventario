import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { SelectContainer } from "./views";
import { Autocomplete, TextField } from "@mui/material";
import { Colors } from "./colors";

export const ColorBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: ${Colors.primary};
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: ${Colors.primary};
    }
  }
`;

export const BtnR = styled.button`
    background-color: ${Colors.primary};
    color: #fff;
    padding: 10px 7px;
    border: none;
    border-radius: 5px;
    margin-top: 5px;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;`

export const DropdownFilter = ({ data, selectedOption, setSelectedOption, placeholder }) => {

  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(data)
  }, [data]);

  const handleChange = (event,newValue) => {
    setSelectedOption(newValue);
  };

  return (
    <SelectContainer>
      {/* <Select
          value={selectedOption}
          onChange={handleChange}
          options={options}
          isSearchable={true}
          placeholder={placeholder}
        /> */}

      <Autocomplete style={{margin:"5px 0"}}
        value={selectedOption}
        aria-required
        getOptionLabel={(option)=>option.label}
        onChange={handleChange}
        options={options}
        renderInput={(params) => <ColorBorderTextField {...params} required label={placeholder}/>}
      />

    </SelectContainer>
  );
}
