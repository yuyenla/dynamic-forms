import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Survey } from '/imports/api/surveys/surveyCollection.js';

Meteor.methods({
  'insertSurvey'(survey) {
      Survey.insert({
        results: survey
      });
  }
});
