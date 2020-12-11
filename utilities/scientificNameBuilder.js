const knex = require("../DAL/connection");
const logger = require("./logger");

scientificNameBuilder = async () => {
    // method should only work on localhost
    if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "AWS") {
        nonHybridBuilder = (row) => {
            try {
                // NO DATA in hybrid_x, NO DATA in kybrid_alt_species
                // genus + species + "subsp." + subspecies + "var" + variety + cultivar
                let name = "";
                let nameUnformatted = "";
                if (row.genus) {
                    let genus = row.genus.charAt(0).toUpperCase() + row.genus.slice(1);
                    name += `<em>${genus}</em> `;
                    nameUnformatted += `${genus} `;
                }
                if (row.species) {
                    let species = row.species.toLowerCase();
                    name += `<em>${species}</em> `;
                    nameUnformatted += `${species} `;
                }
                if (row.subspecies) {
                    let subspecies = row.subspecies.toLowerCase();
                    name += `subsp. <em>${subspecies}</em> `;
                    nameUnformatted += `subsp. ${subspecies} `;
                }
                if (row.variety) {
                    let variety = row.variety.toLowerCase();
                    name += `var. <em>${variety}</em> `;
                    nameUnformatted += `var. ${variety} `;
                }
                if (row.cultivar) {
                    let cultivar = row.cultivar.charAt(0) + row.cultivar.slice(1);
                    name += `${cultivar}`;
                    nameUnformatted += `${cultivar}`;
                }

                return { name: name.trim(), nameUnformatted: nameUnformatted.trim() };
            } catch (err) {
                logger.error(`utilities.scientificNameBuilder.nonHybridBuilder : ${err}`);
                return false;
            }
        }

        hybridPrimaryBuilder = (row) => {
            try {
                // Data in hybrid_x, NO DATA in hybrid_alt_species
                // genus + species + "subsp." + subspecies + "var" + variety + cultivar. In addition, the html code &times should be placed BEFORE the column named in hybrid_x. hybrid_x is one of several column names. &times never goes before genus
                let name = "";
                let nameUnformatted = "";
                const hx = `${row.hybrid_x}`;
                if (row.genus) {
                    let genus = row.genus.charAt(0).toUpperCase() + row.genus.slice(1);
                    if (hx === 'genus') {
                        name += `&times <em>${genus}</em> `;
                        nameUnformatted += `x ${genus} `;
                    } else {
                        name += `<em>${genus}</em> `;
                        nameUnformatted += `${genus} `;
                    }

                }
                if (row.species) {
                    let species = row.species.toLowerCase();
                    if (hx === 'species') {
                        name += `&times <em>${species}</em> `;
                        nameUnformatted += `x ${species} `;
                    } else {
                        name += `<em>${species}</em> `;
                        nameUnformatted += `${species} `;
                    }

                }
                if (row.subspecies) {
                    let subspecies = row.subspecies.toLowerCase();
                    name += `subsp. <em>${subspecies}<em> `;
                    nameUnformatted += `subsp. ${subspecies} `;
                }
                if (row.variety) {
                    let variety = row.variety.toLowerCase();
                    name += `var. <em>${variety}</em> `;
                    nameUnformatted += `var. ${variety} `;
                }
                if (row.cultivar) {
                    let cultivar = row.cultivar.charAt(0) + row.cultivar.slice(1);
                    if (hx === 'cultivar') {
                        name += `&times '${cultivar}'`;
                        nameUnformatted += `x '${cultivar}'`;
                    } else {
                        name += `'${cultivar}'`;
                        nameUnformatted += `'${cultivar}'`;
                    }
                }

                return { name: name.trim(), nameUnformatted: nameUnformatted.trim() };
            } catch (err) {
                logger.error(`utilities.scientificNameBuilder.hybridPrimaryBuilder: ${err}`);
                return false;
            }
        }

        hybridAltBuilder = (row) => {
            try {
                // NO DATA in hybrid_x IS data in hybrid_alt_species
                // genus + species + &times + hybrid_alt_species + "subsp." + subspecies + "var" + variety + cultivar 
                let name = "";
                let nameUnformatted = "";
                if (row.genus) {
                    let genus = row.genus.charAt(0).toUpperCase() + row.genus.slice(1);
                    name += `<em>${genus}</em> `;
                    nameUnformatted += `${genus} `;
                }
                if (row.species) {
                    let species = row.species.toLowerCase();
                    name += `<em>${species}</em> `;
                    nameUnformatted += `${species} `;
                }
                if (row.hybrid_alt_species) {
                    let hybrid_alt_species = row.hybrid_alt_species.toLowerCase();
                    name += `&times <em>${hybrid_alt_species}</em>`;
                    nameUnformatted += `x ${hybrid_alt_species} `;
                }
                if (row.subspecies) {
                    let subspecies = row.subspecies.toLowerCase();
                    name += `subsp. <em>${subspecies}</em>  `;
                    nameUnformatted += `subsp. ${subspecies} `;
                }
                if (row.variety) {
                    let variety = row.variety.toLowerCase();
                    name += `var. <em>${variety}</em> `;
                    nameUnformatted += `var. ${variety} `;
                }
                if (row.cultivar) {
                    let cultivar = row.cultivar.charAt(0) + row.cultivar.slice(1);
                    name += `'${cultivar}'`
                    nameUnformatted += `'${cultivar}'`;
                }
                return { name: name.trim(), nameUnformatted: nameUnformatted.trim() };
            } catch (err) {
                logger.error(`utilities.scientificNameBuilder.hybridAltBuilder: ${err}`);
                return false;
            }
        }

        // iterates through entire taxon table and builds scientific names for each entry
        updateTaxon = async () => {
            try {
                let taxonData = await knex.select('*')
                    .from('taxon')
                    .then(async data => {
                        if (data) {
                            let response = [];
                            data = JSON.parse(JSON.stringify(data));
                            for (let row of data) {
                                let nameString = "";
                                let nameUnformatted = "";
                                if (!row.hybrid_x && !row.hybrid_alt_species) {
                                    nameString = nonHybridBuilder(row).name;
                                    nameUnformatted = nonHybridBuilder(row).nameUnformatted;
                                    // update name_concat field of taxon table for this id
                                    const update = await knex('taxon').where({ taxon_id: row.taxon_id }).update({ 'name_concat': nameString, 'name_unformatted': nameUnformatted })
                                        .then(result => {
                                            //   logger.info(result);
                                        })
                                        .catch(err => {
                                            logger.error(`utiltiies.scientificNameBuilder.base: ${err}`);
                                        })
                                    response.push(nameString);
                                } else if (row.hybrid_x && !row.hybrid_alt_species) {
                                    nameString = hybridPrimaryBuilder(row).name;
                                    nameUnformatted = hybridPrimaryBuilder(row).nameUnformatted;
                                    // update name_concat field of taxon table for this id
                                    const update = await knex('taxon').where({ taxon_id: row.taxon_id }).update({ 'name_concat': nameString, 'name_unformatted': nameUnformatted })
                                        .then(result => {
                                            //logger.info(result);
                                        })
                                        .catch(err => {
                                            logger.error(`utiltiies.scientificNameBuilder.base: ${err}`);
                                        })
                                    response.push(nameString);
                                } else if (!row.hybrid_x && row.hybrid_alt_species) {
                                    nameString = hybridAltBuilder(row).name;
                                    nameUnformatted = hybridAltBuilder(row).nameUnformatted;
                                    // update name_concat field of taxon table for this id
                                    const update = await knex('taxon').where({ taxon_id: row.taxon_id }).update({ 'name_concat': nameString, 'name_unformatted': nameUnformatted })
                                        .then(result => {
                                            //   logger.info(result);
                                        })
                                        .catch(err => {
                                            logger.error(`utiltiies.scientificNameBuilder.base: ${err}`);
                                        })
                                    response.push(nameString);
                                }

                                else {
                                    response.push(nameString);
                                }
                            }
                            return response;
                        } else {
                            throw new Error('no data found');
                        }
                    });

                return taxonData;
            } catch (err) {
                if (err) {
                    logger.error(`utilities.scientificNameBuilder: ${err}`);
                    return false;
                }


            }
        }

        return updateTaxon();
    } else {
        return;
    }
}

module.exports = scientificNameBuilder;