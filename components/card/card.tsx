import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

interface Card {
  title: string;
  description: string;
  image: string;
}

export default function CardComponent({ title, description, image }: Card) {
  return  (
    <div className="min-h-96 max-h-96 flex justify-center">
    <Card className="max-w-80  py-4 bg-slate-950 rounded-lg shadow-lg">
      <div className="flex justify-center">
        <Image
          alt="Card background"
          className="object-cover rounded-3xl opacity-100 p-3 mx-auto"
          src={image}
          width={270}
          height={160}
        />
      </div>
      <CardBody className="opacity-100 py-2 flex flex-col justify-center items-center">
        <CardHeader className="pb-0 pt-2 px-4 flex-col justify-center text-center">
          <p className="text-xl uppercase font-bold text-white">{title}</p>
          <h4 className="font-bold  text-sm md:text-base text-white mt-2 ">{description}</h4>
        </CardHeader>
      </CardBody>
    </Card>
  </div>
  
  );
}
