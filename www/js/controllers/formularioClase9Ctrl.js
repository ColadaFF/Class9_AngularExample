/**
 * Created by Barcoder on 06/06/2015.
 */
(function () {
    "use strict";
    angular.module('clase9').controller('formularioClase9',
        function () {
            var vm = this;
            vm.model = {};
            vm.enviar = function () {
                alert(JSON.stringify(vm.model));
            }
        }
    );
}());