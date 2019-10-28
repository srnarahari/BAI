import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
// import {delay, map} from 'rxjs/operators';
// import {of} from 'rxjs/observable/of';
// import {catchError} from 'rxjs/operators';
// import {User} from '../../model/user';
import { Headers, RequestOptions } from "@angular/http";
import { environment } from "../../../environments/environment";
import { ɵvalidateStyleProperty } from "@angular/animations/browser";

export interface Person {
    id: string;
    author: string;
    authorName: string;
    authorTitle: string;
    authorDescription: string;
}

export interface Author {
    id: string;
    fullName: string;
    userName: string;
    phoneNo: string;
    profile: string;
}

export interface Role {
    role: string;
}

export interface tag {
    tagName: string;
    authorName: string;
}

export interface article {
    _Id: string;
    title: string;
}

@Injectable({
    providedIn: "root"
})
export class apiService {
    // rootUrl = "http://localhost:7001"
    // private URL = 'http://localhost:7001//api/v1/author/getauthor';
    // private ARTISTURL = 'http://localhost:7001/api/v1/artist/getarticle';
    url: string = "assets/country/Contries.json";
    constructor(private http: HttpClient) {}

    // venues coutories data
    allCountries(): Observable<any> {
        return this.http.get(this.url);
    }

    // Artist get api
    getArtists(data) {
        return this.http.post<any[]>(
            `${environment.adminServerAddresss}artist/getartists`,
            data
        );
    }

    // Author get api
    getauthorData() {
        return this.http.get<any[]>(
            `${environment.adminServerAddresss}author/getauthor`
        );
    }

    // Tag get Api
    getTagData() {
        return this.http.get<any[]>(
            `${environment.adminServerAddresss}tags/getTag`
        );
    }

    getArticleData() {
        return this.http.get<any[]>(
            `${environment.adminServerAddresss}article/getArticle`
        );
    }

    getSlideshowCurrentDateData() {
        return this.http.get<any[]>(
            `${environment.adminServerAddresss}slideShow/getslideshowcurrentDay`
        );
    }

    getSlideshowCurrentWeekData() {
        return this.http.get<any[]>(
            `${environment.adminServerAddresss}slideShow/getslideshowWeek`
        );
    }

    getSlideshowCurrentMonthData() {
        return this.http.get<any[]>(
            `${environment.adminServerAddresss}slideShow/getslideshowMonth`
        );
    }

    addTag(data: string) {
        let bodyData = {
            tag: data,
            author: localStorage.getItem("user")
        };
        return this.http.post<any[]>(
            `${environment.adminServerAddresss}tags/addTag`,
            bodyData
        );
    }

    administration(body: any) {
        console.log(body);
        body.active = true;
        return this.http.put(
            `${environment.adminServerAddresss}update/${body.userId}`,
            body,
            {
                observe: "body",
                headers: new HttpHeaders().append(
                    "Content-Type",
                    "application/json"
                )
            }
        );
    }

    sliderConfig(body: any) {
        //console.log(body);
        return this.http.post(
            `${environment.adminServerAddresss}siteconfiguration/createArticleCountryPos`,
            body,
            {
                observe: "body",
                headers: new HttpHeaders().append(
                    "Content-Type",
                    "application/json"
                )
            }
        );
    }

    trendingConfig(body: any) {
        //console.log(body);
        return this.http.post(
            `${environment.adminServerAddresss}siteconfiguration/createTrendingArticle`,
            body,
            {
                observe: "body",
                headers: new HttpHeaders().append(
                    "Content-Type",
                    "application/json"
                )
            }
        );
    }

    globalStoriesConfig(body: any) {
        //console.log(body);
        return this.http.post(
            `${environment.adminServerAddresss}siteconfiguration/topGlobalStories`,
            body,
            {
                observe: "body",
                headers: new HttpHeaders().append(
                    "Content-Type",
                    "application/json"
                )
            }
        );
    }

    popularSlideshow(body: any) {
        //console.log(body);
        return this.http.post(
            `${environment.adminServerAddresss}siteconfiguration/popularSlideshows`,
            body,
            {
                observe: "body",
                headers: new HttpHeaders().append(
                    "Content-Type",
                    "application/json"
                )
            }
        );
    }

