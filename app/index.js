import _ from 'lodash';
import moment from 'moment';

function component () {
    var element = document.createElement('div');

    // lodash is required for the next line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // moment is required
    var now = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log("Now:", now);

    return element;
}

document.body.appendChild(component());

