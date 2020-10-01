const getAuthInfo = (auth) => {
    return JSON.parse(localStorage.getItem(auth))
}

const checkAuthenticated = (auth) => {
    try {
        const authInfo = getAuthInfo(auth)
        console.log(auth, authInfo)

        return authInfo && !!authInfo.access_token
    } catch (e) {
        console.log(e)
        return false
    }
}

const getToken = (auth) => {
    const authInfo = getAuthInfo(auth)

    return authInfo.access_token
}

const destroyAuth = (auth) => {
    localStorage.removeItem(auth)
}

export {getAuthInfo, checkAuthenticated, getToken, destroyAuth}
