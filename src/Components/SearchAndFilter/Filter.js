import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function Filter(props) {
    return (
        <div className="searchandfilter filter">
            <FormControl className="select">
                <InputLabel id="demo-simple-select-helper-label">
                    Filter by Region
                </InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={props.region}
                    onChange={(e) => {
                        props.filter(e);
                    }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="africa">Africa</MenuItem>
                    <MenuItem value="americas">America</MenuItem>
                    <MenuItem value="asia">Asia</MenuItem>
                    <MenuItem value="europe">Europe</MenuItem>
                    <MenuItem value="oceania">Oceania</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
