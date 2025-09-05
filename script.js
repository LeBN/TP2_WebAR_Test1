/*document.addEventListener("DOMContentLoaded", () => {
    
    const cube = document.getElementsByClassName("interactable");

    cube.addEventListener("OnClick", (event) => {
        if (cube.color == "red"){
            cube.color = "blue";
        } else {
            cube.color = "red";
        }
    });

});*/

AFRAME.registerComponent('change-color-on-click', {
    schema: {
      color: {default: 'red'}
    },

    init: function () {
      var data = this.data;
      var el = this.el;
      var defaultColor = el.getAttribute('material').color;

      el.addEventListener('click', function () {
        if (el.color == defaultColor) {
            el.setAttribute('color', data.color);
        } else {
            el.setAttribute('color', defaultColor);
        }
      });
    }
  });