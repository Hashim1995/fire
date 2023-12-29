export const returnCurrentLangId = (t) => {
    let lang;
    if (t == 'az') {
        lang = 1
    }
    if (t == 'en') {
        lang = 2
    }
    if (t == 'ru') {
        lang = 3
    }
    return lang
}