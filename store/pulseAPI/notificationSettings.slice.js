import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_notificationsetting_list = createAsyncThunk(
  "notificationSettings/api_v1_notificationsetting_list",
  async payload => {
    const response = await apiService.api_v1_notificationsetting_list(payload)
    return response.data
  }
)
export const api_v1_notificationsetting_create = createAsyncThunk(
  "notificationSettings/api_v1_notificationsetting_create",
  async payload => {
    const response = await apiService.api_v1_notificationsetting_create(payload)
    return response.data
  }
)
export const api_v1_notificationsetting_retrieve = createAsyncThunk(
  "notificationSettings/api_v1_notificationsetting_retrieve",
  async payload => {
    const response = await apiService.api_v1_notificationsetting_retrieve(
      payload
    )
    return response.data
  }
)
export const api_v1_notificationsetting_update = createAsyncThunk(
  "notificationSettings/api_v1_notificationsetting_update",
  async payload => {
    const response = await apiService.api_v1_notificationsetting_update(payload)
    return response.data
  }
)
export const api_v1_notificationsetting_partial_update = createAsyncThunk(
  "notificationSettings/api_v1_notificationsetting_partial_update",
  async payload => {
    const response = await apiService.api_v1_notificationsetting_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_notificationsetting_destroy = createAsyncThunk(
  "notificationSettings/api_v1_notificationsetting_destroy",
  async payload => {
    const response = await apiService.api_v1_notificationsetting_destroy(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const notificationSettingsSlice = createSlice({
  name: "notificationSettings",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_notificationsetting_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_notificationsetting_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_notificationsetting_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_notificationsetting_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_notificationsetting_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_notificationsetting_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_notificationsetting_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_notificationsetting_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_notificationsetting_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_notificationsetting_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_notificationsetting_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_notificationsetting_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_notificationsetting_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_notificationsetting_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_notificationsetting_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_notificationsetting_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_notificationsetting_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_notificationsetting_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_notificationsetting_list,
  api_v1_notificationsetting_create,
  api_v1_notificationsetting_retrieve,
  api_v1_notificationsetting_update,
  api_v1_notificationsetting_partial_update,
  api_v1_notificationsetting_destroy,
  slice: notificationSettingsSlice
}
