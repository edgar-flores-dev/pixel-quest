export default class VideoGame {
    name: string;
    description: string;
    platform: string;
    constructor(name: string, description: string, platform: string){
        this.name = name;
        this.description = description;
        this.platform = platform;
    }
}