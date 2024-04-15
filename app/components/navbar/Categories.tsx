"use client";

import { usePathname, useSearchParams } from "next/navigation";

import {
  BarberIcon,
  BraidsIcon,
  EyesIcon,
  FaceIcon,
  HairDyeIcon,
  LipsIcon,
  NailsIcon,
  TattoosIcon,
} from "../customIcons";

import CategoryBox from "../CategoryBox";
import Container from "../Container";

export const categories = [
  {
    label: "Barber",
    icon: BarberIcon,
    description: "Barber",
  },
  {
    label: "Braids",
    icon: BraidsIcon,
    description: "Braids",
  },
  {
    label: "Eyes",
    icon: EyesIcon,
    description: "Eyes",
  },
  {
    label: "Face",
    icon: FaceIcon,
    description: "Face",
  },
  {
    label: "Hair Dye",
    icon: HairDyeIcon,
    description: "Hair Dye",
  },
  {
    label: "Lips",
    icon: LipsIcon,
    description: "Lips",
  },
  {
    label: "Nails",
    icon: NailsIcon,
    description: "Nails",
  },
  {
    label: "Tattoos",
    icon: TattoosIcon,
    description: "Tattoos",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
