<!doctype html>
<html ng-app="app" ng-strict-di>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Atlas of Torture</title>

    <meta name="theme-color" content="#ffffff">

    <link rel="manifest" href="manifest.json">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!--[if lte IE 10]>
    <script type="text/javascript">document.location.href = '/unsupported-browser'</script>
    <![endif]-->

    <style><?php require( public_path( "css/critical.css" ) ) ?></style>

</head>
<body>

    <app-shell>
        <div id="app-shell-header">
            <img src="img/atlas_of_torture_logo.png" height="29" width="223">
        </div>
        <div id="app-shell-content"></div>
    </app-shell>

    <app-view></app-view>


    <script>
    (function(){
        var link = document.createElement("link");
        link.href = "{!! elixir('css/final.css') !!}";
        link.type = "text/css";
        link.rel = "stylesheet";
        document.body.appendChild(link);
    })();
    </script>

    <script src="{!! elixir('js/final.js') !!}" async defer></script>

</body>
</html>