    featuresConfig(body: any) {
        //console.log(body);
        return this.http.post(
            `${environment.adminServerAddresss}siteconfiguration/features`,
            body,
            {
                observe: "body",
                headers: new HttpHeaders().append(
                    "Content-Type",
                    "application/json"
                )
            }
        );
    }

    accountUpdate(body: any) {
        //  console.log(body);
        let userId = localStorage.getItem("userId");
        console.log(userId);

        /*return this.http.post(
            `${environment.adminServerAddresss}updateusers/${userId}`,
            body,
            {
                observe: "body",
                headers: new HttpHeaders().append(
                    "Content-Type",
                    "application/json"
                )
            }
        );*/
        return this.http.post(`${environment.adminServerAddresss}user/updateusers/${userId}`, body, {
            observe: 'body',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        })


    }

    getAllUserDetails() {
        return this.http.get<any>(
            `${environment.adminServerAddresss}alluserdetails`
        );
    }

    getUserRole() {
        return this.http.get<any>(
            `${environment.adminServerAddresss}user/getRoles`
        );
    }

    getarticles(data) {
        return this.http.post(
            `${environment.adminServerAddresss}article/getArticleByUserId`,
            data
        );
    }

    getEvents(data) {
        return this.http.post(
            `${environment.adminServerAddresss}event/getEventByUserId`,
            data
        );
    }

    getEntityLocation(data) {
        let userId = localStorage.getItem("userId");
        data.userId = userId
        return this.http.post(
            `${environment.adminServerAddresss}entityLocation/getVenueByUserId`,
            data
        );
    }

    getArtwork(data) {
        return this.http.post(
            `${environment.adminServerAddresss}artwork/getArtworkByUserId`,
            data
        );
    }

    gethomepageconfig() {
        let userId = localStorage.getItem("userId");
        return this.http.get<any>(
            `${environment.adminServerAddresss}siteconfiguration/getArticleByUserId/${userId}`
        );
    }

    getslideshowpageconfig() {
        let userId = localStorage.getItem("userId");
        return this.http.get<any>(
            `${environment.adminServerAddresss}siteconfiguration/getSlideshowByUserId/`
        );
    }

    getslideshowpageWeekconfig() {
        let userId = localStorage.getItem("userId");
        return this.http.get<any>(
            `${environment.adminServerAddresss}siteconfiguration/getSlideshowByUserIdWeek/${userId}`
        );
    }

    getslideshowpageMonthconfig() {
        let userId = localStorage.getItem("userId");
        return this.http.get<any>(
            `${environment.adminServerAddresss}siteconfiguration/getSlideshowByUserIdMonth/${userId}`
        );
    }

    getuserDetails() {
        let userId = localStorage.getItem("userId");
        return this.http.get<any>(
            `${environment.adminServerAddresss}user/${userId}/userinfo`
        );
    }

    getvenuesDetails() {
        return this.http.get<any>(
            `${environment.adminServerAddresss}entityLocation/getvenue`
        );
    }

    getEventsDetails() {
        return this.http.get<any>(
            `${environment.adminServerAddresss}event/getEvents`
        );
    }

    getArtworksDetails() {
        return this.http.get<any>(
            `${environment.adminServerAddresss}artwork/getartwork`
        );
    }

    deleteArticle(aricleId) {
        return this.http.delete(
            `${environment.adminServerAddresss}article/deleteArticle/${aricleId}`
        );
    }

    deleteSlideShow(slideShowId) {
        console.log("deleteSlideShow fronten", slideShowId);
        return this.http.delete(
            `${environment.adminServerAddresss}slideShow/deleteSlideShow/${slideShowId}`
        );
    }
    deleteArticleSync(aricleId) {
        return this.http.post(
            `${environment.synchServerAddress}deletearticle`,
            { articleId: `${aricleId}` }
        );
    }
    deleteArticleMedaiServer(files) {
        return this.http.delete(
            `${environment.medaiServerAddress}article/deleteimage?filename=${files}`
        );
    }

    deleteVenue(venueId) {
        return this.http.delete(
            `${environment.adminServerAddresss}entityLocation/deleteVenues/${venueId}`
        );
    }

