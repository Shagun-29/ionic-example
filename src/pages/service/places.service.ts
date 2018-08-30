export class PlaceService{
    private places:string[]=[];
    private description:string[]=[];

    addPlaces(place){
        this.places.push(place);
    }
    addDescription(description){
        this.description.push(description);
    }
    getPlaces(){
        console.log("---------",this.places)
        return this.places.slice();
    }
    getDescription(){
        return this.description;
    }
}