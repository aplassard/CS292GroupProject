function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
  }
  return s4() + s4() + s4() + s4();
}

var randomNamesLoadDatabase = function()
{
	var names = "Elizabeth Casey, Marianne Moreno, Wilfred Dixon, Phil Hunter, Terry Mills, Brent Santos, Sharon Howell, Julia Higgins, Opal Morrison, Sheri Austin, Cary Colon, Roberto Daniels, Harvey Chandler, Jake Wilkins, Josh Garcia, Casey Snyder, Ralph Ray, Monica Gardner, Belinda Hanson, Gina Elliott, Melba Wright, Aubrey Fisher, Noah Jennings, Stanley Burgess, Dianne Payne, Glenn Garner, Alberto Tran, Rickey Griffith, Doug Stewart, Dana Shelton, Casey Peters, Shelley Anderson, Lucy Huff, Eva Potter, Ollie Bridges, Helen Day, Alexis Rodgers, Hector Roberts, Courtney Bryan, Mario Byrd, Marjorie Love, Pete Coleman, Marvin Cooper, Gregg Houston, Milton Mccoy, Theresa Owen, Patti Maldonado, Kristopher Newman, Gloria Boone, Lydia Barber, Mable Glover, Nellie Miles, Marcus Matthews, Inez Singleton, Lela Mccormick, Clarence Bryant, Carolyn Benson, Wade May, Ernest Abbott, Hugo Collier, Cecilia Wade, Clay Guzman, Shannon Mckenzie, Wilbur Brooks, Crystal Rios, Rene Reid, Jennifer Vaughn, Lillie Buchanan, Heather Murphy, Caleb Hill, Isabel Marshall, Jacob Johnston, Jeremy Evans, Christian Francis, Olga Wise, Linda Tucker, Rosa Klein, Carlton Weaver, Jamie Carlson, Rafael Clayton, Sally Hardy, Eula Hogan, Carmen Riley, Archie Franklin, Tyler Adkins, Amber Mathis, Ian Soto, Lisa Fernandez, Jon Myers, Oscar Black, Arnold Jensen, Randal Fox, Rodney Craig, Austin Freeman, Regina Pope, Sophia Fuller, Tammy Morgan, Valerie Edwards, Owen Drake, Melody Ball, Michelle Hubbard, Geoffrey Horton, Thomas Santiago, Wendell Carlson, Olivia Taylor, Harriet Bryan, Omar Houston, Jonathan Flores, Felicia Henry, Terence Fleming, Faye Zimmerman, Zachary Cunningham, Bessie Poole, Vicki Cross, Jamie Mccormick, Frances George, Austin Watkins, Brent Gregory, Darryl Phelps, Philip Vasquez, Percy Quinn, Clinton Bryant, Ian Wade, Sharon Price, Kay Hill, Maureen Burton, Monica Simmons, Erin Henderson, Benny Owen, Jaime Oliver, Devin Black, Teresa Torres, Sonja Wells, Clara Montgomery, Annette Mclaughlin, Sophia Pratt, Leland Wallace, Rhonda Ellis, Rachael Newman, Eleanor Mcbride, Hector Norris, Tonya Figueroa, Meredith Norton, Juana Cannon, Byron Harper, Sammy Bailey, Anna Patterson, Dwayne Sanchez, Amber Ross, Wayne Porter, Jenny Estrada, Andrea Powell, Santiago Roy, Arlene Day, Tamara Stevens, Jeannette Curry, Marian Nash, Donna King, Toni Garner, Arnold Powers, Garrett Barker, Carroll Richardson, Kristine Doyle, James Tran, Essie Warner, Deanna Knight, Nicole Cruz, Shari Sims, Elijah Cummings, Sherri Moreno, Maggie Barnes, Jeanne Kelly, Edith Ferguson, Myra Steele, Oliver Aguilar, Jan Mendez, Doreen Lawrence, Oscar Elliott, Kerry Newton, Leo Wong, Janet Erickson, Terrance Cain, Harold Robinson, Taylor Ball, Felipe Obrien, Sylvia Buchanan, Bertha Barrett, Marta Cortez, Arthur Watts, Olive Richards, Denise Becker, Michele Morton, Marlon Delgado, Jose Russell, Rodolfo Soto, Rex Lane, Nadine Douglas, Ismael Mills, Darrel Ryan, Renee Vega, Merissa Horne, Odelia Cosgrove, Lonnie Blackman, Karena Provost, Bailey Vanburen, Maurice Malloy, Berenice Van, Juliann Kane, Twila Mojica, Heriberto Canty, Lasonya Berube, Hae Minnick, Anamaria Tilton, Luetta Harrell, Dannie Kruse, Andrea Belanger, Liz Toney, Ned Boggs, Lachelle Karr, Trista Stitt, Bud Douglass, Corrina Elkins, Susy Peacock, Cathleen Oshea, Roxie Echevarria, Lacy Dietz, Jazmin Whitehurst, Shavonda Horsley, Brice Hatchett, Rickie Stearns, Shirely Justice, Arica Pulliam, Lynwood Gillen, Penni Spellman, Lottie Coon, Jordan Fusco, Lavona Perales, Margarete Yoo, Sofia Schulze, Cher Spaulding, Dionna Covey, Thi Horn, Yahaira Huntley, Malika Foy, Lewis Gorham, Charley Florez, Henriette Montero, Donovan Ruby, Pricilla Bernier, Joane Dellinger, Rossie Bergeron, Ria Isaacs, Fidelia Barrows, Johna Runyon, Crysta Pickering, Anderson Vines, Hulda Godfrey, Deane Rosa, Hollie Lawler, Laquanda Boothe, Briana Mayes, Jewel Causey, Dione Gillespie, Royce Waugh, Moriah Hannon, Delicia Grigsby, Anabel Morin, Doreatha Bryson, Stephane Pacheco, Blythe Roller, Will Covert, Jarod Cormier, Angla Collado, Iola Norfleet, Aimee Sides, Patria Bui, Florrie Zapata, Zoila Coy, Willette Barrera, Aleta Atherton, Floretta Burge, Sherika Breedlove, Christene York, Whitley Burley, Lia Thorn, Filomena Cloud, Nada Spradlin, Martina Barkley, Cyndy Billingsley, Enoch Roper, Earline Baggett, Daron Laflamme, Timothy Griffiths, Walton Barnhart, Ling Woodson, Kai Ho, Jarvis Steadman, Man Wofford, Jayna Goode, Shery Millard";
  names = names.split(", ");
  
	var skills = "Perl/Python/Ruby, Statistical analysis and data mining, User interface design, Digital and online marketing, Recruiting, Business development/relationship management, Retail payment and information systems, Business intelligence, Data engineering and data warehousing, Web programming, Algorithm design, Database management and software, Computer graphics and animation, C/C++, Middleware and integration software, Java development, Software QA and user testing, PR and communications, Software engineering management, Information security, Strategy and strategic planning, Storage systems and management, Social Media Marketing, Mobile Development, Cloud and Distributed Computing, SQL, NoSQL, Technical writing, Agile development, Big data analytics";
	skills = skills.split(", ");
	
	var interests = "action figures, action movies, adventure games, adventure movies, alchemy, Alice in Wonderland, aliens, alternative music, ancient China, ancient Egypt, ancient Greece, ancient Rome, angsty romantic heroes, anthropology, anthropomorphic animals, ants, archaeology, archery, architecture, Arthurian lore, astronomy, bad movies, baking, ballet, ballroom dancing, baseball, basketball, bats, beautiful space babes, bees, beetles, birdhouses, birdwatching, blogging, body-building, botany, bowling, bowties, breakdancing, butterflies, Byronic heroes, calligraphy, camping, candle-making, candy-making, card games, carpentry, cars, cartoons about spunky young adventurers, cat people, cats, centaurs, character shipping, checkers, cheerleading, chemistry, chess, chickens, chick flicks, chocolate, classical music, classical theater, climbing, clocks, clownfish, clowns, coffee, coffee mugs, comic books, console RPGs, conspiracy theories, contemporary weaponry, cop shows, cosmetology, cosplaying, country music, cowboys, cryptozoology, crystal balls, crystals, cupcakes, cute woodland animals, cuttlefish, dashing space heroes, dinosaurs, diplomacy, documentaries about extinct animals, dodgeball, dogs, dolls, dolphins, dragons, drama movies, drama serials, drawing, economics, eldritch abominations, elephants, elves, environmentalism, extravagant period clothes, fairies, fairy tales, fantasy movies, fantasy novels, fashion, ferrets, fighter jets, film noir, finance, fishing, flashy pop singers, flower-arranging, flying saucers, folklore, fossils, foxes, frogs, fortune-telling, fungi, games involving the capture and training of fantastic critters, gangster movies, gardening, genies, geology, giant robotic suits, glam rock, glassware, goats, goldfish, gothic liturature, griffins, guinea pigs, the guitar, gymnastics, hairstyling, hamsters, hand fans, hedgehogs, herbalism, hiking, history documentaries, horror films, horror novels, horses, hot air balloons, hunting, iguanas, indie music, interior decorating, jack o'lanterns, jazz music, jewelry, jewelry-making, jump-rope, justice, knitting, knives, lamps, law, lions, live-action roleplaying, lizards, llamas, lost civilizations, magic, magical girls, magic tricks, magic wands, magnifying glasses, making clothes, maps, martial arts, martial arts movies, mathematics, medical science, Medieval art, Medieval history, Medieval music, Medieval weaponry, merpeople, metalworking, meteorology, mice, mittens, MMORPGs, monster movies, modern art, motorcycles, movies about animals, musicals, mustaches, mystery movies, mystery novels, nature documentaries, neckties, needlepoint, nifty hats, ninjas, obscure trivia, oceanography, octopi, old castles, old computer games, old sailing ships, online roleplaying, opera, origami, owls, padlocks, painting, paleontolgy, parakeets, parrots, Peter Pan, philosophy, photography, the piano, pigeons, pictures of animals with humorous captions, pirates, planes, planning for the zombie apocalypse, playing pranks, plucky old lady detectives, plush animals, pocket watches, poetry, politics, pool, pop music, pop stars, porcelain plates, porcelain sculptures, postage stamps, pottery, preparing for the downfall of civilization, proper etiquette, puns, puppets, puzzles, puzzle games, pyrotechnics, quilts, rabbits, race cars, radios, rap music, rats, Renaissance art, Renaissance history, Renaissance music, robotics, rock music, rocks, romance movies, romance novels, rougish space captains, rubber stamps, rugged action heroes, rugs, sailboats, sandcastles, sasquatches, the saxophone, scarves, science fiction movies, science fiction novels, scientific apparatus, sculpting, sea monsters, seashells, sewing, Shakespeare, sharks, sheep, Sherlock Holmes, shoes, shoujo anime, shoujo manga, shounen anime, shounen manga, skating, skeletons, skiing, sledding, smithing, snails, snakes, social justice, space exploration, space operas, spiders, spinning tops, sports played by magical-type people, spunky time-travelers, squid, stained glass art, stories about plucky young magic-users, strategy games, superheroes, surfing, swashbuckling adventure heroes, swimming, swordfighting, tabletop roleplaying, tea, tea sets, techno music, teddy bears, telescopes, television comedies, television mystery shows, theater, theology, tigers, toads, tomes of obscure knowledge, topiaries, trains, travel, treasure hunting, Treasure Island, trolling online, trucks, turtles, umbrellas, unicorns, vampires, the violin, volcanoes, vinyl records, war memorabilia, war strategy, web design, werewolves, western movies, western novels, whales, wind chimes, witty blond vampire hunters, the Wizard of Oz, wizards, wolves, woodworking, writing fanfiction, yo-yos, zombie films, zoology";
	interests = interests.split(", ");
	
	//var userServices = '"services": { "password": { "srp": { "identity": "Za9samDpr4TpZn3d5", "salt": "oMeMX5sqqTkGs8EYG", "verifier": "a7e42a4479e5d20c1b857aa92a1c2caf7c2a9978d4ddd5681d4d03f894bdeaa94f7812a93f2d1213707ab586b1197fa3c55d99a1443aca3d64c3a1b3c67490e756a6918372b590cac601d8ebee09a5077388463f95df8692c7dfdd68831f30671f4e07fec584d3330855a937bd40aa4b3901e63c5f63bc8b8733ba1fa25ef33f" } }, "resume": { "loginTokens": [] } }';
	//var userCreatedAt = '"createdAt": { "$date": 1398103075026 }';
	
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
			 userSkills.push('"' +  skills[j] + '"');
		}
		
		var numInterests = Math.floor(Math.random(n)*4);
		var userInterests = [];
		var userInterestIndices = [];
		for (var i = 0; i < numInterests; i++)
		{
			 var j = Math.floor(Math.random()*interests.length);
			 if (_.contains(userInterestIndices, j)) { continue; }
			 userInterestIndices.push(j);
			 userInterests.push('"' +  interests[j] + '"');
		}

		var nameTokens = names[n].split(" ");
		var userUsername = nameTokens[0][0] + nameTokens[1];
    var userProfile = {name: names[n], skills: userSkills, interests: userInterests};

		//users[n] = {id: guid(), username: userUsername.toLowerCase(), name: names[n], skills: userSkills, interests: userInterests, services: userServices, createdAt: userCreatedAt };
    Accounts.createUser({username: userUsername.toLowerCase(), password: 'password', profile: userProfile});
	}
}

Meteor.startup(function() {
  if (Meteor.users.find().count() === 0) {
    randomNamesLoadDatabase();
  }
});