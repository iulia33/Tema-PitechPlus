$(document).ready(function(){
  //On click on a list item, show hidden content
  $('.about-us-list-item').on('click',function(){
    var self=this;
    var prgToShow= self.children[1].children[0];

    //When hidden content is shown, change style for number, li, h2, and plus sign
    if(prgToShow.classList.contains('hide')){
      prgToShow.classList.remove('hide');
      self.children[0].style.boxShadow = '0.2rem 0.2rem 0.2rem rgba(120,120,120, 0.2)';
      self.children[0].children[0].style.backgroundColor='#000';
      self.children[0].children[2].innerHTML = "-";
      self.children[0].children[1].children[0].style.color="#43C3C2";
    }else{
      //When shown content is hidden, use default styling
      prgToShow.classList.add('hide');
      self.children[0].style.boxShadow = 'none';
      self.children[0].children[0].style.backgroundColor='#43C3C2'
      self.children[0].children[2].innerHTML = "+";
      self.children[0].children[1].children[0].style.color="#63696f";
    }

  });
});
