const bodyBackground = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}

setInterval(()=>{document.body.style.backgroundColor = bodyBackground();}, 10000);

const button = document.querySelector('#button');

const runGame = (e) =>{
    const game = document.querySelector('#game');
        const tablo = document.querySelector('#tablo');
            const title = document.querySelector('#title');

    if(e.target.innerText == "Start Game"){
        game.classList.toggle("opacity");
            title.classList.toggle("opacity");
                tablo.classList.toggle("hideDiv");
    }else{
        title.classList.toggle("opacity");
            tablo.classList.toggle("hideDiv");
                document.querySelector("#column-top").addEventListener("click", handleClick);
                    removeDivsPiece();
    }
}

button.addEventListener("click", (e)=> {runGame(e)});

