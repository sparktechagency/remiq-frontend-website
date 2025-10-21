
import {
  FiUsers,
  FiLink,
  FiMail,
} from "react-icons/fi";

const avatar =
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80";

const infoItems = [
  {
    key: "community",
    icon: FiUsers,
    text: "Community Name",
  },
  {
    key: "website",
    icon: FiLink,
    text: "www.steaveani.com",
    href: "https://www.steaveani.com",
  },
  {
    key: "email",
    icon: FiMail,
    text: "steaveani002@gmail.com",
    href: "mailto:steaveani002@gmail.com",
  },
];

const socialItems = [
  {
    key: "youtube",
    imgUrl: "/icon/youtube.png",
    href: "https://www.youtube.com",
  },
  {
    key: "twitter",
    imgUrl: "/icon/twitter.png",
    href: "https://x.com",
  },
  {
    key: "muso",
    imgUrl: "/icon/muso.png",
    href: "https://x.com",
  },
  {
    key: "tiktok",
    imgUrl: "/icon/tiktok.png",
    href: "#",
  },
  {
    key: "instagram",
    imgUrl: "/icon/insta.png",
    href: "#",
  },
];


const beatsData = [
  {
    id: 'upload',
    type: 'upload',
    name: 'Add Beats',
    view: '',
    image: '/images/placeholder.jpg'
  },
  {
    id: '1',
    name: 'Mid Night Beat',
    view: '125.5k',
    image: 'https://i.pinimg.com/736x/01/90/b9/0190b9b18ae15f521a39370e2f5831de.jpg'
  },
  {
    id: '2',
    name: 'Mid Night Beat',
    view: '125.5k',
    image: 'https://i.pinimg.com/1200x/5f/55/ab/5f55ab8db1842f605e0d1f073e8325df.jpg'
  },
  {
    id: '3',
    name: 'Mid Night Beat',
    view: '125.5k',
    image: 'https://i.pinimg.com/736x/c5/18/5a/c5185a202670506a442e0f990c63fce3.jpg'
  },
  {
    id: '4',
    name: 'Mid Night Beat',
    view: '125.5k',
    image: 'https://i.pinimg.com/736x/b7/a9/bb/b7a9bb571b175e9e29b420066c4039ac.jpg'
  },
  {
    id: '5',
    name: 'Mid Night Beat',
    view: '125.5k',
    image: 'https://i.pinimg.com/736x/d3/48/f0/d348f0a609cde9ba183f6392a6c4a1b3.jpg'
  },
  {
    id: '6',
    name: 'Mid Night Beat',
    view: '125.5k',
    image: 'https://i.pinimg.com/1200x/b2/16/32/b2163233acc9c7ff8c4c0f23d1889951.jpg'
  },
  {
    id: '7',
    name: 'Mid Night Beat',
    view: '125.5k',
    image: 'https://i.pinimg.com/736x/76/0b/f7/760bf7ab1f4a02f98245c0fada52a54f.jpg'
  },
  {
    id: '8',
    name: 'Mid Night Beat',
    view: '125.5k',
    image: 'https://i.pinimg.com/736x/8c/3a/f0/8c3af09cb2115dd35955b429139edfbf.jpg'
  },
  {
    id: '9',
    name: 'Mid Night Beat',
    view: '125.5k',
    image: 'https://i.pinimg.com/736x/5e/5e/18/5e5e1823230c934e358f2326b6ee8d72.jpg'
  },
  {
    id: '10',
    name: 'Mid Night Beat',
    view: '125.5k',
    image: 'https://i.pinimg.com/1200x/21/f0/aa/21f0aa4fb8b504563091018647c2e267.jpg'
  },
  {
    id: '11',
    name: 'Mid Night Beat',
    view: '125.5k',
    image: 'https://i.pinimg.com/736x/c5/18/5a/c5185a202670506a442e0f990c63fce3.jpg'
  },
  {
    id: '12',
    name: 'Mid Night Beat',
    view: '125.5k',
    image: 'https://i.pinimg.com/1200x/b2/16/32/b2163233acc9c7ff8c4c0f23d1889951.jpg'
  },
  {
    id: '13',
    name: 'Mid Night Beat',
    view: '125.5k',
    image: 'https://i.pinimg.com/736x/76/0b/f7/760bf7ab1f4a02f98245c0fada52a54f.jpg'
  },
  {
    id: '14',
    name: 'Mid Night Beat',
    view: '125.5k',
    image: 'https://i.pinimg.com/1200x/5f/55/ab/5f55ab8db1842f605e0d1f073e8325df.jpg'
  },

];

