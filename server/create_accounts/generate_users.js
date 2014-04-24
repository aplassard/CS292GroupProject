var randomNamesLoadDatabase = function()
{
  var names = "Elizabeth Casey, Marianne Moreno, Wilfred Dixon, Phil Hunter, Terry Mills, Brent Santos, Sharon Howell, Julia Higgins, Opal Morrison, Sheri Austin, Cary Colon, Roberto Daniels, Harvey Chandler, Jake Wilkins, Josh Garcia, Casey Snyder, Ralph Ray, Monica Gardner, Belinda Hanson, Gina Elliott, Melba Wright, Aubrey Fisher, Noah Jennings, Stanley Burgess, Dianne Payne, Glenn Garner, Alberto Tran, Rickey Griffith, Doug Stewart, Dana Shelton, Casey Peters, Shelley Anderson, Lucy Huff, Eva Potter, Ollie Bridges, Helen Day, Alexis Rodgers, Hector Roberts, Courtney Bryan, Mario Byrd, Marjorie Love, Pete Coleman, Marvin Cooper, Gregg Houston, Milton Mccoy, Theresa Owen, Patti Maldonado, Kristopher Newman, Gloria Boone, Lydia Barber, Mable Glover, Nellie Miles, Marcus Matthews, Inez Singleton, Lela Mccormick, Darren Bryant, Carolyn Benson, Wade May, Ernest Abbott, Hugo Collier, Cecilia Wade, Clay Guzman, Shannon Mckenzie, Wilbur Brooks, Crystal Rios, Rene Reid, Jennifer Vaughn, Lillie Buchanan, Heather Murphy, Caleb Hill, Isabel Marshall, Jacob Johnston, Jeremy Evans, Christian Francis, Olga Wise, Linda Tucker, Rosa Klein, Carlton Weaver, Jamie Carlson, Rafael Clayton, Sally Hardy, Eula Hogan, Carmen Riley, Archie Franklin, Tyler Adkins, Amber Mathis, Ian Soto, Lisa Fernandez, Jon Myers, Oscar Black, Arnold Jensen, Randal Fox, Rodney Craig, Austin Freeman, Regina Pope, Sophia Fuller, Tammy Morgan, Valerie Edwards, Owen Drake, Melody Ball, Michelle Hubbard, Geoffrey Horton, Thomas Santiago, Wendell Carlson, Olivia Taylor, Harriet Bryan, Omar Houston, Jonathan Flores, Felicia Henry, Terence Fleming, Faye Zimmerman, Zachary Cunningham, Bessie Poole, Vicki Cross, Jamie Mccormick, Frances George, Austin Watkins, Brent Gregory, Darryl Phelps, Philip Vasquez, Percy Quinn, Clinton Bryant, Ian Wade, Sharon Price, Kay Hill, Maureen Burton, Monica Simmons, Erin Henderson, Benny Owen, Jaime Oliver, Devin Black, Teresa Torres, Sonja Wells, Clara Montgomery, Annette Mclaughlin, Sophia Pratt, Leland Wallace, Rhonda Ellis, Rachael Newman, Eleanor Mcbride, Hector Norris, Tonya Figueroa, Meredith Norton, Juana Cannon, Byron Harper, Sammy Bailey, Anna Patterson, Dwayne Sanchez, Amber Ross, Wayne Porter, Jenny Estrada, Andrea Powell, Santiago Roy, Arlene Day, Tamara Stevens, Jeannette Curry, Marian Nash, Donna King, Toni Garner, Arnold Powers, Garrett Barker, Carroll Richardson, Kristine Doyle, James Tran, Essie Warner, Deanna Knight, Nicole Cruz, Shari Sims, Elijah Cummings, Sherri Moreno, Maggie Barnes, Jeanne Kelly, Edith Ferguson, Myra Steele, Oliver Aguilar, Jan Mendez, Doreen Lawrence, Oscar Elliott, Kerry Newton, Leo Wong, Janet Erickson, Terrance Cain, Harold Robinson, Taylor Ball, Felipe Obrien, Sylvia Buchanan, Bertha Barrett, Marta Cortez, Arthur Watts, Olive Richards, Denise Becker, Michele Morton, Marlon Delgado, Jose Russell, Rodolfo Soto, Rex Lane, Nadine Douglas, Ismael Mills, Darrel Ryan, Renee Vega, Merissa Horne, Odelia Cosgrove, Lonnie Blackman, Karena Provost, Bailey Vanburen, Maurice Malloy, Berenice Van, Juliann Kane, Twila Mojica, Heriberto Canty, Lasonya Berube, Hae Minnick, Anamaria Tilton, Luetta Harrell, Dannie Kruse, Andrea Belanger, Liz Toney, Ned Boggs, Lachelle Karr, Trista Stitt, Bud Douglass, Corrina Elkins, Susy Peacock, Cathleen Oshea, Roxie Echevarria, Lacy Dietz, Jazmin Whitehurst, Shavonda Horsley, Brice Hatchett, Rickie Stearns, Shirely Justice, Arica Pulliam, Lynwood Gillen, Penni Spellman, Lottie Coon, Jordan Fusco, Lavona Perales, Margarete Yoo, Sofia Schulze, Cher Spaulding, Dionna Covey, Thi Horn, Yahaira Huntley, Malika Foy, Lewis Gorham, Charley Florez, Henriette Montero, Donovan Ruby, Pricilla Bernier, Joane Dellinger, Rossie Bergeron, Ria Isaacs, Fidelia Barrows, Johna Runyon, Crysta Pickering, Anderson Vines, Hulda Godfrey, Deane Rosa, Hollie Lawler, Laquanda Boothe, Briana Mayes, Jewel Causey, Dione Gillespie, Royce Waugh, Moriah Hannon, Delicia Grigsby, Anabel Morin, Doreatha Bryson, Stephane Pacheco, Blythe Roller, Will Covert, Jarod Cormier, Angla Collado, Iola Norfleet, Aimee Sides, Patria Bui, Florrie Zapata, Zoila Coy, Willette Barrera, Aleta Atherton, Floretta Burge, Sherika Breedlove, Christene York, Whitley Burley, Lia Thorn, Filomena Cloud, Nada Spradlin, Martina Barkley, Cyndy Billingsley, Enoch Roper, Earline Baggett, Daron Laflamme, Timothy Griffiths, Walton Barnhart, Ling Woodson, Kai Ho, Jarvis Steadman, Man Wofford, Jayna Goode, Shery Millard";
  names = names.split(", ");

  var skills = "Perl/Python/Ruby, Statistical analysis and data mining, User interface design, Digital and online marketing, Recruiting, Business development/relationship management, Retail payment and information systems, Business intelligence, Data engineering and data warehousing, Web programming, Algorithm design, Database management and software, Computer graphics and animation, C/C++, Middleware and integration software, Java development, Software QA and user testing, PR and communications, Software engineering management, Information security, Strategy and strategic planning, Storage systems and management, Social Media Marketing, Mobile Development, Cloud and Distributed Computing, SQL, NoSQL, Technical writing, Agile development, Big data analytics";
  skills = skills.split(", ");
  
  var interests = "action figures, action movies, adventure games, adventure movies, alchemy, Alice in Wonderland, aliens, alternative music, ancient China, ancient Egypt, ancient Greece, ancient Rome, angsty romantic heroes, anthropology, anthropomorphic animals, ants, archaeology, archery, architecture, Arthurian lore, astronomy, bad movies, baking, ballet, ballroom dancing, baseball, basketball, bats, beautiful space babes, bees, beetles, birdhouses, birdwatching, blogging, body-building, botany, bowling, bowties, breakdancing, butterflies, Byronic heroes, calligraphy, camping, candle-making, candy-making, card games, carpentry, cars, cartoons about spunky young adventurers, cat people, cats, centaurs, character shipping, checkers, cheerleading, chemistry, chess, chickens, chick flicks, chocolate, classical music, classical theater, climbing, clocks, clownfish, clowns, coffee, coffee mugs, comic books, console RPGs, conspiracy theories, contemporary weaponry, cop shows, cosmetology, cosplaying, country music, cowboys, cryptozoology, crystal balls, crystals, cupcakes, cute woodland animals, cuttlefish, dashing space heroes, dinosaurs, diplomacy, documentaries about extinct animals, dodgeball, dogs, dolls, dolphins, dragons, drama movies, drama serials, drawing, economics, eldritch abominations, elephants, elves, environmentalism, extravagant period clothes, fairies, fairy tales, fantasy movies, fantasy novels, fashion, ferrets, fighter jets, film noir, finance, fishing, flashy pop singers, flower-arranging, flying saucers, folklore, fossils, foxes, frogs, fortune-telling, fungi, games involving the capture and training of fantastic critters, gangster movies, gardening, genies, geology, giant robotic suits, glam rock, glassware, goats, goldfish, gothic liturature, griffins, guinea pigs, the guitar, gymnastics, hairstyling, hamsters, hand fans, hedgehogs, herbalism, hiking, history documentaries, horror films, horror novels, horses, hot air balloons, hunting, iguanas, indie music, interior decorating, jack o'lanterns, jazz music, jewelry, jewelry-making, jump-rope, justice, knitting, knives, lamps, law, lions, live-action roleplaying, lizards, llamas, lost civilizations, magic, magical girls, magic tricks, magic wands, magnifying glasses, making clothes, maps, martial arts, martial arts movies, mathematics, medical science, Medieval art, Medieval history, Medieval music, Medieval weaponry, merpeople, metalworking, meteorology, mice, mittens, MMORPGs, monster movies, modern art, motorcycles, movies about animals, musicals, mustaches, mystery movies, mystery novels, nature documentaries, neckties, needlepoint, nifty hats, ninjas, obscure trivia, oceanography, octopi, old castles, old computer games, old sailing ships, online roleplaying, opera, origami, owls, padlocks, painting, paleontolgy, parakeets, parrots, Peter Pan, philosophy, photography, the piano, pigeons, pictures of animals with humorous captions, pirates, planes, planning for the zombie apocalypse, playing pranks, plucky old lady detectives, plush animals, pocket watches, poetry, politics, pool, pop music, pop stars, porcelain plates, porcelain sculptures, postage stamps, pottery, preparing for the downfall of civilization, proper etiquette, puns, puppets, puzzles, puzzle games, pyrotechnics, quilts, rabbits, race cars, radios, rap music, rats, Renaissance art, Renaissance history, Renaissance music, robotics, rock music, rocks, romance movies, romance novels, rougish space captains, rubber stamps, rugged action heroes, rugs, sailboats, sandcastles, sasquatches, the saxophone, scarves, science fiction movies, science fiction novels, scientific apparatus, sculpting, sea monsters, seashells, sewing, Shakespeare, sharks, sheep, Sherlock Holmes, shoes, shoujo anime, shoujo manga, shounen anime, shounen manga, skating, skeletons, skiing, sledding, smithing, snails, snakes, social justice, space exploration, space operas, spiders, spinning tops, sports played by magical-type people, spunky time-travelers, squid, stained glass art, stories about plucky young magic-users, strategy games, superheroes, surfing, swashbuckling adventure heroes, swimming, swordfighting, tabletop roleplaying, tea, tea sets, techno music, teddy bears, telescopes, television comedies, television mystery shows, theater, theology, tigers, toads, tomes of obscure knowledge, topiaries, trains, travel, treasure hunting, Treasure Island, trolling online, trucks, turtles, umbrellas, unicorns, vampires, the violin, volcanoes, vinyl records, war memorabilia, war strategy, web design, werewolves, western movies, western novels, whales, wind chimes, witty blond vampire hunters, the Wizard of Oz, wizards, wolves, woodworking, writing fanfiction, yo-yos, zombie films, zoology";
  interests = interests.split(", ");

  var titles = "Computational Theory Scientist, Computer Scientist, Control System Computer Scientist, Programming Methodology and Languages Researcher, Applications Analyst, Computer Systems Analyst, Computer Systems Consultant, Data Processing Systems Analyst, Information Systems Analyst, Information Systems Planner, Programmer Analyst, Systems Architect, Computer Security Specialist, Computer Systems Security Analyst, Information Security Analyst, Information Systems Security Analyst, Internet Security Specialist, Network Security Analyst, Internet Application Developer, Internet Developer, Intranet Developer, Web Content Developer, Web Designer, Web Developer, Automatic Data Processing Planner, Database Administration Manager, Database Coordinator, Database Management System Specialist, Database Security Administrator, DBMS Specialist, Algebraist, Cipher Expert, Cryptanalyst, Cryptographer, Cryptographic Vulnerability Analyst, Geometrician, Mathematician, Analytical Statistician, Applied Statistician, Biometrician, Biostatistician, Environmental Statistician, Mathematical Statistician, Research Biostatistician, Sampling Expert, Statistical Analyst, Statistical Reporting Analyst, Statistician, Survey Statistician, Time Study Statistician";
  titles = titles.split(", ");

  var companies = "Vanderbilt University, Vanderbilt University Medical Center, VU, VUMC";
  companies = companies.split(", ");

  var users = [];
  for(var n in names)
  {
    var numSkills = 3+Math.floor(Math.random(n)*8);
    var userSkills = [];
    var userSkillIndices = [];
    for (var i = 0; i < numSkills; i++)
    {
      var j = Math.floor(Math.random()*skills.length);
      if (_.contains(userSkillIndices, j)) { continue; }
      userSkillIndices.push(j);
      userSkills.push(skills[j]);
    }

    var numInterests = Math.floor(Math.random(n)*4);
    var userInterests = [];
    var userInterestIndices = [];
    for (var i = 0; i < numInterests; i++)
    {
      var j = Math.floor(Math.random()*interests.length);
      if (_.contains(userInterestIndices, j)) { continue; }
      userInterestIndices.push(j);
      userInterests.push(interests[j]);
    }
    
    var randomTitle = titles[Math.floor(Math.random()*titles.length)];
    var randomCompany = companies[Math.floor(Math.random()*companies.length)];

    var nameTokens = names[n].split(" ");
    var userUsername = nameTokens[0][0] + nameTokens[1];
    var userProfile =
    {
      name: names[n],
      skills: userSkills,
      interests: userInterests,
      title: randomTitle,
      company: randomCompany,
      collaborations: [],
      ownedProjects: [],
      completed: true
    };

    Accounts.createUser({username: userUsername.toLowerCase(), password: 'password', profile: userProfile});
  }
}

