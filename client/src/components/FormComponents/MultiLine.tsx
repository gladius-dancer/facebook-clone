import React from "react";
import {Controller, useFormContext} from "react-hook-form";
import TextField from "@mui/material/TextField";
import {InputProps} from "./InputProps";

export const MultiLine = ({name, control, label, size}: InputProps) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={''}

            render={({
                         field: {onChange, value},
                         fieldState: {error},
                         formState,
                     }) => (
                <TextField
                    helperText={error ? error.message : null}
                    size={size}
                    error={!!error}
                    onChange={onChange}
                    value={value}
                    fullWidth
                    label={label}
                    variant="outlined"
                    multiline
                    rows={3}
                />
            )}
        />
    );
};
