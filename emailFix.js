var fixEmail = (function() {

  var affected = {};

  //debugger;

  for (var i = 0; i < emailList.emails.length; i++) {

    if (affected.hasOwnProperty(emailList.emails[i].email)) {

      affected[ emailList.emails[i].email ]++;

    } else if (!affected[ emailList.emails[i].email ]) {

      affected[ emailList.emails[i].email ] = 1;

    }

  }

  for (var key in affected) {

    // Number associated with key

    if (affected[key] === 1) {

    //remove key with 1

    delete affected[key];

    }

  }

  return fixEmail;

})();