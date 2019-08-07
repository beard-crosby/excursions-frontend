// This helper function will allow is to keep our reducer switches more readable and compact.
export const updateState = (state, updatedValues) => {
  return {
      ...state,
      ...updatedValues,
  }
}