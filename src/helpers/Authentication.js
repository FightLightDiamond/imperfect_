const getAuthInfo = (auth) => {
    return JSON.parse(localStorage.getItem(auth))
}

const checkAuthenticated = (auth) => {
    try {
        const authInfo = getAuthInfo(auth)

        return !!authInfo.access_token
    } catch (e) {
        console.log(e)
        return false
    }
}

const getToken = (auth) => {
    const authInfo = getAuthInfo(auth)
    return authInfo.access_token
}


export {getAuthInfo, checkAuthenticated, getToken}
