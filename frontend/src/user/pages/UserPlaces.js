import React from "react";

import PlaceList from "../../places/components/PlaceList";

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State',
        description: 'One of the most famous sky scrappers',
        imageUrl: 'https://images.unsplash.com/photo-1546436836-07a91091f160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
        address: '20 W 34th St, New York',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State 2',
        description: 'One of the most famous sky scrappers',
        imageUrl: 'https://images.unsplash.com/photo-1546436836-07a91091f160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
        address: '20 W 34th St, New York',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    }
]

const UserPlaces =() => {
    return <PlaceList items={DUMMY_PLACES}/>
};

export default UserPlaces;