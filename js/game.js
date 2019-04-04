// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "",
    background_image:"",
    levels: {

        start: {
            color: "#e699ff",
            message: "Drake",
            choices: [
                {
                    text: "Start here",
                    nextLevel: "second",
                },
            ]
        },

        second: {
            color:"#aa7710",
            message: "As you planned to meet your friends, you see Drake in the train. What do you do?",
            choices: [
                {
                    text: "Take a pic and go on to meet your friends",
                    nextLevel: "open",
                    
                },
                {
                    text: "Ditch your friends and hang out with Drake",
                    nextLevel: "leave",
                },
            ]
        },

        open: {
            color:"#aa7710",
            message: "Kudos for you being a good friend :)",
            choices: [
                { 
                    text: "Yay!",
                    nextLevel: "three",
                },
            ]
        },
        
        leave: {
            color:"#585858",
            message: "You are such a fake friend that they left you. At least, you were with Drake",
            choices: [
                {
                    text: "Damn",
                    nextLevel: "three",
                },
            ]
        },
        
        three: {
            color:"#1a75ff",
            message: "You made plans with Drake for a date. Where do you want to go?",
            choices: [
                {
                    text: "Amusement Park",
                    nextLevel: "quick",
                    
                },
                
                {
                    text: "Stay in and have a movie night",
                    nextLevel: "long",
                    
                },
            ]
        },
        
        quick: {
            color:"#4d94ff",
            message: "You had a great time and he won you a teddy bear. Cheers to having a good first date :)",
            choices: [
                {
                    text: "Good for you",
                    nextLevel: "four",
                    
                },
                
            ]
        },
        
        long: {
            color:"#505050",
            message: "Ya had a great time and he wants to see you again ;)",
            choices: [
                {
                    text: "Boy, now thats just crazy",
                    nextLevel: "four",
                },
                
            ]
        },
        
        four: {
            color:"#ff4d4d",
            message: "However, your ex wants to get back with you. What do you do?",
            choices: [
                {
                    text: "Take him back",
                    nextLevel: "take",
                    
                },
                
                {
                    text: "Tell him that you are seeing someone",
                    nextLevel: "seeing",
                    
                },
                
            ]
        },
        
        take: {
            color:"#484848",
            message: "Its all good, but you feel guilty leaving Drake. Your time with Drake is over",
            choices: [
                {
                    text: ":(",
                    nextLevel: "start",
                },
                
            ]
        },
        
        seeing: {
            color:"#ff3333",
            message: "You do you girl! At least you got Drake :)",
            choices: [
                {
                    text: ";)",
                    nextLevel: "start",
                },
                
            ]
        },
        
        
    }
};