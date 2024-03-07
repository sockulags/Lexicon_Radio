import './LastPublished.css';
import { IPodcast, IBroadcast } from '../interface';
import { Broadcast } from './Broadcast';
import { Podcast } from './Podcast';

interface LastPublishedProps {
    props: (IBroadcast | IPodcast)[];
}

export function LastPublished({ props }: LastPublishedProps) {   
    const podcasts: IPodcast[] = [];
    const broadcasts: IBroadcast[] = [];
   
    props.forEach(item => {
        if (item.type === 'pod') {
            podcasts.push(item as IPodcast); 
        } else if (item.type === 'broadcast') {
            broadcasts.push(item as IBroadcast); 
        }
    });

    console.log('Podcasts:', podcasts);
    console.log('Broadcasts:', broadcasts);

    return (
        <div className='lastpublished-container'>
           <h1>Senast uppladdat</h1>
           <h2>Sändningar</h2>
           <div className="broadcast-container">
           <div className="horizontal-scrollbar">
           {broadcasts.map(broadcasts => {
            return <Broadcast props={broadcasts}/>
           })}
</div>
</div>
            <h2>Poddar</h2>
            <div className="podcast-container">
           <div className="horizontal-scrollbar">
           {podcasts.map(podcast => {
               return <Podcast props={podcast}/>
            })}
            </div>
            </div>
        </div>
    );
}
