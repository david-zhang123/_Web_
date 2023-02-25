var prep = true;
$(document).ready(function () {
    $("body").html(function (_, html) {
        html = html.replace(/\\\[(.*?)\\\]/g, '<span class="center"><math-field>$1</math-field></span>');
        return html;
    });
    $("body").html(function (_, html) {
        html = html.replace(/\\\((.*?)\\\)/g, '<span class="inlinemathfield">$1</span>');
        return html;
    });
    $("body").html(function (_, html) {
        html = html.replace(/\\\\/g, '<div class="filler"></div>');
        return html;
    });
    $("body").wrapInner('<div class="container"></div>');
    $("math-field").each(function () {
        var mq = MathQuill.StaticMath(this);
    });
});
function Prep(PrevLink, NextLink) {
    if (prep) {
        $(document).ready(function () {
            var footer_template1 = ` <footer> <span>Website created by David Zhang</span><div></div> <a href="#">About Me</a> <a href="#">About This Site</a> <a href="#">Contact Me</a> </ul> </footer> <style> footer a{ text-decoration: none; padding: 0 2% 0 2%; color: #828282; } footer span{ font-size: 0.8em; } footer div{ height: 20px; } footer{ text-align: center; color: #828282; background-color: #f0f0f0; padding: 90px; font-size: 0.7em; list-style: none; font-family: 'LM Sans'; margin-top: 10em; } </style> `;
            var nav_template1 = ` <nav> <ul class="nav-list"> <li id = "title" class = "noselect"><a href="Index.html"><span id="deepaccent">Real </span>Analysis</a></li> <li><a class="prevnext noselect" href="` + PrevLink + `"><span>&#8592;</span></a></li> <span></span> <li><a class="prevnext noselect" href="` + NextLink + `"><span>&#8594;</span></a></li> </ul> </nav> <style> #deepaccent{ padding:0; margin:0; font-size: 1em; position: relative; bottom: 2px; color: rgb(94, 196, 196); } .prevnext span{ font-family: "LM Math"; } ul > span{ width: 10%; } #title a{ font-size: 1em; } nav { background-color: rgba(255, 255, 255, 0.8); justify-content: center; backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px); position: fixed; top: 0; width: 100%; z-index: 999; padding: 5px 0; font-family: 'LM'; } ul{ width: 100%; list-style: none; display: flex; justify-content: center; } .nav-list li a { color: Black; text-decoration: none; font-size: 18px; font-weight: bold; } #title{ margin: 0px 20% 0 0; } </style> `;
            $("h1").each(function () {
                $(this).wrap('<span class="fullspan center"></span>');
                $(this).addClass("divUnderline");
                $('<span class="iconv noselect accent">></span>').insertBefore($(this));
            });
            $("body").append(nav_template1);
            $("body").append(footer_template1);
        });
        prep = false;
    }
}
