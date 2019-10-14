app.controller("ctrl_welcome", ['$scope', 'svcApi', '$parse',  function ($scope, svcApi, $parse) {
    //localisation
    $scope.str_series_type = Globalize.localize("str_series_type");
    $scope.str_interval = Globalize.localize("str_interval");
    $scope.str_interval_type = Globalize.localize("str_interval_type");

    var seriesArray =
        {
            serieNetAmount:         [{ valueField: "NetAmount", name: "Net amount", type: "line", point: {size: 8, color: '#00c0ef'} },
                                    { valueField: "NetAmount_PP", name: "Net amount previous period", type: "line", point: {size: 8, color: '#c1c233'}, dashStyle: "dot"}],
            serieTipAmount:         [{ valueField: "tipAmount", name: "Tip Amount", type: "line", point: {size: 8, color: '#00c0ef'} },
                                    { valueField: "tipAmount_PP", name: "Tip Amount previous period", type: "line", point: {size: 8, color: '#c1c233'}, dashStyle: "dot"}],
            serieRefundAmount:      [{ valueField: "refundAmount", name: "Refund Amount", type: "line", point: {size: 8, color: '#00c0ef'} },
                                    { valueField: "refundAmount_PP", name: "Refund Amount Of Net previous period", type: "line", point: {size: 8, color: '#c1c233'}, dashStyle: "dot"}],
            serieTipPercentOfNet:   [{ valueField: "TipPercentOfNet", name: "Tip Percent Of Net", type: "line", point: {size: 8, color: '#00c0ef'} },
                                    { valueField: "TipPercentOfNet_PP", name: "Tip Percent Of Net previous period", type: "line", point: {size: 8, color: '#c1c233'}, dashStyle: "dot"}],
            // serieCreditAmount:      [{ valueField: "creditAmount", name: "Credit Amount", type: "line", point: {size: 8, color: '#00c0ef'} },
            //                         { valueField: "creditAmount_PP", name: "Credit Amount previous period", type: "line", point: {size: 8, color: '#c1c233'}, dashStyle: "dot"}]
        };

    // var sqlTypes = ["NetAmount", "TipAmount", "TipPercentOfNet", "RefundAmount", "CreditAmount"];
    var intervalType = ["Day", "Week", "Month"];
    var i = 1;

    $scope.buttons =
    {
        day: [{ text: "7 d", interval: 7 }, {text: "30 d", interval: 30}, {text: "60 d", interval: 60}, {text: "90 d", interval: 90}, {text: "1 y", interval: 365}],
        // week: [{text: "10 w", interval: 70},{text: "30 w", interval: 210}],
        // month: [{text: "6 m", interval: 182},{text: "12 m", interval: 365}]
    };
    $scope.interval = $scope.buttons.day[1].interval;
    $scope.intervalType = intervalType[0];
    // $scope.interval_day = true;
    $scope.series1 = seriesArray.serieNetAmount;
    $scope.series2 = seriesArray.serieTipAmount;
    $scope.series3 = seriesArray.serieRefundAmount;
    $scope.series4 = seriesArray.serieTipPercentOfNet;
    getDataSource($scope.interval, $scope.intervalType);

    $scope.chartDataSet = [];
    angular.forEach(seriesArray, function(serie, index){
        var chartName = 'chartOptions'+i;
        var model = $parse(chartName);
        var assign_object = {
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
                series: 'series'+i
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
                text: serie[0].name,
                subtitle: {
                    text: "(some subtitle text)"
                }
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
        $scope.chartDataSet.push(assign_object);
        // assigns a value
        model.assign($scope, assign_object);
        i++;
    });

    $scope.getInterval = function (e) {
        $scope.interval = e.model.int.interval;
        getDataSource(e.model.int.interval, $scope.intervalType);
    };

    $scope.intervalTypeDataSourceChange = {
        dataSource: intervalType,
        value: intervalType[0],
        onValueChanged: function(e) {
            $scope.intervalType = e.value;
            getDataSource($scope.interval, $scope.intervalType);
        }
    };

    function getDataSource(interval, intervalType) {
        var ds = svcApi.selectQuery_REPO(interval, intervalType);
        ds.then(function(response){
            if (response !== undefined) {
                $scope.dataSource = convertToFloat(response);
            }
        });
    };

    function convertToFloat(responseData) {
        var data = [];
        angular.forEach(responseData, function(row) {
            var obj = {};
            obj['argumentField'] = row.argumentField;
            obj[seriesArray.serieNetAmount[0].valueField] = parseFloat(row[seriesArray.serieNetAmount[0].valueField]);
            obj[seriesArray.serieNetAmount[1].valueField] = parseFloat(row[seriesArray.serieNetAmount[1].valueField]);

            obj[seriesArray.serieTipAmount[0].valueField] = parseFloat(row[seriesArray.serieTipAmount[0].valueField]);
            obj[seriesArray.serieTipAmount[1].valueField] = parseFloat(row[seriesArray.serieTipAmount[1].valueField]);

            obj[seriesArray.serieRefundAmount[0].valueField] = parseFloat(row[seriesArray.serieRefundAmount[0].valueField]);
            obj[seriesArray.serieRefundAmount[1].valueField] = parseFloat(row[seriesArray.serieRefundAmount[1].valueField]);

            obj[seriesArray.serieTipPercentOfNet[0].valueField] = parseFloat(row[seriesArray.serieTipPercentOfNet[0].valueField]);
            obj[seriesArray.serieTipPercentOfNet[1].valueField] = parseFloat(row[seriesArray.serieTipPercentOfNet[1].valueField]);

            // obj[seriesArray.serieCreditAmount[0].valueField] = parseFloat(row[seriesArray.serieCreditAmount[0].valueField]);
            // obj[seriesArray.serieCreditAmount[1].valueField] = parseFloat(row[seriesArray.serieCreditAmount[1].valueField]);
            data.push(obj);
        });
        return data;
    };

    // $scope.chartOptionsOne = {
    //     palette: "Soft Blue",
    //     paletteExtensionMode: "blend",
    //     scrollBar: {
    //         "visible": true,
    //         "color": '#bbbbbb',
    //         "position": 'top',
    //         "width": 5,
    //         "opacity": 0.5
    //     },
    //     zoomAndPan: {
    //         valueAxis: "both",
    //         argumentAxis: "both",
    //         dragToZoom: true,
    //         panKey: "shift"
    //     },
    //     commonSeriesSettings: {
    //         argumentField: "argumentField"
    //     },
    //     bindingOptions: {
    //         dataSource: 'dataSource',
    //         series: 'series1'
    //     },
    //     margin: {
    //         bottom: 20
    //     },
    //     argumentAxis: {
    //         valueMarginsEnabled: false,
    //         discreteAxisDivisionMode: "crossLabels",
    //         grid: {
    //             visible: false
    //         }
    //     },
    //     commonAxisSettings: {
    //         label: {
    //             displayMode: "rotated",
    //             indentFromAxis: 10,
    //             overlappingBehavior: "rotate",
    //             rotationAngle: 45,
    //             staggeringSpacing: 2,
    //             visible: true
    //         }
    //     },
    //     legend: {
    //         verticalAlignment: "top",
    //         horizontalAlignment: "center",
    //         itemTextPosition: "bottom"
    //     },
    //     title: {
    //         text: "Net Amount",
    //         subtitle: {
    //             text: "(some subtitle text)"
    //         }
    //     },
    //     // "export": {
    //     //     enabled: true
    //     // },
    //     tooltip: {
    //         enabled: true,
    //         customizeTooltip: function (arg) {
    //             return {
    //                 text: arg.valueText
    //             };
    //         }
    //     }
    // };
    //
    // $scope.chartOptionsTwo = {
    //     palette: "Soft Blue",
    //     paletteExtensionMode: "blend",
    //     scrollBar: {
    //         "visible": true,
    //         "color": '#bbbbbb',
    //         "position": 'top',
    //         "width": 5,
    //         "opacity": 0.5
    //     },
    //     zoomAndPan: {
    //         valueAxis: "both",
    //         argumentAxis: "both",
    //         dragToZoom: true,
    //         panKey: "shift"
    //     },
    //     commonSeriesSettings: {
    //         argumentField: "argumentField"
    //     },
    //     bindingOptions: {
    //         dataSource: 'dataSource',
    //         series: 'series2'
    //     },
    //     margin: {
    //         bottom: 20
    //     },
    //     argumentAxis: {
    //         valueMarginsEnabled: false,
    //         discreteAxisDivisionMode: "crossLabels",
    //         grid: {
    //             visible: false
    //         }
    //     },
    //     commonAxisSettings: {
    //         label: {
    //             displayMode: "rotated",
    //             indentFromAxis: 10,
    //             overlappingBehavior: "rotate",
    //             rotationAngle: 45,
    //             staggeringSpacing: 2,
    //             visible: true
    //         }
    //     },
    //     legend: {
    //         verticalAlignment: "top",
    //         horizontalAlignment: "center",
    //         itemTextPosition: "bottom"
    //     },
    //     title: {
    //         text: "Tip Amount",
    //         subtitle: {
    //             text: "(some subtitle text)"
    //         }
    //     },
    //     // "export": {
    //     //     enabled: true
    //     // },
    //     tooltip: {
    //         enabled: true,
    //         customizeTooltip: function (arg) {
    //             return {
    //                 text: arg.valueText
    //             };
    //         }
    //     }
    // };
    //
    // $scope.chartOptionsThree = {
    //     palette: "Soft Blue",
    //     paletteExtensionMode: "blend",
    //     scrollBar: {
    //         "visible": true,
    //         "color": '#bbbbbb',
    //         "position": 'top',
    //         "width": 5,
    //         "opacity": 0.5
    //     },
    //     zoomAndPan: {
    //         valueAxis: "both",
    //         argumentAxis: "both",
    //         dragToZoom: true,
    //         panKey: "shift"
    //     },
    //     commonSeriesSettings: {
    //         argumentField: "argumentField"
    //     },
    //     bindingOptions: {
    //         dataSource: 'dataSource',
    //         series: 'series3'
    //     },
    //     margin: {
    //         bottom: 20
    //     },
    //     argumentAxis: {
    //         valueMarginsEnabled: false,
    //         discreteAxisDivisionMode: "crossLabels",
    //         grid: {
    //             visible: false
    //         }
    //     },
    //     commonAxisSettings: {
    //         label: {
    //             displayMode: "rotated",
    //             indentFromAxis: 10,
    //             overlappingBehavior: "rotate",
    //             rotationAngle: 45,
    //             staggeringSpacing: 2,
    //             visible: true
    //         }
    //     },
    //     legend: {
    //         verticalAlignment: "top",
    //         horizontalAlignment: "center",
    //         itemTextPosition: "bottom"
    //     },
    //     title: {
    //         text: "Refund Amount",
    //         subtitle: {
    //             text: "(some subtitle text)"
    //         }
    //     },
    //     // "export": {
    //     //     enabled: true
    //     // },
    //     tooltip: {
    //         enabled: true,
    //         customizeTooltip: function (arg) {
    //             return {
    //                 text: arg.valueText
    //             };
    //         }
    //     }
    // };

    // $scope.typesOptions = {
    //     dataSource: types,
    //     bindingOptions: {
    //         value: "currentType"
    //     }
    // };
    // $scope.currentType = types[0];
}]);


