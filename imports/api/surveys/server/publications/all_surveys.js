import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Survey } from '/imports/api/surveys/surveyCollection.js';

Meteor.publish('surveyQ', function() {
  return Survey.find();
});
