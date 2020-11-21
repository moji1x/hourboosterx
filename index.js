var steamClientFactory = require('./steamClient.js');
    var configsArray = [];
    var config;
    var botArray = [];
    
    config = {};
    config.username = '';
    config.password = '';
    config.sharedSecret = ''; //Shared Secret(for 2FA only) https://github.com/Jessecar96/SteamDesktopAuthenticator/releases
    config.games = [730,365450,441870,444090,479130,550650,302590,582890,611500,222880,304930,654310,893520,544920,578080,823130,391720,391720,3830,55150,211050,7510,981300,]
    configsArray.push(config);

    console.log('Number of configurations set up: ' + configsArray.length);
     
    for	(index = 0; index < configsArray.length; index++) {
    	var config = configsArray[index];
		
		var bot = steamClientFactory.buildBot(config);
		bot.doLogin();
		botArray.push(bot);
    }
     
    console.log('Running ' + botArray.length + ' bots.');