import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {ExhibitionItemComponent} from './exhibition-item/exhibition-item.component';
import {HomeComponent} from './home/home.component';
import {NewComponent} from './new/new.component';
import {ContactComponent} from './contact/contact.component';
import {ArtService} from './art.service';
import {ExhibitionService} from './exhibition.service';
import {ArtistsListComponent} from './artists-list/artists-list.component';
import {ArtistDetailComponent} from './artist-detail/artist-detail.component';
import {ExhibitionDetailComponent} from './exhibition-detail/exhibition-detail.component';
import {ArtistBioComponent} from './artist-bio/artist-bio.component';
import {AboutComponent} from './about/about.component';
import {ArtistWorksComponent} from './artist-works/artist-works.component';
import {ArtistExhibitionComponent} from './artist-exhibition/artist-exhibition.component';
import {ArtistNewsComponent} from './artist-news/artist-news.component';
import {ExhibitionViewsComponent} from './exhibition-views/exhibition-views.component';
import {ExhibitionWorksComponent} from './exhibition-works/exhibition-works.component';
import {ExhibitionReleaseComponent} from './exhibition-release/exhibition-release.component';
import {NewsService} from './news.service';
import {NewDetailComponent} from './new-detail/new-detail.component';
import {NewViewsComponent} from './new-views/new-views.component';
import {NewReleaseComponent} from './new-release/new-release.component';
import {NewWorksComponent} from './new-works/new-works.component';
import {HomeService} from './home.service';
import {ArtistMenuComponent} from './artist-menu/artist-menu.component';
import {ExhibitionMenuComponent} from './exhibition-menu/exhibition-menu.component';
import {NewMenuComponent} from './new-menu/new-menu.component';
import {SwiperModule} from 'angular2-useful-swiper';
import {PathLocationStrategy, Location, LocationStrategy} from '@angular/common';
import {ShareModule} from 'assets/ng2share/share.module';
import { ExhibitionArtistsComponent } from './exhibition-artists/exhibition-artists.component';


