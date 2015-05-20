# SOQL Explorer #

SOQL Explorer is a sample application demonstrating how to use the Salesforce REST APIs.

## Running SOQL Explorer

1. Clone this repository or download and unzip [this zip file](https://github.com/ccoenraets/soql-explorer/archive/master.zip)

1. Install force-server

    Because of the browser's cross-origin restrictions, your JavaScript application hosted on your own server (or localhost) will not be able to make API calls directly to the *.salesforce.com domain. The solution is to proxy your API calls through your own server. You can use your own proxy server, or use [ForceServer](https://github.com/ccoenraets/force-server), a simple development server for Force.com. To install ForceServer, make sure Node.js is installed on your system, open a command prompt and execute the following command:

    ```
    npm install -g force-server
    ```

    or (Unix-based systems)

    ```
    sudo npm install -g force-server
    ```

1. Run the application.

    Open a command prompt, navigate to your sample app directory and type the following command:

    ```
    force-server
    ```

    This starts the ForceServer server on port 8200 and loads your sample app in your default browser. After Authenticating against any Salesforce org, you can start executing SOQL queries.


## ForceJS REST Library

SOQL Explorer uses the [ForceJS](https://github.com/ccoenraets/forcejs) library to authenticate using OAuth and to invoke REST services. 

## Live Version

SOQL Explorer is also hosted live [here](https://soql-explorer.herokuapp.com/)
