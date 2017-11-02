<!doctype html>
<html lang="en" class="no-js">
<head>
    <meta charset="utf-8">
    <title>Gallery</title>
    <base href="/angular/gallery/dist_php/">
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rizzuto Gallery - Home</title>
    <link href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"
          type="text/css">

    <meta name="keywords"
          content="blueprint, background image slideshow, fullscreen slideshow, jquery, fullscreen image, web development"/>
    <meta name="author" content="Codrops"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@nytimes">
    <meta name="twitter:creator" content="@SarahMaslinNir">
    <meta name="twitter:title" content="Parade of Fans for Houston’s Funeral">
    <meta name="twitter:description"
          content="NEWARK - The guest list and parade of limousines with celebrities emerging from them seemed more suited to a red carpet event in Hollywood or New York than than a gritty stretch of Sussex Avenue near the former site of the James M. Baxter Terrace public housing project here.">
    <meta name="twitter:image"
          content="http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg">

    <meta property="og:site_name" content="Rizzutto Gallery"/>


    <?php
    //full array  with elements from the url
    $path = explode('/', $_SERVER['REQUEST_URI']);

    //Artist section
    if (array_search('artist', $path)) {
        //artist-detail section
        if(array_search('detail', $path)){

            $id = $path[array_search('artist', $path) + 2];
            $data = file_get_contents("http://oloart.olomedia.com/services/getArtists.php?include_details=1&artist_id=$id");
            $data = json_decode($data);

            //all objects are gets and constructs from the json
            foreach ($data as $object) {
                ?>
                <meta property="og:title"
                      content="<?php echo $object->artist_cover->first_name." ".$object->artist_cover->last_name; ?>"/>
                <meta property="og:description"
                      content="<?php echo $object->artist_cover->first_name." ".$object->artist_cover->last_name; ?>"/>
                <meta property="og:image"
                      content="<?php echo $object->artist_cover->image; ?>"/>

                <?php
            }
        }
        //artist-works section
        if(array_search('works', $path)){

            $id = $path[array_search('artist', $path) + 2];
            $data = file_get_contents("http://oloart.olomedia.com/services/getArtists.php?include_details=1&artist_id=$id");
            $data = json_decode($data);

            foreach ($data as $object) {
                ?>
                <meta property="og:title"
                      content="<?php echo $object->selected_works[$path[array_search('artist', $path) + 3]]->title; ?>"/>
                <meta property="og:description"
                      content="<?php echo $object->selected_works[$path[array_search('artist', $path) + 3]]->artist; ?>"/>
                <meta property="og:image"
                      content="<?php echo $object->selected_works[$path[array_search('artist', $path) + 3]]->image; ?>"/>

                <?php
            }
        }
        //artist-exhibition section
        if(array_search('exhibition', $path)){

            $id = $path[array_search('artist', $path) + 2];
            $data = file_get_contents("http://oloart.olomedia.com/services/getArtists.php?include_details=1&artist_id=$id");
            $data = json_decode($data);

            foreach ($data as $object) {
                ?>
                <meta property="og:title"
                      content="Exhibitions"/>
                <meta property="og:description"
                      content="<?php echo $object->artist_cover->first_name." ".$object->artist_cover->last_name; ?>"/>
                <meta property="og:image"
                      content="<?php echo $object->artist_cover->image; ?>"/>

                <?php
            }
        }
        //artist-biography section
        if(array_search('bio', $path)){

            $id = $path[array_search('artist', $path) + 2];
            $data = file_get_contents("http://oloart.olomedia.com/services/getArtists.php?include_details=1&artist_id=$id");
            $data = json_decode($data);

            foreach ($data as $object) {
                ?>
                <meta property="og:title"
                      content="Biography"/>
                <meta property="og:description"
                      content="<?php echo $object->artist_cover->first_name." ".$object->artist_cover->last_name; ?>"/>
                <meta property="og:image"
                      content="<?php echo $object->artist_cover->image; ?>"/>

                <?php
            }
        }
        //artist-news section
        if(array_search('news', $path)){

            $id = $path[array_search('artist', $path) + 2];
            $data = file_get_contents("http://oloart.olomedia.com/services/getArtists.php?include_details=1&artist_id=$id");
            $data = json_decode($data);

            foreach ($data as $object) {
                ?>
                <meta property="og:title"
                      content="News"/>
                <meta property="og:description"
                      content="<?php echo $object->artist_cover->first_name." ".$object->artist_cover->last_name; ?>"/>
                <meta property="og:image"
                      content="<?php echo $object->artist_cover->image; ?>"/>

                <?php
            }
        }

        //Exhibitions section
    } elseif (array_search('exhibition', $path)) {

        $id = $path[array_search('exhibition', $path) + 2];
        $data = file_get_contents("http://oloart.olomedia.com/services/getEvents.php?include_details=1&event_id=$id");
        $data = json_decode($data);
        //exhibition-views section
        if (array_search('views', $path)) {

            foreach ($data as $object)
                ?>
                <meta property="og:title"
                content="<?php echo $object->title; ?>"/>
            <meta property="og:description"
                  content="<?php echo $object->installation_views[$path[array_search('exhibition', $path) + 3]]->image_desc; ?>"/>
            <meta property="og:image"
                  content="<?php echo $object->installation_views[$path[array_search('exhibition', $path) + 3]]->image; ?>"/>

            <?php
            //exhibition-works section
        }elseif((array_search('works', $path))){

            foreach ($data as $object)
                ?>
                <meta property="og:title"
                content="<?php echo $object->title; ?>"/>
            <meta property="og:description"
                  content="<?php echo $object->exhibited_works[$path[array_search('exhibition', $path) + 3]]->image_desc; ?>"/>
            <meta property="og:image"
                  content="<?php echo $object->exhibited_works[$path[array_search('exhibition', $path) + 3]]->image; ?>"/>

            <?php
        }

    }else{
        //general page information
        ?>
        <meta property="og:title"
              content="Rizzuto Gallery"/>
        <meta property="og:description"
              content=""/>
        <meta property="og:image"
              content=""/>
        <meta property="og:image:url"
              content=""/>

        <?php
    }

    ?>
    <script>
        /*
         url = window.location.href;
         var params = url.substring(url.indexOf('#'), url.length);
         params = params.split('#');

         if (params.length > 1) {
         var metaImg = document.createElement('meta');
         metaImg.setAttribute('name', 'og:image');
         metaImg.setAttribute('content', params[2]);
         var metaDes = document.createElement('meta');
         metaDes.setAttribute('name', 'og:description');
         metaDes.setAttribute('content', params[1]);

         document.getElementsByTagName('head')[0].append(metaImg);
         document.getElementsByTagName('head')[0].append(metaDes);
         }*/

    </script>

    <link rel="shortcut icon" href="./app/favicon.ico">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="assets/js/oloart.js"></script>
    <link rel="stylesheet" href="assets/photoswipe/photoswipe.css" type="text/css"/>
    <link rel="stylesheet" href="assets/photoswipe/default-skin/default-skin.css" type="text/css"/>
    <script type="text/javascript" src="assets/photoswipe/photoswipe.js"></script>
    <script type="text/javascript" src="assets/photoswipe/photoswipe-ui-default.js"></script>
    <link href="assets/swiper/dist/css/swiper.css" rel="stylesheet">
    <script src="assets/swiper/dist/js/swiper.js"></script>
    <script src="assets/swiper/dist/js/swiper.jquery.min.js"></script>
    <script type="text/javascript">

        if (window.localStorage.getItem("lang")) {
            document.locale = window.localStorage.getItem("lang");
        } else if (navigator.languages[0]) {
            document.locale = navigator.languages[0];
            window.localStorage.setItem('lang', document.locale);
        } else {
            document.locale = navigator.language;
            window.localStorage.setItem('lang', document.locale);
        }
    </script>

    <link href="styles.87cc3ad702aa1378a740.bundle.css" rel="stylesheet"/>
</head>
<body>
<app-root>Loading...</app-root>
<script type="text/javascript" src="inline.31a675b94854dc6f21ef.bundle.js"></script>
<script type="text/javascript" src="polyfills.d90888e283bda7f009a0.bundle.js"></script>
<script type="text/javascript" src="vendor.17506a76239f808388a8.bundle.js"></script>
<script type="text/javascript" src="main.0047a23f88dcb57ba5e7.bundle.js"></script>
</body>


</html>
