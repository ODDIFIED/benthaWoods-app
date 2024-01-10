import imgbedOne from "./assets/bed-1.jpg";
import imgbedTwo from "./assets/bed-2.jpg";
import imgbedThree from "./assets/bed-3.jpg";
import imgbedFour from "./assets/bed-4.jpg";
import imgCouchOne from "./assets/Couch-1.jpg";
import imgCouchTwo from "./assets/Couch-2.jpg";
import imgCouchThree from "./assets/Couch-3.jpg";
import imgCouchFour from "./assets/Couch-4.jpg";
import imgDinningtab from "./assets/dinning-tab1.jpg";
import imgDinningtabTwo from "./assets/dinning-tab2.jpg";
import imgDinningtabThree from "./assets/dinning-tab3.jpg";
import imgDinningtabFour from "./assets/dinning-tab4.jpg";
import imgShelfOne from './assets/Shelf-1.jpg';
import imgShelfTwo from './assets/Shelf-2.jpg';
import imgShelfThree from './assets/Shelf-3.jpg';
import imgShelfFour from './assets/Shelf-4.jpg';
import imgStoolOne from './assets/Stool-1.jpg';
import imgStoolTwo from './assets/Stool-2.jpg';
import imgStoolThree from './assets/Stool-3.jpg';
import imgStoolFour from './assets/Stool-4.jpg';
import { GiTable } from "react-icons/gi";
import { FaCouch } from "react-icons/fa";
import { BsBookshelf } from "react-icons/bs";
import { IoBedOutline } from "react-icons/io5";
import { MdWorkspaces } from "react-icons/md";



export type FilteredProps ={
    id: Number;
    MenuButt: string,
    MenuIcon: any,

}


export type Props = {
  id: Number;
  product_name: string;
  price: string,
  product_type: string;
  product_img: string;
};

export const furniDetails: Array<Props> = [
  {
    id: 0,
    product_name: "Fulsa Bed",
    price: "$ 99.99",
    product_type: "bedframe",
    product_img: imgbedOne
  },
  {
    id: 1,
    product_name: "Benny couch",
    price: "$ 79.99",
    product_type: "couch",
    product_img: imgCouchOne
  },
  {
    id: 2,
    product_name: "Union tab",
    price: "$ 59.99",
    product_type: "dining",
    product_img: imgDinningtab
  },
  {
    id: 3,
    product_name: "Tangle tab",
    price: "$ 149.99",
    product_type: "dining",
    product_img: imgDinningtabThree
  },
  {
    id: 4,
    product_name: "Renaissance Shelf",
    price: "$ 64.99",
    product_type: "Shelf",
    product_img: imgShelfOne
  },
  {
    id: 5,
    product_name: "Eyeside Stool",
    price: "$ 64.99",
    product_type: "Stool",
    product_img: imgStoolOne
  },
  {
    id: 6,
    product_name: "Lopum Bed",
    price: "$ 79.99",
    product_type: 'bed frame',
    product_img: imgbedFour
  },
  {
    id: 7,
    product_name: "Sam-couch",
    price: "$ 70.00",
    product_type: "couch",
    product_img: imgCouchTwo
  },
  {
    id: 8,
    product_name: "Ekọ́ Shelf",
    price: "$ 64.99",
    product_type: "Shelf",
    product_img: imgShelfTwo
  },
];


export const MenuButton : Array<FilteredProps> =[
    {
        id: 1,
        MenuButt: 'Table',
        MenuIcon: <GiTable />,
    },
    {
        id: 2,
        MenuButt: 'Couch',
        MenuIcon: <FaCouch />,
    },
    {
        id: 3,
        MenuButt: 'Shelf',
        MenuIcon: <BsBookshelf />,
    },
    {
        id: 4,
        MenuButt: 'Bed',
        MenuIcon: <IoBedOutline /> ,
    },
    {
        id: 5,
        MenuButt: 'Workspace',
        MenuIcon: <MdWorkspaces />,
    },
]
