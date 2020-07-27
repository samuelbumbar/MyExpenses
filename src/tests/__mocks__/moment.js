// import moment from 'moment'; // if we call this it is gonna look for the mocked version (so will have a function that calls itself). We have to grab the original verion of 'moment' (not he mocked one)
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};