    deleteEvent(eventId) {
        return this.http.delete(
            `${environment.adminServerAddresss}event/deleteEvents/${eventId}`
        );
    }

    deleteArtwork(artworkId) {
        return this.http.delete(
            `${environment.adminServerAddresss}artwork/deleteArtwork/${artworkId}`
        );
    }

    deleteArtist(artistId) {
        return this.http.delete(
            `${environment.adminServerAddresss}artist/deleteArtist/${artistId}`
        );
    }

    deleteTopGlobalStories(aricleId, topGlobalStoriesID) {
        return this.http.delete(
            `${environment.adminServerAddresss}siteconfiguration/deletetopGlobalStories/${aricleId}/${topGlobalStoriesID}`
        );
    }

    deleteFeatures(aricleId, FeaturesID) {
        return this.http.delete(
            `${environment.adminServerAddresss}siteconfiguration/deleteFeatures/${aricleId}/${FeaturesID}`
        );
    }

    deleteSiteConfiguartion(aricleId, SliderID) {
        return this.http.delete(
            `${environment.adminServerAddresss}siteconfiguration/deleteSliders/${aricleId}/${SliderID}`
        );
    }

    deleteTrendingConfig(aricleId, TreindingConfigId) {
        return this.http.delete(
            `${environment.adminServerAddresss}siteconfiguration/deleteTrending/${aricleId}/${TreindingConfigId}`
        );
    }

    deletePopularSlideshow(slideshowId, popularSlideshowsID) {
        return this.http.delete(
            `${environment.adminServerAddresss}siteconfiguration/deletepopularslideshow/${slideshowId}/${popularSlideshowsID}`
        );
    }

    getArticlebyArticleId(aricleId) {
        return this.http.get(
            `${environment.adminServerAddresss}article/getArticleByArticleId/${aricleId}`
        );
    }

    createArtwork(data) {
        let headers = new Headers({ "content-type": "application/json" });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(
            `${environment.adminServerAddresss}artwork/createArtwok`,
            data
        );
    }

    gethomeconfigDetails() {
        return this.http.get<any>(
            `${environment.adminServerAddresss}siteconfiguration/getArticle`
        );
    }

    getslideshowhomeconfigDetails() {
        return this.http.get<any>(
            `${environment.adminServerAddresss}siteconfiguration/getSlideshow`
        );
    }

    addSinglePhoto(data) {
        return this.http.post(
            `${environment.medaiServerAddress}entityProfileLocation/photo`,
            data
        );
    }

    updateVenuPhoto(data) {
        return this.http.post(
            `${environment.medaiServerAddress}entityProfileLocation/updatePhoto`,
            data
        );
    }

    createEntityProfileLocation(data) {
        let headers = new Headers({ "content-type": "application/json" });
        let options = new RequestOptions({ headers: headers });
        data.userId = localStorage.getItem("userId");
        return this.http.post(
            `${environment.adminServerAddresss}entityLocation/createEntityLocationProfile`,
            data
        );
    }

    createSlideShow(data) {
        return this.http.post(
            `${environment.adminServerAddresss}slideShow/createSlideShow`,
            data
        );
    }

    updateSlideShow(data) {
        return this.http.post(
            `${environment.adminServerAddresss}slideShow/updateSlideshow`,
            data
        );
    }

    getSlideShow(data) {
        return this.http.post(
            `${environment.adminServerAddresss}slideShow/getSlideShows`,
            data
        );
    }

    getSlideShowBySlideShowId(slideShowId) {
        return this.http.get(
            `${environment.adminServerAddresss}slideShow/getSlideShowsBySlideShowId/${slideShowId}`
        );
    }

    createArticle(data) {
        return this.http.post(
            `${environment.adminServerAddresss}article/createarticle`,
            data
        );
    }

    UpdateArticle(data) {
        return this.http.post(
            `${environment.adminServerAddresss}article/updatearticle`,
            data
        );
    }

    createArtists(data) {
        return this.http.post(
            `${environment.adminServerAddresss}artist/createartist`,
            data
        );
    }

    addArtistPhoto(data) {
        return this.http.post(
            `${environment.medaiServerAddress}artist/photo`,
            data
        );
    }

