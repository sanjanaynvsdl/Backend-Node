import axios from 'axios';

export const axionsInsc=axios.create({
    headers : {
        'Content-Type' : 'application/json',
    }
    //this make sures that we are communicating in json format
});

