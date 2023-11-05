# Exchange Application
This project is focused on an application that provides user to play arbitrarily trading game.

## Developer Notes:

The project is set to be executed by using following techstack:
- NodeJS version v18.0 or later
- PostgreSQL version v16.0 or later

Created By: Onur Göker  
E-mail: info[at]onurgoker.com

## Execution:
Execute the following command in projects root directory:

~~~
npm install
~~~

Create .env file and insert the following environment variables. Example .env.example file is already in the root directory:

~~~
DB_NAME=exchangeapp  
DB_USER=postgres  
DB_PASS=postgres  
DB_PATH=localhost
~~~

Execute the following command in the root directory to run the application:

~~~
npm run dev
~~~

Sample postman colllection is also found in the root directory as:

~~~
ExchangeApp.postman_collection.json
~~~
