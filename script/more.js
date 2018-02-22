$(document).ready(function(){
  //On click on a list item, show hidden content
  $('.more-list-item').on('click',function(){
    var self=this;
    var prgToShow= self.children[1];
    var moreSign = self.children[2];
    //When hidden content is shown, change style for  li, background and plus sign
    if(prgToShow.classList.contains('hide')&&(moreSign.classList.contains('hide'))){
      prgToShow.classList.remove('hide');
      moreSign.classList.remove('hide');
      prgToShow.style.backgroundColor='#43C3C2';
      moreSign.style.backgroundColor='#43C3C2';
      self.children[0].children[1].innerHTML='-';
    }else{
      //When shown content is hidden, use default styling
      prgToShow.classList.add('hide');
      moreSign.classList.add('hide');
      prgToShow.style.backgroundColor='#f5f5f5';
      moreSign.style.backgroundColor='#f5f5f5';
      self.children[0].children[1].innerHTML='+';
    }
  });
  //On click on view more button, add a new set of small buttons
  $('#js-view-more').on('click', function(){
    var moreP=$('#new-more');
    var template = $('#template');
    var moreDiv=template.clone(true);
    moreP.append(moreDiv);
  })
});
