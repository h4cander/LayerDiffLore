PageData.import({
    name: "サンプル2-空なし",
    note: `サンプル2
ノート：空がない
`,
    refs: `
# 参照1
!refs/ref1.png
参照画像1


# 参照2
!refs/ref2.png
参照画像2

`,
    layers: [
        { url: "sample/star.png", name: "星", desc: "これは星です" },
        { url: "sample/night.png", name: "夜", desc: "" },
        { url: "sample/cloud.png", name: "雲", desc: "" },
        { url: "sample/sun.png", name: "", desc: "" },
        { url: "sample/ground.png", name: "地面", desc: "" },
    ].reverse(),
    contents: `
# 朝
%sample/sun.png
%sample/cloud.png
%sample/ground.png
これは朝のシーンです
!refs/ref2.png

# 昼
%sample/cloud.png
%sample/ground.png
これは昼のシーンです

# 夜
%sample/night.png
%sample/cloud.png
%sample/ground.png
これは夜のシーンです

# 星の夜
%sample/star.png
%sample/night.png
%sample/cloud.png
%sample/ground.png
これは星の夜のシーンです



`});
