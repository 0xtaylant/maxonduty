import Grid from "@/components/Grid";

export default function Page() {

    const gridData = [
        {
            src: '/outdoor/outdoor01.jpg',
            explanation: 'Natures Whisper: The subtle murmur of the verdant wilderness.',
            associatedImages: [
                '/outdoor/outdoor02.jpg',
                '/outdoor/outdoor03.jpg',
                '/outdoor/outdoor04.jpg',
                '/outdoor/outdoor05.jpg',
            ]
        },
        {
            src: '/outdoor/outdoor02.jpg',
            explanation: 'Golden Horizon: A dance of light on the vast canvas of the sky.',
            associatedImages: [
                '/outdoor/outdoor01.jpg',
                '/outdoor/outdoor03.jpg',
                '/outdoor/outdoor06.jpg',
                '/outdoor/outdoor07.jpg',
            ]
        },
        {
            src: '/outdoor/outdoor03.jpg',
            explanation: 'Silent Echoes: Moments of serenity frozen in the embrace of time.',
            associatedImages: [
                '/outdoor/outdoor02.jpg',
                '/outdoor/outdoor04.jpg',
                '/outdoor/outdoor08.jpg',
                '/outdoor/outdoor09.jpg',
            ]
        },
        {
            src: '/outdoor/outdoor04.jpg',
            explanation: 'Celestial Ballet: When heavens and earth waltz under the moonlit night.',
            associatedImages: [
                '/outdoor/outdoor05.jpg',
                '/outdoor/outdoor06.jpg',
                '/outdoor/outdoor07.jpg',
                '/outdoor/outdoor08.jpg',
            ]
        },
        {
            src: '/outdoor/outdoor05.jpg',
            explanation: 'Emerald Dreams: Lush landscapes that tell tales of timeless beauty.',
            associatedImages: [
                '/outdoor/outdoor06.jpg',
                '/outdoor/outdoor07.jpg',
                '/outdoor/outdoor08.jpg',
                '/outdoor/outdoor09.jpg',
            ]
        },
        {
            src: '/outdoor/outdoor06.jpg',
            explanation: 'Aeolian Song: The symphony of the winds across scenic vistas.',
            associatedImages: [
                '/outdoor/outdoor07.jpg',
                '/outdoor/outdoor08.jpg',
                '/outdoor/outdoor09.jpg',
                '/outdoor/outdoor10.jpg',
            ]
        },
        {
            src: '/outdoor/outdoor07.jpg',
            explanation: 'Eternal Horizon: The infinite stretch of nature’s masterpiece.',
            associatedImages: [
                '/outdoor/outdoor08.jpg',
                '/outdoor/outdoor09.jpg',
                '/outdoor/outdoor10.jpg',
                '/outdoor/outdoor11.jpg',
            ]
        },
        {
            src: '/outdoor/outdoor08.jpg',
            explanation: 'Sapphire Skies: Where day meets night in a serene embrace.',
            associatedImages: [
                '/outdoor/outdoor09.jpg',
                '/outdoor/outdoor10.jpg',
                '/outdoor/outdoor11.jpg',
                '/outdoor/outdoor12.jpg',
            ]
        },
        {
            src: '/outdoor/outdoor09.jpg',
            explanation: 'Majestic Mounts: Towering peaks touching the canvas of the skies.',
            associatedImages: [
                '/outdoor/outdoor10.jpg',
                '/outdoor/outdoor11.jpg',
                '/outdoor/outdoor12.jpg',
                '/outdoor/outdoor13.jpg',
            ]
        },
        {
            src: '/outdoor/outdoor10.jpg',
            explanation: 'Whimsical Waters: The gentle ripple of streams reflecting the world above.',
            associatedImages: [
                '/outdoor/outdoor11.jpg',
                '/outdoor/outdoor12.jpg',
                '/outdoor/outdoor13.jpg',
                '/outdoor/outdoor01.jpg',
            ]
        },
        {
            src: '/outdoor/outdoor11.jpg',
            explanation: 'Serene Solitude: Quiet moments captured amidst nature’s vastness.',
            associatedImages: [
                '/outdoor/outdoor12.jpg',
                '/outdoor/outdoor13.jpg',
                '/outdoor/outdoor01.jpg',
                '/outdoor/outdoor02.jpg',
            ]
        },
        {
            src: '/outdoor/outdoor12.jpg',
            explanation: 'Distant Dreamscapes: Ethereal scenes from far-off lands.',
            associatedImages: [
                '/outdoor/outdoor13.jpg',
                '/outdoor/outdoor01.jpg',
                '/outdoor/outdoor02.jpg',
                '/outdoor/outdoor03.jpg',
            ]
        },
        {
            src: '/outdoor/outdoor13.jpg',
            explanation: 'Gilded Edges: The shimmering boundary where land kisses the sun.',
            associatedImages: [
                '/outdoor/outdoor01.jpg',
                '/outdoor/outdoor02.jpg',
                '/outdoor/outdoor03.jpg',
                '/outdoor/outdoor04.jpg',
            ]
        },
        {
            src: '/outdoor/outdoor04.jpg',
            explanation: 'Celestial Ballet: When heavens and earth waltz under the moonlit night.',
            associatedImages: [
                '/outdoor/outdoor05.jpg',
                '/outdoor/outdoor06.jpg',
                '/outdoor/outdoor07.jpg',
                '/outdoor/outdoor08.jpg',
            ]
        },
        {
            src: '/outdoor/outdoor05.jpg',
            explanation: 'Emerald Dreams: Lush landscapes that tell tales of timeless beauty.',
            associatedImages: [
                '/outdoor/outdoor06.jpg',
                '/outdoor/outdoor07.jpg',
                '/outdoor/outdoor08.jpg',
                '/outdoor/outdoor09.jpg',
            ]
        },
        {
            src: '/outdoor/outdoor06.jpg',
            explanation: 'Aeolian Song: The symphony of the winds across scenic vistas.',
            associatedImages: [
                '/outdoor/outdoor07.jpg',
                '/outdoor/outdoor08.jpg',
                '/outdoor/outdoor09.jpg',
                '/outdoor/outdoor10.jpg',
            ]
        },
        {
            src: '/outdoor/outdoor07.jpg',
            explanation: 'Eternal Horizon: The infinite stretch of nature’s masterpiece.',
            associatedImages: [
                '/outdoor/outdoor08.jpg',
                '/outdoor/outdoor09.jpg',
                '/outdoor/outdoor10.jpg',
                '/outdoor/outdoor11.jpg',
            ]
        },
        {
            src: '/outdoor/outdoor08.jpg',
            explanation: 'Sapphire Skies: Where day meets night in a serene embrace.',
            associatedImages: [
                '/outdoor/outdoor09.jpg',
                '/outdoor/outdoor10.jpg',
                '/outdoor/outdoor11.jpg',
                '/outdoor/outdoor12.jpg',
            ]
        },
        {
            src: '/outdoor/outdoor09.jpg',
            explanation: 'Majestic Mounts: Towering peaks touching the canvas of the skies.',
            associatedImages: [
                '/outdoor/outdoor10.jpg',
                '/outdoor/outdoor11.jpg',
                '/outdoor/outdoor12.jpg',
                '/outdoor/outdoor13.jpg',
            ]
        },
        {
            src: '/outdoor/outdoor10.jpg',
            explanation: 'Whimsical Waters: The gentle ripple of streams reflecting the world above.',
            associatedImages: [
                '/outdoor/outdoor11.jpg',
                '/outdoor/outdoor12.jpg',
                '/outdoor/outdoor13.jpg',
                '/outdoor/outdoor01.jpg',
            ]
        },
        {
            src: '/outdoor/outdoor11.jpg',
            explanation: 'Serene Solitude: Quiet moments captured amidst nature’s vastness.',
            associatedImages: [
                '/outdoor/outdoor12.jpg',
                '/outdoor/outdoor13.jpg',
                '/outdoor/outdoor01.jpg',
                '/outdoor/outdoor02.jpg',
            ]
        },
        {
            src: '/outdoor/outdoor12.jpg',
            explanation: 'Distant Dreamscapes: Ethereal scenes from far-off lands.',
            associatedImages: [
                '/outdoor/outdoor13.jpg',
                '/outdoor/outdoor01.jpg',
                '/outdoor/outdoor02.jpg',
                '/outdoor/outdoor03.jpg',
            ]
        },
        {
            src: '/outdoor/outdoor13.jpg',
            explanation: 'Gilded Edges: The shimmering boundary where land kisses the sun.',
            associatedImages: [
                '/outdoor/outdoor01.jpg',
                '/outdoor/outdoor02.jpg',
                '/outdoor/outdoor03.jpg',
                '/outdoor/outdoor04.jpg',
            ]
        },
    ];
    
    return (
      <Grid galleryData={gridData} />
    );
  }