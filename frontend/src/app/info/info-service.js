/**
 * This file contains all necessary Angular controller definitions for 'frontend.admin.login-history' module.
 *
 * Note that this file should only contain controllers and nothing else.
 */
(function() {
  'use strict';

  angular.module('frontend.info')
    .service('InfoService', [
        '$log', '$state','$http','BackendConfig',
      function( $log, $state, $http, BackendConfig) {

          return {

              getInfo : function() {
                  return $http.get(BackendConfig.url + '/kong/info')
              },
              nodeStatus : function() {
                  return $http.get(BackendConfig.url + '/kong/status')
              },

              clusterStatus : function() {
                  return $http.get(BackendConfig.url + '/kong/cluster')
              },
          }
      }
    ])
  ;
}());
