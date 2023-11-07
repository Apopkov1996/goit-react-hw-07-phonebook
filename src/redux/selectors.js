export const selectContacts = state => state.contactsList.items;

export const selectFilter = state => state.filter.filter;

export const selectIsLoading = state => state.contactsList.contacts.isLoading;

export const selectError = state => state.contactsList.contacts.error;
