export class MainMenu {
    exhibitions = 'Mostre';
    artists = 'Artisti';
    news = 'Notizie';
    aboutus = 'Chi siamo';
    contact = 'Contatti';
    current = 'In corso';
    upcomming = 'Future';
    past = 'Passate';
    all = 'Tutto';
    represented = 'Rappresentati';
    exhibited = 'Esibiti';
}
export class ExhibitionMenu {
    exhibitionscover = "Copertina della mostra";
    installationviews = 'Immagini di installazione';
    exhibitedworks = 'Opere esposte';
    files = 'File';
    artists = 'Artisti';
    artistpage = "Pagina dell'artista";
}
export class ExhibitionMobMenu {
    exhibitionscover = 'Immagine';
    installationviews = 'installazione';
    exhibitedworks = 'Opere';
    files = 'File';
    artists = 'Artisti';
    artistpage = 'Artista';
}
export class ArtistMenu {
    artistscover = "Immagine dell'artista";
    selectedworks = 'Opere selezionate';
    exhibition = 'Mostre';
    biography = 'Biografia';
    news = 'Notizie';
}
export class ArtistMobMenu {
    artistcover = 'Immagine';
    selectedWorks = 'Opere';
    exhibition = 'Mostre';
    biography = 'Biografia';
    news = 'Notizie';
}
export class It {
    mainMenu = new MainMenu;
    exhibitionMenu = new ExhibitionMenu;
    exhibitionMobMenu = new ExhibitionMobMenu;
    artistMenu = new ArtistMenu;
    artistMobMenu = new ArtistMobMenu;
}