import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label"

// Define the type for the props
type CardWithFormProps = {
    item: {
        'image-url': string;
        description: string;
    };
};

export const CardWithForm: React.FC<CardWithFormProps> = ({ item }) => {
    return (
        <Card className="w-[350px] my-4">
            <CardContent>
                <Image 
                    src={item["image-url"]} 
                    alt={item.description}
                    width={100}
                    height={150}
                />
                <Label>{item.description}</Label>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">read more</Button>
            </CardFooter>
        </Card>
    );
};
