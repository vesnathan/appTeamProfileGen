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
        width: 18rem;
        height: 18rem;
    }
</style>
</head>
<body class="d-flex flex-wrap col-12 p-5 justify-content-center">
    <header class="d-flex col-8 col-sm-10 col-lg-8 p-5 justify-content-center">My Team</header>
    <section 
        id="mainWrapper"
        class="d-flex flex-wrap col-12 col-sm-10 col-lg-8 p-5  justify-content-around">

    </section>  
</body>
</html>`;

let card = `
<div class="card col-3 m-1" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
    </div>
</div>`;