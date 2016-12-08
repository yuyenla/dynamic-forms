import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Survey } from '/imports/api/surveys/surveyCollection.js';

import './main.html';

//this gets me the survey question and answer type
Template.dynamicForm.onCreated(function(){
  var instance = this;
  instance.autorun(function() {
    instance.subscribe("surveyQ");
  });


});

Template.body.events({
  'submit' : function(event) {
    event.preventDefault();
    var formData = $('form').serializeArray();
    var quesAns = [];
    for (var i=0; i < formData.length; i++) {
      var data = {
        question: $('#q' + i).text(),
        answer: formData[i].value
      }
      quesAns.push(data);
    }

    //console.log("question and answer!", quesAns);
    Meteor.call("insertSurvey", quesAns);
  }
});

Template.dynamicForm.helpers({
  survey () {
    return Survey.find();
  },
  typeOfQuestion () {
    return this.type == "radio-question";
  }
})
