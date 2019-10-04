app.directive("edit", function() {
    return {
        templateUrl: 'framework/edit/edit.html',
        restrict: 'E',
        scope: {
            'formLabels': '=',
            'editObject': '=',
            'visiblePopup': '='
        },
        link: function ($scope, $element, $attrs) {
            $scope.visiblePopup = false;

            $scope.formInput = {
                width: 180,
            };

            $scope.popupOptions = {
                width: 500,
                height: 250,
                contentTemplate: "info",
                showTitle: true,
                title: "Edit form",
                dragEnabled: false,
                showCloseButton: false,
                closeOnOutsideClick: false,
                bindingOptions: {
                    visible: "visiblePopup",
                }
            };

            $scope.saveButton = {
                stylingMode: "outlined",
                text: "Save",
                type: "normal",
                width: 60,
                onClick: function() {
                    DevExpress.ui.notify("Save buttons request");
                    $scope.visiblePopup = false;
                },
                elementAttr: {
                    id: 'saveButton'
                }
            };

            $scope.cancelButton = {
                useSubmitBehavior: false,
                stylingMode: "contained",
                text: "Cancel",
                type: "danger",
                width: 60,
                onClick: function() {
                    console.log($scope.editForm.inputObject.$rollbackViewValue(), 'editForm');
                    $scope.editForm.inputObject.$rollbackViewValue();
                    DevExpress.ui.notify("Cancel buttons request");
                    $scope.visiblePopup = false;
                },
                elementAttr: {
                    id: 'cancelButton'
                }
            };
        }
    }
});