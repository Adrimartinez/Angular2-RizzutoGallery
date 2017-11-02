export class ArtistCover {
    first_name: string;
    last_name: string;
    full_name: string;
    image: string;
    thumbnail: string;
    birth_date: string;
    birth_nation: string;
    birth_place: string;
}
export class Measures {
    width: number;
    height: number;
    depth: number;
}

export class ImageSize {
    width: string;
    height: string;
}

export class SelectedWorks {
    title: string;
    artist: string;
    image: string;
    measures: Measures;
    image_size: ImageSize;
    thumbnail: string;
}

export class ArtistsExhibition {
    title: string;
    thumbnail: string;
    image: string;
    start_date: string;
    end_date: string;
}

export class Artist {
    id: number;
    code: number;
    represended_artists: boolean;
    exhibited_artists: boolean;
    artists_biography: string;
    artist_cover: ArtistCover;
    selected_works: SelectedWorks;
    artists_exhibition: ArtistsExhibition;
}