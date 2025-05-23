function getImageUrl(cover) {
    return new URL(`../assets/images/movie-covers/${cover}`, import.meta.url).href
}

export { getImageUrl }