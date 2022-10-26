'use strict';

/**
 * exit-strategy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::exit-strategy.exit-strategy');
