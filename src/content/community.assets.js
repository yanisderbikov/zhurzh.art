const dir = '/images/article/community';

export const communityHeroBackground = {
    desktop: `${dir}/Backgroundnew.png`,
    mobile: `${dir}/BackgroundNoMobile.png`,
};

export const communityMockup = {
    desktop: `${dir}/mockup.png`,
    mobile: `${dir}/mockupMobile.png`,
};

/** @param {number} n Picture index 1…15 */
function picturePair(n) {
    const desktop = `${dir}/Picture${n}.jpg`;
    return { desktop, mobile: desktop };
}

export const communityPictures = Object.fromEntries(
    Array.from({ length: 15 }, (_, i) => [i + 1, picturePair(i + 1)])
);

export function getCommunityPicture(variant, n) {
    const pair = communityPictures[n];
    if (!pair) return '';
    return variant === 'mobile' ? pair.mobile : pair.desktop;
}
