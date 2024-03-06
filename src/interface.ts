export interface IChannel{
    id: number;
    channeltype: string;
    color: string;
    image: string;
    imagetemplate: string;
    liveaudio: IAudio;
    name: string;
    tagline: string;
}

interface IAudio{
    id: number;
    url: string;
}

export interface IBroadcast{
    id: number;
    description: string;
    imageurl: string;
    program: IProgram;
    listenpodfile: IPodcastAudio;
    broadcastfiles: IBroadcastFiles[];
    type: string;
}

interface IBroadcastFiles{
    duration: number;
    url: string;
}

interface IProgram{
    name: string;
}

export interface IPodcast{
    id: number;
    description: string;
    imageurl: string;
    title: string;
    listenpodfile: IPodcastAudio;
    type: string;
}


interface IPodcastAudio{
    duration: number;
    url: string;
}