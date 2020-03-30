import { 
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

} from '../../assets/photos/index';

const SHOP_DATA = {
    bugs: {
        id: 1,
        title: 'Bugs',
        routeName: 'bugs',
        items: [
            {
                id: 1,
                name: 'Cicada',
                imageURL: `${Cicada}`,
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
    smallmammals: {
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
    reptiles: {
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
    birds: {
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
    wetspecimens:{
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
};

export default SHOP_DATA;


