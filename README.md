# Dynamic Forms
Create dynamic form fields with Meteor/Blaze!

This is a quick and easy template for creating form fields on the go. This project only supports input fields and radio buttons
so far, but it would be easy to add in the other form field types.


To quickly remove or add fields to your form, just create a JSON file like so:

~~~~{
    "_id" : "survey1",
    "questions" : [ 
        {
            "type" : "radio-question",
            "label" : "How was the flavor?",
            "index" : 0
        }, 
        {
            "type" : "radio-question",
            "label" : "Please rate it!",
            "index" : 1
        }, 
        {
            "type" : "input-question",
            "label" : "What would you name this flavor?",
            "index" : 2
        }, 
        {
            "type" : "input-question",
            "label" : "How was your overall experience?",
            "index" : 3
        }
    ]
}~~~~

Just simply change the type to either: "radio-question" or "input-question", and then change the label to whatever you like,
and then increment the index.

I hope this helps you somehow!
