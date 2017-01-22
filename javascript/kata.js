function highlight(code) {
  const style = color => `<span style="color: ${color}">$&</span>`;
  
  code = code.replace(/F+/g, style('pink'));
  code = code.replace(/L+/g, style('red'));
  code = code.replace(/R+/g, style('green'));
  code = code.replace(/[0-9]+/g, style('orange'));
  
  return code;
}