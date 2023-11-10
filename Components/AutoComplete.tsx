import Autocomplete from "@mui/material/Autocomplete";
import { Grid } from "@mui/material";
import catalog from "../Data/catalog.json";
// import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Courses } from "../Interfaces/Courses";
import React from "react";

const COURSES: Courses[] = Object.values(catalog)
    .flat()
    .map((category) => Object.values(category).flat())
    .flat()
    .map((code) => ({ ...code}));
    


export function AutoComplete(): JSX.Element{
    const [inputValue, setInputValue] = React.useState("");
    const [value, setValue] = React.useState<string | null>(COURSES[0].code);
    return(
        <div>
            <Grid>
                <Autocomplete
                    data-testid="autocompletebutton"
                    value={value}
                    onChange={(
                        event: React.SyntheticEvent<Element, Event>,
                        newValue: string | null
                    ) => {
                        setValue(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                    }}
                    id="controllable-states-demo"
                    options={COURSES.map((test: Courses): string => test.code)}
                    sx={{ width: 200, textAlign: "center" }}
                    renderInput={(params) => (
                        <TextField
                            data-testid="autocompleteInput"
                            {...params}
                            label="Courses"
                        />
                    )}
                />
            </Grid>
        </div>
        );
}