export class Site {
    home: Home;
    contacts: Contacts;
    about: About;
    social: Social;
    coockie: Coockie;
    privacy: Privacy;
}
export class Home {
    description: string;
    images: Image;
}
export class Images {
    image: Image;
}
export class Image {
    url: string;
    description: string;
}

export class Contacts {
    description: string;
    image: string;
}
export class About {
    description: string;
    image: string;
}
export class Social {}
export class Coockie {}
export class Privacy {}


