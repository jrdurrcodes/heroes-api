const con = require('../../config/dbconfig')

const speciesDao = {
    table: 'species',
    ...require('../daoCommon'),
    findHeroesBySpecies: (res, table, species ) => {
        con.query( 
                        `SELECT h.hero_id, h.hero_name, h.first_name,
                        h.last_name, h.alias, f.franchise, s.species, h.place_of_origin, h.first_app, h.alignment, h.img_url
                        FROM hero h
                        JOIN franchise f USING (franchise_id)
                        JOIN species s USING (species_id)
                        where f.franchise = '${species}'
                        ORDER BY h.hero_name, ;`,
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

module.exports = speciesDao