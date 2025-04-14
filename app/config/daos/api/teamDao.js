const con = require('../../config/dbconfig')

const teamDao = {
    table: 'team',
    ...require('../daoCommon'),
    findHeroesByTeam: (res, table, team) => {
        con.query( 
                        `SELECT h.hero_id, h.hero_name, h.first_name,
                        h.last_name, h.alias, f.franchise, s.species, h.place_of_origin, h.first_app, h.alignment, h.img_url
                        FROM hero h
                        JOIN franchise f USING (franchise_id)
                        JOIN species s USING (species_id)
                        JOIN hero_to_team ht on h.hero_id =ht.hero_id
                        JOIN team t ON ht.team_id = t.team_id
                        where t.team = '${team}'
                        ORDER BY t.team_name, ;`,
                        (error, rows => {
                            if (!error) {
                                if(!rows.length === 1) {
                                res.json(...rows)
                                } else {
                                    res.json(rows)
                                }
                                } else {
                                    console.log(`dao error: ${table}`, error)
                                }
                            })
                        )
    }
}

module.exports = teamDao
