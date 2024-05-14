<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #00FA9A;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                color: #006400;
                font-size: 84px;
            }

            .links > a {
                color: #006400;
                padding: 0 25px;
                font-size: 24px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }

            .links > a:hover {
                background-color: #006400;
                color: #00FF7F;
                animation-name: a-hover;
                animation-duration: 0.15s;
                border-radius: 10px;
            }

            @keyframes a-hover {
                from {
                    color: #006400;
                }
                to {
                    background-color: #006400;
                    color: #00FF7F;
                }
            }

            .links > a:not(:hover) {
                color: #006400;
                animation-name: not-hover;
                animation-duration: 0.15s;
                border-radius: 10px;
            }

            @keyframes not-hover {
                from {
                    background-color: #006400;
                    color: #00FF7F;
                }
                to {
                    color: #006400;
                }
            }
        </style>
    </head>
    <body>
            <div class="content">
                <div class="title m-b-md">
                    Laravel API
                </div>

                <div class="links">
                    <a href="http://localhost:4200/home">Angular Web</a>
                </div>
            </div>
        </div>
    </body>
</html>
