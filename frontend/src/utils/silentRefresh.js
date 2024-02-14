// get expiration time

const getExpirationTime = (accessToken) => {
    const [_, payloadBase64] = accessToken.split(".");
    const { iat, exp } = JSON.parse(atob(payloadBase64));
    const expirationTime = (exp - iat - 120) * 1000;
    return expirationTime;
};

// get new access token

const getNewAccessToken = async (refreshToken) => {
    const newAccessTokenFetch = await fetch(
        import.meta.env.VITE_API_KEY + "userData/refreshToken",
        {
            method: "GET",
            headers: { authorization: `Bearer ${refreshToken}` },
        }
    );
    const { success, newAccessToken } = await newAccessTokenFetch.json();
    return newAccessToken;
};

// silentRefresh

const silentRefresh = async (accessToken, refreshToken, stateSetter) => {
    console.log("refresh", refreshToken);
    const delayTime = getExpirationTime(accessToken);
    setTimeout(async () => {
        const newAccessToken = await getNewAccessToken(refreshToken);
        stateSetter(newAccessToken);
        silentRefresh(newAccessToken, refreshToken, stateSetter);
    }, delayTime);
};

export default silentRefresh;