    updateArtistPhoto(data) {
        return this.http.post(
            `${environment.medaiServerAddress}artist/photoUpdate`,
            data
        );
    }

    createAuthor(data) {
        return this.http.post(
            `${environment.adminServerAddresss}author/createauthor`,
            data
        );
    }

    createArticleCountryPos(data) {
        return this.http.post(
            `${environment.adminServerAddresss}siteconfiguration/createArticleCountryPos`,
            data
        );
    }

    gettrends() {
        //let userId = localStorage.getItem('userId');
        return this.http.get<any>(
            `${environment.adminServerAddresss}trend/getTrend`
        );
    }

    deleteTrend(TrendId) {
        return this.http.delete(
            `${environment.adminServerAddresss}trend/deleteTrend/${TrendId}`
        );
    }

    getTrendbyTrendId(trendId) {
        return this.http.get(
            `${environment.adminServerAddresss}trend/getTrendByTrendId/${trendId}`
        );
    }

    getArtworkByArtworkId(id) {
        return this.http.get(
            `${environment.adminServerAddresss}artwork/getArtworkByArtworkId/${id}`
        );
    }

    updateArtWork(data) {
        return this.http.post(
            `${environment.adminServerAddresss}artwork/updateArtwork`,
            data
        );
    }

    getEntityLocationByEnityId(id) {
        return this.http.get(
            `${environment.adminServerAddresss}entityLocation/getentityLocationByEntityId/${id}`
        );
    }

    updateEntity(data) {
        return this.http.post(
            `${environment.adminServerAddresss}entityLocation/updateVenue`,
            data
        );
    }

    getEventByEventId(id) {
        return this.http.get(
            `${environment.adminServerAddresss}event/getEventByEventId/${id}`
        );
    }

    updateEvent(data) {
        return this.http.post(
            `${environment.adminServerAddresss}event/updateEvent`,
            data
        );
    }

    createEvent(data) {
        return this.http.post(
            `${environment.adminServerAddresss}event/createevents`,
            data
        );
    }

    getArtistByArtistId(artistId) {
        return this.http.get(
            `${environment.adminServerAddresss}artist/getArtistByArtistId/${artistId}`
        );
    }

    updateArtist(data) {
        return this.http.post(
            `${environment.adminServerAddresss}artist/updateartists`,
            data
        );
    }

    updateArticlesInHomePageCOnfig(type) {
        return this.http.post(
            `${environment.adminServerAddresss}siteconfiguration/updatevisualarts`,
            { category_type_article: type }
        );
    }
    allHomepagerecords(data) {
        return this.http.post(
            `${environment.adminServerAddresss}article/getLatestRecords`,
            data
        );
    }
    getHomepageVisualarts(data) {
        return this.http.post(
            `${environment.adminServerAddresss}siteconfiguration/updatecurrentdate`,
            data
        );
    }
    getHomepageSlideshowdata(data) {
        return this.http.post(
            `${environment.adminServerAddresss}siteconfiguration/popularSlideshowscurrentdate`,
            data
        );
    }
    postMostpoupularArtists(data) {
        return this.http.post(
            `${environment.adminServerAddresss}artist/updateallartists`,
            data
        );
    }

    getArticlesByTags(tags) {
        return this.http.get<any>(
            `${environment.adminServerAddresss}article/getags?tags=${tags}`
        );
    }

    updateVenueLinkedList(data) {
        return this.http.post(
            `${environment.adminServerAddresss}entityLocation/updateVenuelinkedContents`,
            data
        );
    }
    updateArtistsLinkedList(data) {
        return this.http.post(
            `${environment.adminServerAddresss}artist/updateArtistlinkedContents`,
            data
        );
    }
    updateArtworkLinkedList(data) {
        return this.http.post(
            `${environment.adminServerAddresss}artwork/linkedvenues`,
            data
        );
    }

