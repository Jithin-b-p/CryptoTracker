/* eslint-disable react/prop-types */
import styles from "./styles.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function SelectDays({ days, onDaysChange }) {
  return (
    <div className={styles.select_box}>
      <FormControl fullWidth>
        <InputLabel id="simple-select-label" sx={{ color: "var(--white)" }}>
          price change in
        </InputLabel>
        <Select
          labelId="simple-select-label"
          id="demo-simple-select"
          value={days}
          label="price change in"
          onChange={onDaysChange}
          sx={{
            height: "2.5rem",
            color: "var(--white)",
            "& .MuiSvgIcon-root": {
              color: "var(--white)",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--white)",
            },
            "&:hover": {
              "&& fieldset": {
                borderColor: "#3a80e9",
              },
            },
          }}
        >
          <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={90}>90 Days</MenuItem>
          <MenuItem value={120}>120 Days</MenuItem>
          <MenuItem value={365}>1 year</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectDays;
