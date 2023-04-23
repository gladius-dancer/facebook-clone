import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import TextField from '@mui/material/TextField';
import {InputProps} from "./InputProps";

export const InputText = ({key, name, control, placeholder, label, status, size, className }: InputProps) => {
    return (
        <Controller
            key={key}
            name={name}
            control={control}
            defaultValue={''}
            render={({
                         field: { onChange, value },
                         fieldState: { error },
                     }) => (
                <TextField
                    className={className}
                    placeholder={placeholder}
                    helperText={error ? error.message : null}
                    error={!!error}
                    onChange={onChange}
                    value={value}
                    label={label}
                    variant="outlined"
                    disabled={status ? false : true}
                    size={size}
                />
            )}
        />
    );
};