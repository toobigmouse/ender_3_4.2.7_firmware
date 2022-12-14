module.exports = {
    extends: "builds/baseLin.js",
    include: "builds/features/manualBedMesh.js",
    meta: {
        stable_name: "ender_3_4.2.7-{{marlin_version}}-manual_mesh_7x7_lin-{{uid}}",
        nightly_name: "ender_3_4.2.7-{{current_date}}-manual_mesh_7x7_lin-{{uid}}"
    },
    configuration: {
        enable: [
            ["GRID_MAX_POINTS_X", 7]
        ]
    }
};
