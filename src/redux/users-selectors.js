export const getUsersData = (state) => {
    return state.UsersPage.usersData
}

export const getTotalCountOfUsers = (state) => {
    return state.UsersPage.totalCountOfUsersa
}

export const getPageSize = (state) => {
    return state.UsersPage.pageSize
}

export const getCurrentPage = (state) => {
    return state.UsersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.UsersPage.isFetching
}

export const getFollowingInProcess = (state) => {
    return state.UsersPage.followingInProcess
}