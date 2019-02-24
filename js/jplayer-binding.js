$(document).ready(function(){
    var artist = '';
    var title = '';
    setInterval(function(){
        $.getJSON('http://vps225854.vps.ovh.ca:8000/status-json.xsl', function(data){
            var tempArtist = data["icestats"]["source"]["artist"];
            var tempTitle = data["icestats"]["source"]["title"];
            var text = `Now Playing: ${tempArtist} - ${tempTitle}`;
            if(tempArtist === artist && tempTitle === title){
                console.log('song has not changed.')
                return;
            }else{
                console.log('song has changed.')
                artist = tempArtist;
                title = tempTitle;
                $('.now-playing').fadeOut('slow');
                $('.now-playing').html(text);
                $('.now-playing').fadeIn('slow');
            }
        });
        $('.now-playing').fadeIn('slow');
      }, 5000);

    $.getJSON('http://vps225854.vps.ovh.ca:8000/status-json.xsl', function(data){
        artist = data["icestats"]["source"]["artist"];
        title = data["icestats"]["source"]["title"];
        var text = `Now Playing: ${artist} - ${title}<br>`;
        $('.now-playing').html(text);
    });
    
    $("#jquery_jplayer_1").jPlayer({
        ready: function () {
        $(this).jPlayer("setMedia", {
          title: "KKUP Next-Gen",
          //m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
          oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
          //oga: "http://vps225854.vps.ovh.ca:8000/mount.ogg"
        
        });
      },
      cssSelectorAncestor: "#jp_container_1",
      swfPath: "/js",
      supplied: "oga",//"m4a, oga",
      useStateClassSkin: true,
      autoBlur: false,
      smoothPlayBar: true,
      keyEnabled: true,
      remainingDuration: false,
      toggleDuration: false
    });
  });

  function getNowPlaying(){
    var artist = '';
    var title = '';
    $('.now-playing').fadeOut('slow');
    $.getJSON('http://vps225854.vps.ovh.ca:8000/status-json.xsl', function(data){
        artist = data["icestats"]["source"]["artist"];
        title = data["icestats"]["source"]["title"];
        var text = `Now Playing: ${artist} - ${title}`;
        $('.now-playing').html(text);
    });
    $('.now-playing').fadeIn('slow');
  }