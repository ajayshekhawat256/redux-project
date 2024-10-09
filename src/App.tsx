import { Provider } from "react-redux";
import "./App.css";
import store from "./store/store";
import { Box, Container, Typography } from "@mui/material";
import AddHabitForm from "./components/add-habit-form";
import HabitList from "./components/habit-list";

function App() {
  return (
    <Provider store={store}>
      <Container maxwidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            Habit Tracker
          </Typography>
          <AddHabitForm />
          <HabitList />
        </Box>
      </Container>
    </Provider>
  );
}

export default App;
