# Number Insight Advanced API Async

This app demonstrates how to access the Number Insight Advanced API asynchronously.

## Prerequisites

You will need:

* A [free Nexmo account](https://dashboard.nexmo.com/sign-up)

## Installation

```sh
git clone https://github.com/nexmo/ni-node-async-tutorial.git
cd ni-node-async-tutorial
npm install
```

## Setup

Rename the config file:

```sh
mv .env-example .env
```

Fill in the values in `.env` as appropriate.

### Running the App

```sh
npm start
```

The application should be available on <http://localhost:5000>.

### Using the App

Enter the following URL in your browser's address bar, replacing `447700900000` with the number that you want to get insight data for, and `demo.ngrok.io` with your public web server name or `ngrok` host name:

```
https://demo.ngrok.io/insight/447700900000
```

The application displays the Number Insight Advanced API response data in your console.

## License

The content of this project itself is licensed under the [Creative Commons Attribution 4.0 International license](https://creativecommons.org/licenses/by/4.0/), and the underlying source code used to format and display that content is licensed under the [MIT license](https://www.nexmo.com/blog/2017/07/04/local-development-nexmo-ngrok-tunnel-dr/).
	
