import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

/* import {
    Cicada,
    Chipmunk,
    GreenTreeBoa,
    RedWingParrot,
    Frog
} from '../../assets/photos/index'; */

import Cicada from '../../assets/photos/Bugs/cicada.png';
import Chipmunk from '../../assets/photos/Small Mammals/chipmunk.png';
import RedWingParrot from '../../assets/photos/Birds/redwingparrot.png';
import Frog from '../../assets/photos/wet specimens/frog.png';
import GreenTreeBoa from '../../assets/photos/reptiles/greentreeboa.png';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor (){
        super();

        this.state = {
            sections: [{
                title: 'Bugs',
                imageURL: {Cicada},
                id: 1,
                linkUrl: 'shop/bugs'
            },
            {
                title: 'Small Mammals',
                imageURL: {Chipmunk},
                id: 2,
                linkUrl: 'shop/small-mammals'
            },
            {
                title: 'Reptiles',
                imageURL: {GreenTreeBoa},
                id: 3,
                linkUrl: 'shop/reptiles'
            },
            {
                title: 'Birds',
                imageURL: {RedWingParrot},
                size: 'large',
                id: 4,
                linkUrl: 'shop/birds'
            },
            {
                title: 'Wet Specimens',
                imageURL: {Frog},
                size: 'large',
                id: 5,
                linkUrl: 'shop/wet-specimens'
            }]
        }
    }

    render (){
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps }) => (
                    <MenuItem  key={id} {...otherSectionProps} />
                ))
                }
            </div>
        )
    }
}
export default Directory;