var randomProjectLoadDatabase = function()
{
  var projects =
  [
    [ "PostgresApp", "The easiest way to get started with PostgreSQL on the Mac", "Computer graphics and animation,Web programming,Cloud and Distributed Computing,Database management and software,Recruiting" ],
    [ "Adaptive-Images", "Automatically adapts your existing HTML images for mobile devices. No mark-up changes needed.", "Algorithm design,Cloud and Distributed Computing,Big data analytics,Java development,C/C++,Recruiting" ],
    [ "jquery.avgrund.js", "Avgrund is a jQuery plugin with new modal concept for popups", "Technical writing,Software engineering management,Recruiting,Storage systems and management,C/C++,Strategy and strategic planning,Middleware and integration software" ],
    [ "ListViewAnimations", "An Android library which allows developers to easily add animations to ListView items", "Computer graphics and animation,Data engineering and data warehousing,Retail payment and information systems,Mobile Development,Java development,Web programming,Business intelligence" ],
    [ "TPKeyboardAvoiding", "A drop-in universal solution for moving text fields out of the way of the keyboard in iOS", "Computer graphics and animation,Perl/Python/Ruby,User interface design,Storage systems and management" ],
    [ "as3corelib", " An ActionScript 3 Library that contains a number of classes and utilities for working with ActionScript? 3. These include classes for MD5 and SHA 1 hashing, Image encoders, and JSON serialization as well as general String, Number and Date APIs.", "Business development/relationship management,Information security,Retail payment and information systems,Strategy and strategic planning,Big data analytics,Recruiting,Java development" ],
    [ "amdjs-api", "Houses the Asynchronous Module Definition API", "Recruiting,Middleware and integration software,User interface design,Data engineering and data warehousing,Software QA and user testing" ],
    [ "mobile-chrome-apps", "Chrome apps on Android and iOS", "Business intelligence,Storage systems and management,Technical writing,Database management and software,Big data analytics,PR and communications" ],
    [ "Custom-Metaboxes-and-Fields-for-WordPress", "Lets you easily create metaboxes with custom fields that will blow your mind.   ", "Java development,Retail payment and information systems,Agile development,Software engineering management,Computer graphics and animation" ],
    [ "coursera-android", "Source Code for Android Course Example Applications", "Data engineering and data warehousing,Cloud and Distributed Computing,C/C++,Recruiting,Social Media Marketing,Web programming,Storage systems and management" ],
    [ "android-swipelistview", "An Android List View implementation with support for drawable cells and many other swipe related features", "Digital and online marketing,Perl/Python/Ruby,SQL,Social Media Marketing,Web programming" ],
    [ "bootstrap-application-wizard", "", "NoSQL,Data engineering and data warehousing,Storage systems and management,Database management and software,Java development" ],
    [ "assemble", "Static site generator for Node.js, Grunt.js, and Yeoman (and soon, Gulp). Used by Zurb Foundation, Zurb Ink, H5BP/Effeckt, Less.js / lesscss.org, Topcoat, Web Experience Toolkit, and hundreds of other projects to build sites, themes, components, documentation, blogs and gh-pages. Pull requests welcome, stars appreciated!", "Business intelligence,Data engineering and data warehousing,Technical writing,PR and communications,User interface design,Middleware and integration software,Agile development" ],
    [ "awesome_nested_set", "An awesome replacement for acts_as_nested_set and better_nested_set.", "Technical writing,Algorithm design,Business development/relationship management,Big data analytics,Web programming,Retail payment and information systems,Middleware and integration software" ],
    [ "asgard", "Web interface for application deployments and cloud management in Amazon Web Services (AWS). Binary download: http://netflix.box.com/asgard Snapshot builds: https://netflixoss.ci.cloudbees.com/job/asgard-master/ Twitter: http://twitter.com/AsgardOSS", "Computer graphics and animation,Perl/Python/Ruby,Strategy and strategic planning,Database management and software,Mobile Development" ],
    [ "jQuery-Animate-Enhanced", "Extend $.animate() to detect CSS transitions for Webkit, Mozilla, IE>=10 and Opera and convert animations automatically.", "Technical writing,Cloud and Distributed Computing,Recruiting,Software engineering management,C/C++,Algorithm design" ],
    [ "google-api-nodejs-client", "Google's officially supported Node.js client library for accessing Google APIs, it comes with OAuth 2.0 support.", "Software engineering management,Mobile Development,Digital and online marketing,User interface design,Web programming,Retail payment and information systems" ],
    [ "FuzzyAutocompletePlugin", "A Xcode 5 plugin that adds more flexible autocompletion rather than just prefix-matching.", "Database management and software,Java development,Software engineering management,NoSQL,C/C++,Storage systems and management,Algorithm design" ],
    [ "aasm", "AASM - State machines for Ruby classes (plain Ruby, Rails Active Record, Mongoid)", "Database management and software,Software QA and user testing,Cloud and Distributed Computing,Perl/Python/Ruby" ],
    [ "Avgrund", "A JS/CSS3 modal UI concept", "Data engineering and data warehousing,Software engineering management,Java development,Information security" ],
    [ "aws-sdk-ruby", "The official AWS SDK for Ruby.", "NoSQL,Storage systems and management,Software QA and user testing,Business intelligence" ],
    [ "annotate_models", "Annotate ActiveRecord models as a gem", "User interface design,Technical writing,Social Media Marketing,Storage systems and management,Software engineering management" ],
    [ "ajenti", "Ajenti - the web admin panel everyone wants.", "C/C++,Big data analytics,NoSQL,Technical writing,Cloud and Distributed Computing,Retail payment and information systems,Algorithm design" ],
    [ "BlockAlertsAnd-ActionSheets", "Beautifully done UIAlertView and UIActionSheet replacements inspired by TweetBot", "Social Media Marketing,Web programming,Mobile Development,Software engineering management,Strategy and strategic planning,Technical writing,Java development" ],
    [ "TheAmazingAudioEngine", "Core Audio, Cordially: A sophisticated framework for iOS audio applications, built so you don't have to.", "Social Media Marketing,Mobile Development,Perl/Python/Ruby,Algorithm design,PR and communications,Technical writing,Computer graphics and animation" ],
    [ "appscale", "The Open Source Implementation of Google App Engine -- Take your apps everywhere.", "SQL,PR and communications,Recruiting,Statistical analysis and data mining,Database management and software" ],
    [ "app-UI", "app-UI is a collection of user interface components that may be helpful to web and mobile developers for creating interactive applications using HTML and JavaScript, especially those targeting mobile devices.  app-UI is a continual work in progress - it was born out of the necessity to have rich & native-feeling interfaces in HTML/JS experiences, and it works great with PhoneGap applications (http://www.phonegap.com).  app-UI can easily be styled/customized using CSS.", "Database management and software,Algorithm design,Statistical analysis and data mining,Data engineering and data warehousing" ],
    [ "public_activity", "Easy activity tracking for models - similar to Github's Public Activity", "Big data analytics,Business intelligence,Agile development,Strategy and strategic planning,Perl/Python/Ruby,Database management and software,Social Media Marketing" ],
    [ "androidquery", "AndroidQuery", "Perl/Python/Ruby,User interface design,Data engineering and data warehousing,Database management and software,NoSQL,Technical writing,Retail payment and information systems" ],
    [ "angular-translate", "i18n in your Angular apps, made easy.", "Technical writing,Software engineering management,Retail payment and information systems,SQL,Business intelligence,Algorithm design" ],
    [ "android-actionbar", "Android Action Bar Implementation", "Software QA and user testing,Business development/relationship management,Agile development,Retail payment and information systems,Big data analytics,Algorithm design,NoSQL" ],
    [ "python-for-android", "Turn your python application to an Android APK - Build your own python and extension", "Storage systems and management,Software engineering management,NoSQL,C/C++" ],
    [ "CodeIgniter-Ion-Auth", "Simple and Lightweight Auth System for CodeIgniter", "Software engineering management,Retail payment and information systems,Social Media Marketing,Recruiting,Java development,Digital and online marketing,Statistical analysis and data mining" ],
    [ "async-http-client", "Asynchronous Http and WebSocket Client library for Java ", "Agile development,Java development,Database management and software,C/C++,Algorithm design,Digital and online marketing" ],
    [ "acra", "Application Crash Reports for Android", "Data engineering and data warehousing,Statistical analysis and data mining,Mobile Development,Information security" ],
    [ "node-apn", "Apple Push Notification module for Node.js", "Web programming,Java development,Statistical analysis and data mining,Storage systems and management,Business development/relationship management,Retail payment and information systems,Computer graphics and animation" ],
    [ "declarative_authorization", "An authorization Rails plugin using a declarative DSL for specifying authorization rules in one place", "NoSQL,Information security,Perl/Python/Ruby,Agile development,PR and communications,Business development/relationship management" ],
    [ "autosize", "jQuery plugin for dynamic textarea sizing", "Strategy and strategic planning,Data engineering and data warehousing,Computer graphics and animation,Business development/relationship management" ],
    [ "django-allauth", "Integrated set of Django applications addressing authentication, registration, account management as well as 3rd party (social) account authentication.  Visit http://jug.gl for a live demo ...", "Agile development,Algorithm design,Cloud and Distributed Computing,C/C++" ],
    [ "android-viewflow", "A horizontal view scroller library for Android", "Retail payment and information systems,Computer graphics and animation,Agile development,Technical writing,Strategy and strategic planning,Software QA and user testing" ],
    [ "AndroidSlidingUpPanel", "Android Sliding Up Panel Demo", "Business intelligence,Technical writing,Algorithm design,SQL,Business development/relationship management,Database management and software" ],
    [ "amplify", "AmplifyJS", "NoSQL,Big data analytics,PR and communications,Recruiting,C/C++" ],
    [ "algorithms", "Useful algorithms and data structures for Ruby. Optional C extensions.", "Software engineering management,Retail payment and information systems,Recruiting,Technical writing,Business development/relationship management" ],
    [ "vagrant-aws", "Use Vagrant to manage your EC2 and VPC instances.", "Database management and software,PR and communications,NoSQL,Perl/Python/Ruby,Software engineering management,Business development/relationship management" ],
    [ "arrow", "Better dates & times for Python", "Social Media Marketing,Mobile Development,Java development,Strategy and strategic planning,Cloud and Distributed Computing,Digital and online marketing,Business development/relationship management" ],
    [ "FadingActionBar", "Android library implementing a fading effect for the action bar, similar to the one found in the Play Music app", "NoSQL,Data engineering and data warehousing,Statistical analysis and data mining,Technical writing,Software QA and user testing,Perl/Python/Ruby,SQL" ],
    [ "ZendSkeletonApplication", "Sample application skeleton using the ZF2 MVC layer", "Storage systems and management,Agile development,Social Media Marketing,Cloud and Distributed Computing,Java development" ],
    [ "asset_sync", "Synchronises Assets between Rails and S3", "C/C++,NoSQL,Statistical analysis and data mining,Information security" ],
    [ "NineOldAndroids", "Android library for using the Honeycomb animation API on all versions of the platform back to 1.0!", "Storage systems and management,PR and communications,Mobile Development,Agile development,NoSQL,Statistical analysis and data mining" ],
    [ "AnythingSlider", "A jQuery Slider plugin for anything.", "User interface design,Software engineering management,Mobile Development,C/C++" ],
    [ "angularjs-batarang", "AngularJS WebInspector Extension for Chrome", "Web programming,Cloud and Distributed Computing,Database management and software,Big data analytics,Mobile Development,Data engineering and data warehousing,Technical writing" ],
    [ "AudioStreamer", "A streaming audio player class (AudioStreamer) for Mac OS X and iPhone.", "PR and communications,Computer graphics and animation,Big data analytics,Java development,Web programming,Social Media Marketing" ],
    [ "anima", "CSS animations with a soul", "Data engineering and data warehousing,Agile development,Recruiting,Software QA and user testing,Cloud and Distributed Computing,Algorithm design" ],
    [ "git-achievements", "Aquire achievements while using git.", "Software QA and user testing,Digital and online marketing,Computer graphics and animation,NoSQL,Database management and software,Mobile Development" ],
    [ "api-spec", "App.net API Documentation is on the web at https://developers.app.net. Source for these docs is in the new-docs branch here. Please use the issue tracker and submit pull requests! Help us build the real-time social service where users and developers come first, not advertisers.", "C/C++,Information security,Digital and online marketing,Java development,Mobile Development,Technical writing" ]
  ];

  var users = Meteor.users.find().fetch();

  var projectBriefs = [];
  var projectOwnersById = {};
  for(var i in projects)
  {
    var project = projects[i];
    var projectId = Random.id();
    var projectName = project[0];
    var projectDescription = project[1];
    var projectKeywords = project[2].split(",");
    var projectBrief = { '_id': projectId, 'name': projectName };
    projectBriefs.push(projectBrief);

    var numOwners = Math.random() > 0.8 ? 2 : 1;
    var projectOwners = [];
    for(var j=0; j < numOwners; ++j)
    {
      var randomUser = users[Math.floor(Math.random()*users.length)];
      Meteor.users.update({_id: randomUser._id}, {$push: {"profile.ownedProjects": projectBrief}});
      //console.log(randomUser.profile.name + " owns " + projectName);
      projectOwners.push({_id: randomUser._id, name: randomUser.profile.name});
      if (j==0) projectOwnersById[projectId] = [randomUser._id];
      else projectOwnersById[projectId].push(randomUser._id);
    }

    Meteor.call('createProject',
    {
      _id: projectId,
      name: projectName,
      description: projectDescription,
      owners: projectOwners,
      members: [],
      keywords: projectKeywords
    });
  }
  
  for(var i in users)
  {
    var user = users[i];
    var numCollaborations = Math.floor(Math.random()*10);
    var collaborations = [];
    for(var j=0; j < numCollaborations; ++j)
    {
      var randomProject = projectBriefs[Math.floor(Math.random()*projectBriefs.length)];
      if (_.contains(collaborations, randomProject._id) ||
          _.findWhere(projectOwnersById[randomProject._id], {'_id': user._id}))
        continue;
      Meteor.users.update({_id: user._id}, {$push: {"profile.collaborations": randomProject}});
      Projects.update({_id: randomProject._id}, {$push: {"members": {'_id': user._id, 'name': user.profile.name}}});
      //console.log(user.profile.name + " is in " + randomProject.name);
      collaborations.push(randomProject._id);
    }
  }
  
  // for each project, add every user in that project as a contact for every other user in that project
  for(var i in projectBriefs)
  {
    var project = Projects.findOne(projectBriefs[i]._id, {fields: {"_id": 1, "owners": 1, "members": 1}});
    var users = project.owners.concat(project.members);
    for(var j in users)
    {
      for(var k in users)
      {
        if (j==k) continue;
        Meteor.users.update(users[j]._id, {$addToSet: {"profile.contacts": {_id: users[k]._id, name: users[k].name}}});
      }
    }
  }
}

Meteor.startup(function() {
  if (Meteor.users.find().count() === 0)
    randomNamesLoadDatabase();
  if (Projects.find().count() === 0)
    randomProjectLoadDatabase();
});
