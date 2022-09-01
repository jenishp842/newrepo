'use strict';

/**
 * real-estate service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::real-estate.real-estate');
