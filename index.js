var loc = window.location.href;
var sizz = loc.length;
var ans = loc.slice(sizz - 2, );
if (ans === "my") {
  alerting();
}

function alerting() {
  var anchors = document.getElementsByTagName('a');
  for (var anchor of anchors) {
    if (anchor.href.slice(22, 31) === "/profile/") {
      var handle = anchor.href.slice(31, );
    }
  }
  fetch(`https://codeforces.com/api/user.status?handle=${handle}&from=1&count=1`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      if (data.status === "OK") {
        console.log(data.result[0].verdict);
        if (data.result[0].verdict === "TESTING") {
          setTimeout(alerting(),100)
        } else if (data.result[0].verdict === "OK") {
          alert("Your code is correct");
        } else {
          alert(`Last submission ${data.result[0].verdict}`);
        }
      }
    })
    .catch(e => {
      console.log("error", e);
    })
}
