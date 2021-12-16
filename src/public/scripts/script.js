import Cookies from "./modules/js.cookie.mjs";
import { AudioPlayer as Player } from "./modules/AudioPlayer.js"
import { Playlist } from "./modules/Playlist.js"

// TEMP SETUP FOR TESTING
const location = Cookies.get('location');
const weather = (url => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);

    return JSON.parse(xmlHttp.responseText);
})(`/weather?location=${location}`);

document.getElementById("city-name").innerText = (`${location} • ${weather.main}`);


const AudioPlayer = new Player();
const SnowPlaylist = new Playlist({
    title: 'Snow Weather',

    loadFromAttributes: {
        weather: "Snow",
        weather: "Clear"
    }
});

SnowPlaylist.events.on("loadedSongs", () => {
    AudioPlayer.loadPlaylist(SnowPlaylist);
});