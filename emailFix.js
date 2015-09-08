var fixEmail = (function() {

  console.log(emailList);

  var affectedList = [];
  var emailCount = 0;

  debugger;

  for (var i = 0; i < emailList.emails.length; i++) {

    var currentEmailObj = emailList.emails[i];
    var nextEmailObj = emailList.emails[i + 1];

    if ((currentEmailObj.email && currentEmailObj.sent) == (nextEmailObj.email && nextEmailObj.sent)) {

      for (var j = 0; j < affectedList.length; j++) {

        if (affectedList[j.email] !== currentEmailObj.email) {

          affectedList.push(currentEmailObj);
          emailCount++;
          emailCount = affectedList[j.count];
          j++;

        } else if (affectedList[j.email] === currentEmailObj.email) {

          emailCount++;
          emailCount = affectedList.count;
          j++;

        }

      }

    } else {

      emailCount = 0;

    }

    console.log(affectedList);

  }

  // return affectedList; ??
  return fixEmail;

})();
