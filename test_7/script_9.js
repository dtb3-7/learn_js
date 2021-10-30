function Counter() {
    count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }
  
  let counter = new Counter();
  
  alert( counter.up() ); // ?
  alert( counter.up() ); // ?
  alert( counter.down() ); // ?
  alert( counter.up() ); // ?
  alert( counter.count);

  for (let key in counter) {
    // ключи
    //alert( key );  
    alert( counter[key] ); // John, 30, true
  }