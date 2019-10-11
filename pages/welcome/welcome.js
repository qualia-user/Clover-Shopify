app.controller("ctrl_welcome", ['$scope', 'svcApi',  function ($scope, svcApi) {
    //localisation
    $scope.str_series_type = Globalize.localize("str_series_type");
    $scope.str_interval = Globalize.localize("str_interval");
    $scope.str_interval_type = Globalize.localize("str_interval_type");



    var serieNetAmount =        [{ valueField: "NetAmount", name: "Net amount", type: "line", point: {size: 8, color: '#00c0ef'} },
                                { valueField: "NetAmount_PP", name: "Net amount previous period", type: "line", point: {size: 8, color: '#c1c233'}, dashStyle: "dot"}];

    var serieTipAmount =        [{ valueField: "tipAmount", name: "Tip Amount", type: "line", point: {size: 8, color: '#00c0ef'} },
                                { valueField: "tipAmount_PP", name: "Tip Amount previous period", type: "line", dashStyle: "dot" }];

    var serieTipPercentOfNet =  [{ valueField: "TipPercentOfNet", name: "Tip Percent Of Net", type: "line", point: {size: 8, color: '#00c0ef'} },
                                { valueField: "TipPercentOfNet_PP", name: "Tip Percent Of Net previous period", type: "line", dashStyle: "dot" }];

    var serieRefundAmount =     [{ valueField: "refundAmount", name: "Refund Amount", type: "line", point: {size: 8, color: '#00c0ef'} },
                                { valueField: "refundAmount_PP", name: "Refund Amount Of Net previous period", type: "line", dashStyle: "dot" }];

    var serieCreditAmount =     [{ valueField: "creditAmount", name: "Credit Amount", type: "line", point: {size: 8, color: '#00c0ef'} },
                                { valueField: "creditAmount_PP", name: "Credit Amount previous period", type: "line", dashStyle: "dot" }];

    var sqlTypes = ["NetAmount", "TipAmount", "TipPercentOfNet", "RefundAmount", "CreditAmount"];
    var intervalType = ["Day", "Week", "Month"];

    $scope.interval = 30;
    $scope.sqlType = sqlTypes[0];
    $scope.intervalType = intervalType[0];
    $scope.interval_day = true;
    $scope.interval_week = false;
    $scope.interval_month = false;
    $scope.seriesOne = serieNetAmount;
    $scope.seriesTwo = serieTipAmount;
    $scope.seriesThree = serieTipPercentOfNet;
    getDataSource($scope.interval);

    $scope.seriesTypeDataSourceChange = {
        dataSource: sqlTypes,
        value: sqlTypes[0],
        onValueChanged: function(e) {
            $scope.sqlType = e.value;
            if (e.value == sqlTypes[0]) {
                $scope.seriesOne = serieNetAmount;
            } else if (e.value == sqlTypes[1]) {
                $scope.seriesOne = serieTipAmount;
            } else if (e.value == sqlTypes[2]) {
                $scope.seriesOne = serieTipPercentOfNet;
            } else if (e.value == sqlTypes[3]) {
                $scope.seriesOne = serieRefundAmount;
            } else if (e.value == sqlTypes[4]) {
                $scope.seriesOne = serieCreditAmount;
            }
            getDataSource($scope.interval);
        }
    };

    $scope.intervalTypeDataSourceChange = {
        dataSource: intervalType,
        value: intervalType[0],
        onValueChanged: function(e) {
            $scope.intervalType = e.value;
            $scope.interval_day = false;
            $scope.interval_week = false;
            $scope.interval_month = false;
            if (e.value == intervalType[0]) {
                $scope.interval_day = true;
            } else if (e.value == intervalType[1]) {
                $scope.interval_week = true;
            } else if (e.value == intervalType[2]) {
                $scope.interval_month = true;
            }
        }
    };

    function getDataSource(interval) {
        var ds = svcApi.selectQuery_REPO(interval);
        ds.then(function(response){
            if (response !== undefined) {
                $scope.dataSource = convertToFloat(response);
                console.log($scope.dataSource, '$scope.dataSource');
            }
        });
    };

    function convertToFloat(responseData) {
        var data = [];
        angular.forEach(responseData, function(row) {
            var obj = {};
            // obj['date'] = row.date;
            obj['date'] = row.date;
            obj[serieNetAmount[0].valueField] = parseFloat(row[serieNetAmount[0].valueField]);
            obj[serieNetAmount[1].valueField] = parseFloat(row[serieNetAmount[1].valueField]);

            obj[serieTipAmount[0].valueField] = parseFloat(row[serieTipAmount[0].valueField]);
            obj[serieTipAmount[1].valueField] = parseFloat(row[serieTipAmount[1].valueField]);

            obj[serieTipPercentOfNet[0].valueField] = parseFloat(row[serieTipPercentOfNet[0].valueField]);
            obj[serieTipPercentOfNet[1].valueField] = parseFloat(row[serieTipPercentOfNet[1].valueField]);

            obj[serieRefundAmount[0].valueField] = parseFloat(row[serieRefundAmount[0].valueField]);
            obj[serieRefundAmount[1].valueField] = parseFloat(row[serieRefundAmount[1].valueField]);

            obj[serieCreditAmount[0].valueField] = parseFloat(row[serieCreditAmount[0].valueField]);
            obj[serieCreditAmount[1].valueField] = parseFloat(row[serieCreditAmount[1].valueField]);
            data.push(obj);
        });
        return data;
    };

    var buttons =
    {
        day: [{ text: "7 d", interval: 7 }, {text: "30 d", interval: 30}, {text: "60 d", interval: 60}, {text: "90 d", interval: 90}, {text: "1 y", interval: 365}],
        week: [{text: "10 w", interval: 70},{text: "30 w", interval: 210}],
        month: [{text: "6 m", interval: 182},{text: "12 m", interval: 365}]
    };

    var i = 1;
    angular.forEach(buttons, function(row) {
        
    })

    $scope.getDay1 = {
        stylingMode: 'contained',
        text: "7 d",
        type: "normal",
        width: 60,
        onClick: function() {
            getDataSource(7, $scope.sqlType);
        }
    };

    $scope.getDay2 = {
        stylingMode: 'contained',
        text: "30 d",
        type: "normal",
        width: 60,
        addClass: "active-button",
        onClick: function() {
            getDataSource(30, $scope.sqlType);
        }
    };

    $scope.getDay3 = {
        stylingMode: 'contained',
        text: "60 d",
        type: "normal",
        width: 60,
        onClick: function() {
            getDataSource(60, $scope.sqlType);
        }
    };

    $scope.getDay4 = {
        stylingMode: 'contained',
        text: "90 d",
        type: "normal",
        width: 60,
        onClick: function() {
            getDataSource(90, $scope.sqlType);
        }
    };

    $scope.getDay5 = {
        stylingMode: 'contained',
        text: "1 y",
        type: "normal",
        width: 60,
        onClick: function() {
            getDataSource(365, $scope.sqlType);
        }
    };

    $scope.chartOptionsOne = {
        palette: "Soft Blue",
        paletteExtensionMode: "blend",
        scrollBar: {
            "visible": true,
            "color": '#bbbbbb',
            "position": 'top',
            "width": 5,
            "opacity": 0.5
        },
        zoomAndPan: {
            valueAxis: "both",
            argumentAxis: "both",
            dragToZoom: true,
            panKey: "shift"
        },
        commonSeriesSettings: {
            argumentField: "argumentField"
        },
        bindingOptions: {
            dataSource: 'dataSource',
            series: 'seriesOne'
        },
        margin: {
            bottom: 20
        },
        argumentAxis: {
            valueMarginsEnabled: false,
            discreteAxisDivisionMode: "crossLabels",
            grid: {
                visible: false
            }
        },
        commonAxisSettings: {
            label: {
                displayMode: "rotated",
                indentFromAxis: 10,
                overlappingBehavior: "rotate",
                rotationAngle: 45,
                staggeringSpacing: 2,
                visible: true
            }
        },
        legend: {
            verticalAlignment: "top",
            horizontalAlignment: "center",
            itemTextPosition: "bottom"
        },
        title: {
            text: "Net Amount",
            subtitle: {
                text: "(some subtitle text)"
            }
        },
        "export": {
            enabled: true
        },
        tooltip: {
            enabled: true,
            customizeTooltip: function (arg) {
                return {
                    text: arg.valueText
                };
            }
        }
    };

    $scope.chartOptionsTwo = {
        palette: "Soft Blue",
        paletteExtensionMode: "blend",
        scrollBar: {
            "visible": true,
            "color": '#bbbbbb',
            "position": 'top',
            "width": 5,
            "opacity": 0.5
        },
        zoomAndPan: {
            valueAxis: "both",
            argumentAxis: "both",
            dragToZoom: true,
            panKey: "shift"
        },
        commonSeriesSettings: {
            argumentField: "date"
        },
        bindingOptions: {
            dataSource: 'dataSource',
            series: 'seriesTwo'
        },
        margin: {
            bottom: 20
        },
        argumentAxis: {
            valueMarginsEnabled: false,
            discreteAxisDivisionMode: "crossLabels",
            grid: {
                visible: false
            }
        },
        commonAxisSettings: {
            label: {
                displayMode: "rotated",
                indentFromAxis: 10,
                overlappingBehavior: "rotate",
                rotationAngle: 45,
                staggeringSpacing: 2,
                visible: true
            }
        },
        legend: {
            verticalAlignment: "top",
            horizontalAlignment: "center",
            itemTextPosition: "bottom"
        },
        title: {
            text: "Tip Amount",
            subtitle: {
                text: "(some subtitle text)"
            }
        },
        "export": {
            enabled: true
        },
        tooltip: {
            enabled: true,
            customizeTooltip: function (arg) {
                return {
                    text: arg.valueText
                };
            }
        }
    };

    // $scope.typesOptions = {
    //     dataSource: types,
    //     bindingOptions: {
    //         value: "currentType"
    //     }
    // };
    // $scope.currentType = types[0];
}]);


