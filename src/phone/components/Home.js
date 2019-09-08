// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available


var clickF= false;
var color1, color2, color3;
var count = 1;

$scope.info= function(widget1,widget2,widget3) {

    if(!clickF){
      
  	color1 = $scope.view.wdg[widget1]['color']; 
    color2 = $scope.view.wdg[widget2]['color'];
    color3 = $scope.view.wdg[widget3]['color'];
      
    $scope.view.wdg[widget1]['color']= "rgba(0,255,0,1)";
    $scope.view.wdg[widget2]['color'] = "rgba(255,0,0,0.6)";
    $scope.view.wdg[widget3]['color'] = "rgba(255,0,0,0.6)";
    //$scope.app.params.h1label=1;
  	//$scope.app.params.h2label=1;
  	//$scope.app.params.coverlabel=1;
      $scope.view.wdg['H2Label'].visible = true;
      $scope.view.wdg['H1Label'].visible = true;
      $scope.view.wdg['CPLabel'].visible = true;
  	$scope.app.params.transp = 0.3; 	
    clickF=true;
    }
  else
  {
      
  	$scope.view.wdg[widget1]['color'] = color1;
    $scope.view.wdg[widget2]['color'] = color2;
    $scope.view.wdg[widget3]['color'] = color3;
    //$scope.app.params.h1label=0;
  	//$scope.app.params.h2label=0;
  	//$scope.app.params.coverlabel=0;
     $scope.view.wdg['H2Label'].visible = false;
      $scope.view.wdg['H1Label'].visible = false;
      $scope.view.wdg['CPLabel'].visible = false;
  	$scope.app.params.transp = 0.7; 	
    clickF=false;
  }
  
}

$scope.toggelView = function() {
	 count ++;
  switch(count){
    case 1: {
    	$scope.view.wdg['Cabinet'].visible = true;
        $scope.view.wdg['coverplate'].visible = false;
        $scope.view.wdg['H1'].visible = false;
        $scope.view.wdg['H2'].visible = false;
    }
    break;
    case 2:{
    	$scope.view.wdg['Cabinet'].visible = true;
        $scope.view.wdg['coverplate'].visible = true;
        $scope.view.wdg['H1'].visible = false;
        $scope.view.wdg['H2'].visible = false;
    }
    break;
    case 3:{
    	$scope.view.wdg['Cabinet'].visible = true;
        $scope.view.wdg['coverplate'].visible = true;
        $scope.view.wdg['H1'].visible = true;
        $scope.view.wdg['H2'].visible = false;
    }
    break;
    case 4:{
    	$scope.view.wdg['Cabinet'].visible = true;
        $scope.view.wdg['coverplate'].visible = true;
        $scope.view.wdg['H1'].visible = true;
        $scope.view.wdg['H2'].visible = true;
    }
    break;
    default:{
      $scope.view.wdg['button-1'].visible=true;
    	//count = 1;
    }
      
  }
 
}