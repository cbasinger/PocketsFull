const INITIAL_STATE = {
    sections: [
        {
        title: 'bugs',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
        linkUrl: 'shop/bugs'
        },
        {
        title: 'small-mammals',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        linkUrl: 'shop/small-mammals'
        },
        {
        title: 'reptiles',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        linkUrl: 'shop/reptiles'
        },
        {
        title: 'birds',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: 'shop/birds'
        },
        {
        title: 'wet-specimens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
        linkUrl: 'shop/wet-specimens'
        }
    ]
    };

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
        return state;
    }
};

export default directoryReducer;