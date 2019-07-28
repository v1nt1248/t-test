/**
 * @param url: string
 * @returns object { valid: boolean; url: string; error: string|null }
 */
export function youtubeValidator(url) {
    let regexp = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/i;
    let res = url.match(regexp);
    return {
        valid: !!res,
        url: url.trim(),
        error: !res
            ? 'Not valid youtube url'
            : null,
    };
}
