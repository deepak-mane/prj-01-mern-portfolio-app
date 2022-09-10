# My Portfolio

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description of Project

So before getting started with the actual demo of our portfolio application, first of all, let's discuss
about the tech stack.
So here I'm going to divide our own stack portfolio tech stack into two parts.
Part one and part two.
So in the first part, we are going to build a static portfolio with the help of React and Tailwind
thesis.
And coming to the second part, we are going to convert that static portfolio into the dynamic portfolio
using Node.js, Express, JS and MongoDB.
And then after we are going to build an admin panel to control the portfolio and to build that admin
panel, we will be using the and design UI components.
So this is our tech stack.
Now, without any moment, let's get started with the demo of our application.
Here we go, guys.
This is the landing page of our portfolio application, so let's start from the header.
So if you observe the header, I have three different letters which are nothing but the short form of
my name.So K is the first letter of my first name?Yes.
Is the first letter of my middle name or is the first letter of my last name.
And then after I have an intro section.So I am introducing about myself.Hi, I am Satya Prakash Reddy.
I build things for the web and I have a small description about my current job and current company.
So then I'm going to have the about section.In this section I'm going to describe about myself.
That means how I got the interest into this field and web development field, what are my sample projects
and all those things.
Then after we are going to showcase our skills here, you can see here are a few technologies I've been
working with recently JavaScript, React, Node.js, Express, JS, MongoDB, Firebase and Data.Yes.
So then we are going to have a war experience.So in the experience we will be having two different things.
At the left side, we are going to have the period and the selected period information will be shown
at the right side.So here you can see I'm going to select the 2018 to 19 period.
So in this period I'm a freelancer, that means self employed and here is some sample description.
And in 2020 to present, I am a web development instructor in the company Udemy and some small description
and 2021 to present.I worked as React developer in the tech company and also some small description.
So then after we will be having our projects showcase.
So here also we are going to have the same UX, so project title and information.
So whenever you click on any other project, the information will be changed.Here you can see like this.
After the projects, we are going to have the courses.
So this is optional for you because I'm a web developer instructor, so I'll be having the courses to
display in my portfolio.That's the reason I have added this.
So I have some courses like React Development Course Back End Course, HTML, CSS, bootstrap, full
stack, web development like that.Then after I'm going to have the contact section.
So if anyone liked my portfolio and if they want to contact me, I have my contact details in an object.
So name, gender, age, email, mobile and address.And at the right side we are going to have some small animation about the contact.And last but not the least, we are going to have our favorite thing designed and developed by and the
developer by name.So this is the sample portfolio.So nothing new in this.
Now I have a simple question for you.
So after publishing this portfolio, I have changed my email address.So how to update that in my portfolio?
In normal scenarios, how we will do we will go to our code base, we will update the portfolio phone
number and we will redeploy it.
But now let's see how I'm going to update my email address.So here, I'm just going to copy this domain and I'll put it here and here.I'm going to have admin log in so my portfolio will be having the admin.
So now I'm going to log in with my credentials.Log in, log in successfully.
So this is the portfolio admin panel.
So here we can control the entire portfolio.So our task is to update the email address.Now let's go and update that.
So I'll go to the contact section.So here I have the email address.So instead of Saathi Prakash one nine FI, I'm going to make it.Satya Prakash One, two, three at gmail.com.I'm going to save it.
Contact updated successfully now if I refresh here.
You can see my email address got updated successfully.Now I have one more task, so I want to add a new project into my portfolio.How you will do in the normal scenarios.Again, you will go to your React code base.You will add a new project and you will redeploy it.Now let me show you how I will do.
So projects add project and going to add the project title has to do list and I'm going to copy oneto do list image URL.He may just.The lost image.So I'll just copy this image.Image Address Description.Newly added.Link?
Nothing.I am not going to add the link technologies.
Also, I'll just write JavaScript and react.Add your you can see project added successfully.
Now let me go and refresh.Here.You can see I got the new project into my portfolio.
Here you can see to do list.So, like, this way we can control the entire portfolio.
Not only adding, we can also edit all the things.
Suppose if I want to display only my first name, I don't want to display my complete name.
So what I'll do, I'll go to my intro here.
I have my first name.Here I have my last name.
So instead of Satya Prakash, I'm going to write.
Yes, yay, yay.That's all.Now I'm going to save it.Let's refresh here.
You can see my name got updated successfully.
As I said, we can control everything.
So if you see we have intro section about section experiences, projects, courses, contact.
So if you want to update any experience information, you can edit like this.
If you want to update any project information you can edit and you can also delete.
Suppose I want to delete my to do list project that we have added now.
So here we can see we have this to do list project.
Right now I'm going to the projects and I'll delete that.
Project deleted successfully if I refresh.There is no total list here.
So like this way you can have the complete control about your portfolio in the admin panel.
So this is about the Mon stack portfolio application.
So right now we are having only the functionality of the portfolio in the admin panel.
So in the future we are going to control the styling also in the admin panel itself.
So here you can see we are having four different colors.
So this is the primary, this is the secondary, this is the tertiary and why it is the normal so we
can control all these colors from the dynamic admin portal also.
So this will be in the next release.
So right now we are going to have only functional things in the admin portal and this application is
completely responsive.So even if you open in the mobile view, there won't be any issues.
So here you can see everything will be fine even in the mobile view also.So that's all guys.
This is about the most dynamic portfolio application.
So the prerequisites for this application is you must have some basic knowledge in the React and tailwind
cases, even if you don't have any knowledge about the Node.js.

## Commands

-   Client build
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: [
"./src/**/\*.{js,jsx,ts,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}
/_ Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file. _/
@tailwind base;
@tailwind components;
@tailwind utilities;

### Colors

-   Only 3 colors used
    "primary": "#0A192F",
    "secondary": "#F97316",
    "tertiary": "#54D6BB",
-
-

### Additional Links needed for Building this app

1. From Lottiefiles.com paste in index.html
 <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

2. [Tailwind Breakponits](https://tailwindcss.com/docs/screens).
