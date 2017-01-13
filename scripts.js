$(document).ready(function() {
  $('#tweet-controls').hide();
  $('.tweet-compose').on('click', function(){
     $(this).css("height", "100px");
     $('#tweet-controls').show();
  });
  $('.button').on('click', function(){
    var tweet = $('.tweet-compose').val();
    $('#stream').prepend('<div class="tweet"><div class="content"><img class="avatar" src="img/torgo.jpg" /><strong class="fullname">Torgo</strong><span class="username">@torgospizza</span><p class="tweet-text newTweet">Today is an amazing day.</p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div><div class="stats"><div class="retweets"><p class="num-retweets">30</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">6</p><p>FAVORITES</p></div><div class="users-interact"><div><img src="img/alagoon.jpg" /><img src="img/vklimenko.jpg" /></div></div><div class="time">1:04 PM - 19 Sep 13</div></div><div class="reply"><img class="avatar" src="img/alagoon.jpg" /><textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea></div></div></div>')
    $('.newTweet').text(tweet);
    $(this).parent().parent().find('.tweet-compose').val('');
    $(this).parent().parent().find('.tweet-compose').css("height", "40px");
    $('.tweet-text').removeClass('newTweet');
    $('.tweet-actions').hide();
    $('.stats').hide();
    $('.tweet').on('mouseenter', function(){
      $(this).find(".tweet-actions").show();
    });
    $('.tweet').on('mouseleave', function(){
      $('.tweet-actions').hide();
    });
    $('.tweet').on('click',function(){
      $(this).find('.stats').show();
    })
    $('.tweet').on('mouseleave',function(){
      $(this).find('.stats').hide();
    })
    $('#char-count').text(140);
  })
  var mLen = 140;
  $('.tweet-compose').keyup(function(){
    var length = $(this).val().length;
    var charLeft = mLen-length;
    $('#char-count').text(charLeft);
    if(length > 140){
      $('#tweet-submit').removeClass('button').addClass('button:disabled');

    }else if(charLeft < 10){
      $('#char-count').css("color", "red");
    }else {
      $('#char-count').css("color", "black");
      $('#tweet-submit').removeClass('button:disabled').addClass('button');
    }
  })
  $('.tweet-actions').hide();
  $('.tweet').on('mouseenter', function(){
    $(this).find(".tweet-actions").show();
  });
  $('.tweet').on('mouseleave', function(){
    $('.tweet-actions').hide();
  });
  $('.stats').hide();
  $('.tweet').on('click',function(){
    $(this).find('.stats').show();
  })
  $('.tweet').on('mouseleave',function(){
    $(this).find('.stats').hide();
  })
});
