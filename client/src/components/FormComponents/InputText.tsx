import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import TextField from '@mui/material/TextField';
import {InputProps} from "./InputProps";

export const InputText = ({ name, control, placeholder, label, status }: InputProps) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={''}
            render={({
                         field: { onChange, value },
                         fieldState: { error },
                     }) => (
                <TextField
                    placeholder={placeholder}
                    helperText={error ? error.message : null}
                    error={!!error}
                    onChange={onChange}
                    value={value}
                    fullWidth
                    label={label}
                    variant="outlined"
                    disabled={status ? false : true}
                />
            )}
        />
    );
};