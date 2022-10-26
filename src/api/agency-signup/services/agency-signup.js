'use strict';

/**
 * agency-signup service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::agency-signup.agency-signup');
