export class Attachments {
    url: string;
    description: string;
}
export class CuratedBy {
    id: number;
    name: string;
}
export class InstallationViews {
    image: string;
    image_desc: string;
}
export class ExhibitedWorks {
    image: string;
    image_desc: string;
}
export class Artists {
    id: number;
    name: string;
}
export class ImageSize {
    width: string;
    height: string;
}

export class ExhibitionCover {
    description: string;
    start: string;
    end: string;
    curated_by: CuratedBy;
    opening: string;
    location: string;
    when;
    string;
    image: string;
    image_size: ImageSize;
    image_description: string;
    thumbnail: string;
    attachments: Attachments;
}
export class Exhibition {
    id: number;
    title: string;
    type: number;
    exhibited_artists: boolean;
    artists_biography: string;
    exhibition_cover: ExhibitionCover;
    installation_views: InstallationViews;
    exhibited_works: ExhibitedWorks;
    artists: Artists;
}