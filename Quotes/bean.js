let data = [
    {
        name: 'Son Goku:',
        quote: 'Power comes in response to need, not a desire. You have to create that need.'
    },
    {
        name: 'CJ (GTA SA):',
        quote: 'See you around, officer'
    },
    {
        name: 'Monkey D. Luffy:',
        quote: 'I will become the King of the Pirates!'
    },
    {
        name: 'Frank West:',
        quote: "I've covered wars you know"
    },
    {
        name: 'Stan Lee:',
        quote: 'With great power, comes great responsibility!'
    },
    {
        name: 'Ichiban Kasuga:',
        quote: "Everyone's carrying some kinda burden. It's just easier when you got someone to talk to."
    },
    {
        name: 'Brittle Bones Nicky:',
        quote: "If it cost me my life, man, I'd save my only friend That's something I could live with I could take that 'til the end."
    },
    {
        name:'Phillip J. Fry:',
        quote: 'Shut up and take my money!'
    }
];

const info= document.querySelector('#info')

let details = data.map(function(item) {
    return '<div>' + item.name + ' '  + item.quote + '' + '</div>';
});

info.innerHTML = details.join("\n")