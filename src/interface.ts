export interface IChannel{
    id: number;
    channeltype: string;
    color: string;
    image: string;
    imagetemplate: string;
    liveAudio: IAudio;
    name: string;
    tagline: string;
}

interface IAudio{
    id: number;
    url: string;
}