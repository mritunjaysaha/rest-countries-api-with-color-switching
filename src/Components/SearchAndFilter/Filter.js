import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: "10em",
        "margin-right": "3em",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Filter(props) {
    const classes = useStyles();

    return (
        <div className="searchandfilter filter">
            <FormControl className={classes.formControl}>
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
