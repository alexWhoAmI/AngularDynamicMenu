(function(){

  //angular module
  var myApp = angular.module('myApp', ['angularTreeview']);

  //test controller
  myApp.controller('myController', function($scope){

    //temporary node 
    $scope.temporaryNode = {
      children: []
    };

  	//test tree model
    $scope.roleList = [
    { label : "User", id : "role1", children : [
    { label : "subUser1", id : "role11", children : [] },
    { label : "subUser2", id : "role12", children : [
    { label : "subUser2-1", id : "role121", children : [
    { label : "subUser2-1-1", id : "role1211", children : [] },
    { label : "subUser2-1-2", id : "role1212", children : [] }
    ]}
    ]}
    ]},

    { label : "Admin", id : "role2", children : [] },

    { label : "Guest", id : "role3", children : [] }
    ];

    $scope.done = function () {
      /* reset */
      $scope.mytree.currentNode.selected = undefined;
      $scope.mytree.currentNode = undefined;
      $scope.mode = undefined;
    };

    $scope.addChildDone = function () {
      /* add child */
      if( $scope.temporaryNode.id && $scope.temporaryNode.label ) {
        $scope.mytree.currentNode.children.push( angular.copy($scope.temporaryNode) );
      }

      /* reset */
      $scope.temporaryNode.id = "";
      $scope.temporaryNode.label = "";

      $scope.done();
    };

  });
  
})();


/*
	@license Angular Treeview version 0.1.6
	ⓒ 2013 AHN JAE-HA http://github.com/eu81273/angular.treeview
	License: MIT
  */

  (function(f){f.module("angularTreeview",[]).directive("treeModel",function($compile){return{restrict:"A",link:function(b,h,c){var a=c.treeId,g=c.treeModel,e=c.nodeLabel||"label",d=c.nodeChildren||"children",e='<ul><li data-ng-repeat="node in '+g+'"><i class="collapsed" data-ng-show="node.'+d+'.length && node.collapsed" data-ng-click="'+a+'.selectNodeHead(node)"></i><i class="expanded" data-ng-show="node.'+d+'.length && !node.collapsed" data-ng-click="'+a+'.selectNodeHead(node)"></i><i class="normal" data-ng-hide="node.'+
    d+'.length"></i> <span data-ng-class="node.selected" data-ng-click="'+a+'.selectNodeLabel(node)">{{node.'+e+'}}</span><div data-ng-hide="node.collapsed" data-tree-id="'+a+'" data-tree-model="node.'+d+'" data-node-id='+(c.nodeId||"id")+" data-node-label="+e+" data-node-children="+d+"></div></li></ul>";a&&g&&(c.angularTreeview&&(b[a]=b[a]||{},b[a].selectNodeHead=b[a].selectNodeHead||function(a){a.collapsed=!a.collapsed},b[a].selectNodeLabel=b[a].selectNodeLabel||function(c){b[a].currentNode&&b[a].currentNode.selected&&
      (b[a].currentNode.selected=void 0);c.selected="selected";b[a].currentNode=c}),h.html('').append($compile(e)(b)))}}})})(angular);
