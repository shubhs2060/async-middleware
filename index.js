const { IncomingWebhook } = require('ms-teams-webhook');

module.exports = {

    asyncMiddleware: function(handler){
        return async (req, res, next) => {
            try{
                await handler(req, res);
            }catch(error){
                next(error)
            }
        }
    },

    asyncTeamsErrorMiddleware: function(handler,options){
        return async (req,res,next) => {
            try {
                await handler(req,res);
            } catch (error) {
                const webhook = new IncomingWebhook(options.MS_TEAM_WEBHOOK_URL);
                if(req.session && req.session.user != undefined){
                    var message = `${error.message} for path ${req.originalUrl}` + " " + req.session.user.Email
                }else{
                    var message = `${error.message} for path ${req.originalUrl}`
                }
                let body = null;
                if(req.body && req.files){
                    body = `${JSON.stringify(req.body) + req.files[0]} `
                }else if(req.body){
                    body = `${JSON.stringify(req.body)}`
                }else{
                    body = `Params ${req.params} Query ${req.query}`
                }
                await webhook.send({
                    "@type": "MessageCard",
                    "@context": "https://schema.org/extensions",
                    "summary": "Async Teams Error",
                    "themeColor": "0078D7",
                    "title": message,
                    "sections": [
                        {
                        "activityTitle": "Async Teams Error",
                        "activitySubtitle": `${ options.NODE_ENV || "DEV"}`,
                        "activityImage": "https://cdn-icons-png.flaticon.com/512/2103/2103533.png",
                        "text": body
                        }
                    ]
                })
                next(error)
            }
        }
    },
    
}
