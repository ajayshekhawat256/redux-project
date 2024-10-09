import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../store/habit-slice";

const AddHabitForm: React.FC = () => {
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(addHabit({ name, frequency }));
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Habit Name"
          value={name}
          placeholder="Enter habit name"
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel>Frequency</InputLabel>
          <Select
            label="Frequency"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")}
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Add Habit
        </Button>
      </Box>
    </form>
  );
};
export default AddHabitForm;
