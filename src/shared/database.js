import Vue from "vue";

export default Vue.observable({
    baseUrl: 'https://api.themoviedb.org/3',
    pathAPI: {
        popularMovie:'/movie/popular',
        searchMovie: '/search/movie',
        searchTvseries: '/search/tv',
    },
    api_key: '813a7c6790440d0959ef51a5db9ae94f',
    result: null,
    showedBox: 20,
    displayed: [],
    mediaType: 'all',
    languages: [
        'it',
        'en',
        'ru',
        'de',
        'sp',
        'fr',
        'tr',
        'pl',
    ],
    langFLag: [
        // it
        'https://flagemoji.com/wp-content/uploads/2020/02/Flag_of_Italy.svg',
        // en
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_the_United_Kingdom_%283-2_aspect_ratio%29.svg/1280px-Flag_of_the_United_Kingdom_%283-2_aspect_ratio%29.svg.png',
        // ru
        'https://www.countryflags.com/wp-content/uploads/russia-flag-png-xl.png',
        // de
        'https://cdn.countryflags.com/thumbs/germany/flag-400.png',
       // sp
        'https://i0.wp.com/internationalpairsgolf.com/wp-content/uploads/2020/05/spain.png',
       // fr
        'https://flagemoji.com/wp-content/uploads/2020/02/Flag_of_France.svg',
       // tr
        'https://flagsweb.com/Flag_Colours/Turkey_Flag_Colours.jpg',
       // pl
        'https://flagpedia.net/data/flags/w1600/pl.png',
    ],
})