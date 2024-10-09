import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Habit {
  id: String;
  name: String;
  frequency: "daily" | "weekly";
  completedDates: string[];
  createdAt: string;
}
interface HabitState {
  habits: Habit[];
  isLoading: boolean;
  error: string | null;
}

const initialState: HabitState = {
  habits: [],
  isLoading: false,
  error: null,
};

const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (
      state,
      action: PayloadAction<{ name: string; frequency: "daily" | "weekly" }>
    ) => {
      const newHabit: Habit = {
        id: Date.now().toString(),
        name: action.payload.name,
        frequency: action.payload.frequency,
        completedDates: [],
        createdAt: new Date().toISOString(),
      };
      state.habits.push(newHabit);
      console.log(newHabit);
    },
    removeHabit: (state, action: PayloadAction<string>) => {
      state.habits = state.habits.filter(
        (habit) => habit.id !== action.payload
      );
    },
    toogleHabit: (
      state,
      action: PayloadAction<{ id: String; date: string }>
    ) => {
      const habit = state.habits.find((h) => h.id === action.payload.id);
      if (habit) {
        const index = habit.completedDates.indexOf(action.payload.date);
        if (index > -1) {
          habit.completedDates.splice(index, 1);
        } else {
          habit.completedDates.push(action.payload.date);
        }
      }
    },
  },
});

export const { addHabit, removeHabit, toogleHabit } = habitSlice.actions;
export default habitSlice.reducer;
