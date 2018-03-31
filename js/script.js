let $postTitle;
let $postContent;
let $previewTitle = $('#newTitle');
let $previewContent = $('#newEntry');
let $dateTime = $('#dateTime');
$('#flashMessage').hide();







$('#previewButton').on('click', () => {

    $postTitle = $('#blogTitle').val();
    $postContent = $('#blogContent').val();

    if ($postTitle.length === 0) {
      alert("You have not entered a title.")
    } else if ($postContent.length === 0) {
      alert("Your blog post is currently empty.")
    } else if ($postContent.length > 200) {
      let $totalChar = $postContent.length;
      let $remChar = (200 - $totalChar);
      console.log($remChar);
      alert('You are ' + $remChar + ' character(s) over the limit.')

    } else {
    $previewTitle.html($postTitle);
    $previewContent.html($postContent);
    let d = new Date();
    $dateTime.html(d);
    $('#flashMessage').html('Like what you see? Click Submit to save changes to your blog post.');
    $('#flashMessage').slideDown(1000).delay(2000).slideUp(1000);

  }
})

$('#submitButton').on('click', () => {

    $('#blogTitle').val('');
    $('#blogContent').val('');
    let d = new Date();
    $dateTime.html("Changes saved at: " + d);
    $('#flashMessage').html('Your changes have been saved!');

    $('#flashMessage').slideDown(1000).delay(2000).slideUp(1000);


})

$('#editButton').on('click', ()=> {
  $('#blogTitle').val(($('#newTitle').html()));
  $('#blogContent').val(($('#newEntry').html()));
})
