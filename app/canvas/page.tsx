import Grid from "@/components/Grid";

export default function Page() {

  const gridData = [
    {
        src: '/canvas/canvas01.JPG',
        explanation: 'Whispers of Time: An exploration into the ephemeral dance of light and shadow.',
        associatedImages: [
            '/canvas/canvas01.JPG',
            '/canvas/canvas02.JPG',
            '/canvas/canvas03.jpeg',
            '/canvas/canvas04.JPG'
        ]
    },
    {
        src: '/canvas/canvas02.JPG',
        explanation: 'Rhapsody in Blue: A symphony of azure strokes echoing the deep oceans and endless skies.',
        associatedImages: [
            '/canvas/canvas02.JPG',
            '/canvas/canvas03.jpeg',
            '/canvas/canvas04.JPG',
            '/canvas/canvas01.JPG'
        ]
    },
    {
        src: '/canvas/canvas03.jpeg',
        explanation: 'Chiaroscuro Chronicles: An odyssey through the interplay of light and darkness.',
        associatedImages: [
            '/canvas/canvas03.jpeg',
            '/canvas/canvas04.JPG',
            '/canvas/canvas01.JPG',
            '/canvas/canvas02.JPG'
        ]
    },
    {
        src: '/canvas/canvas04.JPG',
        explanation: 'Palette of Dreams: Where vivid imagination meets the canvas in a riot of colors.',
        associatedImages: [
            '/canvas/canvas04.JPG',
            '/canvas/canvas01.JPG',
            '/canvas/canvas02.JPG',
            '/canvas/canvas03.jpeg'
        ]
    },
];


    return (
      <Grid galleryData={gridData} />
    );
  }