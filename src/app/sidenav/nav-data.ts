export const navbarData = [
    {
        routeLink: 'register',
        icon: 'fal fa-home',
        label: 'Registrar Usuario'
    },
    {
        routeLink: 'forgotPassword',
        icon: 'fal fa-home',
        label: 'Cambio de Contraseña'
    },
    {
        routeLink: 'login',
        icon: 'fal fa-home',
        label: 'Iniciar Sesión'
    },
    {
        routeLink: 'artistRequest',
        icon: 'fal fa-home',
        label: 'Solicitudes de Artistas'
    },
    {
        routeLink: 'showGenre',
        icon: 'fal fa-home',
        label: 'Mostrar Géneros'
    },
    {
        routeLink: 'createGenre',
        icon: 'fal fa-box-open',
        label: 'Crear Géneros'
    },
    {
        routeLink: 'showAlbum',
        icon: 'fal fa-chart-bar',
        label: 'Mostrar Álbum'
    },
    {
        routeLink: 'createAlbum',
        icon: 'fal fa-tags',
        label: 'Crear Álbum'
    },
    {
        routeLink: 'showSong',
        icon: 'fal fa-file',
        label: 'Mostrar Canciones del Álbum'
    },
    {
        routeLink: 'createSong',
        icon: 'fal fa-camera',
        label: 'Crear Canción'
    },
    {
        routeLink: 'showAllSong',
        icon: 'fal fa-cog',
        label: 'Mostrar todas la canciones'
    },
    {
        routeLink: 'updateSong/:id',
        icon: 'fal fa-cog',
        label: 'Editar Canción'
    },
    {
        routeLink: 'selectFavorites',
        icon: 'fal fa-cog',
        label: 'Seleccionar Favoritos'
    },
    {
        routeLink: 'createAlbumDoc',
        icon: 'fal fa-cog',
        label: 'Documentación de Crear Albums'
    },
    {
        routeLink: 'showAlbumDoc',
        icon: 'fal fa-cog',
        label: 'Documentación de Mostrar Albums'
    },
    {
        routeLink: 'showFavorites',
        icon: 'fal fa-cog',
        label: 'Mostrar Favoritos'
    },
    

];
export const drago = [
    {
        icon: "HU 04",
        huName: "Registro",
        metodos :[
            {link: "register",
            metodo: "Registrar a travez de Formulario"},
            {link: "registerDoc",
            metodo: "Documentación Registrar"},
        ]
    },
    {
        icon: "HU 01",
        huName: "Iniciar, cerrar sesión y recuperar contraseña.",
        metodos :[
            {link: "login",
            metodo: "Iniciar Sesión"},
            {link: "loginDoc",
            metodo: "Documentación Iniciar Sesión"},
            {link: "forgotPassword",
            metodo: "Restablecer Contraseña"},
            {link: "forgotPasswordDoc",
            metodo: "Documentación Restablecer Contraseña"},
        ]
    },
    {
        icon: "HU 02",
        huName: "Modificar Perfil de usuario",
        metodos :[
            {link: "userProfile/"+localStorage.getItem("idUser"),
            metodo: "Perfil",
            },
            {link: "userProfileDoc",
            metodo: "Documentación Perfil"},
            {link: "userEdit/"+localStorage.getItem("idUser"),
            metodo: "Editar Perfil"},
            {link: "userEditDoc",
            metodo: "Documentación Editar Perfil"},
        ]
    },
    {
        icon: "HU 03",
        huName: "Gestionar solicitudes de artistas",
        metodos :[
            {link: "artistRequest/"+localStorage.getItem("idUser"),
            metodo: "Gestionar Solicitudes de Artistas"},
            {link: "artistRequestDoc",
            metodo: "Documentación Gestionar Solicitudes de Artistas"},
            
        ]
    },
    
    {
        icon: "HU 05",
        huName: "Gestionar Géneros",
        metodos :[
            {link: "showGenre/"+localStorage.getItem("idUser"),
            metodo: "Visualizar Géneros"},
            {link: "showGenreDoc",
            metodo: "Documentación Visualizar Géneros"},
            {link: "createGenre/"+localStorage.getItem("idUser"),
            metodo: "Crear Género"},
            {link: "createGenreDoc",
            metodo: "Documentación Crear Género"},
        ]
    },
    {
        icon: "HU 06",
        huName: "Gestionar Álbumes",
        metodos :[
            {link: "showAlbum/"+localStorage.getItem("idUser"),
            metodo: "Visualizar Álbumes"},
            {link: "showAlbumDoc",
            metodo: "Documentación Visualizar Álbumes"},
            {link: "createAlbum/"+localStorage.getItem("idUser"),
            metodo: "Crear Álbum"},
            {link: "createAlbumDoc",
            metodo: "Documentación Crear Álbum"},
        ]
    },
    {
        icon: "HU 07",
        huName: "Gestionar Canciones",
        metodos :[
            {link: "showSong/"+localStorage.getItem("idUser"),
            metodo: "Visualizar Canciones del Álbum"},
            {link: "showSongDoc",
            metodo: "Documentación Visualizar Canciones del Álbum"},
            {link: "createSong/"+localStorage.getItem("idUser"),
            metodo: "Crear Canción"},
            {link: "createSongDoc",
            metodo: "Documentación Crear Canción"},
            {link: "updateSong/"+localStorage.getItem("idUser"),
            metodo: "Actualizar Canción"},
            {link: "updateSongDoc",
            metodo: "Documentación Actualizar Canción"},
        ]
    },
    {
        icon: "HU 08",
        huName: "Visualizar Canciones",
        metodos :[
            {link: "selectFavorites/"+localStorage.getItem("idUser"),
            metodo: "Visulizar Canciones"},
            {link: "showAllSongDoc",
            metodo: "Documentación Visulizar Canciones"},
            
        ]
    },
    {
        icon: "HU 09",
        huName: "Gestionar Favoritos",
        metodos :[
            {link: "selectFavorites/"+localStorage.getItem("idUser"),
            metodo: "Seleccionar Favoritos"},
            {link: "selectFavoritesDoc",
            metodo: "Documentación Seleccionar Favoritos"},
            {link: "showFavorites/"+localStorage.getItem("idUser"),
            metodo: "Visualizar Favoritos"},
            {link: "showFavoritesDoc",
            metodo: "Documentación Visualizar Favoritos"},
        ]
    },
    {
        icon: "HU 10",
        huName: "Visualizar géneros ciudadano",
        metodos :[
            {link: "showGenres/"+localStorage.getItem("idUser"),
            metodo: "Visualizar Géneros"},
            {link: "showGenresDoc",
            metodo: "Documentación Visualizar Géneros"},
            {link: "showGenreSongs/"+localStorage.getItem("idUser"),
            metodo: "Canciones de Géneros"},
            {link: "showGenreSongsDoc",
            metodo: "Documentación Canciones de Géneros"},
        ]
    },
    {
        icon: "HU 11",
        huName: "Visualizar álbumes ciudadano",
        metodos :[
            {link: "showAlbums/"+localStorage.getItem("idUser"),
            metodo: "Visualizar Álbumes"},
            {link: "showAlbumsDoc",
            metodo: "Documentación Visualizar Álbumes"},
            {link: "showAlbumSongs/"+localStorage.getItem("idUser"),
            metodo: "Canciones de Álbumes"},
            {link: "showAlbumSongsDoc",
            metodo: "Documentación Canciones de Álbumes"},
        ]
    },
    {
        icon: "HU 12",
        huName: "Gestionar Playlist",
        metodos :[
            {link: "showPlaylist/"+localStorage.getItem("idUser"),
            metodo: "Visualizar Playlist"},
            {link: "showPlaylistDoc",
            metodo: "Documentación Visualizar Playlist"},
            {link: "createPlaylist/"+localStorage.getItem("idUser"),
            metodo: "Crear o seleccionar Playlist"},
            {link: "createPlaylistDoc",
            metodo: "Documentación Crear o seleccionar Playlist"},
            
        ]
    },
    {
        icon: "HU 13",
        huName: "Gestionar Canciones Playlist",
        metodos :[
            {link: "addPlaylistSongs/"+localStorage.getItem("idUser"),
            metodo: "Añadir Canciones al Playlist"},
            {link: "addPlaylistSongsDoc",
            metodo: "Documentación Añadir Canciones al Playlist"},
            {link: "showPlaylistSongs/"+localStorage.getItem("idUser"),
            metodo: "Visualizar Canciones Playlist"},
            {link: "showPlaylistSongsDoc",
            metodo: "Documentación Visualizar Canciones Playlist"},
        ]
    },
]