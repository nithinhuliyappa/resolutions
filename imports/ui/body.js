import {Template} from 'meteor/templating';

import {Resolutions} from '../api/resolutions.js';

import './body.html';
import './resolution.html';


Template.body.helpers({
    resolutions() {
        return Resolutions.find({});
    }
  });

  Template.body.events({
    'click.test':(event) => {
        console.log("Logged");
    }
  });