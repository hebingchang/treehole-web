import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Category } from '../services/category_pb'
import { Tag } from '../services/tag_pb'
import type { RootState } from './store'

// Define a type for the slice state
interface SiteState {
  categories: Category.AsObject[]
  featuredTags: Tag.AsObject[]
}

// Define the initial state using that type
const initialState: SiteState = {
  categories: [],
  featuredTags: [],
}

export const siteSlice = createSlice({
  name: 'site',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category.AsObject[]>) => {
      state.categories = action.payload
    },
    setFeaturedTags: (state, action: PayloadAction<Tag.AsObject[]>) => {
      state.featuredTags = action.payload
    },
  },
})

export const { setCategories, setFeaturedTags } = siteSlice.actions

export const selectCategories = (state: RootState) => state.site.categories
export const selectFeaturedTags = (state: RootState) => state.site.featuredTags

export default siteSlice.reducer
