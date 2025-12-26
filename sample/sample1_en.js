PageData.import({
    name: "sample1",
    note: `sample1
note
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
        { url: "sample/sky.png", name: "sky", desc: "this is sky" },
    ].reverse(),
    contents: `
# morning
%sample/sky.png
%sample/sun.png
%sample/cloud.png
%sample/ground.png
this is morning scene

# noon
%sample/sky.png
%sample/cloud.png
%sample/ground.png
this is noon scene

# night
%sample/night.png
%sample/sky.png
%sample/cloud.png
%sample/ground.png
this is night scene

# star night
%sample/star.png
%sample/night.png
%sample/sky.png
%sample/cloud.png
%sample/ground.png
this is star night scene



`});
