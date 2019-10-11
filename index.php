<!DOCTYPE html>

<html>
<head>
    <meta charset="UTF-8">
    <title>Template</title>
    <link rel="shortcut icon" href="favicon.png"  type="image/png"/>
    <link rel="icon" href="favicon.png"  type="image/png"/>

    <!--     Fonts and icons     -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />

    <!-- Css -->
    <link href="res/css/template.css" rel="stylesheet" type="text/css"/>
    <link href="res/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
    <link href="res/css/paper-dashboard.css" rel="stylesheet" type="text/css"/>

    <!-- Styles -->
    <link href="lib/dx19.1.6/Lib/css/dx.common.css" rel="stylesheet" type="text/css"/>
    <link href="lib/dx19.1.6/Lib/css/dx.light.compact.css" rel="stylesheet" type="text/css"/>

    <!-- Third Party Libraries -->
    <script src="lib/jquery-3.4.1.min.js" type="text/javascript"></script>
    <script src="lib/jquery-ui-1.10.4.custom.min.js" type="text/javascript"></script>
    <script src="lib/popper.min.js" type="text/javascript"></script>
    <script src="lib/perfect-scrollbar.jquery.min.js"></script>
    <script src="lib/globalize.min.js"></script>
    <script src="lib/paper-dashboard.js" type="text/javascript"></script>
    <script src="lib/angular1.7.8.min.js" type="text/javascript"></script>
    <script src="lib/angular-ui-router-1.0.7.min.js" type="text/javascript"></script>
    <script src="lib/dx19.1.6/Lib/js/jszip.js" type="text/javascript"></script>
    <script src="lib/dx19.1.6/Lib/js/dx.viz-web.js" type="text/javascript"></script>

    <!-- Angular config -->
    <script src="app.js" type="text/javascript"></script>
    <script src="routing.js" type="text/javascript"></script>

    <!-- Services -->
    <script src="services/svc_api.js" type="text/javascript"></script>

    <!-- Q Framework -->
    <script src="localisation/local.js" type="text/javascript"></script>
    <script src="framework/ng-common.js" type="text/javascript"></script>
    <script src="framework/custom-list/custom-list.js" type="text/javascript"></script>
    <script src="framework/edit/edit.js" type="text/javascript"></script>

    <!-- Directives -->

    <!-- Pages -->
    <script src="pages/welcome/welcome.js" type="text/javascript"></script>
</head>
<body ng-app="app" ng-controller="mainCtrl as main">
<div class="wrapper">
    <div class="sidebar" data-color="yellow" data-active-color="danger">
        <!--
          Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red | yellow"
      -->
        <div class="logo">
            <a href="http://www.creative-tim.com" class="simple-text logo-mini">
                <div class="logo-image-small">
                    <img src="../assets/img/logo-small.png">
                </div>
            </a>
            <a href="http://www.creative-tim.com" class="simple-text logo-normal">
                CLOVER SHOPIFY
                <!-- <div class="logo-image-big">
                  <img src="../assets/img/logo-big.png">
                </div> -->
            </a>
        </div>
        <div class="sidebar-wrapper">
            <ul class="nav">
                <li class="active">
                    <a href="../examples/dashboard.html">
                        <i class="nc-icon nc-bank"></i>
                        <p>Dashboard</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <div class="main-panel">
        <div class="content"
            <header>
                <div id="logo-header" ui-sref="welcome"></div>
            </header>
            <div ui-view class="root-ui-view"></div>
        </div>
    </div>
</div>

</body>

</html>
