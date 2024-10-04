export default class VideoGame {
    id: number;
    name: string;
    description: string;
    platform: string;

    constructor(id: number, name: string, description: string, platform: string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.platform = platform;
    }
}