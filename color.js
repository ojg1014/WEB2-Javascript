var Links = {
  setColor: function (color) {
    var alist = document.querySelectorAll('li, a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
  }
};

var Body = {
  setColor: function (color) {
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor: function (color) {
    document.querySelector('body').style.backgroundColor = color;
  }
};

function nigntDayHandler(self) {
  if (self.value === 'night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('#FFE680');
  }

  else {
    Body.setBackgroundColor('white');
    Body.setColor('#37352F');
    self.value = 'night';

    Links.setColor('#635CFF');
  }
}