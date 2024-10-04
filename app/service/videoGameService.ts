import VideoGame from "@/app/models/video-game";

export default class VideoGameService {
    searchByTitle = (title: string): VideoGame[] => {
        // TO DO: Add logic to search video games by title
        const results: VideoGame[] = [];
        const videoGameSearched: VideoGame = {id: 1, name: 'Super Mario ', description: "example description here...", platform:"SNES"};
        results.push(videoGameSearched);
        const videoGameSearched2: VideoGame = {id: 2, name: 'Super Mario 2', description: "example description here...", platform:"SNES"};
        results.push(videoGameSearched2);
        const videoGameSearched3: VideoGame = {id: 3, name: 'Smash Bros', description: "example description here...", platform:"n64"};
        results.push(videoGameSearched3);
        const videoGameSearched4: VideoGame = {id: 4, name: 'Mario Kart', description: "example description here...", platform:"n64"};
        results.push(videoGameSearched4);
        return results;
    }

}