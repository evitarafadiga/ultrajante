export const classChart = {
    fire: {
		boost: {
            Fire: 0,
            Water: 0,
            Flora: 1,
			Witch: 1,
			King: 1,
			Virus: 1,
            Tormented: 0,
		}
    },
    water: {
        boost: {
            Fire: 1,
            Water: 0,
            Flora: 0,
			Witch: 1,
			King: 0,
			Virus: 0,
            Tormented: 0,
        }
    },
    king: {
        boost: {
            Fire: 0,
            Water: 0,
            Flora: 0,
			Witch: 1,
			King: 0,
			Virus: 0,
            Tormented: 0,
        }
    },
    witch: {
        boost: {
            Fire: 0,
            Water: 0,
            Flora: 0,
			Witch: 1,
			King: 0,
			Virus: 0,
            Tormented: 1,
        }
    },
    virus: {
        boost: {
            Fire: 0,
            Water: 0,
            Flora: 0,
			Witch: 2, //dano-nulo
			King: 1,
			Virus: 0,
            Tormented: 0,
        }
    },
    tormented: {
        boost: {
            Fire: 0,
            Water: 0,
            Flora: 0,
			Witch: 0,
			King: 1,
			Virus: 0,
            Tormented: 0,
        }
    },
    flora: {
        boost: {
            Fire: 0,
            Water: 1,
            Flora: 0,
			Witch: 0,
			King: 0,
			Virus: 0,
            Tormented: 1,
        }
    }
}