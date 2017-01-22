function highlight(code) {
  return code.replace(/F+|L+|R+|\d+/g, (x) => {
    if(/F+/.test(x)){
      return '<span style="color: pink">' + x + '</span>';
    } else if(/L+/.test(x)){
      return '<span style="color: red">' + x + '</span>';
    } else if(/R+/.test(x)){
      return '<span style="color: green">' + x + '</span>';
    } else if(/\d+/.test(x)){
    	return '<span style="color: orange">' + x + '</span>';
    }
  });
}