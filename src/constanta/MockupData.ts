import {
  IHotCollectionCardProps,
  ITopSellerItem,
  ICardCreateSellProps,
} from '@interfaces';

let lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellat aliquam odit repudiandae reprehenderit ad enim, veritatis in, a expedita officia impedit, eos blanditiis delectus vitae? Nihil consequuntur doloribus molestias!';

export const HotCollectionDATA: IHotCollectionCardProps[] = [
  {
    name: 'manan',
    background: '/hotcollection/1.jpg',
    info: 'erc-192',
    profileImage: '',
  },
  {
    name: 'dedi',
    background: '/hotcollection/2.jpg',
    info: 'erc-192',
    profileImage: '',
  },
  {
    name: 'yosa',
    background: '/hotcollection/3.jpg',
    info: 'erc-192',
    profileImage: '',
  },
  {
    name: 'wahyu',
    background: '/hotcollection/4.jpg',
    info: 'erc-192',
    profileImage: '',
  },
  {
    name: 'jamal',
    background: '/hotcollection/5.jpg',
    info: 'erc-192',
    profileImage: '',
  },
];

export const DataTopSellerList: Array<Omit<ITopSellerItem, 'index'>> = [
  {
    photo: '/author/author-2.jpg',
    name: 'Abdul Mannan',
    earning: '10.5',
    currency: 'ETH',
    verified: true,
  },
  {
    photo: '/author/author-1.jpg',
    name: 'Yosha Sulaiman',
    earning: '7.5',
    currency: 'ETH',
    verified: false,
  },
  {
    photo: '/author/author-2.jpg',
    name: 'Abdul Mannan',
    earning: '10.5',
    currency: 'ETH',
    verified: true,
  },
  {
    photo: '/author/author-1.jpg',
    name: 'Yosha Sulaiman',
    earning: '7.5',
    currency: 'ETH',
    verified: false,
  },
  {
    photo: '/author/author-2.jpg',
    name: 'Abdul Mannan',
    earning: '10.5',
    currency: 'ETH',
    verified: true,
  },
  {
    photo: '/author/author-1.jpg',
    name: 'Yosha Sulaiman',
    earning: '7.5',
    currency: 'ETH',
    verified: false,
  },
  {
    photo: '/author/author-2.jpg',
    name: 'Abdul Mannan',
    earning: '10.5',
    currency: 'ETH',
    verified: true,
  },
  {
    photo: '/author/author-1.jpg',
    name: 'Yosha Sulaiman',
    earning: '7.5',
    currency: 'ETH',
    verified: false,
  },
  {
    photo: '/author/author-2.jpg',
    name: 'Abdul Mannan',
    earning: '10.5',
    currency: 'ETH',
    verified: true,
  },
  {
    photo: '/author/author-1.jpg',
    name: 'Yosha Sulaiman',
    earning: '7.5',
    currency: 'ETH',
    verified: false,
  },
  {
    photo: '/author/author-2.jpg',
    name: 'Abdul Mannan',
    earning: '10.5',
    currency: 'ETH',
    verified: true,
  },
  {
    photo: '/author/author-1.jpg',
    name: 'Yosha Sulaiman',
    earning: '7.5',
    currency: 'ETH',
    verified: false,
  },
  {
    photo: '/author/author-2.jpg',
    name: 'Abdul Mannan',
    earning: '10.5',
    currency: 'ETH',
    verified: true,
  },
  {
    photo: '/author/author-1.jpg',
    name: 'Yosha Sulaiman',
    earning: '7.5',
    currency: 'ETH',
    verified: false,
  },
  {
    photo: '/author/author-2.jpg',
    name: 'Abdul Mannan',
    earning: '10.5',
    currency: 'ETH',
    verified: true,
  },
  {
    photo: '/author/author-1.jpg',
    name: 'Yosha Sulaiman',
    earning: '7.5',
    currency: 'ETH',
    verified: false,
  },
];

export const CardCreateSellData: ICardCreateSellProps[] = [
  {
    description: lorem,
    title: 'Setup your wallet',
    icon: 'wallet',
  },
  {
    description: lorem,
    title: "Add your NFT's",
    icon: 'upload',
  },
  {
    description: lorem,
    title: "Sell your NFT's",
    icon: 'tag',
  },
];

export const DataCardItem = [
  {
    name: 'Salmonela',
    title: 'Picky Ocean',
    countDown: '2022-12-20',
    imageProfile: '/author/author-1.jpg',
    currency: 'PTM',
    stock: '2/20',
    numOfLike: 37,
    price: '1000000',
    imageContent: '/item/anim-2.webp',
    verified: false,
  },
  {
    name: 'Kujang',
    title: 'Haste Potion',
    countDown: '2022-12-21',
    imageProfile: '/author/author-2.jpg',
    currency: 'PTM',
    stock: '2/20',
    numOfLike: 37,
    price: '1000000',
    imageContent: '/item/4.webp',
    verified: true,
  },
  {
    name: 'Kujang',
    title: 'Dancing in the dark',
    countDown: '2022-12-21',
    imageProfile: '/author/author-2.jpg',
    currency: 'PTM',
    stock: '2/20',
    numOfLike: 37,
    price: '1000000',
    imageContent: '/item/anim-3.webp',
    verified: true,
  },
  {
    name: 'Donny',
    title: 'Solo Roshan',
    countDown: '2022-12-26',
    imageProfile: '/author/author-2.jpg',
    currency: 'PTM',
    stock: '2/20',
    numOfLike: 37,
    price: '1000000',
    imageContent: '/item/anim-4.webp',
    verified: true,
  },
  {
    name: 'Sandi',
    title: 'Magic Stik',
    imageProfile: '/author/author-2.jpg',
    currency: 'PTM',
    stock: '1',
    numOfLike: 37,
    price: '1000000',
    imageContent: '/item/3.webp',
    verified: true,
  },
  {
    name: 'Sultoni',
    title: 'Crystal Maiden',
    imageProfile: '/author/author-2.jpg',
    currency: 'PTM',
    stock: '2/20',
    numOfLike: 37,
    price: '1000000',
    imageContent: '/item/anim-5.webp',
    verified: false,
  },
  {
    name: 'Yayan',
    title: 'Gak makan kalo gk kerja',
    imageProfile: '/author/author-2.jpg',
    currency: 'PTM',
    stock: '2/20',
    numOfLike: 37,
    price: '1000000',
    imageContent: '/item/anim-6.webp',
    verified: false,
  },
  {
    name: 'Hadi',
    title: 'Gatot Katca',
    imageProfile: '/author/author-2.jpg',
    currency: 'PTM',
    stock: '1',
    numOfLike: 37,
    price: '1000000',
    imageContent: '/item/2.webp',
    verified: true,
  },
  {
    name: 'Yanuar',
    title: 'Ratna',
    imageProfile: '/author/author-2.jpg',
    currency: 'PTM',
    stock: '2/20',
    numOfLike: 37,
    price: '1000000',
    imageContent: '/item/anim-7.webp',
    verified: false,
  },
  {
    name: 'Jogda',
    title: 'Anak Juragan',
    imageProfile: '/author/author-2.jpg',
    currency: 'PTM',
    stock: '2/20',
    numOfLike: 37,
    price: '1000000',
    imageContent: '/item/anim-8.webp',
    verified: false,
  },
  {
    name: 'Sandi',
    title: 'Regeneration',
    imageProfile: '/author/author-2.jpg',
    currency: 'PTM',
    stock: '1',
    numOfLike: 37,
    price: '1000000',
    imageContent: '/item/1.webp',
    verified: true,
  },
];