angular.module("finance")
    .component("valueBox", {
        bindings: { grid: "@", value: "@", text: "@" },
        controller: ["gridSystem", Grid],
        templateUrl: "components/valueBox/valueBoxComponent.html"
    });

function Grid(gridSystem) {
    this.$onInit = function () {
        this.gridClasses = gridSystem.toCssClasses(this.grid);
    }
}