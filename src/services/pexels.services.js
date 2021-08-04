import { createClient } from "pexels";

import Yoga from '../assets/images/experiencias/yoga.jpg';
import Surfing from '../assets/images/experiencias/surfing.jpg';
import Foodie from '../assets/images/experiencias/foodie.jpg';
import Scuba from '../assets/images/experiencias/scuba.jpg';
import Running from '../assets/images/experiencias/running.jpg';
import Golf from '../assets/images/experiencias/golf.jpg';
import ArtGallery from '../assets/images/experiencias/artgallery.jpg';
import Coffee from '../assets/images/experiencias/coffee.jpg';
import FamilyTip from '../assets/images/experiencias/familytrip.jpg';
import WineTesting from '../assets/images/experiencias/winetesting.jpg';
import Photography from '../assets/images/experiencias/photography.jpg';
import Snowboarding from '../assets/images/experiencias/snowboarding.jpg';

export const getPexelsPhotos = async () => {
  let pexels = [];
  const query = "Travel";
  const client = createClient(
    "563492ad6f917000010000019695a1a0247740b1b6601f5f28a07312"
  );

  try {
    const response = await client.photos.search({
      query,
      per_page: 16,
      orientation: "portrait"
    });
    pexels = response.photos;
  } catch (error) {
    alert(
      "Error con el servicio de pexels. No ha sido posible obtener los recursos."
    );
  }

  return pexels;
};

export const getExperiencias = () => (
  [
  {
    id: 'b537137a-39ca-4b1d-9d98-f1febcc24a97',
    url: Yoga,
    title: 'Yoga',
  },
  {
    id: '3560db9a-f887-409b-852e-ad737806da73',
    url: Surfing,
    title: 'Surfing',
  },
  {
    id: 'dfc4fed6-1b51-464a-8fca-bcc52ed87c72',
    url: Foodie,
    title: 'Foodie',
  },
  {
    id: '9aa0280c-2b25-4664-b6e9-47a679e1975a',
    url: Scuba,
    title: 'Scuba Diving',
  },
  {
    id: '94e70452-0875-4239-b606-dbb0079561ee',
    url: Running,
    title: 'Running',
  },
  {
    id: '038d58b0-b608-42d5-8a8f-1b5fc70f22ea',
    url: Golf,
    title: 'Golf',
  },
  {
    id: 'bba16047-4f5c-4db2-9c49-f9f38bd06283',
    url: ArtGallery,
    title: 'Art & Gallery',
  },
  {
    id: '2ae350ea-7e87-43f9-8ce1-4e2a658a2e44',
    url: Coffee,
    title: 'Enjoy a coffee',
  },
  {
    id: '42443dd0-bf51-4ad5-8b4f-0987c98b1161',
    url: FamilyTip,
    title: 'Family Trips',
  },
  {
    id: '0f385e10-61c1-4c82-9742-bf896b218c51',
    url: WineTesting,
    title: 'Wine Testing',
  },
  {
    id: '91f69101-00ab-4691-a266-cbe2d3235f8f',
    url: Photography,
    title: 'Photography',
  },
  {
    id: '556e8ec2-086d-47b1-aef8-bb80ab1ae05f',
    url: Snowboarding,
    title: 'Snowboarding',
  },
]
)
