const styleElement = document.createElement("style");
styleElement.textContent = `*{color: white; fill: white; background-color: white !important;}`;
document.head.appendChild(styleElement);
document.addEventListener("DOMContentLoaded", function (event) {
    var div = document.createElement("div");
    div.setAttribute("id", "loading-container");
    document.body.appendChild(div);
});

function webRender(a, b) {
    function shiftUp() {
        var elements = $("html");
        elements.each(function () {
            var currentTop = $(this).position().top;
            $(this).animate({ top: currentTop - 20 }, 1000);
        });
    }
    function loadScriptsInOrder(scripts, callback) {
        var loadScript = function (index) {
            if (index >= scripts.length) {
                callback();
                return 0;
            }
            var script = document.createElement("script");
            script.src = scripts[index];
            script.onload = function () {
                loadScript(index + 1);
            };
            script.onerror = function () {
                console.error("Error loading script:", script.src);
            };
            document.head.appendChild(script);
        };
        loadScript(0);
    }
    var scriptsToLoad = ["https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js", "https://sonnicodes.github.io/MathType/mathquill-0.10.1/mathquill.js", "JS/script_basic.js"];
    loadScriptsInOrder(scriptsToLoad, function () {
        console.log("All scripts have been loaded.");
        $("head").append('<link rel="stylesheet" href="https://david-zhang123.github.io/_Web_/Fonts/LatinModern.css"/><link rel="stylesheet" href="https://sonnicodes.github.io/MathType/mathquill-0.10.1/mathquill.css"/><link rel="stylesheet" href="styles_basic.css"/>');
        Prep(a, b);
        setTimeout(() => {
            $("html").css({
                position: "relative",
                top: "20px",
            });
            $("#loading-container").fadeOut("slow");
            $("head style").remove();
            shiftUp();
        }, 100);
    });
}
