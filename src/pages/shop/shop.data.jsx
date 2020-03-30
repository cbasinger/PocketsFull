/* import { 
    Cicada,
    LunaMoth,
    RhinoBeetle,
    SiamButterfly,
    StagBeetle,
    Chipmunk,
    Fox,
    Mouse,
    Rabbit,
    Squirrel,
    Alligator,
    BeardedDragon,
    GreenTreeBoa,
    Iguana,
    Rattlesnake,
    Sparrowhawk,
    GreyHornbill,
    Pheasant,
    Magpie,
    RedWingParrot,
    AfricanGreyParrot,
    Mallard,
    BobwhiteQuail,
    Lovebird,
    Frog,
    Nautilus,
    Octopus,
    Kitten,
    Turtle

} from '../../assets/photos/index'; */
import React from 'react';

import Cicada from '../../assets/photos/Bugs/cicada.png';
import LunaMoth from '../../assets/photos/Bugs/lunamoth.png';
import RhinoBeetle from'../../assets/photos/Bugs/rhinobeetle.png';
import SiamButterfly from '../../assets/photos/Bugs/siambutterfly.png';
import StagBeetle from '../../assets/photos/Bugs/stagbeetle.png';

import Chipmunk from '../../assets/photos/Small Mammals/chipmunk.png';
import Fox from '../../assets/photos/Small Mammals/fox.png';
import Mouse from '../../assets/photos/Small Mammals/mouse.png';
import Rabbit from '../../assets/photos/Small Mammals/rabbit.png';
import Squirrel from '../../assets/photos/Small Mammals/squirrel.png';

import GreenTreeBoa from '../../assets/photos/reptiles/greentreeboa.png';
import Alligator from '../../assets/photos/reptiles/alligator.png';
import BeardedDragon from '../../assets/photos/reptiles/beardeddragon.png';
import Iguana from '../../assets/photos/reptiles/iguana.png';
import Rattlesnake from '../../assets/photos/reptiles/rattlesnake.png';

import RedWingParrot from '../../assets/photos/Birds/redwingparrot.png';
import Sparrowhawk from '../../assets/photos/Birds/sparrowhawk.png';
import GreyHornbill from '../../assets/photos/Birds/greyhornbill.png';
import Magpie from '../../assets/photos/Birds/magpie.png';
import Pheasant from '../../assets/photos/Birds/pheasant.png'
import AfricanGreyParrot from '../../assets/photos/Birds/africangreyparrot.png';
import Mallard from '../../assets/photos/Birds/mallard.png';
import BobwhiteQuail from '../../assets/photos/Birds/bobwhitequail.png';
import Lovebird from '../../assets/photos/Birds/lovebird.png';

import Frog from '../../assets/photos/wet specimens/frog.png';
import Nautilus from '../../assets/photos/wet specimens/nautilus.png';
import Octopus from '../../assets/photos/wet specimens/octopus.png';
import Kitten from '../../assets/photos/wet specimens/kitten.png';
import Turtle from '../../assets/photos/wet specimens/turtle.png';

const SHOP_DATA = [
    {
        id: 1,
        title: 'Bugs',
        routeName: 'bugs',
        items: [
            {
                id: 1,
                name: 'Cicada',
                imageURL: '../../assets/photos/bugs/cicada.png',
                price: 60
            },
            {
                id: 2,
                name: 'Luna Moth',
                imageURL: {LunaMoth},
                price: 70
            },
            {
                id: 3,
                name: 'Rhinoceros Beetle',
                imageURL: {RhinoBeetle},
                price: 55
            },
            {
                id: 4,
                name: 'Siam Tree Nymph Butterfly',
                imageURL: {SiamButterfly},
                price: 70
            },
            {
                id: 5,
                name: 'Stag Beetle',
                imageURL: {StagBeetle},
                price: 60
            }
        ]
    },
    {
        id: 2,
        title: 'Small Mammals',
        routeName: 'small-mammals',
        items: [
            {
                id: 1,
                name: 'Chipmunk',
                imageURL: {Chipmunk},
                price: 80
            },
            {
                id: 2,
                name: 'Fox',
                imageURL: {Fox},
                price: 115
            },
            {
                id: 3,
                name: 'Mouse',
                imageURL: {Mouse},
                price: 55
            },
            {
                id: 4,
                name: 'Rabbit',
                imageURL: {Rabbit},
                price: 85
            },
            {
                id: 5,
                name: 'Squirrel',
                imageURL: {Squirrel},
                price: 65
            },
        ]
    },
    {
        id: 3,
        title: 'Reptiles',
        routeName: 'reptiles',
        items: [
            {
                id: 1,
                name: 'Alligator',
                imageURL: {Alligator},
                price: 75
            },
            {
                id: 2,
                name: 'Bearded Dragon',
                imageURL: {BeardedDragon},
                price: 100
            },
            {
                id: 3,
                name: 'Green Tree Boa',
                imageURL: {GreenTreeBoa},
                price: 225
            },
            {
                id: 4,
                name: 'Iguana',
                imageURL: {Iguana},
                price: 150
            },
            {
                id: 5,
                name: 'Rattlesnake',
                imageURL: {Rattlesnake},
                price: 110
            },
        ]
    },
    {
        id: 4,
        title: 'Birds',
        routeName: 'birds',
        items: [
            {
                id: 1,
                name: 'Sparrowhawk',
                imageURL: {Sparrowhawk},
                price: 165
            },
            {
                id: 2,
                name: 'Grey Hornbill',
                imageURL: {GreyHornbill},
                price: 200
            },
            {
                id: 3,
                name: 'Pheasant',
                imageURL: {Pheasant},
                price: 130
            },
            {
                id: 4,
                name: 'Magpie',
                imageURL: {Magpie},
                price: 95
            },
            {
                id: 5,
                name: 'Red-Winged Parrot',
                imageURL: {RedWingParrot},
                price: 185
            },
            {
                id: 6,
                name: 'African Grey Parrot',
                imageURL: {AfricanGreyParrot},
                price: 325
            },
            {
                id: 7,
                name: 'Mallard',
                imageURL: {Mallard},
                price: 140
            },
            {
                id: 8,
                name: 'Bobwhite Quail',
                imageURL: {BobwhiteQuail},
                price: 165
            },
            {
                id: 9,
                name: 'Lovebird',
                imageURL: {Lovebird},
                price: 160
            },
        ]
    },
    {
        id: 5,
        title: 'Wet Specimens',
        routeName: 'wet-specimens',
        items: [
            {
                id: 1,
                name: 'Frog',
                imageURL: {Frog},
                price: 60
            },
            {
                id: 2,
                name: 'Nautilus',
                imageURL: {Nautilus},
                price: 65
            },
            {
                id: 3,
                name: 'Octopus',
                imageURL: {Octopus},
                price: 50
            },
            {
                id: 4,
                name: 'Kitten',
                imageURL: {Kitten},
                price: 120
            },
            {
                id: 5,
                name: 'Turtle',
                imageURL: {Turtle},
                price: 50
            }
        ] 
    }
];

export default SHOP_DATA;

