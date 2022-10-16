const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '96efc94eaa8a651ab220d0c7eacb16f4',
    originalImag: (imgPath) => `https://api.themoviedb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://api.themoviedb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;