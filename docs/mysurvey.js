function getSurveyLink(baseURL, ccode) {
    if (ccode === undefined || ccode === null || ccode === '') {
        // ccodeが未定義、null、または空文字の場合、デフォルトのURLを返す
        return baseURL;
    } else {
        // ccodeをURLに追加して返す
        return `${baseURL}?ccode=${ccode}`;
    }
};

/**
 * Cookieを設定する関数
 * @param {string} name Cookieの名前
 * @param {string} value Cookieの値
 * @param {number} days Cookieの有効期限（日数）
 */
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

/**
 * Cookieの値を取得する関数
 * @param {string} name 取得したいCookieの名前
 * @returns {string|null} Cookieの値、またはnull
 */
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

export { getSurveyLink, setCookie, getCookie };