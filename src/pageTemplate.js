const pageTemplate =
`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <title>Team Profiles</title>
</head>

<body>
    
    <div class="bg-danger text-white p-3">
        <h1 class="text-center">My Team</h1>
    </div>

    <div class="container">
        <div class="card-group">
            {{{Cards}}}
        </div>
    </div>
</body>

</html>`

module.exports = pageTemplate;