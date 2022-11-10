import {createAsyncThunk}
  from "@reduxjs/toolkit"
import * as service
  from "./tuits-service"

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit', (tuit) =>
       service.createTuit(tuit))

export const findTuitsThunk = createAsyncThunk(
  'tuits/findTuits', async () => await service.findTuits())

export const deleteTuitThunk = createAsyncThunk(
  'tuits/deleteTuit',
  async (tuitId) => {
    await service.deleteTuit(tuitId)
    return tuitId
})

export const updateTuitThunk =
  createAsyncThunk(
    'tuits/updateTuit',
    (tuit) => service.updateTuit(tuit))
