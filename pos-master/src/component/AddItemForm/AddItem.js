import React from "react";
import { AddItemContainer, ImgInputContainer } from "./AddItemEliment";
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import {FcCompactCamera} from 'react-icons/fc'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import {TbCurrencyRupee} from 'react-icons/tb'
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
const AddItem = () => {
  return (
    <AddItemContainer>
      <ImgInputContainer>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept=" image " type="file" />
          <FcCompactCamera size={30} />
        </IconButton>
        <TextField
          label="Item Name"
          variant="outlined"
          style={{ width: "100%" }}
        />
      </ImgInputContainer>
      <FormControl variant="standard" style={{marginRight:'15px',marginLeft:'auto',marginBottom:'1rem'}}>
        <InputLabel htmlFor="input-with-icon-adornment">
         Amount
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <TbCurrencyRupee />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl component="fieldset">
      <FormLabel component="legend">Addon Item</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="chatni"
          control={<Checkbox />}
          label="chatni"
          labelPlacement="end"
        />
        <FormControlLabel
          value="soce"
          control={<Checkbox />}
          label="soce"
          labelPlacement="end"
        />
        <FormControlLabel
          value="salad"
          control={<Checkbox />}
          label="salad"
          labelPlacement="end"
        />
        <FormControlLabel
          value="coconut"
          control={<Checkbox />}
          label="coconut"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>

    <Button variant="contained" color="standard">
        Success
      </Button>
    </AddItemContainer>
  );
};

export default AddItem;
