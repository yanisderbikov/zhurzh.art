const dir = '/images/article/whoAreThey';

function pair(fileBase) {
    const desktop = `${dir}/${fileBase}.png`;
    return { desktop, mobile: desktop };
}

/** Keys match image filename numbers (2…7). */
export const whoAreTheyPictures = {
    2: pair('2'),
    3: pair('3'),
    4: pair('4'),
    5: pair('5'),
    6: pair('6'),
    7: pair('7'),
};

export function getWhoAreTheyPicture(variant, n) {
    const entry = whoAreTheyPictures[n];
    if (!entry) return '';
    return variant === 'mobile' ? entry.mobile : entry.desktop;
}
