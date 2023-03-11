function copy(el) {
    var address = el.innerHTML;
    if (address.length == 0) return;
    var tmp = document.createElement("textarea");
    tmp.setAttribute("type", "hidden");
    tmp.value = address;
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);
    alert("Copied: " + tmp.value);
  }