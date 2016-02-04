//instagram feed code
$(document).ready(function(){
    console.log("ready");
    var img_video_src,
        img_video_template,
        insta_link,
        $insta_container = $(".instagram-container");
    $.ajax({
        url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=1418174907.f8449bd.5787f23a16ab4f63b56c06d2f1e24371",
//        url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=1984135324.3802e0d.4520e59b568543ef9012aa43880c4bdb",
        type: "GET",
        dataType: "jsonp"
    })
    .done(function(json){
        //console.log(json);
        var img_or_vid,
            insta_item;
            
        $.each(json.data, function(key, val){
            image = json.data[key].images.standard_resolution.url;
            if ( json.data[key].type === "video" ) {

                console.log("video exists = " + json.data[key].videos.standard_resolution.url);
                img_video_src = json.data[key].videos.standard_resolution.url;
                img_or_vid = videoTemplate(img_video_src);
                //console.log(video_template);
            } else {
                insta_link = json.data[key].link
                img_video_src = json.data[key].images.standard_resolution.url;
                img_or_vid = imageTemplate(img_video_src, insta_link);
            }
            insta_item = $('<div class="insta-item">' +
                            img_or_vid +
                            '<h3>' + json.data[key].caption.text + '</h3>' +
                            '<p> Comments: ' + json.data[key].comments.count + '</p>' +
                            '<p> Likes: ' + json.data[key].likes.count + '</p>' +
                            '</div>');
            console.log(insta_item);    
            $insta_container.append(insta_item);
        });
    })
    .always(function(){
        $insta_container.addClass('fade-in');
    });
    function videoTemplate(video_src) {
        img_video_template = '<video controls loop>' +
            '<source src="' + video_src + '" type="video/mp4">' +
            'Sorry - No browser support for HTML5 video or mp4 videos.' +
            '</video>';
        return img_video_template;
    }
    function imageTemplate(img_src, link) {
        img_video_template = '<a href="' + link + '">' +
                                '<img src="' + img_src + '">' +
                                '</a>';
        return img_video_template;
    }
});
//text animation
$(document).ready(function(){
    var motto = "Fake it til you Make it",
        motto_array = motto.split(''),
        i = 0,
        motto_length = motto_array.length - 1,
        $animate_text = $('.text-animate');
    var motto_interval = setInterval(
        function(){
            $animate_text.append(motto_array[i]);
            if(motto_length === i) {
                clearInterval(motto_interval);
            }
            i++;
        }, 80);
});