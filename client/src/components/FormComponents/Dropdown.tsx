import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import { InputProps } from "./InputProps";

export const Dropdown = ({key, name, control, label, options, size }: InputProps) => {
  const generateSingleOptions = () => {
    return options.map((option: any) => {
      return (
        <MenuItem key={key} value={option}>
          {option}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl sx={{ m: 0, minWidth: 110 }} size={size}>
      <InputLabel>{label}</InputLabel>
      <Controller
        defaultValue={""}
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value}>
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};
