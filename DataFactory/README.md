# DataFactory
## Install packages
## npm i csv-parser request fs


## Objective
Data migration from old Drupal DB to current System database, We will export the data in csv format-all data that is requred to day create any content using the current create API, then using the Same Create API data should go into the artinfo database in Mongodb. Purpose is to enhance the csv so that input becomes exactly as expected by the API and the JS data feeder can push the data, While injecting the data we can either switchoff the authentication or we can hardcode.

First of all, Modify the CSV and make it to have all data then using the script we need to load the data.


_To add the data in CSV files to the mongo database using Scripts_

### Step 1:

- Start Admin Panel using nodemon
- Start Redis Server

### Step 2:

- Do `npm install` in the DataFactoy folder to install the dependencies to be used by the Scripts

### Step 3:

- To seed the Article data from the articlecsv.csv folder run the command `node articlecsvfeed.js`
- To seed the artist data from the artistcsv.csv folder run the command `node artistcsvfeed.js`
- To seed the artwork data from the artwork.csv folder run the command `node artworkfeed.js`
- To seed the entity data from the entity.csv folder run the command `node entityfeed.js`
- To seed the events data from the events.csv folder run the command `node eventfeed.js`
