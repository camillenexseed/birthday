function showDay(){
  let getBirthday = document.getElementById('birthday').value;

  let week = ['日','月','火','水','木','金','土']

  let year = getBirthday.substr( 0, 4 );
  let month = getBirthday.substr( 4, 2 ) - 1;
  let day = getBirthday.substr( 6, 2 );
  let setDate = new Date(year,month,day);
  document.getElementById('showDay').textContent = 'あなたは' + week[setDate.getDay()] + '曜日に生まれました。';
}