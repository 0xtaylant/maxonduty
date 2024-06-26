import Grid from "@/components/Grid";

export default function Page() {

  const gridData = [
    {
        src: '/indoor03.JPG',
        explanation: 'Ethereal Elegance: A dive into the exquisite details of the indoors.',
        associatedImages: [
            '/indoor01.JPG',
            '/indoor03.JPG',
            '/indoor01.JPG',
            '/indoor03.JPG'
        ]
    },
    {
        src: '/indoor01.JPG',
        explanation: 'Lustrous Luminescence: The play of lights, bringing life to silent corners.',
        associatedImages: [
            '/indoor03.JPG',
            '/indoor01.JPG',
            '/indoor03.JPG',
            '/indoor01.JPG'
        ]
    },
    {
        src: '/indoor03.JPG',
        explanation: 'Whispers Within Walls: Stories echoed through ornate designs.',
        associatedImages: [
            '/indoor01.JPG',
            '/indoor03.JPG',
            '/indoor01.JPG',
            '/indoor03.JPG'
        ]
    },
    {
        src: '/indoor01.JPG',
        explanation: 'Majestic Muse: A celebration of grandeur and opulence from within.',
        associatedImages: [
            '/indoor03.JPG',
            '/indoor01.JPG',
            '/indoor03.JPG',
            '/indoor01.JPG'
        ]
    },
    {
        src: '/indoor03.JPG',
        explanation: 'Echoes of Elegance: Reverberating tales of indoor splendor.',
        associatedImages: [
            '/indoor01.JPG',
            '/indoor03.JPG',
            '/indoor01.JPG',
            '/indoor03.JPG'
        ]
    },
    {
        src: '/indoor01.JPG',
        explanation: 'Indoor Incandescence: The warm glow of serenity from within.',
        associatedImages: [
            '/indoor03.JPG',
            '/indoor01.JPG',
            '/indoor03.JPG',
            '/indoor01.JPG'
        ]
    },
    {
        src: '/indoor03.JPG',
        explanation: 'Silent Splendor: A hush, where walls narrate timeless tales.',
        associatedImages: [
            '/indoor01.JPG',
            '/indoor03.JPG',
            '/indoor01.JPG',
            '/indoor03.JPG'
        ]
    },
    {
        src: '/indoor01.JPG',
        explanation: 'Timeless Tranquility: Moments captured in the heart of the indoors.',
        associatedImages: [
            '/indoor03.JPG',
            '/indoor01.JPG',
            '/indoor03.JPG',
            '/indoor01.JPG'
        ]
    },
];

    return (
      <Grid galleryData={gridData} />
    );
  }