$('.thumbnail').on('click', e => {
  const imgSource = $(e.currentTarget).find('img').attr('src');
  $('.hero img').attr('src', imgSource);
});
