# GitHub User Repo Search

#### _This is an application which lists out information about a certain GitHub user's Public GitHub Repositories. October 14, 2016_

#### By _**Stephen Burden**_

## Specifications
| Behavior | Input Ex. | Output Ex. |
| --- | --- | --- |
| Search for a User and display their all their Public Repository Names  | "daneden"  |  Repo Name: eloquent-js |
| Search for a User and display their all their Public Repository Descriptions   | "daneden"  | Description: My playground for going through the exercises in the book “Eloquent JavaScript” |
| Display if user does not exist | "1a2s3d"  | 1a2s3d was not found! Try Again! |
| Display if user does not have any Public Repositories | "qwerty"  | qwerty does not have any Public Repositories yet! |
| Display a message if the user does not have a description of one of their Public Repositories | "daneden"  | Repo Name: processing-rotator, Date created: Monday Oct 10th 2016 |
| Display the creation date of user's Public Repositories | "daneden"  | Repo Name: processing-rotator, No Description |
| Display user's GitHub Avatar | "daneden"  | An image of daneden's avatar |
| Display user's Full Name if available | "daneden"  | Daniel A. Steffen |
| Display number of Followers user has | "daneden"  | 3235 |
| Display number of users the user Follows | "daneden"  | 86 |

## Setup/Installation Requirements
* _Clone the repository from the link below to your desktop_
* _From the project directory enter the following commands in Terminal to install the required dependencies: "npm install", followed by: "bower install"_
* _In the project directory and create a .env file containing: exports.apiKey = "";_
* _If you have a GitHub API key insert it between the quotes._
   * _Limited access: Only 60 requests allowed per hour without a key_
* _To view webpage: from the project directory enter the command: "gulp serve"_

## Link
https://github.com/spburden/github-user-lookup

## Known Bugs
_There are no known bugs with this application._

## Support and contact details
_spburden@hotmail.com_

## Technologies Used
_JavaScript, JQuery, Node, Bower, Gulp, Sass, Moment, HTML, CSS, and Bootstrap_

### License
The MIT License (MIT)

Copyright (c) 2016 **_Stephen Burden_**
