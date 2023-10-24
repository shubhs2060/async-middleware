# Escape-Try-Catch

Escape-Try-Catch is an npm package that helps you in escaping the traditional try catch mechanism . You can freely write your code without thinking of error handling for your async calls

## Installation

Use the npm package manager to install foobar.

```bash
npm install escape-try-catch
```

## Usage

```python
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

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)