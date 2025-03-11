(function(KoreSDK){
      const mail = localStorage.getItem("email");
    var KoreSDK=KoreSDK||{};

    var botOptionsWiz = {};
    botOptionsWiz.logLevel = 'debug';
    botOptionsWiz.koreAPIUrl = "https://bots.kore.ai";

    botOptionsWiz.JWTUrl = "PLEASE_ENTER_JWTURL_HERE";
    botOptionsWiz.userIdentity = mail;// Provide users email id here
    botOptionsWiz.botInfo = { name: "Two Wheeler Details", "_id": "st-c371b66b-84fc-5843-902c-503086d8ddd4" }; // bot name is case sensitive
    botOptionsWiz.clientId = "cs-1213db79-0286-5097-91a2-c5e70dc653cd";
    botOptionsWiz.clientSecret = "PLEASE_ENTER_CLIENT_SECRET";

    var widgetsConfig = {
        botOptions: botOptionsWiz
    };
    
    KoreSDK.widgetsConfig=widgetsConfig
})(window.KoreSDK);