@NgModule({
    declarations: [
        AppComponent,
        ExhibitionItemComponent,
        HomeComponent,
        NewComponent,
        ContactComponent,
        ArtistsListComponent,
        ArtistDetailComponent,
        ExhibitionDetailComponent,
        ArtistBioComponent,
        AboutComponent,
        ArtistWorksComponent,
        ArtistExhibitionComponent,
        ArtistNewsComponent,
        ExhibitionViewsComponent,
        ExhibitionWorksComponent,
        ExhibitionReleaseComponent,
        NewDetailComponent,
        NewViewsComponent,
        NewReleaseComponent,
        NewWorksComponent,
        ArtistMenuComponent,
        ExhibitionMenuComponent,
        NewMenuComponent,
        ExhibitionArtistsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        SwiperModule,
        ShareModule,
        JsonpModule,
        RouterModule.forRoot([
                {
                    path: 'en',
                    data: { lang: 'en'},
                    children: [
                        {
                            path: '',
                            redirectTo: 'home',
                            pathMatch: 'full'
                        },
                        {
                            path: 'home',
                            component: HomeComponent
                        },
                        {
                            path: 'exhibitions',
                            component: ExhibitionItemComponent,
                        },
                        {
                            path: 'exhibitions/:time',
                            component: ExhibitionItemComponent,
                        },
                        {
                            path: 'exhibition/detail/:id',
                            component: ExhibitionDetailComponent,
                        },
                        {
                            path: 'exhibition/views/:id',
                            component: ExhibitionViewsComponent,
                        },
                        {
                            path: 'exhibition/views/:id/:idElem',
                            component: ExhibitionViewsComponent,
                        },
                        {
                            path: 'exhibition/works/:id',
                            component: ExhibitionWorksComponent,
                        },
                        {
                            path: 'exhibition/works/:id/:idElem',
                            component: ExhibitionWorksComponent,
                        },
                        {
                            path: 'exhibition/release/:id',
                            component: ExhibitionReleaseComponent,
                        },
                        {
                            path: 'exhibition/artists/:id',
                            component: ExhibitionArtistsComponent,
                        },
                        {
                            path: 'artists',
                            component: ArtistsListComponent,
                        },
                        {
                            path: 'artist/detail/:id',
                            component: ArtistDetailComponent,
                        },
                        {
                            path: 'artist/works/:id',
                            component: ArtistWorksComponent,
                        },
                        {
                            path: 'artist/works/:id/:idElem',
                            component: ArtistWorksComponent,
                        },
                        {
                            path: 'artist/exhibition/:id',
                            component: ArtistExhibitionComponent,
                        },
                        {
                            path: 'artist/bio/:id',
                            component: ArtistBioComponent,
                        },
                        {
                            path: 'artist/news/:id',
                            component: ArtistNewsComponent,
                        },
                        {
                            path: 'artists/:hidde',
                            component: ArtistsListComponent,
                        },
                        {
                            path: 'news',
                            component: NewComponent,
                        },
                        {
                            path: 'new/detail/:id',
                            component: NewDetailComponent,
                        },
                        {
                            path: 'new/view/:id',
                            component: NewViewsComponent,
                            data: { lang: 'en' }
                        },
                        {
                            path: 'new/works/:id',
                            component: NewWorksComponent,
                        },
                        {
                            path: 'new/release/:id',
                            component: NewReleaseComponent,
                        },
                        {
                            path: 'about',
                            component: AboutComponent,
                        },
                        {
                            path: 'contact',
                            component: ContactComponent,
                        },
                        {
                            path: '**',
                            redirectTo: 'home',
                        }
                    ]
                },
                {
                    path: 'it',
                    data: { lang: 'it'},
                    children: [
                        {
                            path: '',
                            redirectTo: 'home',
                            pathMatch: 'full'
                        },
                        {
                            path: 'home',
                            component: HomeComponent
                        },
                        {
                            path: 'exhibitions',
                            component: ExhibitionItemComponent,
                        },
                        {
                            path: 'exhibitions/:time',
                            component: ExhibitionItemComponent,
                        },
                        {
                            path: 'exhibition/detail/:id',
                            component: ExhibitionDetailComponent,
                        },
                        {
                            path: 'exhibition/views/:id',
                            component: ExhibitionViewsComponent,
                        },
                        {
                            path: 'exhibition/views/:id/:idElem',
                            component: ExhibitionViewsComponent,
                        },
                        {
                            path: 'exhibition/works/:id',
                            component: ExhibitionWorksComponent,
                        },
                        {
                            path: 'exhibition/works/:id/:idElem',
                            component: ExhibitionWorksComponent,
                        },
                        {
                            path: 'exhibition/release/:id',
                            component: ExhibitionReleaseComponent,
                        },
                        {
                            path: 'exhibition/artists/:id',
                            component: ExhibitionArtistsComponent,
                        },
                        {
                            path: 'artists',
                            component: ArtistsListComponent,
                        },
                        {
                            path: 'artist/detail/:id',
                            component: ArtistDetailComponent,
                        },
                        {
                            path: 'artist/works/:id',
                            component: ArtistWorksComponent,
                        },
                        {
                            path: 'artist/works/:id/:idElem',
                            component: ArtistWorksComponent,
                        },
                        {
                            path: 'artist/exhibition/:id',
                            component: ArtistExhibitionComponent,
                        },
                        {
                            path: 'artist/bio/:id',
                            component: ArtistBioComponent,
                        },
                        {
                            path: 'artist/news/:id',
                            component: ArtistNewsComponent,
                        },
                        {
                            path: 'artists/:hidde',
                            component: ArtistsListComponent,
                            data: { lang: 'it' }
                        },
                        {
                            path: 'news',
                            component: NewComponent,
                        },
                        {
                            path: 'new/detail/:id',
                            component: NewDetailComponent,
                        },
                        {
                            path: 'new/view/:id',
                            component: NewViewsComponent,
                        },
                        {
                            path: 'new/works/:id',
                            component: NewWorksComponent,
                        },
                        {
                            path: 'new/release/:id',
                            component: NewReleaseComponent,
                        },
                        {
                            path: 'about',
                            component: AboutComponent,
                        },
                        {
                            path: 'contact',
                            component: ContactComponent,
                        },
                        {
                            path: '**',
                            redirectTo: 'home',
                        }
                    ]
                },
            ],
            {useHash: false}),
    ],
    providers: [ArtService, ExhibitionService, NewsService, HomeService, Location,
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