    getSpecialityData() {
        let data = [
            { value: "24635860", Name: "Modern &amp; Post-War British Art" },
            { value: "24635924", Name: "Boats" },
            {
                value: "24635859",
                Name: "Modern &amp; Contemporary Southeast Asian Art"
            },
            { value: "24635911", Name: "Mirrors" },
            { value: "24635857", Name: "Minitures" },
            { value: "24635858", Name: "Modern British &amp; Irish Art" },
            { value: "24635861", Name: "New Zealand" },
            { value: "24635913", Name: "Persian Carpets" },
            { value: "24635862", Name: "Orientalist Art" },
            { value: "24635880", Name: "Oceanic" },
            { value: "24635900", Name: "Mid-20th Centur" },
            { value: "24635873", Name: "20th Century" },
            { value: "24635855", Name: "Italian Paintings" },
            {
                value: "24635854",
                Name: "Indian, Himalayan and Southeast Asian Art"
            },
            {
                value: "24635853",
                Name: "Indian Art (Modern &amp; Contemporary)"
            },
            { value: "24635903", Name: "Home Furnishings" },
            { value: "24635884", Name: "Judaica" },
            { value: "24635888", Name: "Khmer and Southeast Asian Art" },
            { value: "24635856", Name: "Marine Paintings" },
            { value: "24635892", Name: "Maps" },
            { value: "24635906", Name: "Lighting" },
            { value: "24635915", Name: "Porcelain" },
            { value: "24635863", Name: "Portraits &amp; Nudes" },
            { value: "24635922", Name: "Watches" },
            {
                value: "24635872",
                Name:
                    "Victorian, Pre-Raphaelite &amp; British Impressionist Art"
            },
            {
                value: "24635871",
                Name: "Turkish &amp; Middle Eastern (Modern &amp; Contemporary)"
            },
            { value: "24635870", Name: "Topographical Pictures" },
            { value: "24635917", Name: "Tapestry" },
            { value: "24635887", Name: "Roman Art" },
            { value: "24635877", Name: "Renaissance" },
            { value: "24635881", Name: "Pre-Colombian" },
            { value: "24634367", Name: "Post Modern" },
            { value: "24635865", Name: "Russian Paintings" },
            { value: "24635902", Name: "Scandinavian" },
            { value: "24635869", Name: "Spanish Paintings" },
            { value: "24635868", Name: "South African" },
            { value: "24635905", Name: "Silver" },
            { value: "24635885", Name: "Greek Art" },
            { value: "24635876", Name: "Medieval" },
            { value: "24635843", Name: "Australian Art" },
            {
                value: "24635842",
                Name: "Asian 20th Century &amp; Contemporary Art"
            },
            { value: "24635879", Name: "Asian" },
            { value: "24635899", Name: "Art Nouveau" },
            { value: "24635891", Name: "Autographs" },
            { value: "24635923", Name: "Autos" },
            { value: "24635918", Name: "Bronze" },
            { value: "24635844", Name: "British Paintings" },
            { value: "24635889", Name: "Books and Antiquarian" },
            { value: "24635909", Name: "Glass" },
            {
                value: "24635841",
                Name:
                    "Arab, Iranian &amp; Turkish Art (Modern &amp; Contemporary)"
            },
            { value: "24635901", Name: "American Contemporary" },
            { value: "24635839", Name: "American Art" },
            { value: "24635838", Name: "African Paintings" },
            { value: "24635919", Name: "20th century carpets and rugs" },
            {
                value: "24635897",
                Name: "American Furniture, Decorative Art &amp; Folk Art"
            },
            { value: "24635840", Name: "American Indian Art" },
            { value: "24635894", Name: "Antiques" },
            { value: "24635875", Name: "Animalier Bronze" },
            { value: "24635882", Name: "Ancient Art" },
            { value: "24635845", Name: "Canadian" },
            { value: "24635898", Name: "Art Deco" },
            { value: "24635920", Name: "Candelabra and chandelier" },
            {
                value: "24635883",
                Name: "Egyptian, classical, Near-Eastern antiquities"
            },
            { value: "24635895", Name: "English" },
            { value: "24635908", Name: "Design Objects" },
            {
                value: "24635851",
                Name: "German, Austrian &amp; Central European Paintings"
            },
            { value: "24635893", Name: "Furniture" },
            { value: "24635896", Name: "European" },
            { value: "24635921", Name: "Fine Jewelry" },
            { value: "24635850", Name: "French Paintings" },
            { value: "24635907", Name: "Design Lighting" },
            { value: "24635848", Name: "Dutch &amp; Belgian Paintings" },
            { value: "24635904", Name: "Crystal" },
            { value: "24635916", Name: "Ceramics" },
            { value: "24635878", Name: "Classical" },
            { value: "24635847", Name: "Chinese Modern Paintings" },
            { value: "24635886", Name: "Chinese Art" },
            { value: "24635914", Name: "Chinese Carpets" },
            { value: "24635846", Name: "Chinese Classical Paintings" },
            { value: "24635890", Name: "Collectible Books &amp; Manuscripts" },
            { value: "24635912", Name: "Clocks" },
            { value: "24634366", Name: "Pop Art" },
            { value: "24634365", Name: "Photorealist" },
            { value: "24634368", Name: "Post-War" },
            { value: "6783", Name: "Prints &amp; Multiples&nbsp;" },
            { value: "24586663", Name: "Russian Art" },
            { value: "24634378", Name: "Rental" },
            { value: "24634767", Name: "Real Estate" },
            { value: "6781", Name: "Photography" },
            { value: "6776", Name: "Modern Art" },
            { value: "6799", Name: "Native &amp; Tribal Arts" },
            { value: "6790", Name: "Old Masters" },
            { value: "24634369", Name: "Scandinavian Modern" },
            { value: "24634769", Name: "Yachts" },
            { value: "24634768", Name: "Vintage cars" },
            { value: "24634375", Name: "Vintage" },
            { value: "24634374", Name: "Victorian" },
            { value: "6744", Name: "Urban Art" },
            { value: "24634370", Name: "Spanish" },
            { value: "24586664", Name: "Sculpture" },
            { value: "24634371", Name: "Street Art" },
            { value: "24634372", Name: "Surrealist" },
            { value: "24634362", Name: "Modern" },
            { value: "24634376", Name: "Classic" },
            { value: "24634645", Name: "Chinese" },
            { value: "6752", Name: "Contemporary Art" },
            { value: "24634352", Name: "Cubist" },
            { value: "24586661", Name: "Drawings &amp; Works on Paper&nbsp;" },
            { value: "6735", Name: "Design" },
            { value: "6748", Name: "Decorative Art &amp; Antiques" },
            { value: "24586660", Name: "Artist's Books" },
            { value: "6746", Name: "Asian &amp; Islamic Art&nbsp;" },
            { value: "6791", Name: "Early American Art" },
            { value: "24634358", Name: "Italian Design" },
            { value: "24634357", Name: "Italian" },
            { value: "6772", Name: "Latin American Art" },
            { value: "24634359", Name: "Louis XVI" },
            { value: "24634361", Name: "Minimalist" },
            { value: "24634360", Name: "Mid-century modern" },
            { value: "24634356", Name: "Impressionist" },
            { value: "6764", Name: "Folk, Naïve, &amp; Outsider Art" },
            { value: "24634353", Name: "Expressionist" },
            { value: "24586662", Name: "Emerging Artists&nbsp;" },
            { value: "24634377", Name: "For Sale" },
            { value: "24634354", Name: "French and Continental" },
            { value: "24634355", Name: "Georgian" },
            { value: "6729", Name: "19th C European Art" }
        ];
        return data;
    }

    getYears(presentYear) {
        let Years = [];
        let startYear = 1994;
        while (startYear <= presentYear) {
            Years.push({ year: startYear++ });
        }
        return Years;
    }

    getMonths() {
        return [
            { month: "January", value: "0" },
            { month: "February", value: "01" },
            { month: "March", value: "02" },
            { month: "April", value: "03" },
            { month: "May", value: "04" },
            { month: "June", value: "05" },
            { month: "July", value: "06" },
            { month: "August", value: "07" },
            { month: "September", value: "08" },
            { month: "October", value: "09" },
            { month: "November", value: "10" },
            { month: "December", value: "11" }
        ];
    }

    getCategories() {
        return [
            { type: "Visual arts" },
            { type: "Architecture design" },
            { type: "Performance & arts" },
            { type: "Lifestyle" },
            { type: "Fashion" },
            { type: "Travel" }
        ];
    }
}
