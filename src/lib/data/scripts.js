
function battle(room) {

    const players = [];
    let player_turn = 0;

    const addPlayer = user => {

        if (players.some(player => player.user === user)) {
            return;
        }
    
        players.push({user})

    }

    const nextTurn = async () => {

        const player = players[player_turn];
        player_turn = ++player_turn % players.length;

        getCard(player);
        

    }
    
}