const knex = require("../DAL/connection");
const logger = require("../utilities/logger");
const treeUtiliites = require("../utilities/treeUtilities");
// models
const treeModel = require("../models/tree");
const commonModel = require("../models/common");
const taxonModel = require("../models/taxon");
const photoLinkModel = require("../models/photo_link");
const soilTextureModel = require("../models/soil_texture");
const sunsetZoneModel = require("../models/sunset_zones");
const salinityToleranceModel = require("../models/salinity_tolerance");
const drModel = require("../models/disease_resistant");
const dsModel = require("../models/disease_susceptibility");

exports.getTreeDetails = async (treeId) => {
    try {
        const commonName = await commonModel.getCommonName(treeId)
            .then(response => {
                if (response && response[0].common) {
                    return response[0].common;
                } else {
                    return null;

                }
            })
        const scientificName = await taxonModel.getScientificName(treeId)
            .then(response => {
                if (response && response[0].name_concat) {
                    return response[0].name_concat;
                } else {
                    return null;

                }
            });

        const synonyms = await taxonModel.getSynonyms(treeId)
            .then(response => {
                if (response) {
                    return response;
                } else {
                    return null;
                }
            });

        const otherCommonNames = await commonModel.getOtherCommonNames(treeId)
            .then(response => {
                if (response) {
                    return response;
                } else {
                    return null;
                }
            });

        const familyName = await treeModel.getFamilyName(treeId)
            .then(response => {
                if (response.length && response[0].family) {
                    return response[0].family;
                } else {
                    return null;
                }
            });

        const images = await photoLinkModel.getImageLinksByTreeId(treeId)
            .then(response => {
                if (response) {
                    return response;
                } else {
                    return null;
                }
            });

        const generalInfo = await treeModel.getGeneralInfo(treeId)
            .then(response => {
                if (response) {
                    return response[0];
                } else {
                    return null;
                }
            });

        const genus = await taxonModel.getGenus(treeId)
            .then(response => {
                if (response) {
                    return response[0].genus;
                } else {
                    return null;
                }
            });

        const siteConditions = await treeModel.getSiteConditions(treeId)
            .then(response => {
                if (response) {
                    if (response.length === 0) {
                        return [];
                    } else {
                        let r = response[0];
                        if (r.exposure_low) {
                            r.exposure_low = treeUtiliites.exposureTranslator(r.exposure_low);
                        }

                        if (r.exposure_high) {
                            r.exposure_high = treeUtiliites.exposureTranslator(r.exposure_high);
                        }

                        if (r.soil_ph_low) {
                            r.soil_ph_low = treeUtiliites.phTranslator(r.soil_ph_low);
                        }

                        if (r.soil_ph_high) {
                            r.soil_ph_high = treeUtiliites.phTranslator(r.soil_ph_high);
                        }

                        return r;
                    }

                } else {
                    return null;
                }
            });

        const sunsetZones = await sunsetZoneModel.getSunsetZonesByTreeId(treeId)
            .then(response => {
                if (response) {
                    return treeUtiliites.sunsetZoneFormatter(treeUtiliites.propertyArrayFlattener(response, 'sunset_zone'));
                } else {
                    return null;
                }
            });

        const soilTextures = await soilTextureModel.getSoilTexturesByTreeId(treeId)
            .then(response => {
                if (response) {
                    return treeUtiliites.propertyArrayFlattener(response, 'soil_texture');
                } else {
                    return null;
                }
            });

        const salinityTolerance = await salinityToleranceModel.getSalinityToleranceByTreeId(treeId)
            .then(response => {
                if (response) {
                    return treeUtiliites.propertyArrayFlattener(response, 'salinity_tolerance');
                } else {
                    return null;
                }
            });

        const pestAndDiseaseInfo = {};

        const diseaseResistant = await drModel.getDrByTreeId(treeId)
            .then(response => {
                if (response) {
                    return treeUtiliites.propertyArrayFlattener(response, 'disease_resistant');
                } else {
                    return null;
                }
            });

        const diseaseSusceptibility = await dsModel.getDsByTreeId(treeId)
            .then(response => {
                if (response) {
                    return treeUtiliites.propertyArrayFlattener(response, 'disease_susceptibility');
                } else {
                    return null;
                }
            });


        // organize results    
        siteConditions.sunsetZones = sunsetZones;
        siteConditions.soilTextures = soilTextures;
        siteConditions.salinityTolerance = salinityTolerance;
        pestAndDiseaseInfo.diseaseResistant = diseaseResistant;
        pestAndDiseaseInfo.diseaseSusceptibility = diseaseSusceptibility;


        const response = { treeId: treeId, commonName: commonName, scientificName: scientificName, synonyms: synonyms, otherCommonNames: otherCommonNames, familyName: familyName, genus: genus, images: images, generalInfo: generalInfo, siteConditions: siteConditions, pestAndDiseaseInfo: pestAndDiseaseInfo };

        return response;


    } catch (err) {
        logger.error(`services.treeDetail.getTreeDetails: ${err}`);
        return false;
    }
} 