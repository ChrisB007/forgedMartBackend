'use strict';

/**
 * valuation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::valuation.valuation');
