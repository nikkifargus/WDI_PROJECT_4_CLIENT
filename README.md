# Fitness Fun Class Scheduling App

<img src="images/website.png"></img>

##Introduction

This was the final project for the WDI course at General Assembly. It was started and completed in the final week of the course. For my final project I wanted to create a website that solidified all the skills I had been working on for the past three months, as well as take advantage of using the relational database skills I had recently acquired when we moved onto learning Ruby on Rails in the last few weeks of the course.

I decided to make a fitness class scheduling app called Fitness Fun

Click <a href="https://fitness-fun-classes.herokuapp.com/ ">here</a> to have a look at my website.

##Objectives

The objectives of this project were:

1) Create an authenticated App
2) Use Ruby on Rails to create an API backend with at least 3 resources.
3) Use AngularJS to create the frontend
4) Style the App using a CSS framework

Recently I  started going to a new fitness class called Jumping Fitness whose website was not well designed and the UX was really bad. Therefore based on the criteria above, I decided to redesign the website, but in order to create slightly more complex relationships between resources, I added a few extra bits of functionality.


##Planning

For this project I probably carried out the most thorough planning of any of the projects. I started by researching multiple fitness class websites to decide on the style. I then drew out the wireframes using realtimeboard.

<img src="images/wireframe.png"></img>

I then went on to plan out the relationships between resources and write out my scaffolding for the API.

<img src="images/relationships.JPG"></img>

<img src="images/scaffold.jpg"></img>


##Development

After all of the planning, my first step to building the website was to set up the backend. I spent 1 - 2 days setting up the resources, relationships and authentication in the backend. Most of this was achieved using terminal commands and a few amendments to the files using Ruby.  

It was necessary to install a few extra gems than those automatically installed during the set-up. For example I added the Serializer Gem before scaffolding any of the resources so that a lot of the information required was added on creation.

I also tested my API on Insomnia throughout the process to make sure that I could access all the information I wanted and didn't need to touch the backend once I went on to the front end.

Once the backend was set up, I went on to the front end. As already mentioned, I used AngularJS to create the front end. The first task was to set up the basic views and routes so that I could get the front end authentication working so that I was able to see the information for the other views rendering.

Once this was set up it was a case of making sure that I had all of my RESTful routes working properly and that I printed the relevant information on each page. One of the more challenging pieces of functionality I found was the ability for a user to join and leave a class and making sure this showed on the front-end immediately without refresh. This is how I achieved it:

```

  function userAttending(){
    console.log(vm.lesson.users);
    vm.lesson.user_ids.push(CurrentUserService.currentUser.id);
    vm.lesson.users.push(CurrentUserService.currentUser);

    Lesson
    .update({id: $stateParams.id}, {lesson: vm.lesson})
    .$promise
    .then(() => {
    });
  }

  function notAttending() {
    vm.lesson.user_ids.splice(vm.lesson.user_ids.indexOf(CurrentUserService.currentUser.id), 1);
    for (var i = 0; i < vm.lesson.users.length; i++) {
      if (vm.lesson.users[i].id === CurrentUserService.currentUser.id ) {
        vm.lesson.users.splice(i, 1);
      }
    }
    Lesson
    .update({id: $stateParams.id}, {lesson: vm.lesson})
    .$promise
    .then(() => {
    });
  }

```

Finally I styled the pages using Scss and the CSS framework Bootstrap. I was really pleased with the look, however I still want to implement a few CSS animations in order to make it look more professional. One of my favourite pieces of styling that I implemented was the page dividers which you can see how I achieved this below:

<img src="images/divider_code.png"></img>

##Future Improvements

To make Fitness Fun even more user friendly, there are some features I would like to add: Google auto complete when an admin creates a new location; max capacity for joining a class and a waiting list for if it is full. The last thing I would like to add is the ability for clients to review the class and/or teacher.
