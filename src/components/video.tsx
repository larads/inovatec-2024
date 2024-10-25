import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

type VideoProps = {
    url: string
}

export function MidiaTransmittions({ url }: VideoProps) {
    return (

        <ReactPlayer
            url={url}
            width="100%"
            height="100%"
            controls
            playing
        />

    )
}
