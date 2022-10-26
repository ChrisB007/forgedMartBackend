'use strict';

/**
 * retail-sale service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::retail-sale.retail-sale');
