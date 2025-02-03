# Escape-Try-Catch

Escape-Try-Catch is an npm package that helps you escape the traditional try-catch mechanism. It allows you to write code freely without worrying about handling errors in your async calls.

The latest versions also include MS Teams Middleware, enabling you to send alerts to a Teams channel effortlessly.

## Installation

Use the npm package manager to install foobar.

```bash
npm install escape-try-catch
```

## Usage

```javascript
const { asyncMiddleware } = require("escape-try-catch")


# Use it like this inside your routes
router.get('/test', asyncMiddleware(getUser))

# your controller function looks like this
getUser: async function(req,res) {
    let users = User.find({})
    res.send(users)
}


# Any error that occurs in the above function will be handled by the middleware

```

## Async Teams Middleware

You can use this same as Async middleware . This middleware will send an alert on teams as if it catches a error in a request . In here you need to sepcify the following details like this

```javascript
const { asyncTeamsErrorMiddleware } = require("escape-try-catch")


# Use it like this inside your routes
router.get('/test', asyncTeamsErrorMiddleware(getUser,options))

# your controller function looks like this
getUser: async function(req,res) {
    let users = User.find({})
    res.send(users)
}
# Options is the config object. In which you can specify various configurations
# it includes
{MS_TEAM_WEBHOOK_URL: "Need to pass the url for you chat this you can get from teams", "ENV": "Prod"}

# Any error that occurs in the above function will be handled by the middleware

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
