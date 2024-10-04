import VideoGame from "@/app/models/video-game";
import VideoGameStore from "@/app/state/video-games/videoGameStore";
import VideoGameService from "@/app/service/videoGameService";
import { useEffect, useState } from "react";

export function useVideoGameStore() {
    const videoGameStore = new VideoGameStore(new VideoGameService());
    const [gameResults, setGameResults] = useState(videoGameStore.gameResults);
    // Note for later: I want to use a state manager, but I'm not concered with it at the moment. 
    // So this works for now. 

    function searchByTitle(title: string) {
        videoGameStore.searchByTitle(title);
        setGameResults(videoGameStore.gameResults)
    };

    return { searchByTitle, gameResults };
}