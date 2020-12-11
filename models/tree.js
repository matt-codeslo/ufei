const knex = require("../DAL/connection");
const logger = require("../utilities/logger");

exports.fetchById = async (id) => {
  try {
    const result = await knex("tree").where({
      tree_id: id,
    });
    return result;
  } catch (err) {
    logger.error(`models.tree.fetchById: ${err}`);
  }
};

exports.fetchAll = async () => {
  try {
    const result = await knex("tree");
    return result;
  } catch (err) {
    logger.error(`models.tree.fetchAll: ${err}`);
  }
};

exports.updateById = async (id, updateObj) => {
  try {
    // TODO
    return false;
  } catch (err) {
    logger.error(`model.tree.updateById: ${err}`);
    return false;
  }
};

exports.deleteById = async (id) => {
  try {
    const d = await knex("tree").where({ tree_id: id }).del();
    return d;
  } catch (err) {
    logger.error(`models.tree.deleteById: ${err}`);
    return false;
  }
};

exports.getTreeIdByName = async (treeName) => {
  try {
    // let t = treeName.split('-').join(' ');
    let t = treeName;
    const data = await knex('tree')
      .select('tree.tree_id')
      .where('tree.scientific_name', '=', t);
    return data;
  } catch (err) {
    logger.error(`model.tree.getTreeIdByName: ${err}`);
    return false;
  }

}

exports.searchByName = async (searchString) => {
  const result = await knex.raw(
    `select t.tree_id, taxon.name_concat,c.common,c.sequence
    from tree t
    join common c on t.tree_id = c.tree_id 
    join generic_common gc on t.tree_id = gc.tree_id 
    join taxon on taxon.tree_id = t.tree_id 
    where(taxon.genus like '${searchString}%' and t.pacific_island = 1 and c.sequence =1 and taxon.sequence = 1)
    or(taxon.species like '${searchString}%' and t.pacific_island = 1 and c.sequence =1 and taxon.sequence = 1)
    or(taxon.subspecies like '${searchString}%' and t.pacific_island = 1 and c.sequence =1 and taxon.sequence = 1)
    or(taxon.variety like '${searchString}%' and t.pacific_island = 1 and c.sequence =1 and taxon.sequence = 1)
    or(taxon.cultivar like "'${searchString}%" and t.pacific_island = 1 and c.sequence =1 and taxon.sequence = 1)
    or(c.common like '${searchString}%' and t.pacific_island = 1 and c.sequence =1 and taxon.sequence = 1)
    or(gc.generic like '${searchString}%' and t.pacific_island = 1 and c.sequence =1 and taxon.sequence = 1)
    limit 10`
  ).catch(err => {
    logger.error(`model.tree.searchByName: ${err}`);
    return false;
  });

  return result;
}

exports.getIdArrayBySearchString = async (searchString) => {
  searchString = searchString.toLowerCase();
  const result = await knex.raw(
    `select distinct t.tree_id
    from tree t
    join common c on t.tree_id = c.tree_id 
    join generic_common gc on t.tree_id = gc.tree_id 
    join taxon on taxon.tree_id = t.tree_id 
    where(taxon.genus like '${searchString}%' and t.pacific_island = 1)
    or(taxon.species like '${searchString}%' and t.pacific_island = 1)
    or(taxon.subspecies like '${searchString}%' and t.pacific_island = 1)
    or(taxon.variety like '${searchString}%' and t.pacific_island = 1)
    or(taxon.cultivar like "'${searchString}%" and t.pacific_island = 1)
    or(c.common like '%${searchString}%' and t.pacific_island = 1)
    or(gc.generic like '${searchString}%' and t.pacific_island = 1)
    or(taxon.name_unformatted like '%${searchString}%' and t.pacific_island = 1)
    or(t.family like '${searchString}%' and t.pacific_island = 1)`
  )
    .then(data => {
      return data[0];
    })
    .then(arr => {
      let idArray = [];
      arr.forEach(t => idArray.push(t.tree_id));
      return idArray;
    })
    .catch(err => {
      logger.error(`model.tree.getIdArrayBySearchString: ${err}`);
      return false;
    });

  return result;
}

exports.getPrimaryTreeSuggestions = async (idArray) => {
  const result = await knex.select('tree.tree_id', 'common.common', 'taxon.name_concat', 'tree.family', 'taxon.sequence')
    .from('tree')
    .join('common', 'common.tree_id', '=', 'tree.tree_id')
    .join('taxon', 'taxon.tree_id', '=', 'tree.tree_id')
    .whereIn('tree.tree_id', idArray)
    .orderBy('taxon.sequence')
    .catch(err => {
      logger.error(`models.tree.getPrimaryTreeSuggestions: ${err}`);
      return false;
    })

  return result;
}

exports.getScientificName = async (treeId) => {
  // TODO - build better scientific name from taxon table with UFEI input
  return knex.select('tree.scientific_name')
    .from('tree')
    .where('tree.tree_id', '=', treeId)
    .catch(err => {
      logger.error(`models.tree.getScientificName: ${err}`);
      return false;
    });
}


exports.getFamilyName = async (treeId) => {
  const familyName = await knex.select('tree.family')
    .from('tree')
    .where('tree_id', '=', treeId)
    .catch(err => {
      logger.error(`models.tree.getFamilyName: ${err}`);
      return false;
    })

  return familyName;
}

exports.getGeneralInfo = async (treeId) => {
  const generalInfo = await knex.select('memo', 'fragrance', 'native_range')
    .from('tree')
    .where('tree_id', '=', treeId)
    .catch(err => {
      logger.error(`models.tree.getGeneralInfo: ${err}`);
      return false;
    });

  return generalInfo;
}

exports.getSiteConditions = async (treeId) => {
  const siteConditions = await knex.select('tree.exposure_low', 'tree.exposure_high', 'tree.soil_ph_low', 'tree.soil_ph_high')
    .from('tree')
    .where('tree.tree_id', '=', treeId)
    .catch(err => {
      logger.error(`models.tree.getSiteConditions: ${err}`);
      return false;
    });

  return siteConditions;
}

