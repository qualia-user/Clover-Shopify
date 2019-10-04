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
        <script src="lib/angular1.7.8.min.js" type="text/javascript"></script>
        <script src="lib/angular-ui-router-1.0.7.min.js" type="text/javascript"></script>
        <script src="lib/dx19.1.6/Lib/js/jszip.js" type="text/javascript"></script>
        <script src="lib/dx19.1.6/Lib/js/dx.viz-web.js" type="text/javascript"></script>
<!--        <script src="lib/bootstrap.min.js" type="text/javascript"></script>-->
        <script src="lib/paper-dashboard.js" type="text/javascript"></script>
        <script src="lib/popper.min.js" type="text/javascript"></script>
<!--        <script src="lib/perfect-scrollbar.min.js" type="text/javascript"></script>-->

        <!-- Angular config -->
        <script src="app.js" type="text/javascript"></script>
        <script src="routing.js" type="text/javascript"></script>

        <!-- Services -->
        <script src="services/svc_api.js" type="text/javascript"></script>

        <!-- Q Framework -->
        <script src="framework/ng-common.js" type="text/javascript"></script>
        <script src="framework/custom-list/custom-list.js" type="text/javascript"></script>
        <script src="framework/edit/edit.js" type="text/javascript"></script>

        <!-- Directives -->

        <!-- Pages -->
        <script src="pages/welcome/welcome.js" type="text/javascript"></script>
    </head>
    <body ng-app="app" ng-controller="mainCtrl as main">

    <div class="sidebar" data-color="brown" data-active-color="danger">
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
                Creative Tim
                <!-- <div class="logo-image-big">
                  <img src="../assets/img/logo-big.png">
                </div> -->
            </a>
        </div>
        <div class="sidebar-wrapper">
            <div class="user">
                <div class="photo">
                    <img src="../assets/img/faces/ayo-ogunseinde-2.jpg" />
                </div>
                <div class="info">
                    <a data-toggle="collapse" href="#collapseExample" class="collapsed">
              <span>
                Chet Faker
                <b class="caret"></b>
              </span>
                    </a>
                    <div class="clearfix"></div>
                    <div class="collapse" id="collapseExample">
                        <ul class="nav">
                            <li>
                                <a href="#">
                                    <span class="sidebar-mini-icon">MP</span>
                                    <span class="sidebar-normal">My Profile</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="sidebar-mini-icon">EP</span>
                                    <span class="sidebar-normal">Edit Profile</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="sidebar-mini-icon">S</span>
                                    <span class="sidebar-normal">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul class="nav">
                <li class="active">
                    <a href="../examples/dashboard.html">
                        <i class="nc-icon nc-bank"></i>
                        <p>Dashboard</p>
                    </a>
                </li>
                <li>
                    <a data-toggle="collapse" href="#pagesExamples">
                        <i class="nc-icon nc-book-bookmark"></i>
                        <p>
                            Pages
                            <b class="caret"></b>
                        </p>
                    </a>
                    <div class="collapse " id="pagesExamples">
                        <ul class="nav">
                            <li>
                                <a href="../examples/pages/timeline.html">
                                    <span class="sidebar-mini-icon">T</span>
                                    <span class="sidebar-normal"> Timeline </span>
                                </a>
                            </li>
                            <li>
                                <a href="../examples/pages/login.html">
                                    <span class="sidebar-mini-icon">L</span>
                                    <span class="sidebar-normal"> Login </span>
                                </a>
                            </li>
                            <li>
                                <a href="../examples/pages/register.html">
                                    <span class="sidebar-mini-icon">R</span>
                                    <span class="sidebar-normal"> Register </span>
                                </a>
                            </li>
                            <li>
                                <a href="../examples/pages/lock.html">
                                    <span class="sidebar-mini-icon">LS</span>
                                    <span class="sidebar-normal"> Lock Screen </span>
                                </a>
                            </li>
                            <li>
                                <a href="../examples/pages/user.html">
                                    <span class="sidebar-mini-icon">UP</span>
                                    <span class="sidebar-normal"> User Profile </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a data-toggle="collapse" href="#componentsExamples">
                        <i class="nc-icon nc-layout-11"></i>
                        <p>
                            Components
                            <b class="caret"></b>
                        </p>
                    </a>
                    <div class="collapse " id="componentsExamples">
                        <ul class="nav">
                            <li>
                                <a href="../examples/components/buttons.html">
                                    <span class="sidebar-mini-icon">B</span>
                                    <span class="sidebar-normal"> Buttons </span>
                                </a>
                            </li>
                            <li>
                                <a href="../examples/components/grid.html">
                                    <span class="sidebar-mini-icon">G</span>
                                    <span class="sidebar-normal"> Grid System </span>
                                </a>
                            </li>
                            <li>
                                <a href="../examples/components/panels.html">
                                    <span class="sidebar-mini-icon">P</span>
                                    <span class="sidebar-normal"> Panels </span>
                                </a>
                            </li>
                            <li>
                                <a href="../examples/components/sweet-alert.html">
                                    <span class="sidebar-mini-icon">SA</span>
                                    <span class="sidebar-normal"> Sweet Alert </span>
                                </a>
                            </li>
                            <li>
                                <a href="../examples/components/notifications.html">
                                    <span class="sidebar-mini-icon">N</span>
                                    <span class="sidebar-normal"> Notifications </span>
                                </a>
                            </li>
                            <li>
                                <a href="../examples/components/icons.html">
                                    <span class="sidebar-mini-icon">I</span>
                                    <span class="sidebar-normal"> Icons </span>
                                </a>
                            </li>
                            <li>
                                <a href="../examples/components/typography.html">
                                    <span class="sidebar-mini-icon">T</span>
                                    <span class="sidebar-normal"> Typography </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a data-toggle="collapse" href="#formsExamples">
                        <i class="nc-icon nc-ruler-pencil"></i>
                        <p>
                            Forms
                            <b class="caret"></b>
                        </p>
                    </a>
                    <div class="collapse " id="formsExamples">
                        <ul class="nav">
                            <li>
                                <a href="../examples/forms/regular.html">
                                    <span class="sidebar-mini-icon">RF</span>
                                    <span class="sidebar-normal"> Regular Forms </span>
                                </a>
                            </li>
                            <li>
                                <a href="../examples/forms/extended.html">
                                    <span class="sidebar-mini-icon">EF</span>
                                    <span class="sidebar-normal"> Extended Forms </span>
                                </a>
                            </li>
                            <li>
                                <a href="../examples/forms/validation.html">
                                    <span class="sidebar-mini-icon">V</span>
                                    <span class="sidebar-normal"> Validation Forms </span>
                                </a>
                            </li>
                            <li>
                                <a href="../examples/forms/wizard.html">
                                    <span class="sidebar-mini-icon">W</span>
                                    <span class="sidebar-normal"> Wizard </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a data-toggle="collapse" href="#tablesExamples">
                        <i class="nc-icon nc-single-copy-04"></i>
                        <p>
                            Tables
                            <b class="caret"></b>
                        </p>
                    </a>
                    <div class="collapse " id="tablesExamples">
                        <ul class="nav">
                            <li>
                                <a href="../examples/tables/regular.html">
                                    <span class="sidebar-mini-icon">RT</span>
                                    <span class="sidebar-normal"> Regular Tables </span>
                                </a>
                            </li>
                            <li>
                                <a href="../examples/tables/extended.html">
                                    <span class="sidebar-mini-icon">ET</span>
                                    <span class="sidebar-normal"> Extended Tables </span>
                                </a>
                            </li>
                            <li>
                                <a href="../examples/tables/datatables.net.html">
                                    <span class="sidebar-mini-icon">DT</span>
                                    <span class="sidebar-normal"> DataTables.net </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a data-toggle="collapse" href="#mapsExamples">
                        <i class="nc-icon nc-pin-3"></i>
                        <p>
                            Maps
                            <b class="caret"></b>
                        </p>
                    </a>
                    <div class="collapse " id="mapsExamples">
                        <ul class="nav">
                            <li>
                                <a href="../examples/maps/google.html">
                                    <span class="sidebar-mini-icon">GM</span>
                                    <span class="sidebar-normal"> Google Maps </span>
                                </a>
                            </li>
                            <li>
                                <a href="../examples/maps/fullscreen.html">
                                    <span class="sidebar-mini-icon">FSM</span>
                                    <span class="sidebar-normal"> Full Screen Map </span>
                                </a>
                            </li>
                            <li>
                                <a href="../examples/maps/vector.html">
                                    <span class="sidebar-mini-icon">VM</span>
                                    <span class="sidebar-normal"> Vector Map </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="../examples/widgets.html">
                        <i class="nc-icon nc-box"></i>
                        <p>Widgets</p>
                    </a>
                </li>
                <li>
                    <a href="../examples/charts.html">
                        <i class="nc-icon nc-chart-bar-32"></i>
                        <p>Charts</p>
                    </a>
                </li>
                <li>
                    <a href="../examples/calendar.html">
                        <i class="nc-icon nc-calendar-60"></i>
                        <p>Calendar</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
        <div class="main-panel">
            <header>
                <div id="logo-header" ui-sref="welcome"></div>
            </header>

            <div ui-view class="root-ui-view"></div>


        </div>

      </body>
  </html>
