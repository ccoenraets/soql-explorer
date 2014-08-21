var apiVersion = 'v30.0',
    clientId = '3MVG9JZ_r.QzrS7iIgijkHLRGgq38fkgsjwmOaztSQA9hZP1f4T.9ySMQ8bCHdECXswn0Y8axueTJlR2fGsLv',
    loginUrl = 'https://login.salesforce.com/',
    redirectURI = "https://soql-explorer.herokuapp.com/oauthcallback.html",
    proxyURL = 'https://soql-explorer.herokuapp.com/proxy',
    client = new forcetk.Client(clientId, loginUrl, proxyURL);

function login() {
    var url = loginUrl + 'services/oauth2/authorize?display=popup&response_type=token' +
        '&client_id=' + encodeURIComponent(clientId) +
        '&redirect_uri=' + encodeURIComponent(redirectURI);
    window.open(url, 'login', 700, 600);
}

function oauthCallback(response) {
    if (response && response.access_token) {
        client.setSessionToken(response.access_token, apiVersion, response.instance_url);
    } else {
        alert("AuthenticationError: No Token");
    }
}

function executeQuery() {
    if (!client.sessionId) {
        alert('You are not authenticated. Please login first.');
        return false;
    }
    client.query($('#query').val(),
        function (data) {
            $('#result').html(JSON.stringify(data, undefined, 3));
        },
        function (error) {
            alert("Error: " + JSON.stringify(error));
        });
    return false;
}

$('#btn-login').click(login);
$('#btn-exec').click(executeQuery);
