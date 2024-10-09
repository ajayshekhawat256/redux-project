import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { removeHabit, toogleHabit } from "../store/habit-slice";

const HabitList: React.FC = () => {
  const habits = useSelector((state: RootState) => state.habits.habits);
  const dispatch = useDispatch<AppDispatch>();

  const today = new Date().toISOString().split("T")[0];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
      {habits.map((habit) => (
        <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
          <Grid container alignItems="center">
            <Grid xs={12} sm={6}>
              <Typography variant="h6">{habit.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {habit.frequency.charAt(0).toUpperCase() +
                  habit.frequency.slice(1)}
              </Typography>
            </Grid>
            <Grid xs={12} sm={6}>
              <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                <Button
                  variant="outlined"
                  color={
                    habit.completedDates.includes(today) ? "success" : "primary"
                  }
                  onClick={() =>
                    dispatch(toogleHabit({ id: habit.id, date: today }))
                  }
                >
                  {habit.completedDates.includes(today)
                    ? "Completed"
                    : "Mark Complete"}
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => dispatch(removeHabit(habit.id))}
                >
                  Remove
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};
export default HabitList;
