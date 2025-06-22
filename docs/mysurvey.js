function getCcode(length = 10) {
    // 指定桁数（省略時デフォルト10桁）のランダムな整数を生成
    let randomCode = '';
    for (let i = 0; i < length; i++) {
        randomCode += Math.floor(Math.random() * 10);
    }
    return randomCode;
};

function getSurveyLink(baseURL, ccode) {
    if (ccode === undefined || ccode === null || ccode === '') {
        // ccodeが未定義、null、または空文字の場合、デフォルトのURLを返す
        return baseURL;
    } else {
        // ccodeをURLに追加して返す
        return `${baseURL}?ccode=${ccode}`;
    }
};

export {getCcode, getSurveyLink};