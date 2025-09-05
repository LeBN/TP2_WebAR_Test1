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

AFRAME.registerComponent('change-color-on-hover', {
    schema: {
      color: {default: 'red'}
    },

    init: function () {
      var data = this.data;
      var el = this.el;  // <a-box>
      var defaultColor = el.getAttribute('material').color;

      el.addEventListener('mouseenter', function () {
        el.setAttribute('color', data.color);
      });

      el.addEventListener('mouseleave', function () {
        el.setAttribute('color', defaultColor);
      });
    }
  });