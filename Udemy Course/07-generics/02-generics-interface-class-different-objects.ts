interface ICar{
    year: number;
    manufacture: string,
    model:string
}

interface IColoringBook{
    year: number,
    publisher: string,
    age: number
}

const Car: ICar = {
    year: 2020,
    manufacture: 'Maruti',
    model:'Zen'
}

const ColoringBook: IColoringBook = {
    year: 2022,
    publisher: 'Manorama',
    age: 4
}

//General function to print a common property. Multiple interfaces can be extended so that common property can be accessed.
function printManufacturingYear<T extends IColoringBook | ICar>(obj: T){
    console.log(obj.year)
}

printManufacturingYear(ColoringBook);
printManufacturingYear(Car);

//--------------------------Default type parameter----------------------------------------------


function getAnArray<T = number>(): T[]{
    return [];
}

const whatTypeDoIGetBack = getAnArray(); // Since number is default, I will get back the number
const nowIGetBackABool = getAnArray<boolean>();

//--------------------------Generic Classes----------------------------------------------

interface Song{
    title: string;
    artist: string;
}
interface Video{
    title: string;
    creator: string;
    length: string;
}

class Playlist<T>{
    public queue: T[] = [];
    addItem(el:T){
        this.queue.push(el);
    }
}

const harivarasanam : Song = {
    title: 'Harivarasanam',
    artist: 'Yesudas',
}

const song = new Playlist<Song>();
const video = new Playlist<Video>();
song.addItem(harivarasanam);
// video.addItem(harivarasanam); //Results in error

