import React from 'react';
import faker from 'faker'


const SingleFeed = () => {
    return (
        <div className='ui feed'>
            <div className='event'>
                <div className='label'>
                    <img src={faker.image.avatar()} alt='...'></img>
                </div>
                <div className='content'>
                    <div className='date'>1 hour ago</div>
                    <div className='summary'>
                        <a href='/' className='user'>
                        john walker
                        </a>(' ')
                        wants to have a meeting with you
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleFeed;