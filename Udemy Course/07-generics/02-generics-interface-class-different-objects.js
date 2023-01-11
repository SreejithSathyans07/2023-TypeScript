var Car = {
    year: 2020,
    manufacture: 'Maruti',
    model: 'Zen'
};
var ColoringBook = {
    year: 2022,
    publisher: 'Manorama',
    age: 4
};
//General function to print a common property. Multiple interfaces can be extended so that common property can be accessed.
function printManufacturingYear(obj) {
    console.log(obj.year);
}
printManufacturingYear(ColoringBook);
printManufacturingYear(Car);
//--------------------------Default type parameter----------------------------------------------
function getAnArray() {
    return [];
}
var whatTypeDoIGetBack = getAnArray(); // Since number is default, I will get back the number
var nowIGetBackABool = getAnArray();
var Playlist = /** @class */ (function () {
    function Playlist() {
        this.queue = [];
    }
    Playlist.prototype.addItem = function (el) {
        this.queue.push(el);
    };
    return Playlist;
}());
var harivarasanam = {
    title: 'Harivarasanam',
    artist: 'Yesudas'
};
var song = new Playlist();
var video = new Playlist();
song.addItem(harivarasanam);
// video.addItem(harivarasanam); //Results in error
