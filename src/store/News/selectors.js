const getAdminSelector = state=> state.admin

export const getIsAuthSelector = state=> getAdminSelector(state).isAuthAdmin