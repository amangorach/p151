AFRAME.registerComponent("mc1", {
    schema: {
        moveX: { type: "number", default: 1 }
    },
    tick: function () {
        this.data.moveX += 0.02;
        var pos = this.el.getAttribute("position");
        pos.x = this.data.moveX;
        this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z });
    }
});