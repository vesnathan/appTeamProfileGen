let mainHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta 
        charset="UTF-8">
    <meta 
        http-equiv="X-UA-Compatible" 
        content="IE=edge">
    <meta 
        name="viewport" 
        content="width=device-width, initial-scale=1.0">
    <link 
        rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" 
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
        crossorigin="anonymous">

    <title>My Team</title>
<style>
    header {
        background: rgb(255, 78, 89);
        color: #fff;
        font-size: 200%;
        font-weight: bold;
    }
    .card {
        height: 18rem;
    }
    .card-head {
        background: rgb(77, 77, 255);
        color: #ffffff;
        margin: 0;
    }
</style>
</head>
<body class="d-flex flex-wrap col-12 p-5 justify-content-center">
    <header class="d-flex col-12 col-sm-10 p-5 justify-content-center">My Team</header>
    <section 
        id="mainWrapper"
        class="d-flex flex-wrap col-12 col-sm-10 p-5  justify-content-around">
<CARDS>
    </section>  
</body>
</html>`;




module.exports = mainHtml;