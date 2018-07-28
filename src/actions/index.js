export const TYPES = {
  SET_ENTRIES: 'SET_ENTRIES',
};

export function setEntries(entries) {
  return {
    type: TYPES.SET_ENTRIES,
    entries,
  };
}
