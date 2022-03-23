import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../services/user_pb'
import type { RootState } from './store'

// Define a type for the slice state
interface CredentialState {
  user?: User.AsObject
}

// Define the initial state using that type
const initialState: CredentialState = {
  user: undefined,
}

export const credentialSlice = createSlice({
  name: 'credential',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User.AsObject | undefined>) => {
      state.user = action.payload
    },
  },
})

export const { setUser } = credentialSlice.actions

export const selectUser = (state: RootState) => state.credential.user

export default credentialSlice.reducer
