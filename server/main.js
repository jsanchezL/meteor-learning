import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/TasksCollection'

const insertTask = taskText => TasksCollection.insert({text: taskText})

Meteor.startup(() => {
  if(TasksCollection.find().count() === 0){
    [
      'T1',
      'T2',
      'T3',
      'T4'
    ].forEach(insertTask);
  }
})