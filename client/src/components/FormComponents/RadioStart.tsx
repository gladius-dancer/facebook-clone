import React from "react";
import {FormControl, FormControlLabel, FormHelperText} from "@mui/material";
import Radio from '@mui/material/Radio';
import {InputProps} from "./InputProps";

export const InputRadioStart = ({key, name, error, label, checked, onChange, size}: InputProps) => {
        return (
            <FormControl>
                <div className="d-flex align-items-center">
                    <FormControlLabel
                        key={key}
                        control={
                            <Radio
                                checked={checked}
                                onChange={onChange}
                                name={name}
                                color="primary"
                            />
                        }
                        label={label}
                        labelPlacement="start"
                        size={size}
                    />
                    {error && <FormHelperText>{error}</FormHelperText>}
                </div>
            </FormControl>
        )

};
