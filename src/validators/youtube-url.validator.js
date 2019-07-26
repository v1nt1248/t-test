export function youtubeValidator(url) {
    let valid = url.length >= 3;
    return {
        valid,
        url,
    };
}
