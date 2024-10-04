import VideoGameService from '@/app/service/videoGameService'
import VideoGame from '@/app/models/video-game';

export default class VideoGameStore {
    private videoGameService: VideoGameService;
    public gameResults: VideoGame[] = [];

    constructor(videoGameService: VideoGameService) {
        this.videoGameService = videoGameService
    }

    searchByTitle(title: string) {
        this.gameResults = this.videoGameService.searchByTitle(title);
    }
}