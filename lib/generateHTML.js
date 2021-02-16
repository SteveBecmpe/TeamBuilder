
function generateHtmlfile(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>Statics TeamBuilder</title>
    </head>
    
    <body>
        <h1>My Team!</h1>
        <div class="Divmain">
            <div class="Divcard">
                <h2 class="HeadSub"> Steve Black </h2>
                <h3 class="HeadSubSub"> Manager </h3>
                <div class="DivSub">
                    ID: 1
                </div>
                <div class="DivSubEmail">
                    Email: <a href="mailto:SteveBlackecmpe@gmail.com">SteveBlackecmpe@gmail.com</a>
                </div>
                <div class="DivSubEmail"> Office Number: 231.629.2266</div>
            </div>
            <div class="Divcard">
                <h2 class="HeadSub"> Steve Black </h2>
                <h3 class="HeadSubSub"> Engineer </h3>
                <div class="DivSub">
                    ID: 2
                </div>
                <div class="DivSubEmail">
                    Email: <a href="mailto:SteveBlackecmpe@gmail.com">SteveBlackecmpe@gmail.com</a>
                </div>
                <div class="DivSub"> GitHub:<a href="https://github.com/SteveBecmpe">SteveBlackecmpe</a></div>
            </div>
            <div class="Divcard">
                <h2 class="HeadSub"> Steve Black </h2>
                <h3 class="HeadSubSub"> Engineer </h3>
                <div class="DivSub">
                    ID: 3
                </div>
                <div class="DivSubEmail">
                    Email: <a href="mailto:SteveBlackecmpe@gmail.com">SteveBlackecmpe@gmail.com</a>
                </div>
                <div class="DivSub"> GitHub:<a href="https://github.com/SteveBecmpe">SteveBlackecmpe</a></div>
            </div>
            <div class="Divcard">
                <h2 class="HeadSub"> Steve Black </h2>
                <h3 class="HeadSubSub"> Engineer </h3>
                <div class="DivSub">
                    ID: 4
                </div>
                <div class="DivSubEmail">
                    Email: <a href="mailto:SteveBlackecmpe@gmail.com">SteveBlackecmpe@gmail.com</a>
                </div>
                <div class="DivSub"> GitHub:<a href="https://github.com/SteveBecmpe">SteveBlackecmpe</a></div>
            </div>
            <div class="Divcard">
                <h2 class="HeadSub"> Steve Black </h2>
                <h3 class="HeadSubSub"> Intern </h3>
                <div class="DivSub">
                    ID: 5
                </div>
                <div class="DivSubEmail">
                    Email: <a href="mailto:SteveBlackecmpe@gmail.com">SteveBlackecmpe@gmail.com</a>
                </div>
                <div class="DivSub"> School: MTU</div>
            </div>
        </div>
    </body>
    
    </html>`;
}
module.exports = generateHtmlfile;