const soundKitsData = [
  {
    id: 'upload',
    type: 'upload',
    name: 'Add Sound Kits',
    view: '',
    image: '/images/placeholder.jpg'
  },
  {
    id: '1',
    name: 'Drum Kit',
    image: 'https://i.pinimg.com/736x/01/90/b9/0190b9b18ae15f521a39370e2f5831de.jpg'
  },
  {
    id: '2',
    name: 'Loop Kit',
    image: 'https://i.pinimg.com/1200x/5f/55/ab/5f55ab8db1842f605e0d1f073e8325df.jpg'
  },
  {
    id: '3',
    name: 'Sample Pack',
    image: 'https://i.pinimg.com/736x/c5/18/5a/c5185a202670506a442e0f990c63fce3.jpg'
  },
  {
    id: '4',
    name: 'Midi kit',
    image: 'https://i.pinimg.com/736x/b7/a9/bb/b7a9bb571b175e9e29b420066c4039ac.jpg'
  },
  {
    id: '5',
    name: 'guitar kit',
    image: 'https://i.pinimg.com/736x/d3/48/f0/d348f0a609cde9ba183f6392a6c4a1b3.jpg'
  },
  {
    id: '6',
    name: 'Mid Night kit',
    image: 'https://i.pinimg.com/1200x/b2/16/32/b2163233acc9c7ff8c4c0f23d1889951.jpg'
  },
  {
    id: '7',
    name: 'The Haunted Tapes',
    image: 'https://i.pinimg.com/736x/76/0b/f7/760bf7ab1f4a02f98245c0fada52a54f.jpg'
  },
  {
    id: '8',
    name: 'Cyberpunk Drum Kit',
    image: 'https://i.pinimg.com/736x/8c/3a/f0/8c3af09cb2115dd35955b429139edfbf.jpg'
  },
  {
    id: '9',
    name: 'Sample Pack',
    image: 'https://i.pinimg.com/736x/5e/5e/18/5e5e1823230c934e358f2326b6ee8d72.jpg'
  },
  {
    id: '10',
    name: 'Drum Kit',
    image: 'https://i.pinimg.com/1200x/21/f0/aa/21f0aa4fb8b504563091018647c2e267.jpg'
  },
  {
    id: '11',
    name: 'Cyberpunk Drumkit',
    image: 'https://i.pinimg.com/736x/c5/18/5a/c5185a202670506a442e0f990c63fce3.jpg'
  },
  {
    id: '12',
    name: 'The Haunted Tapes',
    image: 'https://i.pinimg.com/1200x/b2/16/32/b2163233acc9c7ff8c4c0f23d1889951.jpg'
  },
  {
    id: '13',
    name: 'Mid Kit',
    image: 'https://i.pinimg.com/736x/76/0b/f7/760bf7ab1f4a02f98245c0fada52a54f.jpg'
  },
  {
    id: '14',
    name: ' Night kit',
    image: 'https://i.pinimg.com/1200x/5f/55/ab/5f55ab8db1842f605e0d1f073e8325df.jpg'
  },

];

const collectionData = [
  {
    id: 'upload',
    type: 'upload',
    name: 'Create Collection',
    view: '',
    image: '/images/placeholder.jpg'
  },
  {
    id: '1',
    name: 'Drum Kit',
    image: 'https://i.pinimg.com/736x/01/90/b9/0190b9b18ae15f521a39370e2f5831de.jpg'
  },
  {
    id: '2',
    name: 'Loop Kit',
    image: 'https://i.pinimg.com/1200x/5f/55/ab/5f55ab8db1842f605e0d1f073e8325df.jpg'
  },
  {
    id: '3',
    name: 'Sample Pack',
    image: 'https://i.pinimg.com/736x/c5/18/5a/c5185a202670506a442e0f990c63fce3.jpg'
  },
  {
    id: '4',
    name: 'Midi kit',
    image: 'https://i.pinimg.com/736x/b7/a9/bb/b7a9bb571b175e9e29b420066c4039ac.jpg'
  },
  {
    id: '5',
    name: 'guitar kit',
    image: 'https://i.pinimg.com/736x/d3/48/f0/d348f0a609cde9ba183f6392a6c4a1b3.jpg'
  },
  {
    id: '6',
    name: 'Mid Night kit',
    image: 'https://i.pinimg.com/1200x/b2/16/32/b2163233acc9c7ff8c4c0f23d1889951.jpg'
  },
  {
    id: '7',
    name: 'The Haunted Tapes',
    image: 'https://i.pinimg.com/736x/76/0b/f7/760bf7ab1f4a02f98245c0fada52a54f.jpg'
  },
  {
    id: '8',
    name: 'Cyberpunk Drum Kit',
    image: 'https://i.pinimg.com/736x/8c/3a/f0/8c3af09cb2115dd35955b429139edfbf.jpg'
  },
  {
    id: '9',
    name: 'Sample Pack',
    image: 'https://i.pinimg.com/736x/5e/5e/18/5e5e1823230c934e358f2326b6ee8d72.jpg'
  },
  {
    id: '10',
    name: 'Drum Kit',
    image: 'https://i.pinimg.com/1200x/21/f0/aa/21f0aa4fb8b504563091018647c2e267.jpg'
  },
  {
    id: '11',
    name: 'Cyberpunk Drumkit',
    image: 'https://i.pinimg.com/736x/c5/18/5a/c5185a202670506a442e0f990c63fce3.jpg'
  },
  {
    id: '12',
    name: 'The Haunted Tapes',
    image: 'https://i.pinimg.com/1200x/b2/16/32/b2163233acc9c7ff8c4c0f23d1889951.jpg'
  },
  {
    id: '13',
    name: 'Mid Kit',
    image: 'https://i.pinimg.com/736x/76/0b/f7/760bf7ab1f4a02f98245c0fada52a54f.jpg'
  },
  {
    id: '14',
    name: ' Night kit',
    image: 'https://i.pinimg.com/1200x/5f/55/ab/5f55ab8db1842f605e0d1f073e8325df.jpg'
  },

];


export { avatar, infoItems, socialItems, beatsData, soundKitsData, collectionData };