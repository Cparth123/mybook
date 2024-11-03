import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
let servertport = "http://localhost:8000/api/items";

export const GetAllData = createAsyncThunk("item/getalldata/", async () => {
  const response = await axios.get(`${servertport}/alldata`);
  return response;
});

export const NewItem = createAsyncThunk(
  "Items/add",
  async ({ Item, type }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${servertport}/${type}`, Item);
      return response.data; // Return only the response data
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const RemoveItem = createAsyncThunk(
  "Items/RemoveItem",
  async ({ Id, type }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${servertport}/${type}/${Id}`);

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateItem = createAsyncThunk(
  "items/updateItem",
  async ({ Id, Item, type }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${servertport}/${type}/${Id}`, Item);
      return response;
    } catch (error) {
      return rejectWithValue(error.response || error.message);
    }
  }
);

export const singalIconAdd = createAsyncThunk(
  "Items/SignItem",
  async ({ item }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${servertport}/singleIcon`, item);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const singalIconRemove = createAsyncThunk(
  "Items/SignItem/remove",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${servertport}/singleIcon/${id}`);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const singalIconQty = createAsyncThunk(
  "Items/SignItem/add",
  async ({ item, id }, { rejectWithValue }) => {
    console.log(item, id, "edittest");

    try {
      const response = await axios.put(`${servertport}/singleIcon/${id}`, item);
      return response;
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  main: [],
  status: "idle",
  error: null,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    // ...................................................................... income
    addIncome: (state, action) => {
      console.log(action);

      state.income.push(action.payload);
    },
    updateIncome: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.income.findIndex((item) => item.id === id);
      console.log("🚀 ~ index:", index);
      if (index !== -1) {
        state.income[index] = { ...state.income[index], ...updatedData };
      }
    },
    deleteIncome: (state, action) => {
      state.income = state.income.filter((item) => item.id !== action.payload);
    },

    // ..............................................................expanse.............................................................

    addExpanse: (state, action) => {
      state.expanse.push(action.payload);
    },
    updateExpanse: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.expanse.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.expanse[index] = { ...state.expanse[index], ...updatedData };
      }
    },
    deleteExpanse: (state, action) => {
      state.expanse = state.expanse.filter(
        (item) => item.id !== action.payload
      );
    },

    // ......................................................customIcon. income......................................................

    addcustomIconincome: (state, action) => {
      state.customIcon.income.push(action.payload);
    },
    updatecustomIconincome: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.customIcon.income.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.customIcon.income[index] = {
          ...state.customIcon.income[index],
          ...updatedData,
        };
      }
    },
    deletecustomIconincome: (state, action) => {
      state.customIcon.income = state.customIcon.income.filter(
        (item) => item.id !== action.payload
      );
    },

    // ..............................................customIcon. expanse.............................................................

    addcustomIconexpnse: (state, action) => {
      state.customIcon.expanse.push(action.payload);
    },
    updatecustomIconexpnse: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.customIcon.expanse.findIndex(
        (item) => item.id === id
      );
      if (index !== -1) {
        state.customIcon.expanse[index] = {
          ...state.customIcon.expanse[index],
          ...updatedData,
        };
      }
    },
    deletecustomIconexpnse: (state, action) => {
      state.customIcon.expanse = state.customIcon.expanse.filter(
        (item) => item.id !== action.payload
      );
    },

    // ...............................singalIcon............................................

    addsingleIcon: (state, action) => {
      state.singalIcon.push(action.payload);
    },
    updatesingleIcon: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.singalIcon.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.customIcon.expanse[index] = {
          ...state.customIcon.expanse[index],
          ...updatedData,
        };
      }
    },
    deletesingleIcon: (state, action) => {
      state.singalIcon = state.singalIcon.filter(
        (item) => item.id !== action.payload
      );
    },
    incrementQlysingIcon: (state, action) => {
      const { id, qly } = action.payload; // Expecting { id: number, amount: number }
      const icon = state.singalIcon.find((item) => item.id === id);
      if (icon) {
        icon.qly += qly;
      }
    },
    decrementQlysingIcon: (state, action) => {
      const { id, qly } = action.payload; // Expecting { id: number, amount: number }
      const icon = state.singalIcon.find((item) => item.id === id);
      if (icon && icon.qly > 0) {
        icon.qly -= qly;
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(GetAllData.fulfilled, (state, action) => {
        state.main = action.payload;
      })
      .addCase(NewItem.fulfilled, (state, action) => {
        state.main = action.payload;
      })
      .addCase(RemoveItem.fulfilled, (state, action) => {
        state.main = action.payload;
      })
      .addCase(updateItem.fulfilled, (state, action) => {
        state.main = action.payload;
      })
      .addCase(singalIconAdd.fulfilled, (state, action) => {
        state.main = action.payload;
      })
      .addCase(singalIconRemove.fulfilled, (state, action) => {
        state.main = action.payload;
      })
      .addCase(singalIconQty.fulfilled, (state, action) => {
        state.main = action.payload;
      });
  },

  // post Item
});

export const {
  addIncome,
  updateIncome,
  deleteIncome,
  addExpanse,
  updateExpanse,
  deleteExpanse,
  addcustomIconincome,
  updatecustomIconincome,
  deletecustomIconincome,
  addcustomIconexpnse,
  updatecustomIconexpnse,
  deletecustomIconexpnse,
  addsingleIcon,
  updatesingleIcon,
  deletesingleIcon,
  incrementQlysingIcon,
  decrementQlysingIcon,
} = itemsSlice.actions;

export default itemsSlice.reducer;
