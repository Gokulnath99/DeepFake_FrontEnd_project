import React from 'react';
import { CardWithForm } from '@/components/CardComponent';
import { Data } from '@/typings';

// Define a type for the individual item structure


const data: Data = {
    "sample": [
        {
            "description": "Lady with a red umbrella",
            "image-url": "https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-19/11056014_930580873660876_1764685772_a.jpg"
        },
        {
            "description": "Flowers and some fruits",
            "image-url": "https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-19/11056014_930580873660876_1764685772_a.jpg"
        },
        {
            "description": "Beautiful scenery",
            "image-url": "https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-19/11056014_930580873660876_1764685772_a.jpg"
        },
        {
            "description": "Some kind of bird",
            "image-url": "https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-19/11056014_930580873660876_1764685772_a.jpg"
        },
        {
            "description": "The attack of dragons",
            "image-url": "https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-19/11056014_930580873660876_1764685772_a.jpg"
        },
        {
            "description": "The attack of dragons",
            "image-url": "https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-19/11056014_930580873660876_1764685772_a.jpg"
        }
    ]
};

const AboutUs: React.FC = () => {
    return (
        <div>
            <h1 className='text-5xl text-center'>Who we are?</h1>
            <div className='grid grid-cols-3 m-5'>
                {
                    data.sample.map((item, i) =>
                        <CardWithForm item={item} />
                    )
                }
            </div>
            
        </div>
    );
};

export default AboutUs;
