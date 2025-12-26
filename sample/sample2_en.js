PageData.import({
    name: "sample2-noSky",
    note: `sample2
note: no sky
`,
    refs: `
# ref1
!refs/ref1.png
ref1


# ref2
!refs/ref2.png
ref2

`,
    layers: [
        { url: "sample/star.png", name: "star", desc: "this is star" },
        { url: "sample/night.png", name: "night", desc: "" },
        { url: "sample/cloud.png", name: "cloud", desc: "" },
        { url: "sample/sun.png", name: "", desc: "" },
        { url: "sample/ground.png", name: "ground", desc: "" },
    ].reverse(),
    contents: `
# morning
%sample/sun.png
%sample/cloud.png
%sample/ground.png
this is morning scene

# noon
%sample/cloud.png
%sample/ground.png
this is noon scene

# night
%sample/night.png
%sample/cloud.png
%sample/ground.png
this is night scene

# star night
%sample/star.png
%sample/night.png
%sample/cloud.png
%sample/ground.png
this is star night scene



`});
