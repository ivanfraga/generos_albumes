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
        icon: "HU 01",
        huName: "Iniciar, cerrar sesión y recuperar contraseña.",
        metodos :[
            {link: "login",
            metodo: "Iniciar Sesión"},
            {link: "forgotPassword",
            metodo: "Restablecer Contraseña"},
        ]
    },
    {
        icon: "HU 02",
        huName: "Modificar Perfil de usuario",
        metodos :[
            {link: "forgotPassword",
            metodo: "metodo2",
            
            },
            {link: "forgotPassword",
            metodo: "metodo3"},
            
        ]
    },
    {
        icon: "HU 03",
        huName: "Gestionar solicitudes de artistas",
        metodos :[
            {link: "artistRequest",
            metodo: "Aceptar solicitudes de Artistas"},
            
        ]
    },
    {
        icon: "HU 04",
        huName: "Registro",
        metodos :[
            {link: "register",
            metodo: "Registrar a travez de formulario"},
            
        ]
    },
    {
        icon: "HU 05",
        huName: "Gestionar Géneros",
        metodos :[
            {link: "showGenre",
            metodo: "Visualizar Géneros"},
            {link: "createGenre",
            metodo: "Crear Género"},
        ]
    },
    {
        icon: "HU 06",
        huName: "Gestionar Álbumes",
        metodos :[
            {link: "showAlbum",
            metodo: "Visualizar Álbumes"},
            {link: "showAlbumDoc",
            metodo: "Documentación Visualizar Álbumes"},
            {link: "createAlbum",
            metodo: "Crear Álbum"},
            {link: "createAlbumDoc",
            metodo: "Documentación Crear Álbum"},
        ]
    },
    {
        icon: "HU 07",
        huName: "Gestionar Canciones",
        metodos :[
            {link: "showSong",
            metodo: "Visualizar Canciones del Álbum"},
            {link: "createSong",
            metodo: "Crear Canción"},
            {link: "updateSong/:id",
            metodo: "Actualizar Canción"},
        ]
    },
    {
        icon: "HU 08",
        huName: "Visualizar Canciones",
        metodos :[
            {link: "showAllSong",
            metodo: "Visualizar todas las canciones"},
            
        ]
    },
    {
        icon: "HU 09",
        huName: "Gestionar Favoritos",
        metodos :[
            {link: "selectFavorites",
            metodo: "Seleccionar Favoritos"},
            {link: "showFavorites",
            metodo: "Visualizar Favoritos"},
        ]
    },
    {
        icon: "HU 10",
        huName: "Visualizar géneros ciudadano",
        metodos :[
            {link: "showGenres",
            metodo: "Visualizar Géneros"},
            {link: "showGenreSongs",
            metodo: "Canciones de Géneros"},
        ]
    },
    {
        icon: "HU 11",
        huName: "Visualizar álbumes ciudadano",
        metodos :[
            {link: "showAlbums",
            metodo: "Visualizar Álbumes"},
            {link: "showAlbumSongs",
            metodo: "Canciones de Álbumes"},
        ]
    },
]