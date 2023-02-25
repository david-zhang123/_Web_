function Prep(PrevLink, NextLink) {
    $(document).ready(function () {
        // Render MathFields
        $("math-field").each(function () {
            var mq = MathQuill.StaticMath(this);
        });

        //#region FooterTemplate 1
        var footer_template1 = `
        <footer>
            <span>&copy; 2023 Your Company. All Rights Reserved.</span><div></div>
                <a href="#">Terms of Use</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Contact Us</a>
            </ul>
        </footer>
        <style>
            footer a{
                text-decoration: none;
                padding: 0 2% 0 2%;
                color: #828282;
            }
            footer span{
                font-size: 0.8em;
            }
            footer div{
                height: 20px;
            }
            footer{
                text-align: center;
                color: #828282;
                background-color: #f0f0f0;
                padding: 90px;
                font-size: 0.7em;
                list-style: none;
                font-family: 'LM Sans';
                margin-top: 10em;
            }
        </style>
        `;
        //#endregion
        //#region NavTemplate 1
        var nav_template1 =
            `
        <nav>
            <ul class="nav-list">
                <li><a class="prevnext noselect" href="` +
            PrevLink +
            `"><span>&#8592;</span></a></li>
                <li id = "title" class = "noselect"><a href="Index.html">Real Analysis</a></li>
                <li><a class="prevnext noselect" href="` +
            NextLink +
            `"><span>&#8594;</span></a></li>
            </ul>
        </nav>
        <style>
            .prevnext span{
                font-family: "LM Math";
                position: relative;
                right: 50%;
            }
            #title a{
                font-size: 1em;
            }

            nav {
                background-color: rgba(255, 255, 255, 0.8);
                justify-content: center;
                backdrop-filter: blur(2px);
               -webkit-backdrop-filter: blur(2px);
                position: fixed;
                top: 0;
                width: 100%;
                z-index: 999;
                padding: 5px 0;
                font-family: 'LM';
            }
            ul{
                width: 100%;
                list-style: none;
                display: flex;
                justify-content: center;
            }

            .nav-list li a {
                color: Black;
                text-decoration: none;
                font-size: 18px;
                font-weight: bold;
            }
            #title{
                margin: 0px 15%;
            }
        </style>
        `;
        //#endregion
        $("body").append(nav_template1);
        $("body").append(footer_template1);
    });
}
