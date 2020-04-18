<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
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
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
    <div class="footer">
            <footer id="myFooter">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-3 text-center">
                            <h2 class="logo"><a href="https://sorveteriadiniz.com"> <img src={logo} alt="Logo da Sorveteria Diniz"/> </a></h2>
                            <ul>
                                <li><em>Fone</em>: +55 98 3221-3386</li>
                                <li><em>Email</em>: dinizsorveteria@gmail.com</li>
                            </ul>
                        </div>
                        <div class="col-sm-2">
                            <h5>Local</h5>
                            <ul>
                                <li>Rua Sete de Setembro, 1, <br/>Vila Esperança</li>
                                <li>São Luís, <br/>Maranhão</li>
                            </ul>
                        </div>
                        <div class="col-sm-2">
                            <h5>Sobre-nós</h5>
                            <ul>
                                <li><a href="https://sorveteriadiniz.com">Informações da Empresa</a></li>
                                <li><a href="https://sorveteriadiniz.com">Contato</a></li>
                                <li><a href="https://sorveteriadiniz.com">Blog</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-2">
                            <h5>Suporte</h5>
                            <ul>
                                <li><a href="https://sorveteriadiniz.com">FAQ</a></li>
                                <li><a href="https://sorveteriadiniz.com">Chat</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-2 text-center">
                        <h5>Siga-nos nas redes sociais</h5>
                            <div class="social-networks">
                                <SocialMediaIconsReact iconSize="5" url="https://twitter.com/SorveteriaDiniz" icon="twitter" backgroundColor="rgba(0,0,0,0)"/>
                                <SocialMediaIconsReact iconSize="5" url="https://www.facebook.com/sorveteriadiniz/" icon="facebook" backgroundColor="rgba(0,0,0,0)"/>
                                <SocialMediaIconsReact iconSize="5" url= "https://instagram.com/SorveteriaDiniz" icon="instagram" backgroundColor="rgba(0,0,0,0)"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <p>© 2020 Copyright - Sorveteria Diniz</p>
                </div>
            </footer>
        </div>
    </body>
</html>
